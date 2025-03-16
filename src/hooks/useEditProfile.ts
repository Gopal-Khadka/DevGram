import { useState } from "react";
import useAuthStore from "../store/authStore";
import useShowToast from "./useShowToast";
import { fireStorage, firestore } from "../firebase/firebase";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { doc, updateDoc } from "firebase/firestore";
import useUserProfileStore from "../store/userProfileStore";

const useEditProfile = () => {
  const [isUpdating, setIsUpdating] = useState(false);
  const { user: authUser, setUser: setAuthUser } = useAuthStore();
  const { setUserProfile } = useUserProfileStore();
  const showToast = useShowToast();

  const editProfile = async (inputs: any, selectedFile: any) => {
    if (isUpdating || !authUser) return;
    setIsUpdating(true);

    const storageRef = ref(fireStorage, `profilePics/${authUser.uid}`);
    const userDocRef = doc(firestore, "users", authUser.uid);

    let URL = "";
    try {
      // Check if new profile pic is selected
      if (selectedFile) {
        await uploadString(storageRef, selectedFile, "data_url"); // update image as string
        URL = await getDownloadURL(storageRef); // get update image ur;
      }
      const updatedUser = {
        ...authUser,
        fullName: inputs.fullName || authUser.fullName,
        username: inputs.username || authUser.username,
        bio: inputs.bio || authUser.bio,
        profilePicUrl: URL || authUser.profilePicUrl,
      };

      await updateDoc(userDocRef, updatedUser); // update the user data
      localStorage.setItem("user-info", JSON.stringify(updatedUser));
      setAuthUser(updatedUser); // update user store state
      setUserProfile(updatedUser); // update profile store state
      showToast({
        title: "Success",
        description: "Profile updated successfully",
        status: "success",
      });
    } catch (error: any) {
      showToast({
        title: "Error",
        description: error.message,
        status: "error",
      });
    }
    setIsUpdating(false);
  };

  return { isUpdating, editProfile };
};
export default useEditProfile;
