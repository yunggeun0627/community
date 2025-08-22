import { css } from "@emotion/react";


export const alarm = css`
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 0;
`;

export const alarmtitle = css`
    padding: 2.3rem 0;
    padding-block: 2rem;
    padding-inline: 1.6rem;
    box-sizing: border-box;

    & > h1 {
        text-align: left;
    }
`;

export const message = css`
    height: 100%;
    height: calc(100% - 8.8rem);
    width: 34.4rem;
    box-sizing: border-box;
    clear: both;
    overflow: hidden auto;
    margin: 0 0.8rem;
    padding: 0 0.8rem;
`;

export const scrollList = css`
    padding: 0;
    margin: 0;
`;

export const loadingitem = css`
    padding: 5%;
    height: 20%;
    position: relative;
    box-sizing: border-box;
`;