import { VStack } from "@chakra-ui/react";
import PostHeader from "./PostHeader";
import PostBody from "./PostBody";
import PostFooter from "./PostFooter";

interface Props {
  avatar: string;
  username: string;
  image: string;
}

const FeedPost = ({ avatar, username, image }: Props) => {
  return (
    <VStack mb={12} fontSize={{ base: 12, md: 13.5, lg: 15 }}>
      <PostHeader avatar={avatar} username={username} />
      <PostBody image={image} />
      <PostFooter />
    </VStack>
  );
};

export default FeedPost;
