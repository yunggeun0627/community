import { css } from "@emotion/react";

export const followBox = css`
    padding: 10px;
    border: 1px solid #e6ecf0;
    border-radius: 12px;
    background-color: #f5f8fa;
`;

export const sectionTitle = css`
    font-weight: bold;
    margin-bottom: 10px;
`;

export const userItem = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 6px 0;
    border-bottom: 1px solid #e1e8ed;

    &:last-child {
        border-bottom: none;
    }

    div {
        display: flex;
        flex-direction: column;
    }

    span {
        font-size: 0.85rem;
        color: #657786;
    }
`;

export const followButton = (isFollowed) => css`
    padding: 6px 12px;
    border-radius: 9999px;
    border: 1px solid #1da1f2;
    background-color: ${isFollowed ? '#ffffff' : '#1da1f2'};
    color: ${isFollowed ? '#1da1f2' : '#ffffff'};
    font-weight: bold;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        opacity: 0.8;
    }
`;
