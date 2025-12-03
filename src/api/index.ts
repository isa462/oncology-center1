// frontend/src/api/index.ts
// Axios instance + all API helpers used by the frontend.
// Base URL настроен на http://localhost:5000/api — если твой backend на другом порту, поменяй.

import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
  // withCredentials: true // не используем куки, используем Bearer token
});

// Добавляем токен в заголовки, если он есть
API.interceptors.request.use((cfg) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    if (token && cfg.headers) cfg.headers.Authorization = `Bearer ${token}`;
  }
  return cfg;
});

// Auth
export const authLogin = (email: string, password: string) =>
  API.post("/auth/login", { email, password });

export const authRegister = (email: string, password: string) =>
  API.post("/auth/register", { email, password });

// Participants
export const createParticipant = (data: any) => API.post("/participants", data);
export const getParticipants = (page = 1) => API.get(`/participants?page=${page}`);
export const deleteParticipant = (id: string) => API.delete(`/participants/${id}`);

// Gala (with file upload)
export const createGala = (data: any, file?: File) => {
  const fd = new FormData();
  fd.append("data", JSON.stringify(data));
  if (file) fd.append("check", file); // backend expects field 'check'
  return API.post("/gala", fd);
};
export const getGala = (page = 1) => API.get(`/gala?page=${page}`);
export const deleteGala = (id: string) => API.delete(`/gala/${id}`);

// Thesis (with file upload)
export const createThesis = (data: any, file?: File) => {
  const fd = new FormData();
  fd.append("name", data.name || "");
  fd.append("email", data.email || "");
  fd.append("company", data.company || "");
  fd.append("phone", data.phone || "");
  if (file) fd.append("file", file);
  return API.post("/thesis", fd);
};
export const getThesis = (page = 1) => API.get(`/thesis?page=${page}`);
export const deleteThesis = (id: string) => API.delete(`/thesis/${id}`);

// Schedule (admin only)
export const createSchedule = (title: string, file?: File) => {
  const fd = new FormData();
  fd.append("title", title);
  if (file) fd.append("file", file);
  return API.post("/schedule", fd);
};
export const getSchedule = () => API.get("/schedule");
export const deleteSchedule = (id: string) => API.delete(`/schedule/${id}`);

// helper
export default API;
