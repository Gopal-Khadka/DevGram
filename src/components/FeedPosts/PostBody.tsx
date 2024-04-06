import { Image } from "@chakra-ui/react";

interface Props {
  image: string;
}

const PostBody = ({ image }: Props) => {
  return (
    <Image
      src={image}
      borderRadius={10}
      maxHeight="500px"
      objectFit="cover"
      w="full"
    />
  );
};

export default PostBody;
