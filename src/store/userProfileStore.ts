import { create } from "zustand";
interface ProfileState {
  userProfile: any | null;
  setUserProfile: <T>(userProfile: T) => void;
}

const useUserProfileStore = create<ProfileState>()((set) => ({
  userProfile: null,
  setUserProfile: <T>(userProfile: T) => set({ userProfile }),
  //   addPost:()
}));

export default useUserProfileStore;
