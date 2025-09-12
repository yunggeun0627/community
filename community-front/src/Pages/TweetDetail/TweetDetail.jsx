/** @jsxImportSource @emotion/react */
import { useNavigate, useParams } from 'react-router-dom';
import * as s from './styles.js';
import React, { useEffect, useState } from 'react';
import { reqComments, reqDeleteComment, reqPostComment, reqTweets } from '../../api/tweetApi.js';
import { CiImageOn } from 'react-icons/ci';
import { AiOutlineBars } from 'react-icons/ai';
import { RiEmotionHappyLine } from 'react-icons/ri';
import TweetCard from '../TweetCard/TweetCard.jsx';

// 시간을 'n초/분/시간/일 ago' 형식으로
function formatElapsedTime(dateStr) {
    const diff = Math.floor((new Date() - new Date(dateStr)) / 1000);
    if (diff < 60) return `${diff}s ago`;
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    return `${Math.floor(diff / 86400)}d ago`;
}

function TweetDetail() {
    const { username, tweetId } = useParams();
    const navigate = useNavigate();
    const [tweet, setTweet] = useState(null);
    const [authorTweets, setAuthorTweets] = useState([]);
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const tweetsRes = await reqTweets();
                console.log("API Response:", tweetsRes.data);

                const tweetsArray = Array.isArray(tweetsRes.data)
                    ? tweetsRes.data
                    : Array.isArray(tweetsRes.data?.tweets)
                        ? tweetsRes.data.tweets
                        : [];

                console.log("tweetsArray:", tweetsArray);

                const tweetData = tweetsArray.find(
                    (t) => Number(t.tweetId) === Number(tweetId)
                );

                if (!tweetData) {
                    console.log("해당 트윗을 찾을 수 없습니다.", tweetId, tweetsArray);
                    return;
                }

                setTweet(tweetData);

                // 작성자 게시물 (현재 트윗 제외)
                const authorPosts = tweetsArray.filter(
                    (t) => t.user?.username === tweetData.user?.username && Number(t.tweetId) !== Number(tweetData.tweetId)
                );
                setAuthorTweets(authorPosts);

                // 댓글 불러오기
                const commentRes = await reqComments(tweetId);
                const commentArray = Array.isArray(commentRes.data)
                    ? commentRes.data
                    : Array.isArray(commentRes.data?.comments)
                        ? commentRes.data.comments
                        : [];
                setComments(commentArray);
            } catch (err) {
                console.error("TweetDetail 로딩 중 에러:", err);
            }
        })();
    }, [tweetId]);

    const handleAddComment = async () => {
        if (!comment.trim() || loading) return;
        setLoading(true);
        try {
            const res = await reqPostComment(tweetId, { text: comment });
            const newComment = res.data || { text: comment, commentId: Date.now(), user: { username: "Unknown" }, createdAt: Date.now() };
            setComments((prev) => [...prev, newComment]);
            setComment("");
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteComment = async (commentId) => {
        if (loading) return;
        setLoading(true);
        try {
            await reqDeleteComment(tweetId, commentId);
            setComments((prev) => prev.filter((c) => c.commentId !== commentId));
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    if (!tweet) return <div>트윗을 불러오는 중...</div>;

    return (
        <div css={s.detailPage}>
            {/* 원본 트윗 */}
            <TweetCard tweet={tweet} />

            {/* 작성자 게시물 */}
            {authorTweets.length > 0 && (
                <div css={s.authorPosts}>
                    <h4>작성자 게시물</h4>
                    {authorTweets.map((t) => (
                        <div
                            key={t.tweetId}
                            css={s.authorTweetCard}
                            onClick={() => navigate(`/${tweet.user.username}/status/${t.tweetId}`)}
                        >
                            <p>{t.content || t.text}</p>
                            {t.images?.map((img, idx) => (
                                <img key={idx} src={img} alt="" />
                            ))}
                        </div>
                    ))}
                </div>
            )}

            {/* 댓글 입력창 */}
            <div css={s.replyInputBox}>
                <textarea
                    css={s.replyTextarea}
                    placeholder="답글 게시하기"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
                <div css={s.replyFooter}>
                    <div css={s.iconGroup}>
                        <button css={s.iconButton}><CiImageOn /></button>
                        <button css={s.iconButton}><AiOutlineBars /></button>
                        <button css={s.iconButton}><RiEmotionHappyLine /></button>
                    </div>
                    <button css={s.replyButton} onClick={handleAddComment} disabled={loading}>답글</button>
                </div>
            </div>

            {/* 댓글 리스트 */}
            <div css={s.commentList}>
                {comments.length === 0 && <p>댓글이 없습니다.</p>}
                {comments.map((c) => (
                    <div key={c.commentId} css={s.commentItem}>
                        <img src={c.user?.avatar || ""} alt="" css={s.avatar} />
                        <div>
                            <span css={s.commentUser}>@{c.user?.username || "Unknown"}</span>
                            · <span css={s.elapsedTime}>{formatElapsedTime(c.createdAt)}</span>
                            <div>{c.text}</div>
                            <button onClick={() => handleDeleteComment(c.commentId)} disabled={loading}>삭제</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TweetDetail;