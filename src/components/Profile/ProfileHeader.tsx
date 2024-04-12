import { Avatar, Flex, Button, HStack, Text, Stack } from "@chakra-ui/react";
import useAuthStore from "../../store/authStore";

const ProfileHeader = () => {
  const authUser = useAuthStore((state) => state.user);
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
        name={authUser.fullName}
        src={authUser.profilePicUrl}
        title={authUser.fullName}
        border="2px solid gray"
        p={1}
      />
      <Flex direction="column" gap={2}>
        <Stack direction={{ base: "column", sm: "row" }} columnGap={10}>
          <Text fontWeight="bold" alignSelf={"center"}>
            {authUser.username}
          </Text>

          <Button colorScheme="gray" fontSize={{ base: 12, sm: 14, lg: 17 }}>
            Edit Profile
          </Button>
        </Stack>
        <HStack justifyContent="space-between" alignItems="center">
          <Flex>
            <Text mr={1} fontWeight="bold">
              4
            </Text>
            Posts
          </Flex>
          <Flex>
            <Text mr={1} fontWeight="bold">
              149
            </Text>
            Followers
          </Flex>
          <Flex>
            <Text mr={1} fontWeight="bold">
              46
            </Text>
            Following
          </Flex>
        </HStack>
        <Text fontWeight="bold"> {authUser.bio}</Text>
        <Text noOfLines={[2, 3]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          earum, quos
        </Text>
      </Flex>
    </Flex>
  );
};

export default ProfileHeader;
