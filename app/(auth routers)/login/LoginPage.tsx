import Image from "next/image";
import css from "./LoginPage.module.css";

export default function LoginPage() {
  return (
    <div className={css.container}>
      <div className={css.imageWrapper}>
        <Image src="/image/login-image.jpg" alt="Login image" />
      </div>
    </div>
  );
}
