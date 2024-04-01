import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Flex,
  Image,
  Input,
  VStack,
} from "@chakra-ui/react";
import logo from "/images/logo.png";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import ProviderLogin from "./ProviderLogin";
import OrSection from "./OrSection";
import { useNavigate } from "react-router-dom";

interface LoginDetails {
  email: string;
  password: string;
  confirm_password: string;
}

const index = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const [loginDetails, setLoginDetails] = useState<LoginDetails>({
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleAuth = () => {
    if (!(loginDetails.password || loginDetails.email)) {
      setError(true);
      return;
    }
    navigate("/");
  };
  return (
    <>
      {error && (
        <Alert status="error" borderRadius={10}>
          <AlertIcon />
          <AlertTitle>Login Error.</AlertTitle>
          <AlertDescription>Check Login details properly</AlertDescription>
        </Alert>
      )}
      <form onSubmit={(e) => e.preventDefault()}>
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
            <Input
              placeholder="Email"
              type="email"
              value={loginDetails.email}
              onChange={(e) =>
                setLoginDetails({ ...loginDetails, email: e.target.value })
              }
            />
            <Input
              placeholder="Password"
              type="password"
              value={loginDetails.password}
              onChange={(e) =>
                setLoginDetails({ ...loginDetails, password: e.target.value })
              }
            />
            {!isLogin && (
              <Input
                placeholder="Confirm Password"
                type="password"
                value={loginDetails.confirm_password}
                onChange={(e) =>
                  setLoginDetails({
                    ...loginDetails,
                    confirm_password: e.target.value,
                  })
                }
              />
            )}
            <Button width="full" colorScheme="blue" onClick={handleAuth}>
              {isLogin ? "Log In" : "Sign Up"}
            </Button>
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
              {isLogin
                ? "Don't have a account yet?"
                : "Already have an account"}
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
      </form>
    </>
  );
};

export default index;
