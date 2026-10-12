import { GetAllNoticesResponse, Notice, NoticeParams } from "../types/notices";
import api from "./api";

export const getAllNotices = async (params: NoticeParams) => {
  const res = await api.get<GetAllNoticesResponse>("/notices", {
    params,
  });
  return res.data;
};
export const getAllNotiesById = async () => {
  const res = await api.get<Notice>("/notises/${id}");
  return res.data;
};
export const addToFavorite = async (id: string) => {
  const { data } = await api.post(`/notices/favorites/add/${id}`);
  return data;
};
export const deleteFromFavorite = async (id: string) => {
  const { data } = await api.delete(`/notices/favorites/remove/${id}`);
  return data;
};

export type SortBy = "popular" | "unpopular" | "cheap" | "expensive";

export const sortNotices = (notices: Notice[], sortBy: SortBy): Notice[] => {
  const sorted = [...notices];

  switch (sortBy) {
    case "cheap":
      return sorted.sort((a, b) => a.price - b.price);

    case "expensive":
      return sorted.sort((a, b) => b.price - a.price);

    case "popular":
      return sorted.sort((a, b) => b.popularity - a.popularity);

    case "unpopular":
      return sorted.sort((a, b) => a.popularity - b.popularity);

    default:
      return sorted;
  }
};
