import { css } from "@emotion/react";

export const textFieldContainer = css`
    margin-bottom: 1rem;
    width: 100%;

    & .MuiInputLabel-root, 
    & .MuiInputBase-input, 
    & .MuiOutlinedInput-notchedOutline {
        font-size: 1.4rem;
    }
`;

export const submitButtonContainer = css`
    width: 100%;

    & .MuiButton-root {
        font-size: 1.4rem;
    }
`;

export const textFieldHelp = css`
    box-sizing: border-box;
    margin: 0;
    margin-top: 0.2rem;
    padding: 0 1rem;
    color: #e00000;
    text-align: left;
`;