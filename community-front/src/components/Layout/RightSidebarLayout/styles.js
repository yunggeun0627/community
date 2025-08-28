import { css } from '@emotion/react';

export const sidebar = css`
    /* width: 350px;
    padding: 10px 20px;
    position: sticky;
    top: 0;
    height: 100vh;
    overflow-y: auto; */
    flex: 1; 
    min-width: 200px; 
    padding: 10px 20px;
    height: 100vh;
    overflow-y: auto;
    box-sizing: border-box;
    border-left: 1px solid #e5e7eb;
    background-color: #fff;
`;

export const searchWrapper = css`
    position: sticky;
    top: 0;
    background-color: #fff;
    padding: 5px 0;
    z-index: 10;
    overflow: hidden;
`;

export const searchInput = css`
    width: 100%;
    padding: 10px 15px;
    border-radius: 9999px 9999px;
    border: none;
    background-color: #f5f8fa;
    font-size: 14px;
    outline: none;
    box-sizing: border-box;

    &:focus {
        background-color: #fff;
        border: 1px solid #1da1f2;
    }
`;

export const trendsBox = css`
    background-color: #f5f8fa;
    border-radius: 16px;
    margin-top: 15px;
    padding: 15px;
`;

export const sectionTitle = css`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
`;

export const treadItem = css`
    padding: 8px 0;
    border-bottom: 1px solid #e6ecf0;

    &:last-child {
        border-bottom: none;
    }

    span {
        display: block;
        font-weight: 500;
    }

    small {
        color: gray;
        font-size: 12px;
    }
`;

export const followBox = css`
    background-color: #f5f8fa;
    border-radius: 16px;
    margin-top: 15px;
    padding: 15px;
`;

export const userItem = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0;
    border-bottom: 1px solid #e6ecf0;

    &:last-child {
        border-bottom: none;
    }

    strong {
        display: block;
    }

    span {
        font-size: 12px;
        color: gray;
    }
`;

export const followButton = css`
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 9999px;
    padding: 6px 12px;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;

    &:hover {
        background-color: #333333;
    }
`;
