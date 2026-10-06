"use client";
import Image from "next/image";
import css from "./Header.module.css";
import { useState } from "react";
import MobileMenu from "./MobileMenu/MobileMenu";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
export default function Header() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  return (
    <div className={`${css.container} ${isHome ? css.homeContainer : ""}`}>
      <Link href="/">
        <p className={css.logo}>
          petl
          <Image
            src="/icon/heart.svg"
            alt="Petlove logo"
            width={14}
            height={12}
            className={isHome ? css.whiteIcon : ""}
          />
          ve
        </p>
      </Link>
      <nav className={css.desktopNav}>
        <Link
          href="/news"
          className={`${css.navLink} ${
            isHome ? css.homeNavLink : ""
          } ${pathname === "/news" ? css.activeLink : ""}`}
        >
          News
        </Link>

        <Link
          href="/notices"
          className={`${css.navLink} ${
            isHome ? css.homeNavLink : ""
          } ${pathname === "/notices" ? css.activeLink : ""}`}
        >
          Find pet
        </Link>

        <Link
          href="/friends"
          className={`${css.navLink} ${
            isHome ? css.homeNavLink : ""
          } ${pathname === "/friends" ? css.activeLink : ""}`}
        >
          Our friends
        </Link>
      </nav>
      <div className={css.rightGroup}>
        <div className={css.desktopAction}>
          <button
            className={`${css.loginBtn} ? ${isHome ? css.homeloginBth : ""}`}
            onClick={() => router.push("/login")}
          >
            Log In
          </button>
          <button
            className={css.registrationBtn}
            onClick={() => router.push("/register")}
          >
            Registration
          </button>
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
            className={isHome ? css.whiteIcon : ""}
          />
        </button>
      </div>
      <MobileMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        isHome={isHome}
      />
    </div>
  );
}
