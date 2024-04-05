import { Container } from "@chakra-ui/react";
import FeedPost from "./FeedPost";

const index = () => {
  return (
    <Container maxW="container.sm" py={10} px={2}>
      <FeedPost
        avatar="/images/img1.png"
        image="/images/img1.png"
        username="@bahdur"
      />
      <FeedPost
        avatar="/images/img2.png"
        image="/images/img2.png"
        username="@laura"
      />
      <FeedPost
        avatar="/images/img3.png"
        image="/images/img3.png"
        username="@simons"
      />
      <FeedPost
        avatar="/images/img4.jpg"
        image="/images/img4.jpg"
        username="@jagdip"
      />
    </Container>
  );
};

export default index;
