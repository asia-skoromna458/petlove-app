"use client";
import { useRouter } from "next/navigation";
import css from "../Header.module.css";
import Image from "next/image";
import { useAuthStore } from "@/app/lib/store/authStore";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  isHome: boolean;
  onLogOutClick: () => void;
}

export default function MobileMenu({
  isOpen,
  onClose,
  isHome,
  onLogOutClick,
}: MobileMenuProps) {
  const router = useRouter();
  const isAuthenticated = useAuthStore((state) => !!state.token);

  const handleClick = () => {
    onClose();
  };

  return (
    <div
      className={`${css.mobileMenu} ${
        isHome ? css.mobileMenuHome : ""
      } ${isOpen ? css.open : ""}`}
    >
      <Image
        src="/icon/close_icon.svg"
        alt="close-Menu"
        width={32}
        height={32}
        className={`${css.closeIcon} ${isHome ? css.blackIcon : css.whiteIcon}`}
        onClick={handleClick}
      />

      <nav className={css.navigation}>
        <a
          href="/news"
          className={`${css.mobileNavLink} ${isHome ? css.mobileMenuLink : ""}`}
        >
          News
        </a>

        <a
          href="/notices"
          className={`${css.mobileNavLink} ${isHome ? css.mobileMenuLink : ""}`}
        >
          Find pet
        </a>

        <a
          href="/friends"
          className={`${css.mobileNavLink} ${isHome ? css.mobileMenuLink : ""}`}
        >
          Our friends
        </a>
      </nav>

      <div className={css.action}>
        {isAuthenticated ? (
          <button className={css.logOutBtn} onClick={onLogOutClick}>
            Log out
          </button>
        ) : (
          <>
            <button
              className={css.loginBtn}
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
          </>
        )}
      </div>
    </div>
  );
}
