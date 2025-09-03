import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './styles.js';
import { FaAt, FaHeart, FaRetweet } from 'react-icons/fa';

function Notification(props) {
    const notifications = [
        { id: 1, user: "아이네", type: "like", content: "liked your tweet" },
        { id: 2, user: "징버거", type: "retweet", content: "retweeted your tweet" },
        { id: 3, user: "릴파", type: "mention", content: "mentioned you" },
    ];

    const handleIconClick = (type) => {
        if (onAction) onAction(type);
    };

    const getIcon = (type) => {
        switch (type) {
            case "like": return <FaHeart css={s.icon} />;
            case "retweet": return <FaRetweet css={s.icon} />;
            case "mention": return <FaAt css={s.icon} />;
            default: return null;
        }
    };

    return (
        <div css={s.layout}>
            <h2>Notifications</h2>
            {notifications.map(n => (
                <div key={n.id} css={s.item} onClick={() => handleIconClick(n.type)}>
                    {getIcon(n.type)}
                    <span><strong>{n.user}</strong> {n.content}</span>
                </div>
            ))}
        </div>
    );
}

export default Notification;