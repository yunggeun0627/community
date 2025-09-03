import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './styles.js';
import TweetBox from '../TweetBox/TweetBox.jsx';
import TweetCard from '../TweetCard/TweetCard.jsx';
import { reqPostTweet, reqTweets } from '../../api/tweetApi.js';
import { reqFollowing } from '../../api/followApi.js';

function Home(props) {
    const [tab, setTab] = useState("forYou");
    const [tweets, setTweets] = useState([]);
    const [serverTweets, setServerTweets] = useState([]); // 백엔드에서 받아온 트윗

    const onScrollToNew = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        const fetchTweets = async () => {
            try {
                let res;
                if (tab === "forYou") {
                    res = await reqTweets();
                } else {
                    res = await reqFollowing();
                }

                const dataArray = Array.isArray(res.data.body)
                    ? res.data.body
                    : res.data.body
                        ? [res.data.body]
                        : [];

                const normalized = dataArray.map((t) => ({
                    ...t,
                    tweetId: t.tweetId ?? t.tweet_id,
                }));

                setServerTweets(normalized);
            } catch (err) {
                console.error("트윗 가져오기 실패", err);
                setServerTweets([]);
            }
        };

        fetchTweets();
    }, [tab]);

    const handleNewTweet = async (tweetData) => {
        if (!tweetData) return;
        try {
            const res = await reqPostTweet(tweetData);
            const body = res.data.body;

            const newTweet = {
                ...body,
                tweetId: body.tweetId ?? body.tweet_id,
            };

            setTweets((prev) => [newTweet, ...prev]);

            if (onScrollToNew) onScrollToNew();
        } catch (err) {
            console.error("트윗 등록 실패", err);
        }
    };

    const handleAction = (e) => {
        alert(`${e} 버튼 클릭!`);
    };

    const filteredServerTweets = serverTweets.filter(
        (st) => !tweets.some((t) => t.tweetId === st.tweetId)
    );

    const displayedTweets = [...tweets, ...filteredServerTweets];

    return (
        <div css={s.layout}>
            <div css={s.tabContainer}>
                <button
                    css={tab === "forYou" ? s.activeTab : s.tab}
                    onClick={() => setTab("forYou")}
                >
                    For You
                </button>
                <button
                    css={tab === "following" ? s.activeTab : s.tab}
                    onClick={() => setTab("following")}
                >
                    Following
                </button>
            </div>

            <TweetBox onTweet={handleNewTweet} onAction={handleAction} />

            {displayedTweets.map((tweet, idx) => (
                <TweetCard
                    key={tweet.tweetId ? `tweet-${tweet.tweetId}` : `fallback-${idx}`}
                    tweet={tweet} // TweetCard 내부에서 poll, image, emoji 처리
                />
            ))}
        </div>
    );
}

export default Home;