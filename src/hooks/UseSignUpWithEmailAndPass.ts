import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { fireAuth, firestore } from "../firebase/firebase";
import {
  doc,
  setDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import useShowToast from "./useShowToast";
import useAuthStore from "../store/authStore";
import { Post } from "../store/postStore";

export interface SignUpDetails {
  fullName: string;
  username: string;
  email: string;
  password: string;
}
export interface UserDoc {
  uid: string;
  email: string;
  username: string;
  fullName: string;
  bio: string;
  profilePicUrl: string;
  followers: string[];
  following: string[];
  posts: Post[];
  createdAt: number;
}

function UseSignUp(inputs: SignUpDetails) {
  const [createUserWithEmailAndPassword, , loading, error] =
    useCreateUserWithEmailAndPassword(fireAuth);
  const showToast = useShowToast();
  const loginUser = useAuthStore((state) => state.login);
  const usersRef = collection(firestore, "users");

  const signUp = async () => {
    const emptyInput =
      !inputs.email || !inputs.password || !inputs.username || !inputs.fullName;

    if (emptyInput) {
      return showToast({
        title: "Error",
        description: "Please fill all the fields",
        status: "error",
      });
    }

    try {
      const q = query(usersRef, where("username", "==", inputs.username));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty)
        return showToast({
          title: "Username Error",
          description: "Username already exists",
          status: "error",
        });
      const newUser = await createUserWithEmailAndPassword(
        inputs.email,
        inputs.password
      );
      // checking if the user is not new
      if (!newUser) {
        return showToast({
          title: "Error",
          description: "Unable to create new user",
          status: "error",
        });
      }
      // if user is new and doesn't exist
      if (newUser) {
        // creating firestore document object
        const userDoc: UserDoc = {
          uid: newUser.user.uid,
          email: inputs.email,
          username: inputs.username,
          fullName: inputs.fullName,
          bio: "",
          profilePicUrl: "",
          followers: [],
          following: [],
          posts: [],
          createdAt: Date.now(),
        };
        // adding it to firestore Db in collections "users"
        await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
        localStorage.setItem("user-info", JSON.stringify(userDoc));
        loginUser(userDoc); // using authStore with zustand
        return showToast({
          title: "Success",
          description: "New account created successfully.",
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
  return { loading, error, signUp };
}

export default UseSignUp;
