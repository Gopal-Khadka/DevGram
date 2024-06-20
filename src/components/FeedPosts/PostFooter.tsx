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
import { useRef, useState } from "react";
import { FaRegHeart, FaRegComment, FaHeart } from "react-icons/fa";
import { Post } from "../../store/postStore";
import usePostComment from "../../hooks/usePostComment";
import useAuthStore from "../../store/authStore";
import useLikePost from "../../hooks/useLikePost";

interface Props {
  post: Post;
}

const PostFooter = ({ post }: Props) => {
  const { isCommenting, handlePostComment } = usePostComment();
  const [comment, setComment] = useState(" ");
  const { user: authUser } = useAuthStore();
  const inputRef = useRef<HTMLInputElement>(null);
  const { likes, isLiked, handleLikePost, isUpdating } = useLikePost(post);

  const handleSubmitComment = async () => {
    handlePostComment(post.id || "", comment);
    setComment(" ");
  };

  return (
    <Flex w="full" px={2} mt={2} direction="column" gap={2}>
      <Flex gap={4}>
        <Button
          onClick={handleLikePost}
          _hover={{ bg: "none" }}
          bg={"none"}
          isDisabled={isUpdating}
        >
          {isLiked ? <FaHeart size={20} /> : <FaRegHeart size={20} />}
        </Button>
        <Box transform="scaleX(-1)">
          <FaRegComment size={20} onClick={() => inputRef.current?.focus} />
        </Box>
      </Flex>
      <Text>{likes} likes</Text>
      <Link as={Text} color="gray.500" _hover={{ textDecoration: "none" }}>
        View all comments
      </Link>
      {authUser && (
        <InputGroup paddingY={2}>
          <Input
            variant="flushed"
            onChange={(e) => setComment(e.target.value)}
            value={comment}
            ref={inputRef}
          />
          <InputRightElement>
            <Button
              color="blue.500"
              cursor="pointer"
              onClick={handleSubmitComment}
              isLoading={isCommenting}
              paddingX={8}
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
