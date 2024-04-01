import { Box } from "@chakra-ui/react";
import SideBarLogo from "./SideBarLogo";

const index = () => (
  <Box
    height="100vh"
    borderRight="1px solid"
    borderColor={"whiteAlpha.300"}
    py="8"
    position="sticky"
    top={0}
    left={0}
    px={{ base: 2, md: 4 }}
  >
    <SideBarLogo />
  </Box>
);

export default index;
