"use client";
import { useEffect, useState } from "react";
import { News } from "../types/news";
import { getAllNews } from "../services/news";
import Title from "../components/ui/title/title";
import SearchField from "../components/ui/SearchField/SearchField";
import NewsCard from "../components/NewsCard/NewsCard";
import Pagination from "../components/Pagination/Pagination";
import css from "./NewsPage.module.css";

export default function NewsPageClient() {
  const [news, setNews] = useState<News[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [keyword, setKeyword] = useState("");
  useEffect(() => {
    const getNews = async () => {
      const data = await getAllNews({ page, limit: 6, keyword });
      setNews(data.results);
      setTotalPages(data.totalPages);
    };
    getNews();
  }, [page, keyword]);
  return (
    <main className={css.container}>
      <div className={css.header}>
        <Title>News</Title>
        <SearchField
          className={css.searchField}
          value={keyword}
          onChange={(value) => {
            setKeyword(value);
            setPage(1);
          }}
        />
      </div>
      <ul className={css.newsList}>
        {news.map((news) => (
          <li key={news._id}>
            <NewsCard news={news} />
          </li>
        ))}
      </ul>
      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
    </main>
  );
}
