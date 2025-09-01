import { css } from "@emotion/react";

export const layout = css`
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
`;

export const button = css`
    padding: 8px 16px;
    background-color: #1d9bf0;
    color: #fff;
    border: none;
    border-radius: 9999px;
    cursor: pointer;
    font-weight: 600;
    margin-top: 10px;

    &:hover {
        background-color: #1a8cd8;
    }
`;
