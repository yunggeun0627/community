import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './styles.js';

function Explore(props) {
    const [query, setQuery] = useState("");

    const handleIconClick = (type) => {
        if (onAction) onAction(type);
    };

    return (
        <div css={s.layout}>
            <h2>Explore</h2>
            <input
                css={s.input}
                placeholder="Search Twitter"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />

            <div css={s.trends}>
                <h3>Trends</h3>
                <ul>
                    <li onClick={() => handleIconClick("trend1")}>#ReactJS</li>
                    <li onClick={() => handleIconClick("trend2")}>#JavaScript</li>
                    <li onClick={() => handleIconClick("trend3")}>#EPL</li>
                </ul>
            </div>

            <div>
                <button css={s.button} onClick={() => handleIconClick("refresh")}>Refresh</button>
            </div>
        </div>
    );
}

export default Explore;