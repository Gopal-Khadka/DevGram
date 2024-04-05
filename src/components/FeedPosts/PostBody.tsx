import { Box, Image } from "@chakra-ui/react";

interface Props {
  image: string;
}

const PostBody = ({ image }: Props) => {
  return (
    <Box>
      <Image
        src={image}
        borderRadius={10}
        maxHeight="500px"
        w="full"
        objectFit="cover"
      />
    </Box>
  );
};

export default PostBody;
