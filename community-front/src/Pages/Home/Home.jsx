import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './styles.js';
import { IoSearch } from 'react-icons/io5';
import { MdKeyboardArrowDown } from 'react-icons/md';

function Home(props) {
    return (
        <div css={s.container}>
            <div css={s.search}>
                <IoSearch />
                    <input type="text" />
                <div css={s.profile}>
                    <img src="default.jpg" alt="" />
                </div>
                    <div css={s.accountButton}>
                        <MdKeyboardArrowDown />
                </div>
            </div>
            <div css={s.Main}>
                
            </div>
        </div>
    );
}

export default Home;