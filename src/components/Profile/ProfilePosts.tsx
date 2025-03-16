import { Flex, SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import ProfilePost from "./ProfilePost";
import useGetUserPosts from "../../hooks/useGetUserPosts";

const skeletonItems = [1, 2, 3, 4, 5, 6];

const ProfilePosts = () => {
  const { isLoading, posts } = useGetUserPosts();
  const noPostsFound = !isLoading && posts.length == 0;
  if (noPostsFound) return <NoPostFound />;
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={3}>
      {isLoading ? (
        skeletonItems.map((item) => (
          <Skeleton height="300px" borderRadius={5} key={item} />
        ))
      ) : (
        <>
          {posts.map((post,idx) => (
            <ProfilePost key={idx} post={post}  />
          ))}
        </>
      )}
    </SimpleGrid>
  );
};

export default ProfilePosts;

const NoPostFound = () => {
  return (
    <Flex textAlign="center" mx="auto" mt={10}>
      <Text fontSize={"2xl"}> No Posts Found 🤔</Text>
    </Flex>
  );
};
