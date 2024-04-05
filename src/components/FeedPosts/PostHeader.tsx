import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface Props {
  avatar: string;
  username: string;
}

const PostHeader = ({ avatar, username }: Props) => {
  return (
    <Flex justifyContent="space-between" alignItems="center" w="full">
      <Flex alignItems="center" gap={2}>
        <Avatar src={avatar} size="sm" />
        <Flex fontWeight="bold" gap={2}>
          <Text>{username}</Text>
          <Text color="gray.500"> 1w</Text>
        </Flex>
      </Flex>
      <Box
        cursor="pointer"
        color="blue.500"
        fontWeight="bold"
        _hover={{ color: "white" }}
        transition="0.2s ease-in-out"
      >
        <Text>Unfollow</Text>
      </Box>
    </Flex>
  );
};

export default PostHeader;
