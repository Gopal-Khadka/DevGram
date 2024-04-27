import { create } from "zustand";
import { UserDoc } from "../hooks/UseSignUpWithEmailAndPass";
interface ProfileState {
  userProfile: UserDoc | null;
  setUserProfile: (userProfile: UserDoc | null) => void;
}

const useUserProfileStore = create<ProfileState>()((set) => ({
  userProfile: null,
  setUserProfile: (userProfile) => set({ userProfile }),
  //   addPost:()
}));

export default useUserProfileStore;
