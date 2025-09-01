/** @jsxImportSource @emotion/react */
import * as s from './styles.js';
import React, { useState } from 'react';
import { FaHeart, FaRegComment, FaRegHeart, FaRetweet } from 'react-icons/fa';

function TweetCard({ tweet }) {
    const [ liked, setLiked ] = useState(false);
    const [ retweet, setRetweet ] = useState(false);

    return (
        <div css={s.card}>
            <div css={s.user}>{tweet.user}</div>
            <div css={s.content}>{tweet.content}</div>

            {tweet.image && (
                <div css={s.imageWrapper}>
                    <img src={tweet.image} alt="tweet" />
                </div>
            )}

            <div css={s.actions}>
                <FaRegComment />
                <div onClick={() => setLiked(!liked)}>
                    {liked ? <FaHeart color='red' /> : <FaRegHeart />}
                    <span>{(tweet.likes ?? 0) + (liked ? 1 : 0)}</span>
                </div>
                <div onClick={() => setRetweet(!retweet)}>
                    <FaRetweet color={retweet ? "green" : "black"} />
                    <span>{(tweet.retweets ?? 0) + (retweet ? 1 : 0)}</span>
                </div>
            </div>
        </div>
    );
}

export default TweetCard;