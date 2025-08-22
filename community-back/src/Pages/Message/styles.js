import { css } from "@emotion/react";


export const chaeting = css`
    top: 0rem;
    left: 8.8rem;
    width: 39.2rem;
    height: 100%;
    height: calc(-3.2rem + 100vh);
    transition: top;
    position: relative;
    z-index: 700;
    margin-top: 1.6rem;
    margin-bottom: 0.8rem;
    margin-right: 0;
    box-sizing: border-box;
    border-radius: 1.6rem;
    box-shadow: #0000001a -0.3rem 0.4rem 1.4rem 0;
    overscroll-behavior: none;
    outline: none;
    overflow: hidden;
`;

export const messagetitle = css`
    display: flex;
    box-sizing: border-box;
    height: 6.4rem;
    align-items: center;
    padding: 0.8rem;
    flex-direction: row;
`;

export const deletebutton = css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 4.8rem;
    width: 4.8rem;
    margin-right: 0.4rem;
    border-radius: 1.6rem;
    box-sizing: border-box;
    transition: transform 85ms ease-out;
    perspective: 0.1rem;
    background-color: #0000001a;
    
    & > button {
        height: 100%;
        width: 100%;
        border-radius: 1.6rem;
        font-size: 100%;
        background-color: #ffffff;
        border: 0;
        padding: 0;
        appearance: button;
        cursor: pointer;
        vertical-align: middle;
    }

    &  svg {
        color: #000;
        width: 2.4rem !important;
        height: 2.4rem !important;
        font-size: 2.4rem;
        fill: currentColor;
        stroke-width: 0;
        vertical-align: middle;
    }
`;

export const Message = css`
    flex: 1 1 auto;
    min-height: 0;
    min-width: 0;
    box-shadow: inset;
    text-align: left;
    word-wrap: break-word;
    -webkit-font-smoothing: antialiased;
    color: #000;
    font-weight: 700;
    text-decoration: none;
    font-size: 2rem;
    letter-spacing: 0;
    line-height: 1.5;
`;

export const read = css`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4.8rem;
    width: 4.8rem;
    margin-right: 0;
    right: 0;
    background-color: #ffffff;
    border-radius: 1.6rem;
    perspective: 0.1rem;

    & > svg {
        color: #000;
        fill: currentColor;
        stroke-width: 0;
        vertical-align: middle;
        height: 2.4rem;
        width: 2.4rem;
    }
`;

export const MainMessage = css`
    overscroll-behavior: none;
    overflow: hidden;
    height: calc(100% - 6.4rem);
    box-sizing: border-box;
`;

export const MainContainer = css`
    transition: transform 85ms ease-out;
    width: 100%;
    border-radius: 0rem;
    box-sizing: border-box;
    cursor: pointer;
`;

export const MainContainer2 = css`
    display: flex;
    flex-direction: row;
    align-items: center;
    box-sizing: border-box;
    border-radius: 1.2rem;
    margin: 0 0.8rem 0.8rem 0.8rem;
    padding: 0.8rem 1.6rem;
    cursor: pointer;
`;

export const addButton = css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 4.8rem;
    width: 4.8rem;
    box-sizing: border-box;
    border-radius: 50%;
    margin-right: 0.8rem;
    background-color: #e60023;
    
    & > svg {
        color: #ffffff;
        fill: currentColor;
        stroke-width: 0;
        vertical-align: middle;
        height: 2rem;
        width: 2rem;
    }
    `;

export const NewMessage = css`
    -webkit-line-clamp: 1;
    text-align: left;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    max-width: 100%;
    overflow: hidden;
    word-wrap: break-word;
    -webkit-font-smoothing: antialiased;
    color: #000;
    font-weight: 700;
    text-decoration: none;
    font-size: 1.6rem;
    letter-spacing: 0;
    line-height: 1.5;
`;

export const inviteContainer = css`
    transition: transform 85ms ease-out;
    width: 100%;
    border-radius: 0rem;
    box-sizing: border-box;
    cursor: pointer;
`;

export const inviteContainer2 = css`
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    align-items: center;
    margin: 0;
    background-color: #ffffff;
    cursor: pointer;
`;

export const inviteContainer3 = css`
    display: flex;
    flex-direction: row;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    border-radius: 1.2rem;
    margin: 0 0.8rem 0.8rem 0.8rem;
    padding: 0.8rem;
    cursor: pointer;
`;

export const inviteButton = css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 4.8rem;
    width: 4.8rem;
    box-sizing: border-box;
    border-radius: 50%;
    margin: 0 0.8rem;
    background-color: #e0e0d9;

    & > svg {
        color: #000000;
        fill: currentColor;
        stroke-width: 0;
        vertical-align: middle;
        height: 2rem;
        width: 2rem;
    }
`;

export const textContainer = css`
    box-sizing: border-box;
`;

export const invite = css`
    -webkit-line-clamp: 1;
    text-align: left;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    max-width: 100%;
    overflow: hidden;
    word-wrap: break-word;
    -webkit-font-smoothing: antialiased;
    color: #000;
    font-weight: 700;
    text-decoration: none;
    font-size: 1.6rem;
    letter-spacing: 0;
    line-height: 1.5;
`;

export const invite2 = css`
    -webkit-line-clamp: 1;
    text-align: left;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    max-width: 100%;
    overflow: hidden;
    word-wrap: break-word;
    -webkit-font-smoothing: antialiased;
    color: #57574c;
    font-weight: 400;
    text-decoration: none;
    font-size: 1.6rem;
    letter-spacing: 0;
    line-height: 1.5;
`;

export const boxContainer = css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    margin-top: 4.8rem;
    box-sizing: border-box;
`;

export const boxlayout = css`
    display: flex;
    flex-direction: column;
    height: 32rem;
    width: 32rem;
    margin: 0;
`;

export const boxlayout2 = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0.6rem;
`;

export const boxlayout3 = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    margin: -0.2rem;
`;

export const img = css`
    margin: 0.2rem;
    width: 18.6rem;
    background-color: transparent;
    padding-bottom: 100%;
    position: relative;
    box-sizing: border-box;
`;

export const text = css`
    display: flex;
    flex-direction: column;
    margin: 0rem;
    -webkit-font-smoothing: antialiased;
    color: #000;
    text-align: center;
    word-wrap: break-word;
    box-sizing: border-box;
    font-size: 2rem;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 1.3;
    text-decoration: none;
`;