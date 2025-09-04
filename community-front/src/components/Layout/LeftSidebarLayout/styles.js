import { css } from '@emotion/react';

export const layout = css`
    flex: 0 0 250px; /* 고정 폭 */
    height: 100vh;
    position: sticky;
    top: 0;
    border-right: 1px solid #e6ecf0;
    padding: 20px;

    .dark & {
        background-color: #000;
        color: #fff;
        border-color: #374151;
    }
`;

export const logo = css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
    padding: 10px 15px;      
    border-radius: 16px;
    cursor: pointer;
    font-size: 18px;         
    font-weight: bold;
    width: 100%;
    max-width: 220px;
    margin-left: auto;         
    margin-bottom: 20px;      

    & > svg {
        width: 26px;
        height: 26px;
        fill: currentColor;
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
    font-weight: 400;
    width: 100%;
    max-width: 220px;
    margin-left: auto;

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

export const postButtonWrapper = css`
    position: relative;
    margin-top: 10px;
`;

export const postButton = css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 16px;
    width: 256px;
    padding: 10px 28px;
    border-radius: 9999px;
    font-size: 17px;
    font-weight: bold;
    background-color: #1d9bf0;
    color: #fff;
    cursor: pointer;
    transition: background 0.2s;
    margin-left: auto;

    &:hover {
        background-color: #1a8cd8;
    }
`;

export const postBox = css`
    position: absolute;
    top: -10px; // 버튼 위로 띄우고 싶으면 조정
    left: 0;
    width: 250px;
    padding: 10px;
    border: 1px solid #e6ecf0;
    border-radius: 12px;
    background-color: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 100;
`;

export const postTextarea = css`
    width: 100%;
    height: 80px;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 5px;
    resize: none;
`;

export const submitPostButton = css`
    margin-top: 6px;
    padding: 6px 12px;
    border: none;
    border-radius: 8px;
    background-color: #1da1f2;
    color: #fff;
    cursor: pointer;
`;

export const profileBox = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: auto;
    width: 256px; 
    padding: 10px 28px; 
    box-sizing: border-box;
    border-radius: 9999px;
    cursor: pointer;
    position: sticky;
    bottom: 12px;
    margin-left: auto;
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
    cursor: pointer;
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
    position: relative;

    & > svg {
        fill: currentColor;
        height: 18.75px;
        vertical-align: text-bottom;
        user-select: none;
        display: inline-block;
    }
`;

export const dropdownMenu = css`
    position: absolute;
    bottom: 60px;
    right: 0;
    width: 140px;
    background-color: #fff;
    border: 1px solid #e6ecf0;
    border-radius: 12px;
    padding: 10px;
    box-shadow: 0 4px 8px #00000019;
    z-index: 100;
`;

export const dropdownButton = css`
    width: 100%;
    padding: 6px 12px;
    font-size: 14px;
    text-align: left;
    background: none;
    border: none;
    cursor: pointer;

    &:hover {
        background-color: #f5f8fa;
        border-radius: 8px;
    }
`;