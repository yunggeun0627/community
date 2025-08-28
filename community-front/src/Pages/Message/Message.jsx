import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './styles.js';


function Message(props) {
    const messages = [
        {id: 1, user: "아이네", content: "이세계아돌 아이네 입니다~"},
        {id: 2, user: "징버거", content: "안녕하세요~ 둘째 징버거입니다."}
    ]
    return (
        <div css={s.layout}>
            <h2>Messages</h2>
            {messages.map(m => (
                <div key={m.id} css={s.item} onClick={() => handleClick("message")}>
                    <strong>{m.user}</strong>: {m.content}
                </div>
            ))}

        </div>
    );
}

export default Message;