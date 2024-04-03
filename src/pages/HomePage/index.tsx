import { Box, Container, Flex } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Container maxW="container.lg">
      <Flex gap={20}>
        <Box flex={2} border={"1px red solid"} py={10}>
          FeedPosts
        </Box>
        <Box
          flex={3}
          mr={10}
          maxW={"300px"}
          border={"1px red solid"}
          display={{ base: "none", lg: "block" }}
        >
          Suggested Users
        </Box>
      </Flex>
    </Container>
  );
};

export default HomePage;
