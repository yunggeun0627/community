import api from "./axios";

export const reqJoin = async (data) => await api.post("/api/auth/join", data)
export const reqLogin = async (data) => await api.post("/api/auth/login", data);

export const reqPrincipal = async () => await api.get("/api/account/principal");