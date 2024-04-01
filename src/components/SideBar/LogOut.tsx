import { Link, Tooltip, Text, Box } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";

const LogOut = () => {
  return (
    <Box cursor="pointer" mt={10}>
      <Tooltip
        hasArrow
        label={"LogOut"}
        placement="right"
        ml={1}
        openDelay={500}
        display={{ base: "block", md: "none" }}
      >
        <Link
          as={RouterLink}
          to={"/auth"}
          display="flex"
          alignItems="center"
          gap={4}
          p={2}
          borderRadius={6}
          _hover={{ bg: "whiteAlpha.400" }}
        >
          {<BiLogOut size={25} />}
          <Text display={{ base: "none", md: "flex" }}>LogOut</Text>
        </Link>
      </Tooltip>
    </Box>
  );
};

export default LogOut;
