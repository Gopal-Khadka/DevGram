import { Flex, Image, Button, Container } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useAuthStore from "../../store/authStore";

const NavBar = () => {
  const setIsLogin = useAuthStore((state) => state.setIsLogin);
  return (
    <Container pt={5} size="container.lg">
      <Flex
        w="full"
        justifyContent={{ base: "center", sm: "space-between" }}
        alignItems="center"
      >
        <Image src="/images/logo.png" h="10" cursor="pointer" />
        <Flex gap={4}>
          <Link to="/auth" onClick={() => setIsLogin(true)}>
            <Button colorScheme="blue" size="sm">
              Login
            </Button>
          </Link>
          <Link to="/auth" onClick={() => setIsLogin(false)}>
            <Button variant="outline" size="sm">
              SignUp
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Container>
  );
};

export default NavBar;
