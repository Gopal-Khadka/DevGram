import { useEffect, useState } from "react";
import useShowToast from "./useShowToast";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import useUserProfileStore from "../store/userProfileStore";
import { UserDoc } from "./UseSignUpWithEmailAndPass";

const useGetUserProfileByUserName = (username: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const showToast = useShowToast();
  const { userProfile, setUserProfile } = useUserProfileStore();

  useEffect(() => {
    const getUserProfile = async () => {
      setIsLoading(true);
      try {
        const q = query(
          collection(firestore, "users"),
          where("username", "==", username)
        );
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) return setUserProfile(null);

        querySnapshot.forEach((doc) => {
          setUserProfile(doc.data() as UserDoc);
        });
      } catch (error: any) {
        showToast({
          title: "Error",
          status: "error",
          description: error.message,
        });
      } finally {
        setIsLoading(false);
      }
    };
    getUserProfile();
  }, [setUserProfile, username, showToast]);

  return { isLoading, userProfile };
};

export default useGetUserProfileByUserName;
