import api from "./axios";

export const reqTweets = async () => await api.get('/api/tweets');
export const reqPostTweet = async (data) => await api.post('/api/tweets', data);
