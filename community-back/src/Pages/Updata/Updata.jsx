import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './styles.js';

function Updata(props) {
    return (
        <div css={s.alarm}>
                    <div css={s.alarmtitle}>
                        <h1>업데이트</h1>
                    <div css={s.message}>
                        <h1>읽음</h1>
                    <ul css={s.scrollList}>
                        <li></li>
                    </ul>
                    <div css={s.loadingitem}></div>
                </div>
            </div>
        </div>
    );
}

export default Updata;