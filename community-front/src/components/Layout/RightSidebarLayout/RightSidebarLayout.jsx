/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import * as s from './styles';

function RightSideBarLayout(props) {
    const { suggestions = [] } = props;
    const [followedUsers, setFollowedUsers] = useState([]);
    const [recommendations, setRecommendations] = useState(
        suggestions.length
            ? suggestions
            : [
                { id: 1, name: "아이네", username: "@ine" },
                { id: 2, name: "아야츠노 유니", username: "@ayatsunoyuni" },
                { id: 3, name: "플레이브", username: "@plave_offcial" },
            ]
    );

    const trends = [
        { id: 1, name: "이세계아이돌", tweet: "600K" },
        { id: 2, name: "스텔라이브", tweet: "217K" },
        { id: 3, name: "플레이브", tweet: "108K" },
    ];


    const handleFollowToggle = (user) => {
        const isFollowing = followedUsers.find(u => u.id === user.id);

        if (isFollowing) {
            // 언팔로우
            setFollowedUsers(prev => prev.filter(u => u.id !== user.id));
            setRecommendations(prev => [...prev, user]);
        } else {
            // 팔로우
            setFollowedUsers(prev => [...prev, user]);
            setRecommendations(prev => prev.filter(u => u.id !== user.id));
        }
    };

    return (
        <aside css={s.sidebar}>
            {/* 검색창 */}
            <div css={s.searchWrapper}>
                <input type="text" placeholder="Search" css={s.searchInput} />
            </div>

            {/* 트렌드 */}
            <div css={s.trendsBox}>
                <h3 css={s.sectionTitle}>트렌드</h3>
                {trends.map((t) => (
                    <div key={t.id} css={s.treadItem}>
                        <span>{t.name}</span>
                        <small>{t.tweet} 트윗</small>
                    </div>
                ))}
            </div>

            {/* 추천 팔로우 */}
            {recommendations.length > 0 && (
                <div css={s.followBox}>
                    <h3 css={s.sectionTitle}>팔로우 추천</h3>
                    {recommendations.map(user => {
                        const isFollowed = followedUsers.find(u => u.id === user.id);
                        return (
                            <div key={user.id} css={s.userItem}>
                                <div>
                                    <strong>{user.name}</strong>
                                    <span>{user.username}</span>
                                </div>
                                <button
                                    css={s.followButton(!!isFollowed)}
                                    onClick={() => handleFollowToggle(user)}
                                >
                                    {isFollowed ? "팔로잉" : "팔로우"}
                                </button>
                            </div>
                        );
                    })}
                </div>
            )}

            {/* 팔로잉 목록 */}
            {followedUsers.length > 0 && (
                <div css={s.followBox}>
                    <h3 css={s.sectionTitle}>팔로잉</h3>
                    {followedUsers.map(user => (
                        <div key={user.id} css={s.userItem}>
                            <div>
                                <strong>{user.name}</strong>
                                <span>{user.username}</span>
                            </div>
                            <button
                                css={s.followButton(true)}
                                onClick={() => handleFollowToggle(user)}
                            >
                                팔로잉
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </aside>
    );
}

export default RightSideBarLayout;