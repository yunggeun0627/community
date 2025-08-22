import { css } from "@emotion/react";

export const container = css`
    width: 100%;
    height: 100%;
`;

export const search = css`
    display: flex;
    align-items: center;
    position: relative;
    box-sizing: border-box;
    border: 0.1rem solid #dbdbdb;
    border-radius: 0.5rem;
    padding: 1rem 1.5rem;
    cursor: pointer;
    background-color: #eeeeee;

    & > svg {
        margin-right: 1rem;
        font-size: 2rem;
    }

    & > input {
        border: none;
        outline: none;
        flex-grow: 1;
        font-size: 1.8rem;
        background-color: transparent;
        cursor: pointer;
    }
`;

export const profile = css`
    display: flex;
    width: 4.8rem;
    height: 4.8rem;
    box-sizing: border-box;
    border-radius: 1.6rem;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    position: relative;
    cursor: pointer;
    
    & > img {
        height: 3.2rem;
        width: 3.2rem;
        border-radius: 50%;
        position: relative;
    }
`;

export const accountButton = css`
    display: flex;
    align-items: center;
    justify-content: center;
    perspective: 0.1rem;
    height: 2.4rem;
    width: 2.4rem;
    box-sizing: border-box;
    border-radius: 0.8rem;
    cursor: pointer;

    & > svg {
        height: 1.2rem;
        width: 1.2rem;
        color: #57574c;
    }
`;

export const Main = css`
    padding: 0rem 0.8rem;
    margin: auto 0;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    position: relative;
    
`;