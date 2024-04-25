import { useToast } from "@chakra-ui/react";
import { useCallback } from "react";

interface Props {
  title: string;
  description: string;
  status: "success" | "error" | "warning" | "info" | "loading";
}

const useShowToast = () => {
  const toast = useToast();

  // useCallBack prevents infinite loop by caching the function
  const showToast = useCallback(
    ({ title, description, status }: Props) => {
      return toast({
        title,
        status,
        description,
        isClosable: true,
        duration: 3000,
      });
    },
    [toast]
  );
  return showToast;
};

export default useShowToast;
