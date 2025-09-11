import { css } from "@emotion/react";

export const card = css`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 12px 16px;
    border-bottom: 1px solid #e6ecf0;
    background: #fff;
`;

export const header = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
`;

export const deleteButton = css`
    border: none;
    background: transparent;
    cursor: pointer;
    padding: 6px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s ease;

    &:hover {
        background: #f0f0f0;
    }

    svg {
        color: #555;
    }
`;

export const user = css`
    display: flex;
    align-items: center;
    gap: 6px;
    font-weight: 600;
    font-size: 15px;
    color: #0f1419;
`;

export const avatar = css`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    flex-shrink: 0;
    object-fit: cover;
`;

export const username = css`
    font-weight: bold;
    color: #0f1419;
`;

export const elapsedTime = css`
    color: #536471;
    font-size: 12px;
    margin-left: 4px;
`;

export const content = css`
    font-size: 15px;
    color: #0f1419;
    white-space: pre-wrap;
`;

export const imageWrapper = css`
    width: 100%;
    max-height: 400px;
    overflow: hidden;
    border-radius: 12px;
    margin-top: 8px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        cursor: pointer;
    }
`;

export const clickableImage = css`
    cursor: pointer;
`;

/** ===========================
 *  투표(Poll)
 * =========================== */
export const pollBox = css`
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #e6ecf0;
    border-radius: 12px;
    background: #f7f9f9;
`;

export const pollOption = (isVoted) => css`
    padding: 6px 10px;
    border-radius: 8px;
    background: ${isVoted ? '#e8f5fe' : '#fff'};
    border: 1px solid #e6ecf0;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: background 0.2s;

    &:hover {
        background: ${isVoted ? '#e8f5fe' : '#f0f0f0'};
    }
`;

export const pollEnd = css`
    font-size: 13px;
    color: #536471;
`;

/** ===========================
 *  액션 버튼
 * =========================== */
export const actions = css`
    display: flex;
    gap: 20px;
    margin-top: 10px;
    color: #536471;
    font-size: 14px;

    div {
        display: flex;
        align-items: center;
        gap: 6px;
        cursor: pointer;
    }
`;

export const actionIcons = css`
    display: flex;
    gap: 10px;
    position: relative;
`;

export const iconButton = css`
    font-size: 20px;
    cursor: pointer;
    color: #1da1f2;
    background: transparent;
    border: none;
    padding: 4px;

    &:hover {
        color: #0d8ddb;
    }
`;

/** ===========================
 *  모달
 * =========================== */
export const modalOverlay = css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

export const modalContent = css`
    width: 500px;
    max-width: 90%;
    background: #fff;
    border-radius: 16px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
`;

export const modalHeader = css`
    display: flex;
    justify-content: flex-end;
    padding: 8px;

    & > button {
        background: none;
        border: none;
        cursor: pointer;
        font-size: 18px;
        font-weight: bold;
        color: #555;
        transition: color 0.2s;
    }

    &:hover > button {
        color: #1da1f2;
    }
`;

export const tweetContainer = css`
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 16px;
`;

export const replyPlaceholder = css`
    margin-top: 12px;
    padding: 10px 0;
    color: #536471; /* 회색 톤 */
    font-size: 14px;
    cursor: default; /* 클릭 불가 */
`;

/** ===========================
 *  답글 입력창
 * =========================== */
export const replyInputBox = css`
    display: flex;
    justify-content: space-between; /* 왼쪽-오른쪽 배치 */
    align-items: center;
    margin-top: 8px;

    & > button {
        background-color: #000;
        color: #fff;
        border: none;
        border-radius: 20px;
        padding: 8px 16px;
        font-weight: bold;
        cursor: pointer;
        transition: background-color 0.2s;
    }
`;


export const replyTextarea = css`
    width: 100%;
    min-height: 40px;
    border: none;
    outline: none;
    resize: none;
    font-size: 14px;
    color: #0f1419;
    padding: 8px 0;

    &::placeholder {
        color: #999;
    }
`;

/** ===========================
 *  댓글
 * =========================== */
export const commentBox = css`
    display: flex;
    align-items: flex-start;
    gap: 10px;
    margin-top: 12px;
    padding-top: 8px;
    border-top: 1px solid #e6ecf0;
`;

export const replyAvatar = css`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    flex-shrink: 0;
`;

export const replyContent = css`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

export const replyInput = css`
    width: 100%;
    border: none;
    resize: none;
    outline: none;
    font-size: 15px;
    padding: 8px 0;
    color: #0f1419;
    min-height: 40px;
`;

export const replyActions = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 8px;
`;

export const iconGroup = css`
    display: flex;
    gap: 8px;

    & > button {
        border: none;
        background: transparent;
        cursor: pointer;
        font-size: 18px;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
            background: rgba(29, 155, 240, 0.1);
            border-radius: 50%;
        }
    }
`;

export const replyButton = css`
    padding: 8px 16px;
    border-radius: 12px;
    background: #000;
    color: #fff;
    border: none;
    cursor: pointer;

    &:hover {
        background-color: #1a8cd8;
    }
`;

export const commentList = css`
    margin-top: 12px;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const commentItem = css`
    display: flex;
    gap: 8px;
    padding: 8px 12px;
    background-color: #f7f9f9;
    border-radius: 12px;
    font-size: 14px;
    color: #0f1419;
`;

export const commentUser = css`
    font-weight: 600;
    margin-right: 4px;
    color: #0f1419;
`;