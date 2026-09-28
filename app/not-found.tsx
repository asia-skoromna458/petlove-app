"use client";
import { useRouter } from "next/navigation";
import css from "./ErrorPage.module.css";
import Image from "next/image";

export default function NotFound() {
  const router = useRouter();
  return (
    <main className={css.container}>
      <div className={css.content}>
        <h2 className={css.errorTitle}>
          4
          <div className={css.imageWrapper}>
            <Image
              src="/image/not-found.png"
              alt="Hero image"
              className={css.errorImage}
              width={280}
              height={280}
            />
          </div>
          4
        </h2>
        <p className={css.errorText}>Ooops! This page not found :(</p>
        <button onClick={() => router.push("/")} className={css.errBtn}>
          To home page
        </button>
      </div>
    </main>
  );
}
