import Image from "next/image";
import css from "./HeroPage.module.css";

export default function HeroPage() {
  return (
    <main className={css.container}>
      <div className={css.titleContainer}>
        <h1 className={css.heroTitle}>
          Take good <span className={css.titleSpan}>care</span> of your small
          pets
        </h1>
        <p className={css.heroText}>
          Choosing a pet for your home is a choice that is meant to enrich your
          life with immeasurable joy and tenderness.
        </p>
      </div>
      <div className={css.imageWrapper}>
        <Image
          src="/image/hero-image.jpg"
          alt="Hero image"
          fill
          sizes="100vw"
          className={css.heroImage}
        />
      </div>
    </main>
  );
}
