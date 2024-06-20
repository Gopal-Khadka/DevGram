import {
  Avatar,
  Flex,
  HStack,
  Skeleton,
  SkeletonCircle,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Comment } from "../../store/postStore";
import useGetUserProfileById from "../../hooks/useGetUserProfileById";
import { Link } from "react-router-dom";
import { timeAgo } from "../../utils/timeago";
interface Props {
  comment: Comment;
}

const PostComment = ({ comment }: Props) => {
  const { isLoading, userProfile } = useGetUserProfileById(comment.createdBy);
  const time = new Date();
  time.setTime(comment.createdAt).toString();
  if (isLoading) return <CommentSkeleton />;
  return (
    <HStack gap={2} w="full">
      <Link to={`/user/${userProfile?.username}`}>
        <Avatar src={userProfile?.profilePicUrl} name={userProfile?.fullName} />
      </Link>
      <VStack gap={1}>
        <HStack>
          <Link to={`/user/${userProfile?.username}`}>
            <Text fontWeight="bold">{userProfile?.username}</Text>
          </Link>
          <Text noOfLines={2}>{comment.comment}</Text>
        </HStack>
        <Text color="gray.500" alignSelf="flex-start">
          {timeAgo(comment.createdAt)} ago
        </Text>
      </VStack>
    </HStack>
  );
};

const CommentSkeleton = () => {
  return (
    <Flex gap={4} width={"full"} alignItems={"center"}>
      <SkeletonCircle h={10} w={10} />
      <Flex gap={1} flexDir={"column"}>
        <Skeleton h={2} w={100} />
        <Skeleton h={2} w={50} />
      </Flex>
    </Flex>
  );
};

export default PostComment;
