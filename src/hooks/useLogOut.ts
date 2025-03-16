import { useSignOut } from "react-firebase-hooks/auth";
import { fireAuth } from "../firebase/firebase";
import useShowToast from "./useShowToast";
import useAuthStore from "../store/authStore";

const useLogOut = () => {
  const [signOut, isLoggingOut, error] = useSignOut(fireAuth);
  const showToast = useShowToast();
  const logOut = useAuthStore((state) => state.logout);

  const handleLogOut = async () => {
    try {
      const success = await signOut();
      if (success) {
        logOut();
      }
      localStorage.removeItem("user-info");
    } catch (error: any) {
      showToast({
        title: "Error",
        description: error.message,
        status: "error",
      });
    }
  };
  return { handleLogOut, isLoggingOut, error };
};

export default useLogOut;
