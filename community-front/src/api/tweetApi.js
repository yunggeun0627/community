import api from "./axios";

    export const reqTweets = async () => await api.get('/api/tweets');
    export const reqPostTweet = async (data) => await api.post('/api/tweets', data);
    export const reqDeleteTweet = async (tweetId) => await api.delete(`/api/tweets/${tweetId}`);