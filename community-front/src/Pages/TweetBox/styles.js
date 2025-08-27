import { css } from "@emotion/react";

export const box = css`
    border-bottom: 1px solid #e6ecf0;
    padding-bottom: 15px;
    margin-bottom: 15px;
`;

export const textarea = css`
    width: 100%;
    min-height: 60px;
    padding: 10px;
    resize: none;
    border-radius: 10px;
    border: 1px solid #ccc;
`;

export const actionsRow = css`
    display: flex;
    align-items: center;
    gap: 10px;
`;
export const iconbox = css`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: none;
    background-color: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s;

    &:hover {
        background-color: #e8f5f2;
    }

    & > svg {
        width: 20px;
        height: 20px;
        fill: #1da1f2;
    }
`;

export const button = css`
    margin-top: 10px;
    padding: 8px 16px;
    background-color: #1da1f2;
    color: #fff;
    border: none;
    border-radius: 9999px;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    margin-left: auto;

    &:hover {
        background-color: #0d8ddb;
    }
`;