import { css } from "@emotion/react";

export const sideBox = css`
    margin-top: 20px;
`;

export const trendBox = css`
    padding: 10px;
    border: 1px solid #e6ecf0;
    border-radius: 12px;
    background-color: #f5f8fa;
    margin-bottom: 20px;
`;

export const trendItem = css`
    display: flex;
    justify-content: space-between;
    padding: 6px 0;
    border-bottom: 1px solid #e1e8ed;

    &:last-child {
        border-bottom: none;
    }
`;
