import { css } from "@emotion/react";

export const Pinhade = css`
    margin: 0;
    display: flex;
    flex-direction: column;
`;

export const Pinhade2 = css`
    width: 75%;
    z-index: 3;
    justify-content: center;
    align-items: center;
    position: fixed;
    margin-top: 1.2rem;
    box-sizing: border-box;
`;

export const Pinhade3 = css`
    display: flex;
    flex-direction: row;
    margin: 0;
    width: 100%;
    height: calc(-8rem + 100vh);
`;

export const rightbar = css`
    top: 8rem;
    border-width: 0.1rem 0.1rem 0;
    border-color: #d1d1c7;
    right: 0;
    height: 95.3rem;
    z-index: 2;
    position: fixed;
    display: block;
    background-color: #fff;
    border-style: solid;
    box-sizing: border-box;
`;

export const rightbox = css`
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 0;
    box-sizing: border-box;
`;

export const rightbox2 = css`
    transform: scaleX(-1);
    padding: 1.6rem;
    box-sizing: border-box;
`;

export const openbutton = css`
    background-color: #ffffff00;
    border: 0;
    padding: 0;
    appearance: button;
    font-size: 100%;
    margin: 0;
    vertical-align: middle;
    cursor: pointer;
`;

export const openbutton2 = css`
    transition: transform 85ms ease-out;
    background-color: #ffffff00;
    border: 0;
    padding: 0;
    cursor: pointer;
`;

export const openbutton3 = css`
    display: flex;
    height: 4.8rem;
    width: 4.8rem;
    border-radius: 1.6rem;
    align-items: center;
    justify-content: center;
    perspective: 0.1rem;
    background-color: #ffffff00;
    cursor: pointer;

    & > svg {
        color: #000;
        fill: currentColor;
        stroke-width: 0;
        vertical-align: middle;
        height: 2.4rem;
        width: 2.4rem;
    }
`;

export const underscore = css`
    display: block;
    border-top: 1px solid #d1d1c7;
    margin: 0px;
    border-bottom: none;
    border-left: none;
    border-right: none;
`;

export const PinMain = css`
    display: flex;
    flex: 1 1 auto;
    flex-direction: row;
    margin-left: 0;
    margin-right: 8rem;
    min-height: 0;
    min-width: 0;
    overflow-x: auto;
    box-sizing: border-box;
`;

export const PinMain2 = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: 3.2rem;
    background-color: #fff;
    box-sizing: border-box;
`;

export const Pinheder = css`
    border-width: 0.1rem 0;
    padding-left: 1.6rem;
    border-color: #d1d1c7;
    height: 8.1rem;
    width: 100%;
    z-index: 1;
    justify-content: space-between;
    align-items: center;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-style: solid;
    box-sizing: border-box;
`;

export const pinhedername2 = css`
    text-align: left;
    -webkit-font-smoothing: antialiased;
    color: #000;
    word-wrap: break-word;
    font-size: 2rem;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 1.2;
    text-decoration: none;
`;

export const pinhedername3 = css`
    height: 100%;
    margin-right: 0;
    align-items: center;
    padding: 0 1.2rem;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
`;

export const pinMainContainer = css`
    display: flex;
    flex-direction: row;
    border-top: none;
    height: 100%;
    width: 100%;
    flex: 1 1 auto;
    min-height: 0;
    min-width: 0;
    margin: 0 auto;
    box-sizing: border-box;
`;

export const pinMade = css`
    justify-content: center;
    margin: 2.4rem;
    display: flex;
    flex-direction: row;
    display: block;
`;

export const pinMade2 = css`
    height: 57.4rem;
    width: 37.5rem;
    align-items: center;
    padding: 1.6rem 0;
    margin-top: 1.6rem;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
`;

export const pinMade3 = css`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 1.6rem 0;
    box-sizing: border-box;
`;

export const pinMade4 = css`
    background-color: #ffffff;
    box-shadow: none;
    border-radius: 3.2rem;
    height: 100%;
    width: 100%;
    margin: 0;
    display: flex;
    flex-direction: row;
    position: relative;
    box-sizing: border-box;

    & > input {
        top: 0;
        left: 0;
        opacity: 0;
        height: 100%;
        font-size: 0;
        width: 100%;
        margin: 0;
        position: absolute;
        vertical-align: middle;
        cursor: pointer;
    }
`;

export const PinMain5 = css`
    display: flex;
    position: relative;
    pointer-events: none;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    border: 0.2rem dashed #dadada;
    border-radius: 3.2rem;
    flex-direction: column;
    background-color: #e0e0d9;
    box-sizing: border-box;
`;

export const uploadimg = css`
    padding: 0.8rem 0;
    box-sizing: border-box;

    & > svg {
        stroke-width: 0;
        vertical-align: middle;
        height: 3.2rem;
        width: 3.2rem;
    }
`;

export const pintext = css`
    max-width: 22rem;
    padding: 0.8rem 0;
    box-sizing: border-box;
`;

export const uploadtext = css`
    word-wrap: break-word;
    text-align: left;
    -webkit-font-smoothing: antialiased;
    color: #000;
    font-size: 1.6rem;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 1.5;
    text-decoration: none;
`;

export const uploadtext2 = css`
    bottom: 0;
    position: absolute;
    padding: 3.2rem 2.4rem;
    box-sizing: border-box;
