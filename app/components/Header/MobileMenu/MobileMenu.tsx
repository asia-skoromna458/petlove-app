import css from "../Header.module.css";
import Image from "next/image";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}
export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const handleClick = () => {
    onClose();
  };
  return (
    <div className={`${css.mobileMenu} ${isOpen ? css.open : ""}`}>
      <Image
        src="/close_icon.svg"
        alt="close-Menu"
        width={32}
        height={32}
        className={css.closeIcon}
        onClick={handleClick}
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
  );
}
