import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './styles.js';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { IoSearch } from 'react-icons/io5';

function Compass(props) {

    return (
        <div css={s.pinmain}>
            <div css={s.pinmain2}>
                <div css={s.pinmain3}>
                    <div css={s.pinmainheader}>
                        <div css={s.pinmainheader2}></div>
                        <h1 css={s.pinmainheader3}>최고의 아이디어 탐색하기</h1>
                    </div>
                    <div css={s.articies}>
                        <div css={s.articies2}>
                            <div css={s.articies3}>
                                <div css={s.imgbox}>
                                    <div css={s.imgbox2}>
                                        <div css={s.imgbox3}>
                                            <div css={s.imgbox4}>
                                                    <img src="https://i.pinimg.com/736x/96/28/73/962873917b5fd2292ed00a8be020ae88.jpg" alt="" />
                                                <div css={s.imgbox5}>
                                                    <div css={s.imgbox6}>
                                                        <div css={s.imgbox7}>
                                                            <div css={s.textart}>
                                                                <div css={s.textart2}>보태니컬 아트🌸</div>
                                                            </div>
                                                            <div css={s.textart3}>
                                                                <h2 css={s.textart4}>꽃과 식물을 이용한DIY</h2>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div css={s.pinimgbox}>
                                    <div css={s.pinimgbox2}>
                                        <div css={s.pinimgbox3}>
                                            <div css={s.pinimgbox4}>
                                                    <img src="https://i.pinimg.com/736x/a1/50/d0/a150d011368b574aedb0ded2c11dbdc1.jpg" alt="" />
                                                <div css={s.pinimgbox5}>
                                                    <div css={s.pinimgbox6}>
                                                        <div css={s.pinimgbox7}>
                                                            <div css={s.pintextart}>
                                                                <div css={s.pintextart2}>A+아이디어</div>
                                                            </div>
                                                            <div css={s.pintextart3}>
                                                                <h2 css={s.pintextart4}>대학생가방스타일아이디어</h2>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Compass;