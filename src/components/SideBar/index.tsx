import { Box, Flex } from "@chakra-ui/react";
import SideBarLogo from "./SideBarLogo";
import SideBarItems from "./SideBarItems";

const Index = () => (
  <Box
    height="100vh"
    borderRight="1px solid"
    borderColor={"whiteAlpha.300"}
    py={8}
    position="sticky"
    top={0}
    left={0}
    px={{ base: 2, md: 4 }}
  >
    <Flex
      direction="column"
      gap={10}
      w="full"
      h="full"
      pl={2}
      alignItems="center"
    >
      <SideBarLogo />
      <SideBarItems />
    </Flex>
  </Box>
);

export default Index;
