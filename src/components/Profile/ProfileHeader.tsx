import { Avatar, Flex, Button, HStack, Text } from "@chakra-ui/react";

const ProfileHeader = () => {
  return (
    <Flex
      gap={5}
      justifyContent="center"
      py={5}
      my={3}
      w={{ base: "full", md: "80%", lg: "60%" }}
    >
      <Avatar
        size={{ base: "lg", md: "xl", lg: "2xl" }}
        name="Gopal Khadka"
        src="/images/img2.png"
      />
      <Flex direction="column" gap={2}>
        <HStack gap="10">
          <Text fontWeight="bold">gopu-ghopu</Text>
          <Button colorScheme="gray" fontSize={{ base: 13, md: 14, lg: 16 }}>
            Edit Profile
          </Button>
        </HStack>
        <HStack justifyContent="space-between" alignItems="center">
          <Flex>
            <Text mr={2} fontWeight="bold">
              4
            </Text>
            Posts
          </Flex>
          <Flex>
            <Text mr={2} fontWeight="bold">
              149
            </Text>
            Followers
          </Flex>
          <Flex>
            <Text mr={2} fontWeight="bold">
              46
            </Text>
            Following
          </Flex>
        </HStack>
        <Text fontWeight="bold"> I am a developer</Text>
        <Text noOfLines={[1, 2]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          earum, quos incidunt quia itaque aut magni magnam dignissimos deleniti
          repudiandae accusamus! Hic doloribus, quis ipsum asperiores obcaecati
          tempora eligendi quidem?
        </Text>
      </Flex>
    </Flex>
  );
};

export default ProfileHeader;
