import { create } from "zustand";

interface AuthState {
  user: any | null;
  login: <T>(user: T) => void;
  logout: () => void;
  setUser: <T>(user: T) => void;
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
}

const useAuthStore = create<AuthState>()((set) => {
  return {
    user: JSON.parse(localStorage.getItem("user-info") ?? "null"),
    login: <T>(user: T) => set({ user }),
    logout: () => set({ user: null }),
    setUser: <T>(user: T) => set({ user }),
    isLogin: true,
    setIsLogin: (isLogin: boolean) => set({ isLogin }),
  };
});

export default useAuthStore;