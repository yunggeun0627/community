import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './styles.js';
import { reqFollowUser, reqRecommendations, reqUnfollowUser } from '../../api/followApi.js';

function FollowBox(props) {
    const { onFollowChange } = props;

    const [users, setUsers] = useState([]);

    // 추천 유저 불러오기
    useEffect(() => {
        const fetchRecommendations = async () => {
            try {
                const res = await reqRecommendations();
                const dataArray = Array.isArray(res.data.body)
                    ? res.data.body
                    : res.data.body
                        ? [res.data.body]
                        : [];

                setUsers(dataArray.map(user => ({ ...user, isFollowed: false })));
            } catch (err) {
                console.error("추천 유저 가져오기 실패:", err);
            }
        };

        fetchRecommendations();
    }, []);

    const handleFollow = async (id) => {
        setUsers(prev =>
            prev.map(user =>
                user.id === id ? { ...user, isFollowed: !user.isFollowed } : user
            )
        );

        const targetUser = users.find(u => u.id === id);
        const newFollowState = !targetUser.isFollowed;

        // 부모 콜백 실행
        if (onFollowChange) {
            onFollowChange(id, newFollowState);
        }

        try {
            if (newFollowState) {
                await reqFollowUser(id);
            } else {
                await reqUnfollowUser(id);
            }
        } catch (err) {
            console.error("팔로우 API 실패:", err);
        }
    };

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