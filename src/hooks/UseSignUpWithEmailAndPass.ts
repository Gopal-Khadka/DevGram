import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { fireAuth, firestore } from "../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import useShowToast from "./useShowToast";

export interface SignUpDetails {
  fullName: string;
  username: string;
  email: string;
  password: string;
}

function UseSignUp(inputs: SignUpDetails) {
  const [createUserWithEmailAndPassword, , loading, error] =
    useCreateUserWithEmailAndPassword(fireAuth);
  const showToast = useShowToast();

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
        const userDoc = {
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
