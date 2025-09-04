import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './styles.js';

function AuthLayout({children}) {
    return (
        <div css={s.layout}>
            <div css={s.container}>
                <h1 css={s.title}>twitter</h1>
                {children}
            </div>
        </div>
    );
}

export default AuthLayout;