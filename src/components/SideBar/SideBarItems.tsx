import { Flex } from "@chakra-ui/react";
import LogOut from "./LogOut";
import Home from "./Home";
import Search from "./Search";
import CreatePost from "./CreatePost";
import ProfileLink from "./ProfileLink";
import Notifications from "./Notifications";

const SideBarItems = () => {
  return (
    <Flex direction="column" gap={5} cursor="pointer">
      <Home />
      <Search />
      <Notifications />
      <CreatePost />
      <ProfileLink />
      <LogOut />
    </Flex>
  );
};

export default SideBarItems;
