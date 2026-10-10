import { Friend } from "@/app/types/friends";
import Image from "next/image";
import css from "./FriendCard.module.css";

interface FriendProps {
  friend: Friend;
}

export default function FriendCard({ friend }: FriendProps) {
  const workDay = friend.workDays?.find((day) => day.isOpen);
  return (
    <article className={css.wrapper}>
      {workDay ? (
        <span className={css.spanWorkDay}>
          {workDay.from} - {workDay.to}
        </span>
      ) : (
        <span className={css.spanWorkDay}>Day and night</span>
      )}
      <div className={css.infoWrapper}>
        <Image
          src={friend.imageUrl}
          alt={friend.title}
          width={80}
          height={80}
          className={css.image}
        />
        <div className={css.contactInfo}>
          <h3 className={css.title}>{friend.title}</h3>
          <ul className={css.list}>
            <li className={css.listItem}>
              <span className={css.span}>Email: </span>
              {friend.email ? (
                <a href={`mailto:${friend.email}`}>{friend.email}</a>
              ) : (
                "Only phone or website"
              )}
            </li>
            <li className={css.listItem}>
              <span className={css.span}>Address: </span>
              {friend.address ? (
                <a
                  href={friend.addressUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {friend.address}
                </a>
              ) : (
                "Website only"
              )}
            </li>
            <li className={css.listItem}>
              <span className={css.span}> Phone: </span>
              {friend.phone ? (
                <a href={`tel: ${friend.phone}`}> {friend.phone}</a>
              ) : (
                "Email only"
              )}
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}
