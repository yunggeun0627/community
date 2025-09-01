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
    /* ✅ 스크롤 제거 */
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
    color: #1d9bf0;
`;