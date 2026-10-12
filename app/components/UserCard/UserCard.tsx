"use client";
import css from "./UserCard.module.css";
import EditUserBtn from "./EditUserBtn/EditUserBtn";
import UserBlock from "./UserBlock/UserBlock";
import { useState } from "react";
import { useLogOut } from "@/app/hooks/useLogOut";
import ConfirmModal from "../ConfirmModal/ConfirmModal";

export default function UserCard() {
  const [isLogOutModalOpen, setIsLogOutModalOpen] = useState(false);
  const handleLogoutConfirm = useLogOut();
  return (
    <div className={css.container}>
      <EditUserBtn />
      <UserBlock />
      <button
        className={css.logoutbtn}
        onClick={() => setIsLogOutModalOpen(true)}
      >
        Log out
      </button>

      <ConfirmModal
        isOpen={isLogOutModalOpen}
        onClose={() => setIsLogOutModalOpen(false)}
        onConfirm={async () => {
          await handleLogoutConfirm();
          setIsLogOutModalOpen(false);
        }}
      />
    </div>
  );
}
