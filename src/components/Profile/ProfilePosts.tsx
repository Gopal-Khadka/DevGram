import { SimpleGrid, Skeleton } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ProfilePost from "./ProfilePost";

const skeletonItems = [1, 2, 3, 4, 5, 6];

const ProfilePosts = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={3}>
      {isLoading ? (
        skeletonItems.map((item) => (
          <Skeleton height="300px" borderRadius={5} key={item} />
        ))
      ) : (
        <>
          <ProfilePost img="/images/img1.png" />
          <ProfilePost img="/images/img2.png" />
          <ProfilePost img="/images/img4.jpg" />
          <ProfilePost img="/images/img2.png" />
          <ProfilePost img="/images/img3.png" />
          <ProfilePost img="/images/img4.jpg" />
        </>
      )}
    </SimpleGrid>
  );
};

export default ProfilePosts;
