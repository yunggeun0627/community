import { css } from "@emotion/react";

export const card = css`
    border-bottom: 1px solid #e6ecf0;
    padding: 15px 0;
`;

export const user = css`
    font-weight: bold;
`;

export const content = css`
    margin: 5px 0;
`;

export const imageWrapper = css`
    margin-top: 10px;

    img {
        width: 100%; 
        height: auto; 
        display: block; 
        border-radius: 12px;
    }
`;

export const actions = css`
    display: flex;
    gap: 20px;
    font-size: 16px;
    align-items: center;
    cursor: pointer;
`;