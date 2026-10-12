"use client";

import { useRouter } from "next/navigation";
import { useAuthStore } from "../lib/store/authStore";
import { logout } from "../services/auth";

export function useLogOut() {
  const router = useRouter();
  const ClearAuth = useAuthStore((state) => state.clearAuth);
  const handleLogoutConfirm = async () => {
    try {
      await logout();
    } catch {
      // TODO: показати повідомлення про помилку
    } finally {
      ClearAuth();
      router.push("/");
    }
  };
  return handleLogoutConfirm;
}
