import { Container } from "@chakra-ui/react";
import ProfileHeader from "./ProfileHeader";
import ProfileTabs from "./ProfileTabs";
import useAuthStore from "../../store/authStore";

const index = () => {
  const authUser = useAuthStore((state) => state.user);

  return (
    <Container
      maxW="container.lg"
      py={5}
      fontSize={{ base: 13, md: 14, lg: 16 }}
      w={{ base: "90%", md: "80%", lg: "60%" }}
    >
      {authUser && <ProfileHeader />}
      <ProfileTabs />
    </Container>
  );
};

export default index;
