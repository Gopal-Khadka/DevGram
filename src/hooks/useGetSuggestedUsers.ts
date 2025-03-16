import { useEffect, useState } from "react";
import { UserDoc } from "./UseSignUpWithEmailAndPass";
import useAuthStore from "../store/authStore";
import useShowToast from "./useShowToast";
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { firestore } from "../firebase/firebase";

interface SuggestedUser extends UserDoc {
  id: string;
}

const useGetSuggestedUsers = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [suggestedUsers, setSuggestedUsers] = useState<SuggestedUser[]>([]);
  const authUser = useAuthStore((state) => state.user);
  const showToast = useShowToast();

  useEffect(() => {
    const getSuggestedUsers = async () => {
      try {
        const users: SuggestedUser[] = [];
        const usersRef = collection(firestore, "users");
        const q = query(
          usersRef,
          where("uid", "not-in", [
            authUser?.uid,
            ...(authUser?.following || ""),
          ]),
          orderBy("uid"),
          limit(3)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) =>
          users.push({ ...(doc.data() as UserDoc), id: doc.id })
        );
        setSuggestedUsers(users);
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
    if (authUser) getSuggestedUsers();
  }, [authUser]);

  return { isLoading, suggestedUsers };
};

export default useGetSuggestedUsers;
