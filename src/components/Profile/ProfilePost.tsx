import {
  Avatar,
  Box,
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

interface Props {
  img: string;
}

const commentsList = [1, 2, 3, 4, 5, 6, 7, 8];

const ProfilePost = ({ img }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
            <Text>{Math.floor(Math.random() * 100)}</Text>
          </HStack>
          <HStack>
            <FaComment />
            <Text>{Math.floor(Math.random() * 100)}</Text>
          </HStack>
        </Flex>
        <Image src={img} height={"300px"} objectFit={"cover"} w="full" />
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
            <Flex gap={6}>
              <Box overflow="hidden" flex={1.5}>
                <Image
                  src={img}
                  alt="profile post"
                  w="full"
                  objectFit="cover"
                  h="full"
                  borderRadius={5}
                />
              </Box>
              <Flex direction="column" gap={3} flex={1}>
                <HStack gap={5} borderBottom="1px solid gray" pb={2}>
                  <Avatar src="/images/profilepic.png" />
                  <Text fontWeight={"bold"}>gopu-gophu </Text>
                  <FaTrash />
                </HStack>
                <VStack gap={2} overflow="auto" maxH="300px">
                  {commentsList.map((comment) => (
                    <PostComment
                      key={comment}
                      comment="Nice picture"
                      image={img}
                      time="12h"
                      username="@amenza"
                    />
                  ))}
                </VStack>
                <Flex mt="auto">
                  <PostFooter />
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
