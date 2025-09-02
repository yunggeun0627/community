import { css } from '@emotion/react';

export const sidebar = css`
    width: 300px;
    padding: 20px;
`;

export const searchWrapper = css`
    margin-bottom: 20px;
`;

export const searchInput = css`
    width: 100%;
    padding: 8px 12px;
    border-radius: 9999px;
    border: 1px solid #ccd6dd;
    outline: none;
`;

export const trendsBox = css`
    margin-bottom: 20px;
`;

export const treadItem = css`
    display: flex;
    justify-content: space-between;
    padding: 6px 0;
    border-bottom: 1px solid #e6ecf0;
`;

export const followBox = css`
    margin-bottom: 20px;
`;

export const sectionTitle = css`
    font-weight: bold;
    margin-bottom: 10px;
`;

export const userItem = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0;
    border-bottom: 1px solid #e6ecf0;
`;

export const followButton = (isFollowed) => css`
    padding: 6px 12px;
    border-radius: 9999px;
    border: ${isFollowed ? '1px solid #1da1f2' : 'none'};
    background-color: ${isFollowed ? '#ffffff' : '#1da1f2'};
    color: ${isFollowed ? '#1da1f2' : '#ffffff'};
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        background-color: ${isFollowed ? '#f0f8ff' : '#0d8ddb'};
    }
`;