import { Container, Flex, Box, Image, VStack } from "@chakra-ui/react";
import authImage from "/images/auth.png";

const index = () => {
  return (
    <Flex minH="100vh" justifyContent="center" alignItems="center" paddingX={4}>
      <Container maxWidth={"container.md"}>
        <Box display={{ base: "none", md: "block" }}>
          <Image src={authImage} height="650px" />
        </Box>
        <VStack>{/* Authentication Form */}</VStack>
      </Container>
    </Flex>
  );
};

export default index;
