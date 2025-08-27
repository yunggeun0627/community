import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './styles.js';
import TweetBox from '../TweetBox/TweetBox.jsx';
import TweetCard from '../TweetCard/TweetCard.jsx';

function Home(props) {
    const [tab, setTab] = useState("For you");
    const [tweets, setTweets] = useState([]);

    const allTweets = [
        { id: 1, content: "전체 글 1" },
        { id: 2, content: "전체 글 2" },
        { id: 3, content: "전체 글 3" },
    ];

    const followingTweets = [
        { id: 101, content: "팔로우 글 1" },
        { id: 102, content: "팔로우 글 2" },
    ];

    const displayedTweets = tab === "forYou" ? allTweets : followingTweets;

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
            
            <TweetBox onTweet={(newTweet) => setTweets([newTweet, ...tweets])} />
            {tweets.map((tweet) => (
                <TweetCard key={tweet.id} tweet={tweet} /> 
            ))}
        </div>
    );
}

export default Home;