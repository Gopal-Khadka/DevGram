import { VStack } from "@chakra-ui/react";
import PostHeader from "./PostHeader";
import PostBody from "./PostBody";
import PostFooter from "./PostFooter";
import SkeletonFeed from "./SkeletonFeed";
import { Post } from "../../store/postStore";
import useGetUserProfileById from "../../hooks/useGetUserProfileById";

interface Props {
  post: Post;
}

const FeedPost = ({ post }: Props) => {
  const { userProfile, isLoading } = useGetUserProfileById(post.createdBy);

  return (
    <>
      {isLoading ? (
        <SkeletonFeed />
      ) : (
        <VStack mb={12} fontSize={{ base: 13.5, md: 15, lg: 17 }}>
          <PostHeader post={post} userProfile={userProfile} />
          <PostBody image={post.imageURL || ""} />
          <PostFooter post={post} creatorProfile={userProfile} />
        </VStack>
      )}
    </>
  );
};

export default FeedPost;
