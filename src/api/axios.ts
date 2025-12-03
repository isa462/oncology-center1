// src/api/axios.ts
import axios, { AxiosInstance } from "axios";

const BASE =
  (typeof process !== "undefined" && process.env.NEXT_PUBLIC_API_URL) ||
  "http://localhost:5000";

const api: AxiosInstance = axios.create({
  baseURL: "http://localhost:5000", // backend
  headers: {
    "Content-Type": "application/json",
  },
});

// Интерцептор: подставляем токен из localStorage (только в браузере)
api.interceptors.request.use(
  (config) => {
    try {
      if (typeof window !== "undefined") {
        const token = localStorage.getItem("token");
        if (token && config && config.headers) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      }
    } catch (e) {

    }
    return config;
  },
  (error) => Promise.reject(error)
);

export function setAuthToken(token: string | null) {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    if (typeof window !== "undefined") localStorage.setItem("token", token);
  } else {
    delete api.defaults.headers.common["Authorization"];
    if (typeof window !== "undefined") localStorage.removeItem("token");
  }
}

export default api;


