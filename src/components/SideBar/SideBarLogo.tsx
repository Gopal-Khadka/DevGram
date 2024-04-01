import { Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { InstagramLogo, InstagramMobileLogo } from "../../assets/constants";

const SideBarLogo = () => {
  return (
    <>
      <Link
        as={RouterLink}
        to="/"
        cursor="pointer"
        display={{ base: "none", md: "block" }}
      >
        <InstagramLogo />
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
        <InstagramMobileLogo />
      </Link>
    </>
  );
};

export default SideBarLogo;
