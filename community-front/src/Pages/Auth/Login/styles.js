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