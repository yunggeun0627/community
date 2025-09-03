import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './styles.js';

function Communites(props) {
    const communities = ["이파리", "파스텔"];

    const handleClick = (type) => {
        if (onAction) onAction(type);
    };

    return (
        <div css={s.layout}>
            <h2>Communities</h2>
            {communities.map((c, i) => (
                <div key={i} css={s.item} onClick={() => handleClick("community")}>
                    {c}
                </div>
            ))}
        </div>
    );
}

export default Communites;