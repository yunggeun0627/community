import { css } from '@emotion/react';

export const layout = css`
    max-width: 600px;
    margin: 0 auto;
    font-family: Arial, sans-serif;
`;

export const header = css`
    height: 200px;
    background-color: #1da1f2;
    position: relative;
`;

export const avatarWrapper = css`
    position: relative;
    display: inline-block;
    margin-left: 20px;
    margin-top: -40px;
    cursor: pointer;
`;

export const avatar = css`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 4px solid white;
    object-fit: cover;
`;

export const avatarIcon = css`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 4px solid white;
    background-color: #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    color: white;
`;

export const avatarInput = css`
    display: none;
`;

export const info = css`
    padding: 20px;
`;

export const username = css`
    font-weight: bold;
    font-size: 20px;
`;

export const handle = css`
    color: gray;
    margin-bottom: 10px;
`;

export const stats = css`
    display: flex;
    gap: 20px;
    color: gray;
    font-size: 14px;
    margin: 10px 0;
`;

export const tabs = css`
    display: flex;
    border-bottom: 1px solid #e6ecf0;
    margin-bottom: 10px;

    div {
        flex: 1;
        text-align: center;
        padding: 12px 0;
        cursor: pointer;
        font-weight: bold;
        color: gray;

        &.active {
            color: black;
            border-bottom: 2px solid #1da1f2;
        }
    }
`;

export const tweetItem = css`
    padding: 12px 20px;
    border-bottom: 1px solid #e6ecf0;
    cursor: pointer;

    &:hover {
        background-color: #f5f8fa;
    }
`;