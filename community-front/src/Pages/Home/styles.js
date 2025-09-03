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