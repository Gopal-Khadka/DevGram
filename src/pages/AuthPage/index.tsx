import { Container, Flex, Box, Image, VStack } from "@chakra-ui/react";
import authImage from "/images/auth.jpg";

import AuthForm from "../../components/AuthForm";

const index = () => {
  return (
    <Flex minH="100vh" justifyContent="center" alignItems="center" paddingX={4}>
      <Container maxWidth={"container.md"}>
        <Flex justifyContent="center" alignItems="center" gap={5}>
          <Box display={{ base: "none", md: "block" }}>
            <Image src={authImage} height="full" borderRadius={10} />
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
