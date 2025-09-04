import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './styles.js';
import TweetBox from '../TweetBox/TweetBox.jsx';
import TweetCard from '../TweetCard/TweetCard.jsx';
import { reqDeleteTweet, reqPostTweet, reqTweets } from '../../api/tweetApi.js';
import { reqFollowing } from '../../api/followApi.js';
import { FaPenSquare } from 'react-icons/fa';

function Home(props) {
    const [tab, setTab] = useState("forYou");
    const [tweets, setTweets] = useState([]);
    const [serverTweets, setServerTweets] = useState([]); // 백엔드에서 받아온 트윗
    const [showPostBox, setShowPostBox] = useState(false);

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
            setShowPostBox(false); // 제출 후 창 닫기
        } catch (err) {
            console.error("트윗 등록 실패", err);
        }
    };

    const handleAction = (e) => {
        alert(`${e} 버튼 클릭!`);
    };

    // 🔥 삭제 핸들러 추가
    const handleDeleteTweet = async (tweetId) => {
        try {
            await reqDeleteTweet(tweetId);

            // 프론트 상태에서도 삭제
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

            <TweetBox onTweet={handleNewTweet} onAction={handleAction} />

            {/* 🔥 게시물 작성창 토글 */}
            {showPostBox && (
                <div css={s.postBox}>
                    <textarea
                        css={s.postTextarea}
                        placeholder="What's happening?"
                    />
                    <div css={s.postBoxActions}>
                        <button
                            css={s.submitPostButton}
                            onClick={() => {
                                handleNewTweet(document.querySelector('textarea').value);
                                setShowPostBox(false);
                            }}
                        >
                            Post
                        </button>
                        <button
                            css={s.cancelPostButton}
                            onClick={() => setShowPostBox(false)}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}

            {displayedTweets.map((tweet, idx) => (
                <TweetCard
                    key={tweet.tweetId ? `tweet-${tweet.tweetId}` : `fallback-${idx}`}
                    tweet={tweet}
                    onDelete={handleDeleteTweet}
                />
            ))}
        </div>
    );
}

export default Home;