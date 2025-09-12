import api from "./axios";

export const reqTweets = async () => await api.get('/api/tweets');
export const reqPostTweet = async (data) => await api.post('/api/tweets', data);
export const reqDeleteTweet = async (tweetId) => await api.delete(`/api/tweets/${tweetId}`);

// 특정 트윗 조회
export const reqGetTweet = async (tweetId) => 
    await api.get(`/api/tweets/${tweetId}`);

// 특정 트윗의 댓글 목록
export const reqComments = async (tweetId) => 
await api.get(`/api/tweets/${tweetId}/comments`);

// 댓글 작성
export const reqPostComment = async (tweetId, data) => 
await api.post(`/api/tweets/${tweetId}/comments`, data);

// 댓글 삭제 (선택적으로)
export const reqDeleteComment = async (tweetId, commentId) => 
await api.delete(`/api/tweets/${tweetId}/comments/${commentId}`);