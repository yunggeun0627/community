/** @jsxImportSource @emotion/react */
import * as s from './styles.js';
import React, { useState } from 'react';
import { FaPen } from 'react-icons/fa';
import { CiImageOn } from 'react-icons/ci';
import { RiEmotionHappyLine } from "react-icons/ri";
import { AiOutlineBars } from "react-icons/ai";
import EmojiPicker from 'emoji-picker-react';
import api from '../../api/axios.js';
import { reqPostTweet } from '../../api/tweetApi.js';
import { requpload } from '../../api/upload.js';

function TweetBox({ onTweet }) {
    const [content, setContent] = useState("");
    const [image, setImage] = useState(null);
    const [showEmoji, setShowEmoji] = useState(false);
    const [showPoll, setShowPoll] = useState(false);
    const [pollOptions, setPollOptions] = useState(["", ""]);

    // 트윗 제출
    const handleSubmit = async () => {
        if (!content && !image && !pollOptions.some((opt) => opt)) return;

        const tweetData = {
            userId: 1,
            content,
            imageUrl: image,
            poll: showPoll
                ? { options: pollOptions.filter((opt) => opt), endTime: null }
                : null
        };

        try {
            const response = await reqPostTweet(tweetData);
            if (onTweet) onTweet(response.data);

            setContent("");
            setImage(null);
            setShowPoll(false);
            setPollOptions(["", ""]);
            setShowEmoji(false);
        } catch (error) {
            console.error("트윗 등록 실패:", error);
        }
    };

    // 이미지 업로드
    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const formData = new FormData();
        formData.append("file", file);

        try {
            const res = await requpload(formData); // uploadApi 호출
            setImage(res.data.url); // 서버가 준 URL 저장
        } catch (error) {
            console.error("이미지 업로드 실패:", error);
        }
    };

    // 이모지 선택
    const handleEmojiSelect = (emojiData) => {
        setContent((prev) => prev + emojiData.emoji);
        setShowEmoji(false);
    };

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

            {showPoll && (
                <div css={s.pollBox}>
                    {pollOptions.map((opt, idx) => (
                        <input
                            key={idx}
                            css={s.pollInput}
                            type="text"
                            placeholder={`Option ${idx + 1}`}
                            value={opt}
                            onChange={(e) =>
                                setPollOptions((prev) => {
                                    const arr = [...prev];
                                    arr[idx] = e.target.value;
                                    return arr;
                                })
                            }
                        />
                    ))}
                    <div css={s.pollActionsRow}>
                        <button
                            css={s.addpollOption}
                            onClick={() => setPollOptions((prev) => [...prev, ""])}
                        >
                            + Add Option
                        </button>
                    </div>
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

                    <button css={s.iconButton} onClick={() => setShowPoll((prev) => !prev)}>
                        <AiOutlineBars />
                    </button>

                    <button css={s.iconButton} onClick={() => setShowEmoji((prev) => !prev)}>
                        <RiEmotionHappyLine />
                    </button>

                    {showEmoji && (
                        <div css={s.emojiPopup}>
                            <EmojiPicker onEmojiClick={handleEmojiSelect} />
                        </div>
                    )}
                </div>

                <button css={s.button} type="button" onClick={handleSubmit}>
                    <FaPen /> Tweet
                </button>
            </div>
        </div>
    );
}

export default TweetBox;