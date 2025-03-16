import { Container, Text } from "@chakra-ui/react";
import FeedPost from "./FeedPost";
import useGetFeedPosts from "../../hooks/useGetFeedPosts";

const index = () => {
  const { isLoading, posts } = useGetFeedPosts();

  return (
    <Container maxW="container.sm" py={10} px={2}>
      {!isLoading &&
        posts.length > 0 &&
        posts.map((post) => <FeedPost key={post.id} post={post}></FeedPost>)}
      {!isLoading && posts.length == 0 && (
        <>
          <Text fontSize={"md"} color={"red.400"}>
            Dayuum. Looks like you don&apos;t have any friends with posts.
          </Text>
          <Text color={"red.400"}>Stop coding and go make some!!</Text>
        </>
      )}
    </Container>
  );
};

export default index;
