import { Flex, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  icon: IconType;
  provider: string;
}

const ProviderLogin = ({ icon, provider }: Props) => {
  return (
    <Flex gap={2} alignItems="center" justifyContent="center" cursor="pointer">
      <Icon as={icon} boxSize={5} />
      <Text color="blue.500">Login With {provider}</Text>
    </Flex>
  );
};

export default ProviderLogin;
