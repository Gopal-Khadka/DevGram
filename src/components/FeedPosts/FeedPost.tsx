import { VStack } from "@chakra-ui/react";
import PostHeader from "./PostHeader";
import PostBody from "./PostBody";
import PostFooter from "./PostFooter";

const FeedPost = () => {
  return (
    <VStack mb={12} fontSize={{ base: 12, md: 13.5, lg: 15 }}>
      <PostHeader />
      <PostBody />
      <PostFooter />
    </VStack>
  );
};

export default FeedPost;
