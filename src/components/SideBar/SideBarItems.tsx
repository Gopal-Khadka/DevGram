import { Flex, Link, Tooltip, Avatar, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import {
  SearchLogo,
  NotificationsLogo,
  CreatePostLogo,
  MessagesLogo,
} from "../../assets/constants";
import { AiFillHome } from "react-icons/ai";
import LogOut from "./LogOut";
import useAuthStore from "../../store/authStore";

const returnSideBarItems = (user: any | null) => {
  return [
    { icon: <AiFillHome size={25} />, text: "Home", link: "/" },
    { icon: <SearchLogo />, text: "Search" },
    { icon: <NotificationsLogo />, text: "Notifications" },
    { icon: <CreatePostLogo />, text: "Post" },
    { icon: <MessagesLogo />, text: "Messages", link: "/messages" },
    {
      icon: (
        <Avatar size={"sm"} name={user?.fullName} src={user?.profilePicUrl} />
      ),
      text: "Profile",
      link: "/user/" + user?.username,
    },
  ];
};

const SideBarItems = () => {
  const authUser = useAuthStore((state) => state.user);
  const sideBarItems = returnSideBarItems(authUser);
  return (
    <Flex direction="column" gap={5} cursor="pointer">
      {sideBarItems.map((item, index) => {
        return (
          <Tooltip
            hasArrow
            key={index}
            label={item.text}
            placement="right"
            ml={1}
            openDelay={500}
            display={{ base: "block", md: "none" }}
          >
            <Link
              as={RouterLink}
              to={item.link || "/"}
              display="flex"
              alignItems="center"
              gap={4}
              p={2}
              borderRadius={6}
              _hover={{ bg: "whiteAlpha.400" }}
            >
              {item.icon}
              <Text display={{ base: "none", md: "flex" }}>{item.text}</Text>
            </Link>
          </Tooltip>
        );
      })}
      <LogOut />
    </Flex>
  );
};

export default SideBarItems;
