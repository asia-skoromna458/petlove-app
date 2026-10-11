import Image from "next/image";
import css from "./UserBlock.module.css";

export default function UserBlock() {
  return (
    <div className={css.userInfo}>
      <div className={css.infoTop}>
        <div className={css.avatar}>
          <Image
            src="/icon/user-icons/user-or-icon.svg"
            alt="user avatar"
            width={40}
            height={40}
          />
        </div>
        <button className={css.uploadBtn}>Upload photo</button>
      </div>
      <div className={css.infoBottom}>
        <h3 className={css.title}>My information</h3>
        <ul className={css.list}>
          <li className={css.item}>name</li>
          <li className={css.item}>email</li>
          <li className={css.item}>телефон</li>
        </ul>
      </div>
    </div>
  );
}
