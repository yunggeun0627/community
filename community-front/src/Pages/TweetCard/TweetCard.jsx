/** @jsxImportSource @emotion/react */
import EmojiPicker from 'emoji-picker-react';
import * as s from './styles.js';
import React, { useState } from 'react';
import { FaHeart, FaRegComment, FaRegHeart, FaRetweet } from 'react-icons/fa';

function TweetCard({ tweet }) {
    const [ liked, setLiked ] = useState(false);
    const [retweet, setRetweet] = useState(false);
    const [comment, setComment] = useState("");
    const [showEmoji, setShowEmoji] = useState(false);
    const [comments, setComments] = useState([]);
    
    const [pollVotes, setPollVotes] = useState(tweet.poll?.options.map(() => 0) || []);
    const [votedIndex, setVotedIndex] = useState(null);

    const handleVote = (idx) => {
        const updatedVotes = [...pollVotes];
        
        if (votedIndex === idx) {
            updatedVotes[idx] += 1;
            setPollVotes(updatedVotes);
            setVotedIndex(idx);
        } else {
            if (votedIndex !== null) {
                updatedVotes[votedIndex] -= 1;
            }
            updatedVotes[idx] += 1;
            setPollVotes(updatedVotes);
            setVotedIndex(idx);
        }
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
            <div css={s.user}>{tweet.user}</div>
            <div css={s.content}>{tweet.content}</div>

            {tweet.image && (
                <div css={s.imageWrapper}>
                    <img src={tweet.image} alt="tweet" />
                </div>
            )}

            {tweet.poll && (
                <div css={s.pollBox}>
                    {tweet.poll.options.map((opt, idx) => {
                        const totalVotes = pollVotes.reduce((a, b) => a + b, 0);
                        const percentage = totalVotes > 0
                            ? Math.round((pollVotes[idx] / totalVotes) * 100)
                            : 0;

                        return (
                            <div
                                key={idx}
                                css={s.pollOption(votedIndex === idx)}
                                onClick={() => handleVote(idx)}
                            >
                                <span>{opt}</span>
                                {totalVotes > 0 && (
                                    <span>{percentage}% ({pollVotes[idx]})</span>
                                )}
                            </div>
                        );
                    })}
                    {tweet.poll.endTime && (
                        <div css={s.pollEnd}>마감: {new Date(tweet.poll.endTime).toLocaleString()}</div>
                    )}
                </div>
            )}

            <div css={s.actions}>
                <div><FaRegComment /></div>
                <div onClick={() => setLiked(!liked)}>
                    {liked ? <FaHeart color='red' /> : <FaRegHeart />}
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
                <button css={s.iconButton} onClick={() => setShowEmoji(!showEmoji)}>
                    😀
                </button>
                {showEmoji && (
                    <div css={s.emojiPopup}>
                        <EmojiPicker onEmojiClick={handleEmojiSelect} />
                    </div>
                )}
                <button css={s.commentButton} onClick={handleAddComment}>
                    댓글
                </button>
            </div>

            {/* 댓글 표시 */}
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