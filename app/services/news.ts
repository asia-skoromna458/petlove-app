import { GetAllNewsResponce } from "../types/news";
import api from "./api";

export const getAllNews = async (page: number, limit: number) => {
  const res = await api.get<GetAllNewsResponce>("/news", {
    params: { page, limit },
  });
  return res.data;
};
