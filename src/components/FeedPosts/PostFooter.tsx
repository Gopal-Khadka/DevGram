import {
  Flex,
  Link,
  Text,
  InputGroup,
  InputRightElement,
  Input,
  Box,
} from "@chakra-ui/react";
import { FaRegHeart, FaRegComment } from "react-icons/fa";

const PostFooter = () => {
  return (
    <Flex w="full" px={2} mt={2} direction="column" gap={2}>
      <Flex gap={4}>
        <FaRegHeart size={20} />
        <Box transform="scaleX(-1)">
          <FaRegComment size={20} />
        </Box>
      </Flex>
      <Text>1000 likes</Text>
      <Flex gap={2}>
        <Text fontWeight="bold">Gopal Khadka</Text>
        <Text>Looking fine ❤️❤️❤️</Text>
      </Flex>
      <Link as={Text} color="gray.500" _hover={{ textDecoration: "none" }}>
        View all 100 comments
      </Link>
      <InputGroup>
        <Input variant="flushed" />
        <InputRightElement color="blue.500" cursor="pointer">
          Post
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
};

export default PostFooter;
