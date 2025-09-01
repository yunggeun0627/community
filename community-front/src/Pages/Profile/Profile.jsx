import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './styles.js';

function Profile(props) {
    const tweets = [
        { id: 1, content: "My first tweet" },
        { id: 2, content: "Learning React!" },
    ];

    const handleClick = (type) => {
        if (onAction) onAction(type);
    };

    return (
        <div css={s.layout}>
            <h2>Profile</h2>
            <p><strong>@username</strong></p>
            {tweets.map(t => (
                <div key={t.id} css={s.item} onClick={() => handleClick("tweet")}>
                    {t.content}
                </div>
            ))}
        </div>
    );
}

export default Profile;