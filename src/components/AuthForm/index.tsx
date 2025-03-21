import { Box, Flex, Image, VStack } from "@chakra-ui/react";
import logo from "/images/logo.png";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import ProviderLogin from "./ProviderLogin";
import OrSection from "./OrSection";
import SignUp from "./SignUp";
import Login from "./Login";
import useAuthStore from "../../store/authStore";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(
    useAuthStore((state) => state.isLogin)
  );
  const prefix = isLogin ? "Log in" : "Sign Up";
  return (
    <>
      {/* First box */}
      <Box>
        <VStack
          spacing={3}
          fontSize={14}
          border="1px solid gray"
          padding={5}
          borderRadius={10}
        >
          {/* Logo Image */}
          <Image src={logo} />
          {isLogin ? <Login /> : <SignUp />}
          {/* OR Section */}
          <OrSection />
          {/* Login With Providers */}
          <ProviderLogin icon={FcGoogle} provider="Google" prefix={prefix} />
          <ProviderLogin icon={FaGithub} provider="GitHub" prefix={prefix} />
        </VStack>
      </Box>
      {/* Second box */}
      <Box
        fontSize={14}
        border="1px solid gray"
        padding={5}
        borderRadius={10}
        mt={5}
      >
        <Flex justifyContent="center" alignItems="center" gap={2}>
          <Box>
            {isLogin ? "Don't have a account yet?" : "Already have an account"}
          </Box>
          <Box
            color="blue.500"
            onClick={() => setIsLogin(!isLogin)}
            cursor="pointer"
          >
            {isLogin ? "Sign Up" : "Sign In"}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AuthForm;
