import { useEffect, useState } from "react";
import useAuthStore from "../store/authStore";
import useUserProfileStore from "../store/userProfileStore";
import useShowToast from "./useShowToast";
import { firestore } from "../firebase/firebase";
import {
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { UserDoc } from "./UseSignUpWithEmailAndPass";

const useFollowUser = (uid: string) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const { user: authUser, setUser: setAuthUser } = useAuthStore();
  const { setUserProfile } = useUserProfileStore();
  const showToast = useShowToast();

  /**
   *
   * @param uid user id i.e uniquely defined in "users" collection
   */
  const queryUpdatedUser = async (uid: string): Promise<UserDoc> => {
    let updatedUser = {} as UserDoc;
    const q = query(collection(firestore, "users"), where("uid", "==", uid));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      updatedUser = doc.data() as UserDoc;
    });
    return updatedUser;
  };

  useEffect(() => {
    // check if the given uid is included in your logged in account following's list
    setIsFollowing(authUser?.following.includes(uid) || false);
  }, [uid, authUser]);

  const handleFollowUser = async () => {
    setIsUpdating(true);
    try {
      const authUserRef = doc(firestore, "users", authUser?.uid || "");
      const userToFollowOrUnfollow = doc(firestore, "users", uid);

      // remove or add the uid on the following list of authUser based on "isFollowing"
      await updateDoc(authUserRef, {
        following: isFollowing ? arrayRemove(uid) : arrayUnion(uid),
      });

      // remove or add the uid on the followers list of another user based on "isFollowing"
      await updateDoc(userToFollowOrUnfollow, {
        followers: isFollowing
          ? arrayRemove(authUser?.uid)
          : arrayUnion(authUser?.uid),
      });

      // query updated user data
      const updatedAuthUser = await queryUpdatedUser(authUser?.uid || "");
      const updatedFollowedUser = await queryUpdatedUser(uid);

      // update the store states and local storage for change in UI
      if (updatedAuthUser && updatedFollowedUser) {
        setAuthUser(updatedAuthUser);
        setUserProfile(updatedFollowedUser);
      }
      localStorage.setItem("user-info", JSON.stringify(updatedAuthUser));

      // change value based on if the authUser has followed or unfollowed the visited user
      isFollowing ? setIsFollowing(false) : setIsFollowing(true);
    } catch (error: any) {
      showToast({
        title: "Error",
        description: error.message,
        status: "error",
      });
    } finally {
      setIsUpdating(false);
    }
  };
  return { isUpdating, handleFollowUser, isFollowing };
};

export default useFollowUser;
