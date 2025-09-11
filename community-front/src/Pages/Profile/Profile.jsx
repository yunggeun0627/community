import React, { useEffect, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './styles.js';
import { CgProfile } from 'react-icons/cg';
import { TbCameraPlus } from "react-icons/tb";

function Profile({ userProfile, onProfileChange }) {
    const [avatarSrc, setAvatarSrc] = useState("");
    const [bannerSrc, setBannerSrc] = useState("");
    const [username, setUsername] = useState(""); // 이메일
    const [nickname, setNickname] = useState(""); // 이름
    const [bio, setBio] = useState(""); // 자기소개
    const [activeTab, setActiveTab] = useState("Tweets");
    const [isEditOpen, setIsEditOpen] = useState(false);
    const inputRef = useRef(null);

    const avatarInputRef = useRef(null);
    const bannerInputRef = useRef(null);

    // 모달 전용 state
    const [editNickname, setEditNickname] = useState("");
    const [editBio, setEditBio] = useState("");

    // Focus 상태
    const [isFocusedNickname, setIsFocusedNickname] = useState(false);
    const [isFocusedBio, setIsFocusedBio] = useState(false);

    const tweets = [
        { id: 1, content: "My first tweet" },
        { id: 2, content: "Learning React!" },
        { id: 3, content: "Emotion CSS is cool!" },
    ];

    useEffect(() => {
        setAvatarSrc(localStorage.getItem("profileAvatar") || "");
        setBannerSrc(localStorage.getItem("profileBanner") || "");
        setUsername(localStorage.getItem("profileUsername") || "username");
        setNickname(localStorage.getItem("profileNickname") || "");
        setBio(localStorage.getItem("profileBio") || "");
    }, []);

    const handleClickAvatar = () => avatarInputRef.current.click();
    const handleClickBanner = () => bannerInputRef.current.click();

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setAvatarSrc(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleBannerChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setBannerSrc(reader.result);
                localStorage.setItem("profileBanner", reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    // 수정 버튼 클릭 → 모달 열 때 입력값 초기화
    const handleEditProfile = () => {
        setEditNickname(""); // 빈칸으로 시작
        setEditBio("");      // 빈칸으로 시작
        setIsFocusedNickname(false);
        setIsFocusedBio(false);
        setIsEditOpen(true);
    };

    // 저장 버튼 클릭 → 프로필 업데이트
    const handleSaveProfile = () => {
        const newNickname = editNickname || nickname;
        setNickname(newNickname);

        onProfileChange?.({
            avatar: avatarSrc,
            displayName: newNickname,
        });

        localStorage.setItem("profileNickname", newNickname);
        localStorage.setItem("profileAvatar", avatarSrc);
        setIsEditOpen(false);
    };

    return (
        <div css={s.layout}>
            <div css={s.header} onClick={() => bannerInputRef.current.click()}>
                {bannerSrc && <img src={bannerSrc} alt="banner" css={s.headerImg} />}
                <input
                    type="file"
                    accept="image/*"
                    ref={bannerInputRef}
                    onChange={handleBannerChange}
                    css={s.avatarInput}
                />
            </div>

            {/* 아바타 + 수정 버튼 */}
            <div css={s.avatarRow}>
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
                <button css={s.editButton} onClick={handleEditProfile}>
                    프로필 수정
                </button>
            </div>

            {/* 사용자 정보 */}
            <div css={s.info}>
                <div css={s.nickname}>{nickname}</div>
                <div css={s.username}>@{username}</div>
                <div css={s.bio}>{bio}</div>

                <div css={s.stats}>
                    <span><strong>150</strong> Following</span>
                    <span><strong>200</strong> Followers</span>
                </div>

                <div css={s.tabs}>
                    {["Tweets", "Replies", "Media", "Likes"].map((tab) => (
                        <div
                            key={tab}
                            className={activeTab === tab ? "active" : ""}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </div>
                    ))}
                </div>
            </div>

            {/* 트윗 리스트 */}
            {tweets.map((t) => (
                <div key={t.id} css={s.tweetItem}>
                    {t.content}
                </div>
            ))}

            {/* 프로필 수정 모달 */}
            {isEditOpen && (
                <div css={s.modalOverlay}>
                    <div css={s.modalContent}>
                        <div css={s.modalHeader}>
                            <button css={s.closeButton} onClick={() => setIsEditOpen(false)}>
                                X
                            </button>
                            <h2 css={s.modalTitle}>프로필 수정</h2>
                            <button css={s.saveButton} onClick={handleSaveProfile}>
                                저장
                            </button>
                        </div>

                        {/* 배너 */}
                        <div css={s.bannerWrapper} onClick={handleClickBanner}>
                            {bannerSrc ? (
                                <img src={bannerSrc} alt="banner" css={s.banner} />
                            ) : (
                                <div css={s.bannerPlaceholder}></div>
                            )}
                            <div css={s.cameraIcon}>
                                <TbCameraPlus size={24} color="#fff" />
                            </div>
                            <input
                                type="file"
                                accept="image/*"
                                ref={bannerInputRef}
                                onChange={handleBannerChange}
                                css={s.avatarInput}
                            />
                        </div>

                        {/* 모달 안 프로필 이미지 */}
                        <div css={s.inputWrapper}>
                            <div
                                css={s.avatarWrapper}
                                onClick={() => avatarInputRef.current.click()}
                            >
                                {avatarSrc ? (
                                    <img src={avatarSrc} alt="avatar" css={s.avatar} />
                                ) : (
                                    <CgProfile css={s.avatarIcon} />
                                )}
                                <div css={s.cameraIcon}>
                                    <TbCameraPlus size={24} color="#fff" />
                                </div>
                                <input
                                    type="file"
                                    accept="image/*"
                                    ref={avatarInputRef} // 모달 전용 ref
                                    onChange={(e) => {
                                        const file = e.target.files[0];
                                        if (file) {
                                            const reader = new FileReader();
                                            reader.onload = () => {
                                                setAvatarSrc(reader.result);
                                                localStorage.setItem(
                                                    "profileAvatar",
                                                    reader.result
                                                );
                                            };
                                            reader.readAsDataURL(file);
                                        }
                                    }}
                                    css={s.avatarInput}
                                />
                            </div>
                        </div>

                        {/* 이름 */}
                        <div css={s.inputWrapper}>
                            <label
                                css={s.label(isFocusedNickname || editNickname)}
                                htmlFor="nickname"
                            >
                                이름
                            </label>
                            <input
                                id="nickname"
                                type="text"
                                maxLength={30}
                                value={editNickname}
                                placeholder=""
                                onChange={(e) => setEditNickname(e.target.value)}
                                onFocus={() => setIsFocusedNickname(true)}
                                onBlur={() => setIsFocusedNickname(false)}
                                css={s.inputField}
                            />
                            {isFocusedNickname && (
                                <span css={s.charCount}>{editNickname.length} / 30</span>
                            )}
                        </div>

                        {/* 자기소개 */}
                        <div css={s.inputWrapper}>
                            <label
                                css={s.label(isFocusedBio || editBio)}
                                htmlFor="bio"
                            >
                                자기소개
                            </label>
                            <input
                                id="bio"
                                type="text"
                                maxLength={50}
                                value={editBio}
                                placeholder=""
                                onChange={(e) => setEditBio(e.target.value)}
                                onFocus={() => setIsFocusedBio(true)}
                                onBlur={() => setIsFocusedBio(false)}
                                css={s.inputField}
                            />
                            {isFocusedBio && (
                                <span css={s.charCount}>{editBio.length} / 50</span>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Profile;