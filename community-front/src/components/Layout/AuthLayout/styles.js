import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`;

export const container = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    border: 0.1rem solid #dbdbdb;
    border-radius: 0.4rem;
    padding: 2rem 2rem;
    width: 35rem;
`;

export const title = css`
    text-align: center;
    font-size: 2.6rem;
    cursor: default;
`;