`;

export const uploadtext3 = css`
    text-align: center;
    word-wrap: break-word;
    -webkit-font-smoothing: antialiased;
    color: #000;
    font-size: 1.4rem;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 1.5;
    text-decoration: none;
`;

export const pinsavebutton = css`
    width: 100%;
    margin-top: 2.4rem;
    box-sizing: border-box;
`;

export const underbar = css`
    margin: 0;
    border-color: #e2c2b6;
    border-bottom: 0;
    border-left: 0;
    border-style: solid;
    border-top: 0.1rem solid #e2c2b6;
`;

export const pinsavebutton2 = css`
    margin-top: 2.4rem;
    box-sizing: border-box;
`;

export const pinsavebutton3 = css`
    transition: transform 85ms ease-out;
    background-color: #e0e0d9;
    border-radius: 1.2rem;
    min-height: 3.6rem;
    padding: 0.4rem 1rem;
    width: 100%;
    border: 0.2rem solid #ffffff00;
    box-sizing: border-box;
    height: fit-content;
    appearance: button;
    font-size: 100%;
    margin: 0;
    vertical-align: middle;
    cursor: pointer;
`;

export const pinsavebutton4 = css`
    width: 100%;
    /* text-wrap: balance; */
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const pinsavebutton5 = css`
    text-align: center;
    -webkit-font-smoothing: antialiased;
    color: #000;
    font-size: 1.4rem;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 1.3;
    text-decoration: none;
`;

export const pinleft = css`
    margin: 2.4rem;
    position: relative;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
`;

export const pinleft2 = css`
    margin-top: 2.4rem;
    box-sizing: border-box;
`;

export const pinleft3 = css`
    width: 58.4rem;
    position: relative;
    padding: 0 0.4rem;
    margin: 0.4rem 0;
    flex-direction: column;
    display: flex;
    box-sizing: border-box;
`;

export const pintitle = css`
    width: 100%;
    max-width: 100%;
    margin-bottom: 2.4rem;
    box-sizing: border-box;
    position: relative;
    isolation: isolate;

    & > input {
        padding: 3.7rem 1.2rem 1.3em 1.6rem;
        -webkit-box-orient: vertical;
        display: -webkit-box;
        max-width: 100%;
        text-overflow: ellipsis;
        white-space: nowrap;
        border-radius: 1.6rem;
        min-height: 4.8rem;
        box-sizing: border-box;
        width: 100%;
        position: relative;
        border: 0.1rem solid #c2c2b6;
        background-color: #d1d1c7;
        color: #949486;
        font-weight: 400;
        text-decoration: none;
        font-size: 1.6rem;
        letter-spacing: 0;
        line-height: 1.4;
        margin: 0;
        vertical-align: middle;
    }
`;

export const pintitle2 = css`
    left: 1.7rem;
    right: 3.7rem;
    top: 1.5rem;
    padding: 0;
    position: absolute;
    z-index: 1;
`;

export const pintitle3 = css`
    -webkit-line-clamp: 1;
    text-align: left;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    max-width: 100%;
    overflow: hidden;
    word-wrap: break-word;
    line-height: 1.4;
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: 0;
    text-decoration: none;
    -webkit-font-smoothing: antialiased;
    color: #949486;
`;

export const pinexplanation = css`
    margin-bottom: 1.6rem;
    min-height: 0;
    min-width: 0;
    margin: -0.4rem;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
`;

export const pinexplanation2 = css`
    margin: 0.4rem;
    box-sizing: border-box;
`;

export const pinexplanation3 = css`
    text-align: left;
    word-wrap: break-word;
    -webkit-font-smoothing: antialiased;
    color: #000;
    line-height: 1.5;
    font-size: 1.2rem;
    font-weight: 400;
    letter-spacing: 0;
    text-decoration: none;
`;

export const pinexplanation4 = css`
    margin: 0.4rem;
    transition: transform 85ms ease-out;
    height: 100%;
    width: 100%;
    border-radius: 0;
`;

export const pinexplanation5 = css`
    background-color: #d1d1c7;
    border-color: #c2c2b6;
    min-height: 10.4rem;
    border-radius: 1.6rem;
    padding: 1.6rem 0;
    border-width: 0.1rem;
    border-style: solid;
    box-sizing: border-box;
`;

export const pinexplanation6 = css`
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    overflow: auto;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
`;

export const pinexplanation7 = css`
    transition: transform 85ms ease-out;
    width: 100%;
    height: 100%;
    max-height: 14.6rem;
    margin: 0 1.6rem;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    display: flex;
    box-sizing: border-box;
    border-radius: 0;
`;

export const pinexplanation8 = css`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    color: black;
    flex: 1 1 auto;
    margin: 0;
`;

export const pinexplanation9 = css`
    font-size: 1.6rem;
    position: relative;
    width: 100%;
    height: 100%;
    text-align: initial;
    `;

export const pinexplanation10 = css`
    left: 0;
    text-align:left;
    color: #767676;
    font-weight: 400;
    pointer-events: none;
    position: absolute;
    z-index: 0 !important;
`;

export const pinexplanation11 = css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap !important;
`;

export const pintion = css`
    position: relative;
    height: 100%;
    text-align: initial;
    outline: none;
    user-select: text;
    white-space: pre-wrap;
    overflow-wrap: break-word;
`;

// export const pintion2 = css`
//     text-align: left;
//     position: relative;
//     white-space: pre-wrap;
// `;