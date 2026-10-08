import { GetAllNoticesResponse } from "../types/notices";
import api from "./api";

export const getAllNotices = async () => {
  const res = await api.get<GetAllNoticesResponse>("/notices");
  return res.data;
};
