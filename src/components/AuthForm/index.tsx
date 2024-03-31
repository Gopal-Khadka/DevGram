import { Box, Button, Flex, Image, Input, VStack } from "@chakra-ui/react";
import logo from "/images/logo.png";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import ProviderLogin from "./ProviderLogin";
import OrSection from "./OrSection";

const index = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
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
          <Input placeholder="Email" type="email" />
          <Input placeholder="Password" type="password" />
          {!isLogin && <Input placeholder="Confirm Password" type="password" />}
          <Button width="full" colorScheme="blue">
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
            {isLogin ? "Don't have a account yet?" : "Already have an accunt"}
          </Box>
          <Box
            color="blue.500"
            onClick={() => setIsLogin(!isLogin)}
            cursor="pointer"
          >
            {isLogin ? "Sign Up" : "Sign In"}{" "}
          </Box>
        </Flex>
      </Box>
    </form>
  );
};

export default index;
