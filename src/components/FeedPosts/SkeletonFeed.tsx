import {
  Box,
  Flex,
  Skeleton,
  SkeletonCircle,
  VStack,
  SkeletonText,
} from "@chakra-ui/react";

const SkeletonFeed = () => {
  return (
    <Box my={8}>
      <Flex gap={2} mb={5}>
        <SkeletonCircle size="10" />
        <VStack>
          <Skeleton height="12px" w="200px" />
          <Skeleton height="12px" w="200px" />
        </VStack>
      </Flex>
      <Skeleton height="500px" borderRadius={10} />
      <SkeletonText noOfLines={3} skeletonHeight="20px" spacing={2} mt={3} />
    </Box>
  );
};

export default SkeletonFeed;
