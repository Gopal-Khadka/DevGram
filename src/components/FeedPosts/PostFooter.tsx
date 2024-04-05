import {
  Flex,
  Link,
  Text,
  InputGroup,
  InputRightElement,
  Input,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaRegHeart, FaRegComment, FaHeart } from "react-icons/fa";

const PostFooter = () => {
  const [isLiked, setIsLiked] = useState(true);
  const [noOfLikes, setNoOfLikes] = useState(1000);

  const handleLike = () => {
    setIsLiked(!isLiked);
    isLiked ? setNoOfLikes(noOfLikes - 1) : setNoOfLikes(noOfLikes + 1);
  };

  return (
    <Flex w="full" px={2} mt={2} direction="column" gap={2}>
      <Flex gap={4}>
        <Box onClick={handleLike}>
          {isLiked ? <FaHeart size={20} /> : <FaRegHeart size={20} />}
        </Box>
        <Box transform="scaleX(-1)">
          <FaRegComment size={20} />
        </Box>
      </Flex>
      <Text>{noOfLikes} likes</Text>
      <Flex gap={2}>
        <Text fontWeight="bold">Gopal Khadka</Text>
        <Text>Looking fine ❤️❤️❤️</Text>
      </Flex>
      <Link as={Text} color="gray.500" _hover={{ textDecoration: "none" }}>
        View all {100} comments
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
