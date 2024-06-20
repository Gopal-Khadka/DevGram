import { useEffect, useState } from "react";
import useShowToast from "./useShowToast";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import { UserDoc } from "./UseSignUpWithEmailAndPass";

const useGetUserProfileById = (userId: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const showToast = useShowToast();
  const [userProfile, setUserProfile] = useState<UserDoc | null>(null);

  useEffect(() => {
    const getUserProfile = async () => {
      setIsLoading(true);
      setUserProfile(null);
      try {
        const userRef = await getDoc(doc(firestore, "users", userId));
        if (userRef.exists()) {
          setUserProfile(userRef.data() as UserDoc);
        }
      } catch (error: any) {
        showToast({
          title: "Error",
          description: error.message,
          status: "error",
        });
      } finally {
        setIsLoading(false);
      }
    };
    getUserProfile();
  }, [userId]);

  return { isLoading, userProfile };
};

export default useGetUserProfileById;
