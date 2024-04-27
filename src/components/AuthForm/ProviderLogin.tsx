import { Flex, Icon, Text } from "@chakra-ui/react";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { IconType } from "react-icons";
import { fireAuth, firestore } from "../../firebase/firebase";
import useShowToast from "../../hooks/useShowToast";
import useAuthStore from "../../store/authStore";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { UserDoc } from "../../hooks/UseSignUpWithEmailAndPass";

interface Props {
  icon: IconType;
  provider: string;
  prefix: string;
}

const ProviderLogin = ({ icon, provider, prefix }: Props) => {
  const [signInWithProvider, , , error] =
    provider === "GitHub"
      ? useSignInWithGithub(fireAuth)
      : useSignInWithGoogle(fireAuth);
  const showToast = useShowToast();
  const loginUser = useAuthStore((state) => state.login);

  const handleProviderAuth = async () => {
    try {
      const newUser = await signInWithProvider();
      if (!newUser && error) {
        return showToast({
          title: "Error",
          description: error.message,
          status: "error",
        });
      } else if (newUser) {
        const usersRef = doc(firestore, "users", newUser.user.uid);
        const userSnap = await getDoc(usersRef);
        let userDoc: UserDoc;
        if (userSnap.exists()) {
          // users has already logged in before
          userDoc = userSnap.data() as UserDoc;
        } else {
          // users has  loged in for first time
          userDoc = {
            uid: newUser?.user.uid,
            email: newUser?.user.email || "",
            username: newUser?.user.email?.split("@")[0] || "",
            fullName: newUser?.user.displayName || "",
            bio: "",
            profilePicUrl: newUser?.user.photoURL || "",
            followers: [],
            following: [],
            posts: [],
            createdAt: Date.now(),
          };
        }
        // adding it to firestore Db in collections "users"
        await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
        localStorage.setItem("user-info", JSON.stringify(userDoc));
        loginUser(userDoc); // using authStore with zustand
        return showToast({
          title: "Success",
          description: "Successful LogIn With " + provider,
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

  return (
    <Flex
      gap={2}
      alignItems="center"
      justifyContent="center"
      cursor="pointer"
      onClick={handleProviderAuth}
    >
      <Icon as={icon} boxSize={5} />
      <Text color="blue.500">
        {prefix} With {provider}
      </Text>
    </Flex>
  );
};

export default ProviderLogin;
