import { News } from "@/app/types/news";
import Image from "next/image";

interface NewsCardProps {
  news: News;
}

export default function NewsCard({ news }: NewsCardProps) {
  return (
    <article>
      <Image src={news.imgUrl} alt={news.title} width={335} height={190} />
      <h3>{news.title}</h3>
      <p>{news.text}</p>
      <div>
        <p>{news.date}</p>
        <a href={news.url} target="_blank" rel="noopener noreferrer">
          Read more
        </a>
      </div>
    </article>
  );
}
