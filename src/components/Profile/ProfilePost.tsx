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

interface Props {
  img: string;
}

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
        size={{ base: "sm", lg: "2xl" }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody p={5} bg="#1a202c" borderRadius={8}>
            <Flex gap={6} w={{ base: "90%", sm: "70%", md: "full" }}>
              <Box overflow="hidden" flex={1.5} borderRadius={5}>
                <Image
                  src={img}
                  alt="profile post"
                  objectFit="cover"
                  height="500px"
                />
              </Box>
              <Flex direction="column" gap={3} flex={1}>
                <HStack gap={5} borderBottom="1px solid gray" pb={2}>
                  <Avatar src="/images/profilepic.png" />
                  <Text fontWeight={"bold"}>gopu-gophu </Text>
                  <FaTrash />
                </HStack>
                <VStack gap={2}>
                  <PostComment
                    comment="Nice picture"
                    image={img}
                    time="12h"
                    username="lexiloria"
                  />
                  <PostComment
                    comment="Nice"
                    image={img}
                    time="12h"
                    username="lexiloria"
                  />
                  <PostComment
                    comment="Nice"
                    image={img}
                    time="12h"
                    username="lexiloria"
                  />
                </VStack>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfilePost;
