import { NoticeCategories, NoticeSex, NoticeSpecies } from "../types/notices";
import api from "./api";

export const getNoticeCategories = async () => {
  const res = await api.get<NoticeCategories>("/notices/categories");
  return res.data;
};
export const getNoticeSex = async () => {
  const res = await api.get<NoticeSex>("/notices/sex");
  return res.data;
};
export const getNoticeSpecies = async () => {
  const res = await api.get<NoticeSpecies>("/notices/species");
  return res.data;
};
export const getCitiesByKeyword = async (keyword: string) => {
  const res = await api.get("/cities", { params: { keyword } });
  return res.data;
};
export const getCitiesWithNotices = async () => {
  const res = await api.get("/cities/locations");
  return res.data;
};
