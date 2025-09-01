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