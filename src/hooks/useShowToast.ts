import { useToast } from "@chakra-ui/react";

interface Props {
  title: string;
  description: string;
  status: "success" | "error" | "warning" | "info" | "loading";
}

const useShowToast = () => {
  const toast = useToast();
  const showToast = ({ title, description, status }: Props) => {
    return toast({
      title,
      status,
      description,
      isClosable: true,
      duration: 3000,
    });
  };
  return showToast;
};

export default useShowToast;
