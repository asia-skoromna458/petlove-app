import { GetAllNoticesResponse, NoticeParams } from "../types/notices";
import api from "./api";

export const getAllNotices = async (params: NoticeParams) => {
  const res = await api.get<GetAllNoticesResponse>("/notices", {
    params,
  });
  return res.data;
};
