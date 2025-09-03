import { css } from "@emotion/react";

export const box = css`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 12px 16px;
    border-bottom: 1px solid #e6ecf0;
    background: #fff;
    position: relative;
`;

export const textarea = css`
    min-height: 80px;
    border-radius: 12px;
    border: 1px solid #ccd6dd;
    padding: 8px 12px;
    outline: none;
    font-size: 14px;
    resize: none;
`;

export const imagePreview = css`
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

export const actionsRow = css`
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
    align-items: center;
`;

export const iconGroup = css`
    display: flex;
    gap: 10px;
    position: relative;
`;

export const iconButton = css`
    font-size: 20px;
    cursor: pointer;
    color: #1da1f2; /* 하늘색 아이콘 */
    background: transparent;
    border: none;
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        color: #0d8ddb; /* 클릭시 살짝 진한 하늘색 */
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

export const emojiPopup = css`
    position: absolute;
    top: -350px;
    left: 0;
    z-index: 100;
`;

export const pollBox = css`
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #e6ecf0;
    border-radius: 12px;
    background: #f0f8ff; /* 하늘색 배경 */
`;

export const pollOptionRow = css`
    display: flex;
    gap: 6px;
    align-items: center;
`;

export const pollInput = css`
    flex: 1;
    padding: 6px 10px;
    border-radius: 8px;
    border: 1px solid #ccd6dd;
    outline: none;
`;

export const pollActionsRow = css`
    display: flex;
    justify-content: space-between; /* 왼쪽, 오른쪽 버튼 배치 */
    margin-top: 10px;
`;

export const addpollOption = css`
    padding: 6px 10px;
    border-radius: 8px;
    background: #ffffff;
    border: 1px solid #a0d8ff;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
        background: #e6f4ff;
}
`; 

export const submitPollButton = css`
    padding: 6px 12px;
    border-radius: 9999px;
    background-color: #1da1f2;
    color: white;
    border: none;
    cursor: pointer;
    font-weight: 600;
`;