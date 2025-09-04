import { css } from "@emotion/react";

export const layout = css`
    flex: 2;
    min-width: 400px;
    padding: 20px;
    border-left: 1px solid #e6ecf0;
    border-right: 1px solid #e6ecf0;
    height: 100vh;
`;

export const mainContainer = css`
    flex: 1;
    min-width: 400px;
    padding: 20px;
    border-left: 1px solid #e6ecf0;
    border-right: 1px solid #e6ecf0;
    height: auto;
    overflow: visible;
`;

export const tabContainer = css`
    display: flex;
    border-bottom: 1px solid #e6ecf0;
    margin-bottom: 10px;
`;

export const tab = css`
    display: flex;
    flex: 1;
    font-weight: 600;
    text-align: center;
    justify-content: center;
    color: #536471;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
`;

export const activeTab = css`
    ${tab};
    border-bottom: 2px solid #1d9bf0;
    font-weight: 700;
    color: #1d9bf0;
`;

// 🔹 Post 버튼
export const postButton = css`
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 16px;
    border-radius: 9999px;
    background-color: #1d9bf0;
    color: #fff;
    font-weight: 600;
    border: none;
    cursor: pointer;
    margin-bottom: 10px;
`;

// 🔹 게시물 작성창 컨테이너
export const postBox = css`
    width: 100%;
    max-width: 600px;
    border: 1px solid #e6ecf0;
    border-radius: 12px;
    background-color: #fff;
    padding: 10px;
    margin-bottom: 20px;
`;

// 🔹 게시물 작성 textarea
export const postTextarea = css`
    width: 100%;
    height: 100px;
    border-radius: 8px;
    border: 1px solid #ccc;
    padding: 8px;
    resize: none;
`;

// 🔹 게시물 버튼 그룹
export const postBoxActions = css`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 6px;
`;

// 🔹 게시물 제출 버튼
export const submitPostButton = css`
    padding: 6px 12px;
    border: none;
    border-radius: 8px;
    background-color: #1d9bf0;
    color: #fff;
    cursor: pointer;
    font-weight: 600;
`;

// 🔹 게시물 취소 버튼
export const cancelPostButton = css`
    padding: 6px 12px;
    border: none;
    border-radius: 8px;
    background-color: #e6ecf0;
    color: #536471;
    cursor: pointer;
    font-weight: 600;
`;

export const followButton = css`
    padding: 6px 12px;
    border-radius: 9999px;
    border: none;
    cursor: pointer;
    font-size: 0.9rem;
`;

export const emojiPopup = css`
    position: absolute;
    bottom: 50px; // commentBox 기준 위쪽에 표시
    left: 0;
    z-index: 1000;
    background: #fff;
    border: 1px solid #e6ecf0;
    border-radius: 12px;
    padding: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    width: 300px;
    height: 350px;
`;