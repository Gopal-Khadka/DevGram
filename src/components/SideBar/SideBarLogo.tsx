import { Link, Image } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import logo from "/images/logo.png";
import { FaDev } from "react-icons/fa";

const SideBarLogo = () => {
  return (
    <>
      <Link
        as={RouterLink}
        to="/"
        cursor="pointer"
        display={{ base: "none", md: "block" }}
      >
        <Image src={logo} w={40} />
      </Link>
      <Link
        as={RouterLink}
        to="/"
        cursor="pointer"
        display={{ base: "block", md: "none" }}
        borderRadius={6}
        _hover={{
          bg: "whiteAlpha.200",
        }}
      >
        <FaDev size={24} />
      </Link>
    </>
  );
};

export default SideBarLogo;
