import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './styles.js';
import { BsThreeDots } from "react-icons/bs";
import { HiXMark } from "react-icons/hi2";
import { FaRegPenToSquare } from "react-icons/fa6";
import { AiOutlineUserAdd } from "react-icons/ai";

function Message(props) {
    return (
        <div css={s.chaeting}>
            <div css={s.messagetitle}>
                <div css={s.deletebutton}>
                    <button aria-label='닫기'>
                        <HiXMark />
                    </button>
                </div>
                <div css={s.Message}>
                    메세지
                </div>
                <div css={s.read}>
                    <BsThreeDots />
                </div>
            </div>
            <div css={s.MainMessage}>
                <div css={s.MainContainer}>
                    <div css={s.MainContainer2}>
                        <div css={s.addButton}>
                            <FaRegPenToSquare />
                        </div>
                        <div css={s.NewMessage}>새 메세지</div>
                    </div>  
                </div>
                <div css={s.inviteContainer}>
                    <div css={s.inviteContainer2}>
                        <div css={s.inviteContainer3}>
                            <div css={s.inviteButton}>
                                <AiOutlineUserAdd />
                            </div>
                            <div css={s.textContainer}>
                                <div css={s.invite}>친구 초대하기</div>
                                <div css={s.invite2}>연결하여 채팅을 시작하세요</div>
                            </div>
                        </div>
                    </div>  
                </div>
                <div css={s.boxContainer}>
                    <div css={s.boxlayout}>
                        <div css={s.boxlayout2}>
                            <div css={s.boxlayout3}>
                                <div css={s.img}>
                                    <img src="" alt="" />
                                </div>
                                <div css={s.text}>
                                    업데이트는 핀과 보드의 활동을
                                    보여주고 탐색할 주제에 대한 팁을 제공
                                    합니다. 곧 업데이트될 예정입니다.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Message;