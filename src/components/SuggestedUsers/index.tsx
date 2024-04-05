import SuggestedUser from "./SuggestedUser";
import { VStack, Text, Link, Flex, Box } from "@chakra-ui/react";

const index = () => {
  return (
    <VStack>
      <Flex justifyContent="space-between" w="full">
        <Text color={"gray"}>Suggested for you</Text>
        <Link> See All</Link>
      </Flex>
      <SuggestedUser
        src="/images/img1.png"
        name="Sai Pallavi"
        followers="1669"
      />
      <SuggestedUser
        src="/images/img2.png"
        name="Gopal Khadka"
        followers="648"
      />
      <SuggestedUser
        src="/images/img3.png"
        name="Marilyn Munroe"
        followers="689"
      />
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
