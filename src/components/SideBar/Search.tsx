import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { SearchLogo } from "../../assets/constants";
import { FormEvent, useRef } from "react";
import useSearch from "../../hooks/useSearch";
import SuggestedUser from "../SuggestedUsers/SuggestedUser";

const Search = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const searchRef = useRef<HTMLInputElement>(null);
  const { isLoading, user, getUserProfile,setUser } = useSearch();

  const handleSearchUser = (e: FormEvent) => {
    e.preventDefault();
    getUserProfile(searchRef.current?.value || "");
  };
  return (
    <>
      <Tooltip
        hasArrow
        label={"Search"}
        placement="right"
        ml={1}
        openDelay={500}
        display={{ base: "block", md: "none" }}
      >
        <Flex
          alignItems={"center"}
          gap={4}
          _hover={{ bg: "whiteAlpha.400" }}
          borderRadius={6}
          p={2}
          w={{ base: 10, md: "full" }}
          justifyContent={{ base: "center", md: "flex-start" }}
          onClick={onOpen}
        >
          <SearchLogo />
          <Box display={{ base: "none", md: "block" }}>Search</Box>
        </Flex>
      </Tooltip>

      <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInLeft">
        <ModalOverlay />
        <ModalContent bg={"black"} border={"1px solid gray"} maxW="400px">
          <ModalHeader>Search User</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={handleSearchUser}>
              <FormControl>
                <FormLabel>Username</FormLabel>
                <Input type="text" placeholder="eg: johndoe" ref={searchRef} />
              </FormControl>
              <Flex w={"full"} justifyContent={"flex-end"} mt={5}>
                <Button
                  type="submit"
                  size="sm"
                  isLoading={isLoading}
                  colorScheme="green"
                >
                  Search
                </Button>
              </Flex>
            </form>
            {user && <SuggestedUser user={user} setUser ={setUser}/>}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Search;
