/** @jsxImportSource @emotion/react */
import * as s from './styles';

function RightSideBarLayout(props) {
    const trends = [
        { id: 1, name: "이세계아이돌", tweet: "600K" },
        { id: 2, name: "스텔라이브", tweet: "217K" },
        { id: 3, name: "플레이브", tweet: "108K" },
    ];

    const suggestions = [
        { id: 1, name: "아이네", username: "@ine" },
        { id: 2, name: "아야츠노 유니", username: "@ayatsunoyuni" },
        { id: 3, name: "플레이브", username: "@plave_offcial" },
    ];

    return (
        <aside css={s.sidebar}>
            <div css={s.searchWrapper}>
                <input type="text" placeholder='Search' css={s.searchInput} />
            </div>

            <div css={s.trendsBox}>
                <h3 css={s.sectionTitle}>트렌드</h3>
                {
                    trends.map((t) => (
                        <div key={t.id} css={s.trendItem}>
                            <span>{t.name}</span>
                            <small>{t.tweets} 트윗</small>
                        </div>
                    ))}
            </div>

            <div css={s.followBox}>
                <h3 css={s.sectionTitle}>팔로우 추천</h3>
                {
                    suggestions.map((user) => (
                        <div key={user.id} css={s.userItem}>
                            <div>
                                <strong>{user.name}</strong>
                                <span>{user.username}</span>
                            </div>
                            <button css={s.followButton}>팔로우</button>
                        </div>
                    ))}
            </div>
        </aside>
    );
}

export default RightSideBarLayout;