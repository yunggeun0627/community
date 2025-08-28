import { css } from "@emotion/react"

export const layout = css`
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    color: #0f1419;
`;

export const item = css`
    display: flex;
    align-items: centere;
    padding: 12px 10px;
    border-bottom: 1px solid #e6ecf0;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
        background-color: #f5f8fa;
    }
`;

export const icon = css`
    margin-right: 10px;
    font-size: 20px;
    color: #1d9bf0;
`;