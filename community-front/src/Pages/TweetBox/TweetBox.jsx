/** @jsxImportSource @emotion/react */
import * as s from './styles.js';
import React, { useState } from 'react';
import { FaPen } from 'react-icons/fa';
import { CiImageOn } from 'react-icons/ci';
import { RiEmotionHappyLine } from "react-icons/ri";
import { AiOutlineBars } from "react-icons/ai";

function TweetBox({ onTweet, onAction }) {
    const [content, setContent] = useState("");
    const [image, setImage] = useState(null);

    const handleSubmit = () => {
        if (!content) return;
        onTweet({
            id: Date.now(),
            user: "Me",
            content,
            image,
            likes: 0,
            retweets: 0
        });
        setContent("");
    }

    const handleIconClick = (type) => {
        if (onAction) onAction(type);
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    }
    return (
        <div css={s.box}>
            <textarea
                css={s.textarea}
                placeholder="What's happening?"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />

            {image && (
                <div css={s.imagePreview}>
                    <img src={image} alt="preview" />
                </div>
            )}

            <div css={s.actionsRow}>
                <div css={s.iconGroup}>
                    <label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            style={{ display: "none" }}
                        />
                        <CiImageOn css={s.iconButton} />
                    </label>
                    <button css={s.iconButton} onClick={() => handleIconClick("poll")}>
                        <AiOutlineBars />
                    </button>
                    <button css={s.iconButton} onClick={() => handleIconClick("emoji")}>
                        <RiEmotionHappyLine />
                    </button>
                </div>

                <button css={s.button} type="button" onClick={handleSubmit}>
                    <FaPen /> Tweet
                </button>
            </div>
        </div>
    );
}

export default TweetBox;