import { create } from "zustand";
import { UserDoc } from "../hooks/UseSignUpWithEmailAndPass";

interface AuthState {
  user: UserDoc | null;
  login: (user: UserDoc) => void;
  logout: () => void;
  setUser: (user: UserDoc) => void;
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
}

const useAuthStore = create<AuthState>()((set) => {
  return {
    user: JSON.parse(localStorage.getItem("user-info") ?? "null"),
    login: (user: UserDoc) => set({ user }),
    logout: () => set({ user: null }),
    setUser: (user: UserDoc) => set({ user }),
    isLogin: true,
    setIsLogin: (isLogin: boolean) => set({ isLogin }),
  };
});

export default useAuthStore;
