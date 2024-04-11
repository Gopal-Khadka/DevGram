import { useSignOut } from "react-firebase-hooks/auth";
import { fireAuth } from "../firebase/firebase";
import useShowToast from "./useShowToast";

const useLogOut = () => {
  const [signOut, isLoggingOut, error] = useSignOut(fireAuth);
  const showToast = useShowToast();

  const handleLogOut = async () => {
    try {
      const success = await signOut();
      if (success) {
        alert("You are logged out.");
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
