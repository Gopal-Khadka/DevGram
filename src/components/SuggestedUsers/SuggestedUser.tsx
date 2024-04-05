import { Avatar, Flex, HStack, Link, Text } from "@chakra-ui/react";
interface Props {
  src: string;
  followers: string;
  name: string;
}

const SuggestedUser = ({ src, followers, name }: Props) => {
  return (
    <HStack my={2} gap={6}>
      <Flex gap={3}>
        <Avatar src={src} />
        <Flex direction="column">
          <Text fontWeight="bold">{name}</Text>
          <Text color="gray.500">{followers} Followers</Text>
        </Flex>
      </Flex>
      <Link color="blue.500" _hover={{ textDecoration: "none" }}>
        Follow
      </Link>
    </HStack>
  );
};

export default SuggestedUser;
