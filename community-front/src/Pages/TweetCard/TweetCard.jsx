/** @jsxImportSource @emotion/react */
import EmojiPicker from 'emoji-picker-react';
import * as s from './styles.js';
import React, { useEffect, useState } from 'react';
import { FaHeart, FaRegComment, FaRegHeart, FaRetweet } from 'react-icons/fa';
import { HiEllipsisVertical } from 'react-icons/hi2';
import { CiImageOn } from 'react-icons/ci';
import { AiOutlineBars } from 'react-icons/ai';
import { RiEmotionHappyLine } from 'react-icons/ri';
import { BiBarChart } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';

function TweetCard({ tweet = {}, onDelete, userProfile }) {
    const navigate = useNavigate();
    const [liked, setLiked] = useState(false);
    const [retweet, setRetweet] = useState(false);
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState(() => {
        const saved = localStorage.getItem(`comments_${tweet.tweetId}`);
        return saved ? JSON.parse(saved) : [];
    });
    const [pollVotes, setPollVotes] = useState(tweet.poll?.options?.map(() => 0) || []);
    const [votedIndex, setVotedIndex] = useState(null);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [showReplyModal, setShowReplyModal] = useState(false);
    const [views, setViews] = useState(tweet.views ?? 0);
    const [profile, setProfile] = useState(userProfile);

    // 댓글 변경 시 로컬스토리지 저장
    useEffect(() => {
        localStorage.setItem(`comments_${tweet.tweetId}`, JSON.stringify(comments));
    }, [comments, tweet.tweetId]);

    // 프로필 변경 반영
    useEffect(() => {
        const handleStorageChange = (e) => {
            if (e.key === "profileAvatar" || e.key === "profileUsername") {
                setProfile({
                    avatar: localStorage.getItem("profileAvatar") || profile?.avatar,
                    username: localStorage.getItem("profileUsername") || profile?.username,
                });
            }
        };
        window.addEventListener("storage", handleStorageChange);
        return () => window.removeEventListener("storage", handleStorageChange);
    }, [profile]);

    // 경과 시간 계산
    useEffect(() => {
        const start = new Date(tweet.createdAt).getTime() || Date.now();
        const interval = setInterval(() => {
            setElapsedTime(Math.floor((Date.now() - start) / 1000));
        }, 1000);
        return () => clearInterval(interval);
    }, [tweet.createdAt]);

    const formatElapsedTime = (seconds) => {
        if (seconds < 60) return `${seconds}초`;
        if (seconds < 3600) return `${Math.floor(seconds / 60)}분`;
        if (seconds < 86400) return `${Math.floor(seconds / 3600)}시간`;
        if (seconds < 2592000) return `${Math.floor(seconds / 86400)}일`;
        if (seconds < 31536000) return `${Math.floor(seconds / 2592000)}월`;
        return `${Math.floor(seconds / 31536000)}년`;
    };

    const imgSrc = tweet.imageUrl
        ? tweet.imageUrl.startsWith("http")
            ? tweet.imageUrl
            : `http://localhost:8080${tweet.imageUrl.replace(/^\/+/, "/")}`
        : null;

    const handleVote = (idx) => {
        if (!tweet.poll || votedIndex === idx) return;
        const updatedVotes = [...pollVotes];
        if (votedIndex !== null) updatedVotes[votedIndex] -= 1;
        updatedVotes[idx] += 1;
        setPollVotes(updatedVotes);
        setVotedIndex(idx);
    };

    const handleAddComment = () => {
        if (!comment.trim()) return;
        const newComment = {
            text: comment,
            createdAt: Date.now(),
            user: {
                avatar: profile?.avatar,
                username: profile?.username,
            },
        };
        setComments((prev) => [...prev, newComment]);
        setComment("");
    };

    useEffect(() => {
        if (showReplyModal) setViews((prev) => prev + 1);
    }, [showReplyModal]);

    const handleOpenDetail = () => {
        setShowReplyModal(true);
        navigate(`/${userProfile.username}/status/${tweet.tweetId}`);
    };

    return (
        <div css={s.card}>
            {/* 트윗 헤더 */}
            <div css={s.header}>
                <div css={s.user}>
                    {userProfile && (
                        <>
                            <img src={userProfile.avatar} alt="" css={s.avatar} />
                            <span css={s.username}>@{userProfile.username}</span>
                        </>
                    )}
                    · <span css={s.elapsedTime}>{formatElapsedTime(elapsedTime)}</span>
                </div>
                {onDelete && (
                    <button onClick={() => onDelete(tweet.tweetId)} css={s.deleteButton}>
                        <HiEllipsisVertical size={20} />
                    </button>
                )}
            </div>

            {/* 트윗 내용 */}
            <div css={s.content} onClick={handleOpenDetail}>{tweet.content}</div>
            {imgSrc && <div css={s.imageWrapper}><img src={imgSrc} alt="tweet" css={s.clickableImage} /></div>}

            {/* 투표 */}
            {tweet.poll && (
                <div css={s.pollBox}>
                    {tweet.poll.options.map((opt, idx) => {
                        const totalVotes = pollVotes.reduce((a, b) => a + b, 0);
                        const percentage = totalVotes > 0 ? Math.round((pollVotes[idx] / totalVotes) * 100) : 0;
                        return (
                            <div key={idx} css={s.pollOption(votedIndex === idx)} onClick={() => handleVote(idx)}>
                                <span>{opt}</span>
                                {totalVotes > 0 && <span>{percentage}% ({pollVotes[idx]})</span>}
                            </div>
                        );
                    })}
                    {tweet.poll.endTime && <div css={s.pollEnd}>마감: {new Date(tweet.poll.endTime).toLocaleString()}</div>}
                </div>
            )}

            {/* 액션 버튼 */}
            <div css={s.actions}>
                <div onClick={handleOpenDetail}>
                    <FaRegComment />
                    <span>{Array.isArray(comments) ? comments.length : 0}</span>
                </div>
                <div onClick={() => setLiked(!liked)}>
                    {liked ? <FaHeart color="red" /> : <FaRegHeart />}
                    <span>{(tweet.likes ?? 0) + (liked ? 1 : 0)}</span>
                </div>
                <div onClick={() => setRetweet(!retweet)}>
                    <FaRetweet color={retweet ? "green" : "black"} />
                    <span>{(tweet.retweets ?? 0) + (retweet ? 1 : 0)}</span>
                </div>
                <div>
                    <BiBarChart />
                    <span>{views}</span>
                </div>
            </div>

            {/* 답글 모달 */}
            {showReplyModal && (
                <div css={s.modalOverlay} onClick={() => setShowReplyModal(false)}>
                    <div css={s.modalContent} onClick={(e) => e.stopPropagation()}>
                        <div css={s.modalHeader}>
                            <button css={s.closeButton} onClick={() => setShowReplyModal(false)}>X</button>
                        </div>

                        <div css={s.tweetContainer}>
                            {/* 작성자 */}
                            <div css={s.header}>
                                <div css={s.user}>
                                    {userProfile && (
                                        <>
                                            <img src={userProfile.avatar} alt="" css={s.avatar} />
                                            <span css={s.username}>@{userProfile.username}</span>
                                        </>
                                    )}
                                    · <span css={s.elapsedTime}>{formatElapsedTime(elapsedTime)}</span>
                                </div>
                            </div>

                            {/* 트윗 내용 */}
                            <div css={s.content}>{tweet.content}</div>

                            {/* 투표 */}
                            {tweet.poll && (
                                <div css={s.pollBox}>
                                    {tweet.poll.options.map((opt, idx) => {
                                        const totalVotes = pollVotes.reduce((a, b) => a + b, 0);
                                        const percentage = totalVotes > 0 ? Math.round((pollVotes[idx] / totalVotes) * 100) : 0;
                                        return (
                                            <div key={idx} css={s.pollOption(votedIndex === idx)} onClick={() => handleVote(idx)}>
                                                <span>{opt}</span>
                                                {totalVotes > 0 && <span>{percentage}% ({pollVotes[idx]})</span>}
                                            </div>
                                        );
                                    })}
                                    {tweet.poll.endTime && <div css={s.pollEnd}>마감: {new Date(tweet.poll.endTime).toLocaleString()}</div>}
                                </div>
                            )}

                            {/* 답글 입력 */}
                            <div css={s.replyInputBox}>
                                <textarea
                                    css={s.replyTextarea}
                                    placeholder="답글 게시하기"
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                />
                            </div>
                            <div css={s.replyInputBox}>
                                <div css={s.iconGroup}>
                                    <button css={s.iconButton}><CiImageOn /></button>
                                    <button css={s.iconButton}><AiOutlineBars /></button>
                                    <button css={s.iconButton}><RiEmotionHappyLine /></button>
                                </div>
                                <button css={s.replyButton} onClick={handleAddComment}>답글</button>
                            </div>

                            {/* 댓글 리스트 (Detail에서만 보임) */}
                            {Array.isArray(comments) && comments.length > 0 && (
                                <div css={s.commentList}>
                                    {comments.map((c, idx) => {
                                        const elapsed = Math.floor((Date.now() - c.createdAt) / 1000);
                                        return (
                                            <div key={idx} css={s.commentItem}>
                                                <img src={c.user.avatar} alt="" css={s.avatar} />
                                                <span css={s.commentUser}>@{c.user.username}</span>
                                                · <span css={s.elapsedTime}>{formatElapsedTime(elapsed)}</span>
                                                <div>{c.text}</div>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TweetCard;