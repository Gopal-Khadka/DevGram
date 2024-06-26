import { Box, Flex, Show } from "@chakra-ui/react";
import SideBar from "../../components/SideBar";
import { useLocation } from "react-router-dom";

interface Props {
  children: JSX.Element;
}

const PageLayout = ({ children }: Props) => {
  const { pathname } = useLocation();
  return (
    <Flex>
      <Show above="sm">
        <Box w={{ base: "70px", md: "200px" }}>
          {pathname !== "/auth" && <SideBar />}
        </Box>
      </Show>
      <Box flex={1} w={{ base: "calc(100%-70px)", md: "calc(100%-200px)" }}>
        {children}
      </Box>
    </Flex>
  );
};

export default PageLayout;
