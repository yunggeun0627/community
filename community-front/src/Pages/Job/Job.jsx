import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './styles.js';

function Job({ onAction }) {
    const jobs = [
        { id: 1, title: "parable entertainment" },
        { id: 2, title: "waktaverse" },
    ];

    const handleClick = (type) => {
        if (onAction) onAction(type);
    }

    return (
        <div css={s.layout}>
            <h2>jobs</h2>
            {jobs.map(j => (
                <div key={j.id} css={s.item} onClick={() => handleClick("job")}>
                    {j.title}
                </div>
            ))}
        </div>
    );
}

export default Job;