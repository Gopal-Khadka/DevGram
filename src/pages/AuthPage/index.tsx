import { Container, Flex, Box, Image, VStack } from "@chakra-ui/react";
import authImage from "/images/auth.png";

import AuthForm from "../../components/AuthForm";

const index = () => {
  return (
    <Flex minH="100vh" justifyContent="center" alignItems="center" paddingX={4}>
      <Container maxWidth={"container.md"}>
        <Flex justifyContent="center" alignItems="center">
          <Box display={{ base: "none", md: "block" }}>
            <Image src={authImage} height="650px" />
          </Box>
          <VStack>
            <AuthForm />
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
};

export default index;
