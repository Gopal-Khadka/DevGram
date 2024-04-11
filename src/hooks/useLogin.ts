import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import useShowToast from "./useShowToast";
import { fireAuth, firestore } from "../firebase/firebase";
import { query, where, getDocs, collection } from "firebase/firestore";
import useAuthStore from "../store/authStore";

export interface LoginDetails {
  email: string;
  password: string;
}
const useLogin = (inputs: LoginDetails) => {
  const [signInWithEmailAndPassword, , loading, error] =
    useSignInWithEmailAndPassword(fireAuth);
  const showToast = useShowToast();
  const setUser = useAuthStore((state) => state.setUser);
  const usersRef = collection(firestore, "users");

  const logIn = async () => {
    const emptyInput = !inputs.email || !inputs.password;

    if (emptyInput) {
      return showToast({
        title: "Error",
        description: "Please fill all the fields",
        status: "error",
      });
    }
    try {
      const existingUser = await signInWithEmailAndPassword(
        inputs.email,
        inputs.password
      );
      // checking if the user is not new
      if (!existingUser) {
        return showToast({
          title: "User doesn't exist",
          description: "Check the login details",
          status: "error",
        });
      } else {
        // adding it to firestore Db in collections "users"
        const q = query(usersRef, where("email", "==", inputs.email));
        const data = await getDocs(q);
        const userDoc = data.docs[0]._document.data.value.mapValue.fields;
        localStorage.setItem("user-info", JSON.stringify(userDoc));
        setUser<typeof userDoc>(userDoc);

        showToast({
          title: "Success!",
          description: "Successful Login",
          status: "success",
        });
      }
    } catch (error: any) {
      showToast({
        title: "Error",
        description: error.message,
        status: "error",
      });
    }
  };
  return { logIn, error, loading };
};

export default useLogin;
