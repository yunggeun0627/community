/** @jsxImportSource @emotion/react */
import EmojiPicker from 'emoji-picker-react';
import * as s from './styles.js';
import React, { useEffect, useState } from 'react';
import { FaHeart, FaRegComment, FaRegHeart, FaRetweet } from 'react-icons/fa';
import { HiEllipsisVertical } from 'react-icons/hi2';

function TweetCard({ tweet = {}, onDelete }) {
    const [liked, setLiked] = useState(false);
    const [retweet, setRetweet] = useState(false);
    const [comment, setComment] = useState("");
    const [showEmoji, setShowEmoji] = useState(false);
    const [comments, setComments] = useState([]);
    const [pollVotes, setPollVotes] = useState(tweet.poll?.options?.map(() => 0) || []);
    const [votedIndex, setVotedIndex] = useState(null);

    // ✅ 업로드 경로 분기
    const imgSrc = tweet.imageUrl
        ? tweet.imageUrl.startsWith("http")
            ? tweet.imageUrl
            : `http://localhost:8080${tweet.imageUrl}`
        : null;
    
    useEffect(() => {
        console.log("===== TweetCard 렌더링 =====");
        console.log("tweet prop:", tweet);
        console.log("tweet.imageUrl:", tweet?.imageUrl);
        console.log("imgSrc:", imgSrc);

        // 이미지 접근 테스트
        if (imgSrc) {
            const img = new Image();
            img.src = imgSrc;
            img.onload = () => console.log("✅ 이미지 로딩 성공:", imgSrc);
            img.onerror = () => console.log("❌ 이미지 로딩 실패:", imgSrc);
        }
    }, [tweet, imgSrc]);

    const handleVote = (idx) => {
        if (!tweet.poll) return;
        if (votedIndex === idx) return;

        const updatedVotes = [...pollVotes];
        if (votedIndex !== null) updatedVotes[votedIndex] -= 1;
        updatedVotes[idx] += 1;

        setPollVotes(updatedVotes);
        setVotedIndex(idx);
    };

    const handleAddComment = () => {
        if (!comment.trim()) return;
        setComments((prev) => [...prev, comment]);
        setComment("");
        setShowEmoji(false);
    };

    const handleEmojiSelect = (emojiData) => {
        setComment((prev) => prev + emojiData.emoji);
        setShowEmoji(false);
    };

    return (
        <div css={s.card}>
            <div css={s.header}>
                <div css={s.user}>
                    작성자: {tweet.userId} · {tweet.createdAt && new Date(tweet.createdAt).toLocaleString()}
                </div>
                {onDelete && (
                    <button onClick={() => onDelete(tweet.tweetId)} css={s.deleteButton}>
                        <HiEllipsisVertical size={20} />
                    </button>
                )}
            </div>

            <div css={s.content}>{tweet.content}</div>

            {imgSrc && (
                <div css={s.imageWrapper}>
                    <img src={imgSrc} alt="tweet" />
                </div>
            )}

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
                    {tweet.poll.endTime && (
                        <div css={s.pollEnd}>
                            마감: {new Date(tweet.poll.endTime).toLocaleString()}
                        </div>
                    )}
                </div>
            )}

            <div css={s.actions}>
                <div><FaRegComment /></div>
                <div onClick={() => setLiked(!liked)}>
                    {liked ? <FaHeart color="red" /> : <FaRegHeart />}
                    <span>{(tweet.likes ?? 0) + (liked ? 1 : 0)}</span>
                </div>
                <div onClick={() => setRetweet(!retweet)}>
                    <FaRetweet color={retweet ? "green" : "black"} />
                    <span>{(tweet.retweets ?? 0) + (retweet ? 1 : 0)}</span>
                </div>
            </div>

            <div css={s.commentBox}>
                <textarea
                    css={s.commentInput}
                    placeholder="댓글 작성..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
                <button css={s.iconButton} onClick={() => setShowEmoji(!showEmoji)}>😀</button>
                {showEmoji && <div css={s.emojiPopup}><EmojiPicker onEmojiClick={handleEmojiSelect} /></div>}
                <button css={s.commentButton} onClick={handleAddComment}>댓글</button>
            </div>

            {comments.length > 0 && (
                <div css={s.commentList}>
                    {comments.map((c, idx) => (
                        <div key={idx} css={s.commentItem}>{c}</div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default TweetCard;