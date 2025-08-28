import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './styles.js';

function BookMark({ onAction }) {
    const bookmarks = [
        { id: 1, content: "차세돌" },
        { id: 2, content: "마세돌" }
    ];

    const handleClick = (type) => {
        if (onAction) onAction(type);
    };
    

    return (
        <div css={s.layout}>
            <h2>Bookmarks</h2>
            {bookmarks.map(b => (
                <div key={b.id} css={s.item} onClick={() => handleClick("bookmark")}>
                    {b.content}
                </div>
            ))}
        </div>
    );
}

export default BookMark;