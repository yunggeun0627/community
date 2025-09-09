import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './styles.js';
import TweetBox from '../TweetBox/TweetBox.jsx';
import TweetCard from '../TweetCard/TweetCard.jsx';
import { reqDeleteTweet, reqPostTweet, reqTweets } from '../../api/tweetApi.js';
import { reqFollowing } from '../../api/followApi.js';
import { FaPenSquare } from 'react-icons/fa';

function Home({ userProfile }) {
    const [tab, setTab] = useState("forYou");
    const [tweets, setTweets] = useState([]);
    const [serverTweets, setServerTweets] = useState([]);

    const onScrollToNew = () => window.scrollTo({ top: 0, behavior: "smooth" });

    useEffect(() => {
        const fetchTweets = async () => {
            try {
                const res = tab === "forYou" ? await reqTweets() : await reqFollowing();
                const body = res.data.body ?? res.data ?? [];
                const dataArray = Array.isArray(body) ? body : body ? [body] : [];

                const normalized = dataArray.map((t) => ({
                    ...t,
                    tweetId: t.tweetId ?? t.tweet_id,
                    imageUrl: t.imageUrl ?? t.image_url,
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
            const tweetObj = res.data.body ?? res.data;
            if (!tweetObj) throw new Error("트윗 데이터가 없습니다.");

            const newTweet = {
                ...tweetObj,
                tweetId: tweetObj.tweetId ?? tweetObj.tweet_id,
                imageUrl: tweetObj.imageUrl ?? tweetObj.image_url,
            };
            setTweets((prev) => [newTweet, ...prev]);
            onScrollToNew();
        } catch (err) {
            console.error("트윗 등록 실패:", err);
        }
    };

    const handleDeleteTweet = async (tweetId) => {
        try {
            await reqDeleteTweet(tweetId);
            setTweets((prev) => prev.filter((t) => t.tweetId !== tweetId));
            setServerTweets((prev) => prev.filter((t) => t.tweetId !== tweetId));
        } catch (err) {
            console.error("트윗 삭제 실패", err);
        }
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

            <TweetBox onTweet={handleNewTweet} />

            {displayedTweets.map((tweet, idx) => (
                <TweetCard
                    key={tweet.tweetId ? `tweet-${tweet.tweetId}` : `fallback-${idx}`}
                    tweet={tweet}
                    userProfile={userProfile} // 유저 정보 전달
                    onDelete={handleDeleteTweet}
                />
            ))}
        </div>
    );
}

export default Home;