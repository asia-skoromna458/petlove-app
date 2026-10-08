import { GetAllNoticesResponse } from "../types/notices";
import api from "./api";

export const getAllNotices = async (page: number, limit: number) => {
  const res = await api.get<GetAllNoticesResponse>("/notices", {
    params: { page, limit },
  });
  return res.data;
};
