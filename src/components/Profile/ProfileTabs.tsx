import { Flex } from "@chakra-ui/react";
import ProfilePosts from "./ProfilePosts";

const ProfileTabs = () => {
  return (
    <Flex
      my={5}
      borderTop="1px solid"
      borderColor="whiteAlpha.300"
      maxW="full"
      p={2}
    >
      <ProfilePosts />
    </Flex>
  );
};

export default ProfileTabs;
