import SuggestedUser from "./SuggestedUser";
import { VStack, Text, Link, Flex, Box, Spinner } from "@chakra-ui/react";
import useGetSuggestedUsers from "../../hooks/useGetSuggestedUsers";

const index = () => {
  const { isLoading, suggestedUsers } = useGetSuggestedUsers();
  return (
    <VStack>
      <Flex justifyContent="space-between" w="full">
        <Text color={"gray"}>Suggested for you</Text>
        <Link> See All</Link>
      </Flex>
      {isLoading && <Spinner size={"xl"} />}
      {suggestedUsers.map((user) => (
        <SuggestedUser user={user} key={user.id} />
      ))}
      <Box>
        <Text>
          &copy; {new Date().getFullYear()} Built By
          <Link color="blue.500"> Gopal Khadka</Link>
        </Text>
      </Box>
    </VStack>
  );
};

export default index;
