import { css } from "@emotion/react";

export const layout = css`
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    color: #0f1419;
`;

export const input = css`
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border-radius: 8px;
    border: 1px solid #e6ecf0;
    font-size: 16px;

    &:focus {
        outline: none;
        border-color: #1d9bf0;
    }
`;

export const trends = css`
    margin-top: 20px;
`;

export const trendsTitle = css`
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: 600;
`;

export const tredList = css`
    list-style: none;
    padding: 0;
`;

export const trendItem = css`
    padding: 6px 0;
    cursor: pointer;
    border-radius: 6px;
    transition: background 0.2s;

    &:hover {
        background-color: #f5f8fa;
    }
`;

export const button = css`
    padding: 8px 16px;
    background-color: #1d9bf0;
    color: #fff;
    border: none;
    border-radius: 9999px;
    cursor: pointer;
    font-weight: 600;
    transition: background 0.2s;

    &:hover {
        background-color: #1a8cd8;
    }
`;