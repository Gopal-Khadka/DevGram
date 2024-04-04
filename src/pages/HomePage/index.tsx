import { Box, Container, Flex } from "@chakra-ui/react";
import FeedPosts from "../../components/FeedPosts";

const HomePage = () => {
  return (
    <Container maxW="container.lg">
      <Flex gap={20}>
        <Box flex={2} py={7}>
          <FeedPosts />
        </Box>
        <Box flex={3} maxW={"250px"} display={{ base: "none", lg: "block" }}>
          Suggested Users
        </Box>
      </Flex>
    </Container>
  );
};

export default HomePage;
