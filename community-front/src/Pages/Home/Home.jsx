import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './styles.js';
import TweetBox from '../TweetBox/TweetBox.jsx';
import TweetCard from '../TweetCard/TweetCard.jsx';
import { reqPostTweet, reqTweets } from '../../api/tweetApi.js';
import { reqFollowing } from '../../api/followApi.js';

function Home({ onScrollToNew }) {
    const [tab, setTab] = useState("forYou");
    const [tweets, setTweets] = useState([]);
    const [serverTweets, setServerTweets] = useState([]); // 백엔드에서 받아온 트윗

    // 서버 트윗 가져오기 (tab 변경 시)
    useEffect(() => {
        const fetchTweets = async () => {
            try {
                let res;
                if (tab === "forYou") {
                    res = await reqTweets();
                } else {
                    res = await reqFollowing();
                }

                // res.data가 배열인지 체크, 아니라면 객체에서 배열 추출
                const dataArray = Array.isArray(res.data)
                    ? res.data
                    : res.data?.tweets || [];

                setServerTweets(dataArray);
            } catch (err) {
                console.error("트윗 가져오기 실패", err);
                setServerTweets([]);
            }
        };

        fetchTweets();
    }, [tab]);

    // 새 트윗 등록
    const handleNewTweet = async (tweetData) => {
        try {
            const res = await reqPostTweet(tweetData);
            // 새 트윗은 항상 위로 추가
            setTweets((prev) => [res.data, ...prev]);
            setTimeout(() => {
                if (onScrollToNew) onScrollToNew();
            }, 100);
        } catch (err) {
            console.error("트윗 등록 실패", err);
        }
    };

    const handleAction = (e) => {
        alert(`${e} 버튼 클릭!`);
    };

    // serverTweets가 배열이 아닌 경우에도 안전하게 filter
    const filteredServerTweets = Array.isArray(serverTweets)
        ? serverTweets.filter(st => !tweets.some(t => t.id === st.id))
        : [];

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

            {displayedTweets.map((tweet) => (
                <TweetCard key={tweet.id} tweet={tweet} />
            ))}
        </div>
    );
}

export default Home;