import React, { useCallback, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './styles.js';
import LeftSideBarLayout from '../LeftSidebarLayout/LeftSidebarLayout.jsx';
import RightSideBarLayout from '../RightSidebarLayout/RightSidebarLayout.jsx';

function MainLayout({ children, userProfile, onProfileChange }) {
    const [showPostBox, setShowPostBox] = useState(false);

    // window 스크롤 함수
    const scrollToNewContent = useCallback(() => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    }, []);

    return (
        <div css={s.layout}>
            <LeftSideBarLayout
                userProfile={userProfile}
                onProfileChange={onProfileChange}
                setShowPostBox={setShowPostBox}
            />

            <div css={s.container}>
                {React.isValidElement(children) &&
                    React.cloneElement(children, {
                        showPostBox,
                        setShowPostBox,
                        onScrollToNew: scrollToNewContent,
                    })}
            </div>

            <RightSideBarLayout />
        </div>
    );
}

export default MainLayout;