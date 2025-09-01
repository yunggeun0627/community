import React, { useCallback } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './styles.js';
import LeftSideBarLayout from '../LeftSidebarLayout/LeftSidebarLayout.jsx';
import RightSideBarLayout from '../RightSidebarLayout/RightSidebarLayout.jsx';

function MainLayout({ children }) {
    // window 스크롤 함수
    const scrollToNewContent = useCallback(() => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    }, []);

    return (
        <div css={s.layout}>
            <LeftSideBarLayout />
            <div css={s.container}>
                {React.cloneElement(children, {
                    onScrollToNew: scrollToNewContent
                })}
            </div>
            <RightSideBarLayout />
        </div>
    );
}

export default MainLayout;