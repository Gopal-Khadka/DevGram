import { Avatar, HStack, VStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { timeAgo } from "../../utils/timeago";
import { Post } from "../../store/postStore";
import useUserProfileStore from "../../store/userProfileStore";

interface Props {
  post: Post;
}

const Caption = ({ post }: Props) => {
  const { userProfile } = useUserProfileStore();
  return (
    <HStack gap={2} w="full" color={"blue.400"} mb={5}>
      <Link to={`/user/${userProfile?.username}`}>
        <Avatar src={userProfile?.profilePicUrl} name={userProfile?.fullName} />
      </Link>
      <VStack gap={1}>
        <HStack>
          <Link to={`/user/${userProfile?.username}`}>
            <Text fontWeight="bold">{userProfile?.username}</Text>
          </Link>
          <Text noOfLines={2}>{post.caption}</Text>
        </HStack>
        <Text color="gray.500" alignSelf="flex-start">
          {timeAgo(post.createdAt)}
        </Text>
      </VStack>
    </HStack>
  );
};

export default Caption;
