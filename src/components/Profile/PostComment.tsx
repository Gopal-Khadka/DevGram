import { Avatar, HStack, Text, VStack } from "@chakra-ui/react";
interface Props {
  username: string;
  image: string;
  comment: string;
  time: string;
}

const PostComment = ({ username, image, comment, time }: Props) => {
  return (
    <HStack gap={2} w="full">
      <Avatar src={image} name={username} />
      <VStack gap={1}>
        <HStack>
          <Text fontWeight="bold">{username}</Text>
          <Text>{comment}</Text>
        </HStack>
        <Text color="gray.500" alignSelf="flex-start">
          {time} ago
        </Text>
      </VStack>
    </HStack>
  );
};

export default PostComment;
