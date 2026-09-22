//import Image from "next/image";
import HeroPage from "./components/HomePage/HeroPage";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <HeroPage />
    </main>
  );
}
