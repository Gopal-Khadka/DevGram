import { Box, Flex } from "@chakra-ui/react";
import SideBar from "../../components/SideBar";
import { useLocation } from "react-router-dom";

interface Props {
  children: JSX.Element;
}

const index = ({ children }: Props) => {
  const { pathname } = useLocation();
  return (
    <Flex>
      <Box w={{ base: "70px", md: "240px" }}>
        {pathname !== "/auth" && <SideBar />}
      </Box>
      <Box flex={1} w={{ base: "calc(100%-70px)", md: "calc(100%-240px)" }}>
        {children}
      </Box>
    </Flex>
  );
};

export default index;
