import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './styles.js';

function More(props) {
    const items = ["Settings", "Help Center", "Log out"];

    const handleClick = (type) => {
        if (onAction) onAction(type);
    };

    return (
        <div css={s.layout}>
            <h2>More</h2>
            {items.map((i, idx) => (
                <div key={idx} css={s.item} onClick={() => handleClick(i)}>{i}</div>
            ))}
        </div>
    );
    }

export default More;