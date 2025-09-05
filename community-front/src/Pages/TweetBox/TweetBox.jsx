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
            userId: 1, // 로그인 전 임시
            content: content,
            imageUrl: image, // 정확히 DTO에 맞는 key
            // poll은 서버에서 처리할 수 있다면 포함
            poll: showPoll
                ? {
                    options: pollOptions.filter(opt => opt),
                    endTime: null,
                }
                : null
        };

        console.log("보낼 트윗 데이터:", tweetData); // 디버깅

        try {
            const response = await reqPostTweet(tweetData);
            console.log("트윗 등록 성공:", response.data);

            if (onTweet) onTweet(response.data);

            // 상태 초기화
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
            const res = await api.post("http://localhost:8080/api/upload", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            setImage(res.data.url); // 서버가 준 URL만 저장
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