import { create } from "zustand";
import { UserDoc } from "../hooks/UseSignUpWithEmailAndPass";
import { Post } from "./postStore";
interface ProfileState {
  userProfile: UserDoc | null;
  setUserProfile: (userProfile: UserDoc | null) => void;
  addPost: (post: Post) => void;
}

const useUserProfileStore = create<ProfileState>()((set) => ({
  userProfile: null,
  setUserProfile: (userProfile) => set({ userProfile }),
  // this updates no of posts in the profile page
  addPost: (post) =>
    set((state) => {
      return {
        userProfile: {
          ...(state.userProfile || ({} as UserDoc)),
          posts: [...(state.userProfile?.posts || ([] as Post[])), post],
        },
      };
    }),
}));

export default useUserProfileStore;
