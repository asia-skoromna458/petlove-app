import { User } from "@/app/types/user";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthStore = {
  token: string | null;
  user: Pick<User, "name" | "email"> | null;
  setAuth: (token: string, user: Pick<User, "name" | "email">) => void;
  clearAuth: () => void;
};

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      token: null,
      user: null,
      setAuth: (token, user) => set({ token, user }),
      clearAuth: () => set({ token: null, user: null }),
    }),
    { name: "auth-store" },
  ),
);
