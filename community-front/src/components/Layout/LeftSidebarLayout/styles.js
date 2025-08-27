import { css } from '@emotion/react';

export const layout = css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100vh;
    width: 256px;
    padding: 20px 20px 0 20px;
    border-right: 1px solid #e5e7eb;
    background-color: #fff;
    color: black;
    box-sizing: border-box;
    overflow-y: auto;

    .dark & {
        background-color: #000;
        color: #fff;
        border-color: #374151;
    }
`;

export const logo = css`
    margin-bottom: 24px;
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;

    & > svg {
        height: 3rem;
        width: 24px;
        fill: currentColor;
        vertical-align: text-bottom;
        user-select: none;
        max-width: 100%;
        position: relative;
        color: #0f1419;
        display: inline-block;
    }
`;

export const menu = css`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 15px;
    border-radius: 16px;
    cursor: pointer;
    text-decoration: none;
    font-size: 18px;
    transition: all 0.2s ease-in-out;

    & > svg {
        width: 26px;
        height: 26px;
        fill: currentColor;
        display: inline-block;
    }

    &:hover {
        background-color: #f3f4f6;
        transform: scale(1.05);
    }
`;

export const postButton = css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 16px;
    width: 100%;
    padding: 14px 0;
    border-radius: 9999px;
    font-size: 17px;
    font-weight: bold;
    background-color: #1d9bf0;
    color: #fff;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
        background-color: #1a8cd8;
    }
`;

export const profileBox = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: auto;
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
    border-radius: 9999px;
    cursor: pointer;
    transition: background 0.2s;

    position: sticky;
    bottom: 12px;
    background-color: inherit;

    &:hover {
        background-color: #f7f9f9;
    }
`;

export const profileLeft = css`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const profileImage = css`
    width: 40px;
    height: 40px;
    border-radius: 50%;
`;

export const profileInfo = css`
    display: flex;
    flex-direction: column;
`;

export const profileName = css`
    font-weight: 600;
    font-size: 15px;
`;

export const profileId = css`
    font-size: 14px;
    color: #536471;
`;

export const profileMore = css`
    font-size: 20px;
    color: #536471;

    & > svg {
        fill: currentColor;
        height: 18.75px;
        vertical-align: text-bottom;
        user-select: none;
        display: inline-block;
    }
`;
