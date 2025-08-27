import React, { useState } from 'react';
import { FaPen } from 'react-icons/fa';
/** @jsxImportSource @emotion/react */
import * as s from './styles.js';
import { CiImageOn } from 'react-icons/ci';
import { RiEmotionHappyLine } from "react-icons/ri";
import { AiOutlineBars } from "react-icons/ai";

function TweetBox({ onTweet }) {
    const [content, setContent] = useState("");

    const handleSubmit = () => {
        if (!content) return;
        onTweet({ id: Data.now(), user: "Me" ,content, likes: 0, retweets: 0 });
        setContent("");
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
                <button css={s.iconButton}><CiImageOn /></button>
                <button css={s.iconButton}><AiOutlineBars /></button>
                <button css={s.iconButton}><RiEmotionHappyLine /></button>

                <button css={s.button} onClick={handleSubmit}>
                    <FaPen /> Tweet
                </button>
            </div>
        </div>
    );
}

export default TweetBox;