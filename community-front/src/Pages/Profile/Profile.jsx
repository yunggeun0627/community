import React, { useEffect, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './styles.js';
import { CgProfile } from 'react-icons/cg';

function Profile(props) {
    const [avatarSrc, setAvatarSrc] = useState(""); // 초기 이미지 없음
    const inputRef = useRef(null);
    const [activeTab, setActiveTab] = useState("Tweets");

    const tweets = [
        { id: 1, content: "My first tweet" },
        { id: 2, content: "Learning React!" },
        { id: 3, content: "Emotion CSS is cool!" },
    ];

    // 페이지 로드 시 localStorage에서 이미지 불러오기
    useEffect(() => {
        const savedAvatar = localStorage.getItem("profileAvatar");
        if (savedAvatar) setAvatarSrc(savedAvatar);
    }, []);

    // 아바타 클릭 -> 파일 선택
    const handleClickAvatar = () => {
        inputRef.current.click();
    };

    // 파일 업로드 후 미리보기 및 localStorage 저장
    const handleAvatarChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setAvatarSrc(e.target.result);
                localStorage.setItem("profileAvatar", e.target.result); // 저장
            };
            reader.readAsDataURL(file);
        }
    };

    // 탭/트윗 클릭
    const handleClick = (type) => {
        if (props.onAction) props.onAction(type);
    };

    return (
        <div css={s.layout}>
            {/* 헤더 */}
            <div css={s.header}></div>

            {/* 아바타 */}
            <div css={s.avatarWrapper} onClick={handleClickAvatar}>
                {avatarSrc ? (
                    <img src={avatarSrc} alt="avatar" css={s.avatar} />
                ) : (
                    <CgProfile css={s.avatarIcon} />
                )}
                <input
                    type="file"
                    accept="image/*"
                    ref={inputRef}
                    onChange={handleAvatarChange}
                    css={s.avatarInput}
                />
            </div>

            {/* 사용자 정보 */}
            <div css={s.info}>
                <div css={s.username}>John Doe</div>
                <div css={s.handle}>@johndoe</div>

                <div css={s.stats}>
                    <span>
                        <strong>150</strong> Following
                    </span>
                    <span>
                        <strong>200</strong> Followers
                    </span>
                </div>

                <div css={s.tabs}>
                    {["Tweets", "Replies", "Media", "Likes"].map((tab) => (
                        <div
                            key={tab}
                            className={activeTab === tab ? "active" : ""}
                            onClick={() => {
                                setActiveTab(tab);
                                handleClick(tab);
                            }}
                        >
                            {tab}
                        </div>
                    ))}
                </div>
            </div>

            {/* 트윗 리스트 */}
            {tweets.map((t) => (
                <div
                    key={t.id}
                    css={s.tweetItem}
                    onClick={() => handleClick("tweet")}
                >
                    {t.content}
                </div>
            ))}
        </div>
    );
}

export default Profile;