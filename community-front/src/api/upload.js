import api from "./axios";

export const requpload = async (formData) =>
    await api.post('/api/upload/profile', formData, {
        headers: { "Content-Type": "multipart/form-data" },
});

export const reqtweet = async (formData) =>
    await api.post('/api/upload/tweet', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
});