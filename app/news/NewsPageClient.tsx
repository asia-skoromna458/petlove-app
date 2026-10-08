"use client";
import { useEffect, useState } from "react";
import { News } from "../types/news";
import { getAllNews } from "../services/news";
import Title from "../components/ui/title/title";
import SearchField from "../components/ui/SearchField/SearchField";
import NewsCard from "../components/NewsCard/NewsCard";
import Pagination from "../components/Pagination/Pagination";

export default function NewsPageClient() {
  const [news, setNews] = useState<News[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    const getNews = async () => {
      const data = await getAllNews(page, 6);
      setNews(data.results);
      setTotalPages(data.totalPages);
    };
    getNews();
  }, [page]);
  return (
    <>
      <Title>News</Title>
      <SearchField />
      <ul>
        {news.map((news) => (
          <li key={news._id}>
            <NewsCard news={news} />
          </li>
        ))}
      </ul>
      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
    </>
  );
}
