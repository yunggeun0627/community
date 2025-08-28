import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './styles.js';
import LeftSideBarLayout from '../LeftSidebarLayout/LeftSidebarLayout.jsx';
import RightSideBarLayout from '../RightSidebarLayout/RightSidebarLayout.jsx';

function MainLayout({children}) {
    return (
        <div css={s.layout}>
            <LeftSideBarLayout />
            <div css={s.container}>
                {children}
            </div>
            <RightSideBarLayout />
        </div>
    );
}

export default MainLayout;