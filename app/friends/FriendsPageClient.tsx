"use client";
import { useEffect, useState } from "react";
import { Friend } from "../types/friends";
import { GetAllFriends } from "../services/frineds";
import css from "./page.module.css";
import Title from "../components/ui/title/title";
import FriendCard from "../components/FriendCard/FriendCard";

export default function FriendsPageClient() {
  const [friend, setFriend] = useState<Friend[]>([]);

  useEffect(() => {
    const GetFriends = async () => {
      const data = await GetAllFriends();
      setFriend(data);
    };
    GetFriends();
  }, []);
  return (
    <main className={css.container}>
      <Title>Our friends</Title>
      <ul className={css.list}>
        {friend.map((friend) => (
          <li key={friend._id}>
            <FriendCard friend={friend} />
          </li>
        ))}
      </ul>
    </main>
  );
}
