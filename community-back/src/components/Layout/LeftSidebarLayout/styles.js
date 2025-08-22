import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    border-right: 0.1rem solid #dbdbdb;
    padding: 2rem 0;
    width: 7.2rem;
    height: 100vh;
    font-size: 2.4rem;

    & > header {
    }

    & > main {
        flex-grow: 1;
    }

    & > footer {
    }
`;

export const iconBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    margin: 1rem 0;
    border-radius: 0.8rem;
    width: 4.8rem;
    height: 4.8rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    color: #222;
    &:hover {
        background-color: #eeeeee;
    }
`;