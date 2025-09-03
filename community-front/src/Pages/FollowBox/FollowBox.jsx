import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './styles.js';

function FollowBox(props) {
    const [users, setUsers] = useState(
        suggestions.map(user => ({ ...user, isFollowed: false }))
    );

    const handleFollow = (id) => {
        setUsers(prev =>
            prev.map(user =>
                user.id === id ? { ...user, isFollowed: !user.isFollowed } : user
            )
        );
    };

    useEffect(() => {
        users.forEach(user => {
            if (onFollowChange) onFollowChange(user.id, user.isFollowed);
        });
    }, [users]);

    return (
        <div css={s.followBox}>
            <h3 css={s.sectionTitle}>팔로우 추천</h3>
            {users.map(user => (
                <div key={user.id} css={s.userItem}>
                    <div>
                        <strong>{user.name}</strong>
                        <span>{user.username}</span>
                    </div>
                    <button
                        css={s.followButton(user.isFollowed)}
                        onClick={() => handleFollow(user.id)}
                    >
                        {user.isFollowed ? "팔로잉" : "팔로우"}
                    </button>
                </div>
            ))}
        </div>
    );
}

export default FollowBox;