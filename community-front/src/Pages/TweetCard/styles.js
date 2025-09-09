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
    justify-content: space-between; /* 작성자 = 왼쪽 / 버튼 = 오른쪽 */
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
        color: #555; /* 아이콘 색상 */
    }
`;

export const user = css`
    font-weight: 600;
    font-size: 15px;
    color: #0f1419;
`;

export const avatar = css`
    width: 36px;
    height: 36px;
    border-radius: 50%;
`;

export const username = css`
    font-weight: bold;
    color: #555;
`;

export const elapsedTime = css`
    color: #888;
    font-size: 12px;
    margin-left: 4px;
`;

export const content = css`
    font-size: 15px;
    color: #0f1419;
    white-space: pre-wrap;
`;

export const imageWrapper = css`
    margin-top: 8px;
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid #e6ecf0;

    img {
        width: 100%;
        height: auto;
        display: block;
    }
`;

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

export const commentBox = css`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 10px;
    position: relative;
`;

export const commentInput = css`
    flex: 1;
    min-height: 40px;
    border-radius: 20px;
    border: 1px solid #ccd6dd;
    padding: 8px 12px;
    outline: none;
    font-size: 14px;
    resize: none;
`;

export const emojiPopup = css`
    position: absolute; // 부모 commentBox 기준으로 위치
    bottom: 50px; // textarea 위쪽에 표시
    left: 0;
    z-index: 1000; // 다른 요소 위로 표시
    background: #fff;
    border: 1px solid #e6ecf0;
    border-radius: 12px;
    padding: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;

export const iconButton = css`
    cursor: pointer;
    background: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px;
    font-size: 18px;
`;

export const commentButton = css`
    padding: 6px 12px;
    background-color: #1da1f2;
    color: white;
    border: none;
    border-radius: 9999px;
    cursor: pointer;
`;

export const commentList = css`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 6px;
`;

export const commentItem = css`
    padding: 6px 12px;
    background-color: #f5f8fa;
    border-radius: 12px;
    font-size: 14px;
`;