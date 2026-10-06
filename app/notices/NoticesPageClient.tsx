"use client";
import { useEffect, useState } from "react";
import { getAllNotices } from "../services/notices";
import { Notice } from "../types/notices";
import NoticeCard from "../components/NoticeCard/NoticeCard";
import Title from "../components/ui/title/title";
import css from "./page.module.css";

export default function NoticesPageClient() {
  const [notice, setNotice] = useState<Notice[]>([]);
  useEffect(() => {
    const GetNotice = async () => {
      const data = await getAllNotices();
      setNotice(data.results);
    };

    GetNotice();
  }, []);

  return (
    <main className={css.container}>
      <Title>Find your favorite pet</Title>
      <ul className={css.list}>
        {notice.map((notice) => (
          <li key={notice._id}>
            <NoticeCard notice={notice} />
          </li>
        ))}
      </ul>
    </main>
  );
}
