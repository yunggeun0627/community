/** @jsxImportSource @emotion/react */
import EmojiPicker from 'emoji-picker-react';
import * as s from './styles.js';
import React, { useState } from 'react';
import { FaHeart, FaRegComment, FaRegHeart, FaRetweet } from 'react-icons/fa';

function TweetCard(props) {
    const { tweet = {} } = props;
    const [liked, setLiked] = useState(false);
    const [retweet, setRetweet] = useState(false);
    const [comment, setComment] = useState("");
    const [showEmoji, setShowEmoji] = useState(false);
    const [comments, setComments] = useState([]);

    // 투표 상태
    const [pollVotes, setPollVotes] = useState(tweet.poll?.options?.map(() => 0) || []);
    const [votedIndex, setVotedIndex] = useState(null);

    // 투표 클릭 처리
    const handleVote = (idx) => {
        if (!tweet.poll) return; // poll이 없으면 무시
        const updatedVotes = [...pollVotes];

        if (votedIndex === idx) return; // 이미 선택한 항목이면 무시
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
            <div css={s.user}>
                작성자: {tweet.userId} · {tweet.createdAt && new Date(tweet.createdAt).toLocaleString()}
            </div>

            <div css={s.content}>{tweet.content}</div>

            {tweet.imageUrl && (
                <div css={s.imageWrapper}>
                    <img src={tweet.imageUrl} alt="tweet" />
                </div>
            )}

            {/* 투표 UI */}
            {tweet.poll && (
                <div css={s.pollBox}>
                    {tweet.poll.options.map((opt, idx) => {
                        const totalVotes = pollVotes.reduce((a, b) => a + b, 0);
                        const percentage = totalVotes > 0 ? Math.round((pollVotes[idx] / totalVotes) * 100) : 0;

                        return (
                            <div
                                key={idx}
                                css={s.pollOption(votedIndex === idx)}
                                onClick={() => handleVote(idx)}
                            >
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

            {/* 액션 버튼 */}
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

            {/* 댓글 + 이모지 */}
            <div css={s.commentBox}>
                <textarea
                    css={s.commentInput}
                    placeholder="댓글 작성..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
                <button css={s.iconButton} onClick={() => setShowEmoji(!showEmoji)}>😀</button>
                {showEmoji && (
                    <div css={s.emojiPopup}>
                        <EmojiPicker onEmojiClick={handleEmojiSelect} />
                    </div>
                )}
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