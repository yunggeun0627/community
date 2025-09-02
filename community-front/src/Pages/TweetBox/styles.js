import { css } from "@emotion/react";

export const box = css`
    border-bottom: 1px solid #e6ecf0;
    padding: 10px;

`;

export const textarea = css`
    width: 100%;
    min-height: 80px;
    resize: none;
    outline: none;
    border: none;
    font-size: 16px;
`;

export const imagePreview = css`
    margin-top: 10px;
    img {
        max-width: 100%;
        border-radius: 12px;
    }
`;

export const actionsRow = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
`;

export const iconGroup = css`
    display: flex;
    gap: 10px;
`;

export const iconButton = css`
    background: none;
    border: none;
    font-size: 18px;
    color: #1da1f2;
    cursor: pointer;

    &:hover {
        color: #0d8ddb;
    }
`;

export const button = css`
    padding: 8px 16px;
    background-color: #1da1f2;
    color: #fff;
    border: none;
    border-radius: 9999px;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;

    &:hover {
        background-color: #0d8ddb;
    }
`;

export const pollWrapper = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
`;

export const iconLabel = css`
    font-size: 1.5rem;
    color: #1da1f2;
    cursor: pointer;
    background: none;
    border: none;
    align-self: flex-start;
    &:hover {
        color: #0d8ddb;
    }
`;

export const pollBox = css`
    margin-top: 8px;
    padding: 15px;
    border: 1px solid #e1e8ed;
    border-radius: 15px;
    background-color: #f5f8fa;
    display: flex;
    flex-direction: column; /* 세로로 쌓기 */
    gap: 10px;
    width: 100%;
    box-sizing: border-box;
`;

export const pollInput = css`
    width: 100%;
    box-sizing: border-box;
    padding: 8px 12px;
    border: 1px solid #ccd6dd;
    border-radius: 9999px;
    outline: none;
    font-size: 0.9rem;
    display: block;

    &:focus {
        border-color: #1da1f2;
    }
`;

export const pollTimerInput = css`
    width: 100%;
    padding: 6px 12px;
    border-radius: 9999px;
    border: 1px solid #ccd6dd;
    outline: none;
    font-size: 0.9rem;
    box-sizing: border-box;
`;

export const timerWrapper = css`
    display: flex;
    flex-direction: column; /* 라벨 + input 세로 정렬 */
    gap: 4px;
    width: 100%;
`;

export const buttonGroup = css`
    display: flex;
    gap: 8px;
    flex-wrap: wrap; /* 화면 좁으면 아래로 내려가도록 */
`;

export const addOptionButton = css`
    padding: 6px 12px;
    background-color: #1da1f2;
    color: white;
    border: none;
    border-radius: 9999px;
    cursor: pointer;
    font-size: 0.9rem;
    transition: background-color 0.2s;

    &:hover {
        background-color: #0d8ddb;
    }
`;

export const pollPost = css`
    margin-top: 15px;
    padding: 15px;
    border: 1px solid #e1e8ed;
    border-radius: 15px;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const pollOption = css`
    padding: 8px 12px;
    border: 1px solid #ccd6dd;
    border-radius: 9999px;
    cursor: pointer;

    &:hover {
        background-color: #f0f8ff;
    }
`;

export const acactions = css`
    display: flex;
    align-items: center;
    justify-content: flex-start; // 버튼 하나만 있어서 왼쪽 정렬
    margin-top: 8px;
`;

export const tweetButton = css`
    background: #1da1f2;
    border: none;
    color: white;
    font-weight: bold;
    padding: 8px 16px;
    border-radius: 20px;
    cursor: pointer;
`;

export const emojiPopup = css`
    position: absolute;
    top: 40px;
    left: 0;
    z-index: 1000;
`;