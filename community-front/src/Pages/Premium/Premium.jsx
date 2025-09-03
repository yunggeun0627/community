import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './styles.js';

function Premium(props) {
    const handleClick = (type) => {
        if (onAction) onAction(type);
    };

    return (
        <div css={s.layout}>
            <h2>Premium</h2>
            <p>Get Twitter Blue and enjoy premium features!</p>
            <button css={s.button} onClick={() => handleClick("subscribe")}>Subscribe</button>
        </div>
    );
}

export default Premium;