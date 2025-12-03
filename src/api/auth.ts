// src/api/auth.ts
// import  api  from "./axios";
import api from "./axios";

export const login = async (
  email: string,
  password: string,
  config: object = {}
): Promise<any> => {
  const { data } = await api.post(
    "/auth/login",
    { email, password },
    { headers: { "Content-Type": "application/json" }, ...config }
  );
  return data;
};

export const register = async (
  email: string,
  password: string,
  config: object = {}
): Promise<any> => {
  const { data } = await api.post(
    "/auth/register",
    { email, password },
    { headers: { "Content-Type": "application/json" }, ...config }
  );
  return data;
};

