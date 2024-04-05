import { Box, Image } from "@chakra-ui/react";

interface Props {
  image: string;
}

const PostBody = ({ image }: Props) => {
  return (
    <Box>
      <Image src={image} borderRadius={10} />
    </Box>
  );
};

export default PostBody;
