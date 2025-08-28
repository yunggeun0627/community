import { css } from "@emotion/react";

export const box = css`
    border-bottom: 1px solid #e6ecf0;
    padding: 10px;
    /* display: flex;
    flex-direction: column;
    gap: 12px; */
    /* padding-bottom: 15px;
    margin-bottom: 15px; */
`;

export const textarea = css`
    width: 100%;
    min-height: 80px;
    resize: none;
    outline: none;
    border: none;
    font-size: 16px;
    /* border-radius: 10px; */
    /* padding: 10px; */
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
    /* width: 36px;
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
    } */
`;

export const button = css`
    /* margin-top: 10px; */
    padding: 8px 16px;
    background-color: #1da1f2;
    color: #fff;
    border: none;
    border-radius: 9999px;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    /* justify-content: center; */
    gap: 5px;

    /* margin-left: auto; */

    &:hover {
        background-color: #0d8ddb;
    }
`;