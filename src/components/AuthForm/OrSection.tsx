import { Flex, Box, Text } from "@chakra-ui/react";

const OrSection = () => {
  return (
    <Flex alignItems="center" w="full" justifyContent="center" gap={5}>
      <Box flex={2} height="1px" bg="white"></Box>
      <Text>OR</Text>
      <Box flex={2} height="1px" bg="white"></Box>
    </Flex>
  );
};

export default OrSection;
