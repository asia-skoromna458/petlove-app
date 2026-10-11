import UserCard from "@/app/components/UserCard/UserCard";
import css from "./page.module.css";

export default function ProfilePageClient() {
  return (
    <main className={css.container}>
      <UserCard />
    </main>
  );
}
