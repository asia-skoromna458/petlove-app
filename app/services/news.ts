import { GetAllNewsResponce } from "../types/news";
import api from "./api";

interface NewsParamsProps {
  page: number;
  limit: number;
  keyword?: string;
}
export const getAllNews = async (params: NewsParamsProps) => {
  const res = await api.get<GetAllNewsResponce>("/news", {
    params,
  });
  return res.data;
};
