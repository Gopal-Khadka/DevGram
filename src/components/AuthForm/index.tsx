import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Flex,
  Image,
  VStack,
} from "@chakra-ui/react";
import logo from "/images/logo.png";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import ProviderLogin from "./ProviderLogin";
import OrSection from "./OrSection";
import SignUp from "./SignUp";
import Login from "./Login";

const Index = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState(false);

  return (
    <>
      {error && (
        <Alert status="error" borderRadius={10}>
          <AlertIcon />
          <AlertTitle>Login Error.</AlertTitle>
          <AlertDescription>Check Login details properly</AlertDescription>
        </Alert>
      )}

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
          <ProviderLogin icon={FcGoogle} provider="Google" />
          <ProviderLogin icon={FaGithub} provider="GitHub" />
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

export default Index;
