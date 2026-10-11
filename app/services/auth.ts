import { AuthResponce, LoginRequest, RegisterRequest } from "../types/auth";
import api from "./api";

export const register = async (data: RegisterRequest) => {
  const res = await api.post<AuthResponce>("/users/signup", data);
  return res.data;
};

export const login = async (data: LoginRequest) => {
  const res = await api.post<AuthResponce>("/users/signin", data);
  return res.data;
};

export const logout = async () => {
  await api.post("/users/signout");
};
