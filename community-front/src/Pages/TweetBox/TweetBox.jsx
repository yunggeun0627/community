/** @jsxImportSource @emotion/react */
import * as s from './styles.js';
import React, { useState } from 'react';
import { FaPen } from 'react-icons/fa';
import { CiImageOn } from 'react-icons/ci';
import { RiEmotionHappyLine } from "react-icons/ri";
import { AiOutlineBars } from "react-icons/ai";

function TweetBox({ onTweet }) {
    const [content, setContent] = useState("");

    const handleSubmit = () => {
        if (!content) return;
        onTweet({ id: Date.now(), user: "Me" ,content, likes: 0, retweets: 0 });
        setContent("");
    }

    const handleIconClick = (type) => {
        if (onAction) onAction(type);
    }

    return (
        <div css={s.box}>
            <textarea
                css={s.textarea}
                placeholder="What's happening?"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />

            <div css={s.actionsRow}>
                <div css={s.iconGroup}>
                    <button css={s.iconButton} onClick={() => handleIconClick("image")}><CiImageOn /></button>
                    <button css={s.iconButton} onClick={() => handleIconClick("poll")}><AiOutlineBars /></button>
                    <button css={s.iconButton} onClick={() => handleIconClick("emoji")}><RiEmotionHappyLine /></button>
                </div>

                <button css={s.button} onClick={handleSubmit}>
                    <FaPen /> Tweet
                </button>
            </div>
        </div>
    );
}

export default TweetBox;