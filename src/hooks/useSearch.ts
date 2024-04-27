import { useState } from "react";
import useShowToast from "./useShowToast";
import { query, collection, where, getDocs } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import { UserDoc } from "./UseSignUpWithEmailAndPass";

const useSearch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<UserDoc>();
  const showToast = useShowToast();

  const getUserProfile = async (username: string) => {
    setIsLoading(true);
    try {
      const q = query(
        collection(firestore, "users"),
        where("username", "==", username)
      );
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty)
        return showToast({
          title: "Error",
          description: "User not found",
          status: "error",
        });
      querySnapshot.forEach((doc) => {
        setUser(doc.data() as UserDoc);
      });
    } catch (error: any) {
      showToast({
        title: "Error",
        description: error.message,
        status: "success",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return { user, isLoading, getUserProfile };
};

export default useSearch;
