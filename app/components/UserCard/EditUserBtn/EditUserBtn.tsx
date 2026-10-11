import Image from "next/image";
import css from "./EditUserbtn.module.css";

export default function EditUserBtn() {
  return (
    <>
      {" "}
      <div className={css.editPart}>
        <div className={css.user}>
          <span>User</span>
          <Image
            src="/icon/user-icons/user-white-icon.svg"
            alt="user icon"
            width={18}
            height={18}
          />
        </div>
        <button className={css.editBtn}>
          <Image
            src="/icon/user-icons/edit-icon.svg"
            alt="edit"
            width={17}
            height={17}
          />
        </button>
      </div>
    </>
  );
}
