import { Flex, HStack, Text } from "@chakra-ui/react";
import ProfilePosts from "./ProfilePosts";
import { BsGrid3X3, BsBookmark, BsHeart } from "react-icons/bs";

const ProfileTabs = () => {
  return (
    <Flex
      my={5}
      borderTop="1px solid"
      borderColor="whiteAlpha.300"
      maxW="full"
      p={2}
      direction="column"
    >
      <Flex py={2} justifyContent="space-evenly" w="full" mb={1}>
        <HStack alignItems="center" gap={1}>
          <BsGrid3X3 />
          <Text fontWeight="bold">POSTS</Text>
        </HStack>
        <HStack alignItems="center" gap={1}>
          <BsBookmark />
          <Text fontWeight="bold">SAVED</Text>
        </HStack>
        <HStack alignItems="center" gap={1}>
          <BsHeart />
          <Text fontWeight="bold">LIKES</Text>
        </HStack>
      </Flex>
      <ProfilePosts />
    </Flex>
  );
};

export default ProfileTabs;
