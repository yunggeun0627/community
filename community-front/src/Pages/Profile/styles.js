import { css } from "@emotion/react";

export const layout = css`
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
`;

export const item = css`
    padding: 12px 10px;
    border-bottom: 1px solid #e6ecf0;
    cursor: pointer;
    &:hover {
        background-color: #f5f8fa;
    }
`;
