import {
  Flex,
  Link,
  Text,
  InputGroup,
  InputRightElement,
  Input,
  Box,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaRegHeart, FaRegComment, FaHeart } from "react-icons/fa";
import { Post } from "../../store/postStore";
import usePostComment from "../../hooks/usePostComment";
import useAuthStore from "../../store/authStore";

interface Props {
  post: Post;
}

const PostFooter = ({ post }: Props) => {
  const [isLiked, setIsLiked] = useState(true);
  const [noOfLikes, setNoOfLikes] = useState(1000);
  const { isCommenting, handlePostComment } = usePostComment();
  const [comment, setComment] = useState(" ");
  const { user: authUser } = useAuthStore();

  const handleLike = () => {
    setIsLiked(!isLiked);
    isLiked ? setNoOfLikes(noOfLikes - 1) : setNoOfLikes(noOfLikes + 1);
  };

  const handleSubmitComment = async () => {
    console.log(comment);

    handlePostComment(post.id || "", comment);
    setComment(" ");
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
      <Link as={Text} color="gray.500" _hover={{ textDecoration: "none" }}>
        View all comments
      </Link>
      {authUser && (
        <InputGroup>
          <Input
            variant="flushed"
            onChange={(e) => setComment(e.target.value)}
            value={comment}
          />
          <InputRightElement>
            <Button
              color="blue.500"
              cursor="pointer"
              onClick={handleSubmitComment}
              isLoading={isCommenting}
            >
              Post
            </Button>
          </InputRightElement>
        </InputGroup>
      )}
    </Flex>
  );
};

export default PostFooter;
