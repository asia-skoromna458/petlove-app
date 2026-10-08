import { Friend } from "../types/friends";
import api from "./api";

export const GetAllFriends = async () => {
  const res = await api.get<Friend[]>("/friends");
  return res.data;
};
