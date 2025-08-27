import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './styles.js';
import LeftSideBarLayout from '../LeftSidebarLayout/LeftSidebarLayout.jsx';



function MainLayout({children}) {
    return (
        <div css={s.layout}>
            <LeftSideBarLayout />
            <div css={s.container}>
                {children}
            </div>
        </div>
    );
}

export default MainLayout;