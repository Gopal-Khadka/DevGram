import { Avatar, Box, Button, Flex, Text } from "@chakra-ui/react";
import { Post } from "../../store/postStore";
import { UserDoc } from "../../hooks/UseSignUpWithEmailAndPass";
import { timeAgo } from "../../utils/timeago";
import { Link } from "react-router-dom";
import useFollowUser from "../../hooks/useFollowUser";

interface Props {
  post: Post;
  userProfile: UserDoc | null;
}

const PostHeader = ({ post, userProfile }: Props) => {
  const { handleFollowUser, isFollowing, isUpdating } = useFollowUser(
    post.createdBy
  );

  return (
    <Flex justifyContent="space-between" alignItems="center" w="full">
      <Flex alignItems="center" gap={2}>
        <Link to={`/user/${userProfile?.username}`}>
          <Avatar src={userProfile?.profilePicUrl} size="sm" />
        </Link>
        <Flex fontWeight="bold" gap={2}>
          <Link to={`/user/${userProfile?.username}`}>
            <Text>{userProfile?.username}</Text>
          </Link>
          <Text color="gray.500"> {timeAgo(post.createdAt)}</Text>
        </Flex>
      </Flex>
      <Box
        cursor="pointer"
        color="blue.500"
        fontWeight="bold"
        _hover={{ color: "white" }}
        transition="0.2s ease-in-out"
      >
        <Button onClick={handleFollowUser} isLoading={isUpdating}>
          {isFollowing ? "Unfollow" : "Follow"}
        </Button>
      </Box>
    </Flex>
  );
};

export default PostHeader;
