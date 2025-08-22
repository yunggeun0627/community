import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './styles.js';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import { TfiPlus } from "react-icons/tfi";
import { GrUploadOption } from "react-icons/gr";

function Made(props) {
    return (
        <>
            <div css={s.Pinhade}>
                <div css={s.Pinhade2}></div>
                <div css={s.Pinhade3}>
                    <div css={s.rightbar}>
                        <div css={s.rightbox}>
                            <div css={s.rightbox2}>
                                <button css={s.openbutton}>
                                    <div css={s.openbutton2}>
                                        <div css={s.openbutton3}>
                                            <AiOutlineDoubleRight />
                                        </div>
                                    </div>
                                </button>
                            </div>
                            <div css={s.rightbox2}>
                                <button css={s.openbutton}>
                                    <div css={s.openbutton2}>
                                        <div css={s.openbutton3}>
                                            <TfiPlus />
                                        </div>
                                    </div>
                                </button>
                            </div>
                            <hr css={s.underscore}/>
                        </div>
                    </div>
                    <div css={s.PinMain}>
                        <div css={s.PinMain2}>
                            <div css={s.Pinheder}>
                                <div>
                                    <h1 css={s.pinhedername2}>핀 만들기</h1>
                                </div>
                                <div css={s.pinhedername3}></div>
                            </div>
                            <div css={s.pinMainContainer}>
                                <div css={s.pinMade}>
                                    <div css={s.pinMade2}>
                                        <div css={s.pinMade3}>
                                            <div css={s.pinMade4}>
                                                <div css={s.PinMain5}>
                                                    <div css={s.uploadimg}>
                                                        <GrUploadOption />
                                                    </div>
                                                    <div css={s.pintext}>
                                                        <div css={s.uploadtext}>
                                                            파일업로드
                                                        </div>
                                                    </div>
                                                    <div css={s.uploadtext2}>
                                                        <div css={s.uploadtext3}>
                                                            는 20MB 미만의 고화질 .jpg 파일 또는 200MB미만의
                                                            .mp4 파일 사용을 권장
                                                        </div>
                                                    </div>
                                                </div>
                                                    <input type="text" />
                                            </div>
                                        </div>
                                    </div>
                                    <div css={s.pinsavebutton}>
                                        <hr css={s.underbar} />
                                        <div css={s.pinsavebutton2}>
                                            <button css={s.pinsavebutton3}>
                                                <div css={s.pinsavebutton4}>
                                                    <div css={s.pinsavebutton5}>
                                                        URL 저장
                                                    </div>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div css={s.pinleft}>
                                    <div css={s.pinleft2}>
                                        <div css={s.pinleft3}>
                                            <div>
                                                <div css={s.pintitle}>
                                                    <label css={s.pintitle2} htmlFor="">
                                                        <div css={s.pintitle3}>제목</div>
                                                    </label>
                                                    <input type="text" placeholder='제목추가'/>
                                                </div>
                                                <div css={s.pinexplanation}>
                                                    <div css={s.pinexplanation2}>
                                                        <div css={s.pinexplanation3}>
                                                            설명
                                                        </div>
                                                        <div css={s.pinexplanation4}>
                                                            <div css={s.pinexplanation5}>
                                                                <div css={s.pinexplanation6}>
                                                                    <div css={s.pinexplanation7}>
                                                                        <div css={s.pinexplanation8}>
                                                                            <div css={s.pinexplanation9}>
                                                                                <div css={s.pinexplanation10}>
                                                                                    <div css={s.pinexplanation11}>
                                                                                        자세한 설명을 추가
                                                                                    </div>
                                                                                    <div css={s.pintion}>
                                                                                        <div css={s.pintion2}>
                                                                                            <span>
                                                                                                <br />
                                                                                            </span>
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
                                                <div css={s.pintitle}>
                                                    
                                                </div>
                                                <div css={s.pintitle}>
                                                    
                                                </div>
                                                <div css={s.pintitle}>
                                                    <label css={s.pintitle2} htmlFor="">
                                                        <div css={s.pintitle3}>태그 주제(0)개</div>
                                                    </label>
                                                    <input type="text" placeholder='태그 검색'/>
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
        </>
    );
}

export default Made;