import React from 'react';
import { css } from '@emotion/react';
import { RingLoader } from "react-spinners";

const layout = css`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #22222288;
`;

function Loading({ isLoading }) {

    return (
        <div css={layout}>
            <RingLoader loading={isLoading} color="#ffffff" />
        </div>
    );
}

export default Loading;