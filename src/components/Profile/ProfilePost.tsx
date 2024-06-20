import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";

import { FaHeart, FaComment, FaTrash } from "react-icons/fa";
import PostComment from "./PostComment";
import PostFooter from "../FeedPosts/PostFooter";
import usePostStore, { Post } from "../../store/postStore";
import useUserProfileStore from "../../store/userProfileStore";
import useAuthStore from "../../store/authStore";
import useShowToast from "../../hooks/useShowToast";
import { deleteObject, ref } from "firebase/storage";
import { fireStorage, firestore } from "../../firebase/firebase";
import { arrayRemove, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { useState } from "react";

interface Props {
  post: Post;
}

const ProfilePost = ({ post }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { userProfile } = useUserProfileStore();
  const { user: authUser } = useAuthStore();
  const showToast = useShowToast();
  const [isDeleting, setIsDeleting] = useState(false);
  const { deletePost } = usePostStore();
  const deletePostFromProfile = useUserProfileStore(
    (state) => state.deletePost
  );

  const handleDeletePost = async () => {
    if (isDeleting) return;
    setIsDeleting(true);
    if (!window.confirm("Are you sure you want to delete this post?")) return;
    try {
      const imageRef = ref(fireStorage, `posts/${post?.id}`);
      await deleteObject(imageRef);

      const userRef = doc(firestore, "users", authUser?.uid || "");
      console.log(userRef);

      await updateDoc(userRef, {
        posts: arrayRemove(post?.id),
      });
      await deleteDoc(doc(firestore, "posts", post.id || ""));

      deletePost(post?.id || null);
      deletePostFromProfile(post.id || "");
      showToast({
        title: "Success",
        description: "Post deleted successfully",
        status: "success",
      });
    } catch (error: any) {
      showToast({
        title: "Error",
        description: error.message,
        status: "error",
      });
    }
    setIsDeleting(false);
  };

  return (
    <>
      <Box
        cursor="pointer"
        borderRadius={8}
        overflow="hidden"
        pos="relative"
        onClick={onOpen}
      >
        <Flex
          w="full"
          h="full"
          pos={"absolute"}
          zIndex={1}
          transition="all 0.3s ease"
          justifyContent="center"
          alignItems="center"
          gap={5}
          opacity={0}
          _hover={{ opacity: 1 }}
          bg={"blackAlpha.700"}
        >
          <HStack>
            <FaHeart />
            <Text>{post.likes.length}</Text>
          </HStack>
          <HStack>
            <FaComment />
            <Text>{post.comments.length}</Text>
          </HStack>
        </Flex>
        <Image
          src={post.imageURL}
          height={"300px"}
          objectFit={"cover"}
          w="full"
          transform={"scale(1.3)"}
        />
      </Box>

      <Modal
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        closeOnEsc
        size={{ md: "xl", lg: "4xl" }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody p={5} bg="#1a202c" borderRadius={8}>
            <Flex gap={6} maxH="90vh" minH="50vh">
              <Box overflow="hidden" flex={1.5} maxH="600px">
                <Image
                  src={post.imageURL}
                  alt="profile post"
                  w="full"
                  objectFit="cover"
                  h="full"
                  borderRadius={5}
                />
              </Box>
              <Flex direction="column" gap={3} flex={1}>
                <HStack gap={5} borderBottom="1px solid gray" pb={2}>
                  <Avatar
                    src={userProfile?.profilePicUrl}
                    name={userProfile?.fullName}
                    title={userProfile?.fullName}
                  />
                  <Text fontWeight={"bold"}>{userProfile?.username} </Text>
                  {post.createdBy == authUser?.uid && (
                    <Button
                      size="sm"
                      bg="transparent"
                      _hover={{ bg: "whiteAlpha.300", color: "red.600" }}
                      borderRadius={4}
                      p={1}
                      onClick={handleDeletePost}
                      isLoading={isDeleting}
                    >
                      <FaTrash />
                    </Button>
                  )}
                </HStack>
                <VStack gap={2} overflow="auto" maxH="300px">
                  {post.comments.map((comment, idx) => (
                    <PostComment key={idx} comment={comment} />
                  ))}
                </VStack>
                <Flex mt="auto">
                  <PostFooter post={post} />
                </Flex>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfilePost;
