import { Friend } from "@/app/types/friends";
import Image from "next/image";
import css from "./FriendCard.module.css";

interface FriendProps {
  friend: Friend;
}

export default function FriendCard({ friend }: FriendProps) {
  const workDay = friend.workDays?.find((day) => day.isOpen);
  return (
    <article>
      {workDay ? (
        <span>
          {workDay.from} - {workDay.to}
        </span>
      ) : (
        <span>Day and night</span>
      )}
      <Image
        src={friend.imageUrl}
        alt={friend.title}
        width={90}
        height={90}
        className={css.image}
      />
      <div className={css.infoWrapper}>
        <h3>{friend.title}</h3>
        <ul>
          <li>
            Email:{" "}
            {friend.email ? (
              <a href={`mailto:${friend.email}`}>{friend.email}</a>
            ) : (
              "Only phone or website"
            )}
          </li>
          <li>
            Address:{" "}
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
          <li>
            Phone{" "}
            {friend.phone ? (
              <a href={`tel: ${friend.phone}`}> {friend.phone}</a>
            ) : (
              "Email only"
            )}
          </li>
        </ul>
      </div>
    </article>
  );
}
