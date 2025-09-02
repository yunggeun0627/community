import api from "./axios";

export const reqFollowing = async () => await api.get('/api/following');
export const reqFollowUser = async (userId) => await api.post(`/api/following/${userId}`);
export const reqUnfollowUser = async (userId) => await api.delete(`/api/following/${userId}`);
export const reqRecommendations = async () => await api.get('/api/recommendations');
