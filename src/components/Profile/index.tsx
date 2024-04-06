import { Container } from "@chakra-ui/react";
import ProfileHeader from "./ProfileHeader";
import ProfileTabs from "./ProfileTabs";

const index = () => {
  return (
    <Container
      maxW="container.lg"
      py={5}
      fontSize={{ base: 13, md: 14, lg: 16 }}
    >
      <ProfileHeader />
      <ProfileTabs />
    </Container>
  );
};

export default index;
