import api from "./axios";

export const reqSearchUser = ({page, size, searchText}) => api.get("/api/admin/users/", {
    params: { page, size, searchText },
});

export const reqRegisterUser = (data) => api.post("/api/admin/users", data, {
    headers: {
        "Content-Type": "multipart/form-data"
    }
});

export const reqModifyUser = (data) => api.post("/api/admin/users/modify", data, {
    headers: {
        "Content-Type": "multipart/form-data"
    }
});

export const reqDeleteUser = (data) => api.delete("/api/admin/users", {data});