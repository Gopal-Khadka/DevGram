import { Tooltip, Box, Flex, Button } from "@chakra-ui/react";
import { BiLogOut } from "react-icons/bi";
import useLogOut from "../../hooks/useLogOut";
import useShowToast from "../../hooks/useShowToast";
import { Navigate } from "react-router-dom";

const LogOut = () => {
  const { handleLogOut, isLoggingOut, error } = useLogOut();
  const showToast = useShowToast();
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
        <Flex
          onClick={() => {
            handleLogOut();
            <Navigate to="/auth" />;
          }}
          alignItems="center"
          gap={4}
          p={2}
          borderRadius={6}
          _hover={{ bg: "whiteAlpha.400" }}
        >
          {<BiLogOut size={25} />}
          <Button
            display={{ base: "none", md: "flex" }}
            variant="ghost"
            _hover={{ bg: "transparent" }}
            isLoading={isLoggingOut}
          >
            LogOut
          </Button>
        </Flex>
      </Tooltip>
      {error &&
        showToast({
          title: "Error",
          description: error.message,
          status: "error",
        })}
    </Box>
  );
};

export default LogOut;
