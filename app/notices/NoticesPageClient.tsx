"use client";
import { useEffect, useState } from "react";
import { getAllNotices } from "../services/notices";
import { Notice } from "../types/notices";
import NoticeCard from "../components/NoticeCard/NoticeCard";
import Title from "../components/ui/title/title";
import css from "./page.module.css";
import Filter from "../components/Filter/Filter";
import Pagination from "../components/Pagination/Pagination";

export default function NoticesPageClient() {
  const [notice, setNotice] = useState<Notice[]>([]);
  const [page, setPage] = useState(1);
  const [totalpages, setTotalPages] = useState(0);
  useEffect(() => {
    const GetNotice = async () => {
      const data = await getAllNotices(page, 6);
      setNotice(data.results);
      setTotalPages(data.totalPages);
    };

    GetNotice();
  }, [page]);

  return (
    <main className={css.container}>
      <Title>Find your favorite pet</Title>
      <Filter />
      <ul className={css.list}>
        {notice.map((notice) => (
          <li key={notice._id}>
            <NoticeCard notice={notice} />
          </li>
        ))}
      </ul>
      <Pagination page={page} totalPages={totalpages} onPageChange={setPage} />
    </main>
  );
}
