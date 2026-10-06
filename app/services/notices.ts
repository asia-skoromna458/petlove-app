import { GetAllNoticesResponse } from "../types/notices";
import api from "./api";

export const getAllNotices = async () => {
  const res = await api.get<GetAllNoticesResponse>("/notices");
  console.log(
    res.data.results.map((notice) => ({
      title: notice.title,
      popularity: notice.popularity,
    })),
  );
  return res.data;
};
