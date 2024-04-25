import { Avatar, Flex, Button, HStack, Text, Stack } from "@chakra-ui/react";
import useUserProfileStore from "../../store/userProfileStore";

const ProfileHeader = () => {
  const { userProfile } = useUserProfileStore();
  return (
    <Flex
      gap={5}
      justifyContent="center"
      alignItems="center"
      py={5}
      my={3}
      direction={{ base: "column", sm: "row" }}
    >
      <Avatar
        objectFit="cover"
        size={{ base: "xl", lg: "2xl" }}
        name={userProfile.fullName}
        src={userProfile.profilePicUrl}
        title={userProfile.fullName}
        border="2px solid gray"
        p={1}
      />
      <Flex direction="column" gap={2}>
        <Stack direction={{ base: "column", sm: "row" }} columnGap={10}>
          <Text fontWeight="bold" alignSelf={"center"}>
            {userProfile.username}
          </Text>

          <Button colorScheme="gray" fontSize={{ base: 12, sm: 14, lg: 17 }}>
            Edit Profile
          </Button>
        </Stack>
        <HStack justifyContent="space-between" alignItems="center">
          <Flex>
            <Text mr={1} fontWeight="bold">
            {userProfile.posts.length}
            </Text>
            Posts
          </Flex>
          <Flex>
            <Text mr={1} fontWeight="bold">
              {userProfile.followers.length}
            </Text>
            Followers
          </Flex>
          <Flex>
            <Text mr={1} fontWeight="bold">
            {userProfile.following.length}
            </Text>
            Following
          </Flex>
        </HStack>
        <Text fontWeight="bold"> {userProfile.bio}</Text>
        <Text noOfLines={[2, 3]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          earum, quos
        </Text>
      </Flex>
    </Flex>
  );
};

export default ProfileHeader;
