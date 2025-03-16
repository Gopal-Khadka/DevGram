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
import { UserDoc } from "../../hooks/UseSignUpWithEmailAndPass";
import useUserProfileStore from "../../store/userProfileStore";
import { timeAgo } from "../../utils/timeago";

interface Props {
  post: Post;
  creatorProfile: UserDoc | null;
}

const PostFooter = ({ post, creatorProfile }: Props) => {
  const { isCommenting, handlePostComment } = usePostComment();
  const [comment, setComment] = useState(" ");
  const { user: authUser } = useAuthStore();
  const { userProfile } = useUserProfileStore();
  const inputRef = useRef<HTMLInputElement>(null);
  const { likes, isLiked, handleLikePost } = useLikePost(post);
  const isProfilePage = authUser?.uid == userProfile?.uid;

  const handleSubmitComment = async () => {
    handlePostComment(post.id || "", comment);
    setComment(" ");
  };

  return (
    <Flex w="full" px={2} mt={2} direction="column" gap={2}>
      <Flex gap={4}>
        <Box onClick={handleLikePost}>
          {isLiked ? <FaHeart size={20} /> : <FaRegHeart size={20} />}
        </Box>
        <Box transform="scaleX(-1)">
          <FaRegComment size={20} onClick={() => inputRef.current?.focus()} />
        </Box>
      </Flex>
      <Text>{likes} likes</Text>

      {!isProfilePage && (
        <>
          <Text fontSize={"sm"} fontWeight={"700"}>
            {creatorProfile?.username}
            <Text as={"span"} fontWeight={"400"}>
              {" "}
              {post.caption}
            </Text>
          </Text>
          {post.comments.length > 0 && (
            <Link
              as={Text}
              color="gray.500"
              _hover={{ textDecoration: "none" }}
            >
              View all {post.comments.length} comments
            </Link>
          )}
        </>
      )}
      {isProfilePage && (
        <Text fontSize={"12"} color={"gray"}>
          Posted {timeAgo(post.createdAt)}
        </Text>
      )}
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
