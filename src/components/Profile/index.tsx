import {
  Container,
  Flex,
  Text,
  Link,
  SkeletonCircle,
  Skeleton,
  VStack,
} from "@chakra-ui/react";
import ProfileHeader from "./ProfileHeader";
import ProfileTabs from "./ProfileTabs";

import useGetUserProfileByUserName from "../../hooks/useGetUserProfileByUserName";
import { Link as RouterLink, useParams } from "react-router-dom";

const index = () => {
  const { username } = useParams();
  const { isLoading, userProfile } = useGetUserProfileByUserName(
    username ? username : "null"
  );

  const userNotFound = !isLoading && !userProfile;
  if (userNotFound) return <UserNotFound />;
  return (
    <Container
      maxW="container.lg"
      py={5}
      fontSize={{ base: 13, md: 14, lg: 16 }}
      w={{ base: "90%", md: "80%", lg: "60%" }}
    >
      {!isLoading && userProfile && <ProfileHeader />}
      {isLoading && <ProfileHeaderSkeleton />}
      <ProfileTabs />
    </Container>
  );
};

const UserNotFound = () => {
  return (
    <Flex flexDir="column" textAlign="center" mx="auto">
      <Text fontSize={"2xl"}>User Not Found</Text>
      <Link as={RouterLink} color={"blue.500"} to={"/"}>
        Go Home
      </Link>
    </Flex>
  );
};

const ProfileHeaderSkeleton = () => {
  return (
    <Flex
      gap={{ base: 4, sm: 10 }}
      py={10}
      flexDir={{ base: "column", sm: "row" }}
      justifyContent="center"
      alignItems="center"
    >
      <SkeletonCircle size="24" />
      <VStack
        alignItems={{ base: "center", sm: "flex-start" }}
        gap={2}
        mx={"auto"}
        flex={1}
      >
        <Skeleton height="12px" w="150px" />
        <Skeleton height="12px" w="150px" />
      </VStack>
    </Flex>
  );
};

export default index;
