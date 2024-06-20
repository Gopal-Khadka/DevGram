import { Avatar, HStack, Text, VStack } from "@chakra-ui/react";
import { Comment } from "../../store/postStore";
interface Props {
  comment: Comment;
}

const PostComment = ({ comment }: Props) => {
  return (
    <HStack gap={2} w="full">
      {/* <Avatar src={image} name={username} /> */}
      <VStack gap={1}>
        <HStack>
          {/* <Text fontWeight="bold">{username}</Text> */}
          <Text noOfLines={2}>{comment.comment}</Text>
        </HStack>
        <Text color="gray.500" alignSelf="flex-start">
          {/* {time} ago */}
        </Text>
      </VStack>
    </HStack>
  );
};

export default PostComment;
