import { Container } from "@chakra-ui/react";
import FeedPost from "./FeedPost";
import useGetFeedPosts from "../../hooks/useGetFeedPosts";

const index = () => {
  const { isLoading, posts } = useGetFeedPosts();

  return (
    <Container maxW="container.sm" py={10} px={2}>
      {!isLoading &&
        posts.length > 0 &&
        posts.map((post) => <FeedPost key={post.id} post={post}></FeedPost>)}
    </Container>
  );
};

export default index;
