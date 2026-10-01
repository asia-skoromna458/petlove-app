"use client";
import { useEffect, useState } from "react";
import { getAllNotices } from "../services/notices";
import { Notice } from "../types/notices";

export default function NoticesPageClient() {
  const [notice, setNotice] = useState<Notice[]>([]);
  useEffect(() => {
    const GetNotice = async () => {
      const data = await getAllNotices();
      setNotice(data.results);
    };
    GetNotice();
  }, []);

  return <>Page</>;
}
