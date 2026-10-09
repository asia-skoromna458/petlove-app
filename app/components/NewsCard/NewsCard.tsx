import { News } from "@/app/types/news";
import Image from "next/image";
import css from "./NewsCard.module.css";

interface NewsCardProps {
  news: News;
}

export default function NewsCard({ news }: NewsCardProps) {
  return (
    <article className={css.wrapper}>
      <Image
        src={news.imgUrl}
        alt={news.title}
        width={335}
        height={190}
        className={css.image}
      />
      <h3 className={css.newsTitle}>{news.title}</h3>
      <p className={css.newsText}>{news.text}</p>
      <div className={css.info}>
        <p className={css.date}>{news.date}</p>
        <a
          href={news.url}
          target="_blank"
          rel="noopener noreferrer"
          className={css.link}
        >
          Read more
        </a>
      </div>
    </article>
  );
}
