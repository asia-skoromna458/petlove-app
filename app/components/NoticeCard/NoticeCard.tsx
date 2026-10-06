import { Notice } from "@/app/types/notices";
import Image from "next/image";
import css from "./NoticeCard.module.css";

interface NoticecardProps {
  notice: Notice;
}

export default function NoticeCard({ notice }: NoticecardProps) {
  return (
    <article className={css.card}>
      <Image
        src={notice.imgURL}
        alt={notice.name}
        width={287}
        height={178}
        className={css.image}
      />
      <div className={css.mainInf}>
        <h3 className={css.title}>{notice.title}</h3>
        <Image
          src="/icon/rating-icon.svg"
          alt="rating icon"
          width={15}
          height={14}
          className={css.ratingIcon}
        />
        <p className={css.rating}>{notice.popularity}</p>
      </div>

      <div className={css.petInfo}>
        <p className={css.petItem}>
          Name <span className={css.petLable}>{notice.name}</span>
        </p>
        <p className={css.petItem}>
          Birthday <span className={css.petLable}> {notice.birthday}</span>
        </p>
        <p className={css.petItem}>
          Sex <span className={css.petLable}>{notice.sex}</span>
        </p>
        <p className={css.petItem}>
          Species <span className={css.petLable}>{notice.species}</span>
        </p>
        <p className={css.petItem}>
          Category <span className={css.petLable}>{notice.category}</span>
        </p>
      </div>
      <p className={css.comment}>{notice.comment}</p>
      {notice.price !== undefined && (
        <p className={css.price}>${notice.price}</p>
      )}
      <div className={css.btnWrapper}>
        <button className={css.learnMoreBth}>Learn more</button>
        <div className={css.iconWrapper}>
          <Image
            src="/icon/favorite-icon.svg"
            alt="Favorite icon"
            width={18}
            height={16}
            className={css.favoriteIcon}
          />
        </div>
      </div>
    </article>
  );
}
