import { Box, Flex, Show } from "@chakra-ui/react";
import SideBar from "../../components/SideBar";
import { useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { fireAuth } from "../../firebase/firebase";
import NavBar from "../../components/NavBar";

interface Props {
  children: JSX.Element;
}

const PageLayout = ({ children }: Props) => {
  // SideBar should only be visible if the user is logged and it is not auth page
  // Even if the user is logged out, they should be able to see others profile but not react to it
  const { pathname } = useLocation();
  const [user, loading, error] = useAuthState(fireAuth);
  const canRenderSidebar = pathname !== "/auth" && user;
  const canRenderNavBar = !loading && !user && pathname !== "/auth";

  return (
    <Flex flexDir={canRenderNavBar ? "column" : "row"}>
      <Show above="sm">
        <Box w={{ base: "70px", md: "200px" }}>
          {canRenderSidebar && <SideBar />}
        </Box>
      </Show>
      {canRenderNavBar && <NavBar />}
      <Box flex={1} w={{ base: "calc(100%-70px)", md: "calc(100%-200px)" }}>
        {children}
      </Box>
    </Flex>
  );
};

export default PageLayout;
