"use client";
import Image from "next/image";
import css from "./Header.module.css";
import { useState } from "react";
import MobileMenu from "./MobileMenu/MobileMenu";
import Link from "next/link";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={css.container}>
      <Link href="/">
        <p className={css.logo}>
          petl
          <Image
            src="/icon/heart.svg"
            alt="Petlove logo"
            width={14}
            height={12}
          />
          ve
        </p>
      </Link>
      <nav className={css.desktopNav}>
        <Link href="/news" className={css.navLink}>
          News
        </Link>
        <Link href="/notices" className={css.navLink}>
          Find pet
        </Link>
        <Link href="/friends" className={css.navLink}>
          Our friends
        </Link>
      </nav>
      <div className={css.rightGroup}>
        <div className={css.desktopAction}>
          <button className={css.loginBtn}>Log In</button>
          <button className={css.registrationBtn}>Registration</button>
        </div>

        <button
          aria-label="Open menu"
          className={css.burgerMenu}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <Image
            src="/icon/menu-01.svg"
            width={32}
            height={32}
            alt="burger-menu"
          />
        </button>
      </div>
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}
