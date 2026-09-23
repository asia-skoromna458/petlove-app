"use client";
import Image from "next/image";
import css from "./Header.module.css";
import { useState } from "react";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={css.container}>
      <p className={css.logo}>
        petl
        <Image src="/heart.svg" alt="Petlove logo" width={14} height={12} />
        ve
      </p>

      <button
        aria-label="Open menu"
        className={css.burgerMenu}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Image src="/menu-01.svg" width={32} height={32} alt="burger-menu" />
      </button>
      <div className={`${css.mobileMenu} ${isOpen ? css.open : ""}`}>
        <Image
          src="/close_icon.svg"
          alt="close-Menu"
          width={32}
          height={32}
          className={css.closeIcon}
        />
        <nav className={css.navigation}>
          <a href="/news" className={css.navLink}>
            News
          </a>
          <a href="/notices" className={css.navLink}>
            Find pet
          </a>
          <a href="/friends" className={css.navLink}>
            Our friends
          </a>
        </nav>
        <div className={css.action}>
          <button className={css.loginBtn}>Log In</button>
          <button className={css.registrationBtn}>Registration</button>
        </div>
      </div>
    </div>
  );
}
