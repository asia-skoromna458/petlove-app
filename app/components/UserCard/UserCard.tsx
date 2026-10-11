import css from "./UserCard.module.css";
import EditUserBtn from "./EditUserBtn/EditUserBtn";
import UserBlock from "./UserBlock/UserBlock";

export default function UserCard() {
  return (
    <div className={css.container}>
      <EditUserBtn />
      <UserBlock />
      <button className={css.logoutbtn}>Log out</button>
    </div>
  );
}
