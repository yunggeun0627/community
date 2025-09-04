/** @jsxImportSource @emotion/react */
import * as s from './styles.js';
import React, { useState } from 'react';
import { FaPen } from 'react-icons/fa';
import { CiImageOn } from 'react-icons/ci';
import { RiEmotionHappyLine } from "react-icons/ri";
import { AiOutlineBars } from "react-icons/ai";
import EmojiPicker from 'emoji-picker-react';

function TweetBox(props) {
    const { onTweet, onAction } = props;
    const [content, setContent] = useState("");
    const [image, setImage] = useState(null);
    const [showEmoji, setShowEmoji] = useState(false);
    const [showPoll, setShowPoll] = useState(false);
    const [pollOptions, setPollOptions] = useState(["", ""]);

    const handleSubmit = () => {
        if (!content && !image && !pollOptions.some((opt) => opt)) return;

        const tweetData = {
            id: Date.now(),
            user: "Me",
            content,
            image_url: image,
            poll: showPoll
                ? {
                    options: pollOptions.filter((opt) => opt),
                    endTime: null,
                }
                : null,
            likes: 0,
            retweets: 0,
        };

        if (onTweet) onTweet(tweetData);

        setContent("");
        setImage(null);
        setShowPoll(false);
        setPollOptions(["", ""]);
        setShowEmoji(false);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setImage(reader.result);
            reader.readAsDataURL(file);
        }
    };

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

                        <button
                            css={s.submitPollButton}
                            onClick={() => {
                                handleSubmit({
                                    content,
                                    image,
                                    poll: { options: pollOptions },
                                });
                            }}
                        >
                            Post Poll
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

                    <button
                        css={s.iconButton}
                        onClick={() => setShowPoll((prev) => !prev)}
                    >
                        <AiOutlineBars />
                    </button>

                    <button
                        css={s.iconButton}
                        onClick={() => setShowEmoji((prev) => !prev)}
                    >
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