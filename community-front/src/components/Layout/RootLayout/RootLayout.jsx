import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './styles.js';

function RootLayout({ children }) {
    return (
        <div css={s.layout}>
            {children}
        </div>
    );
}

export default RootLayout;