import { VStack } from "@chakra-ui/react";
import PostHeader from "./PostHeader";
import PostBody from "./PostBody";
import PostFooter from "./PostFooter";
import { useEffect, useState } from "react";
import SkeletonFeed from "./SkeletonFeed";

interface Props {
  avatar: string;
  username: string;
  image: string;
}

const FeedPost = ({ avatar, username, image }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {isLoading ? (
        <SkeletonFeed />
      ) : (
        <VStack mb={12} fontSize={{ base: 12, md: 13.5, lg: 15 }}>
          <PostHeader avatar={avatar} username={username} />
          <PostBody image={image} />
          <PostFooter />
        </VStack>
      )}
    </>
  );
};

export default FeedPost;
