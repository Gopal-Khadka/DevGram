import { Avatar, Button, Flex, HStack, Text } from "@chakra-ui/react";
import { UserDoc } from "../../hooks/UseSignUpWithEmailAndPass";
import { Link as RouterLink } from "react-router-dom";
import useFollowUser from "../../hooks/useFollowUser";
import useAuthStore from "../../store/authStore";

interface Props {
  user: UserDoc;
  setUser: (user: UserDoc) => void;
}

const SuggestedUser = ({ user, setUser }: Props) => {
  const { isFollowing, handleFollowUser, isUpdating } = useFollowUser(user.uid);
  const { user: authUser } = useAuthStore();
  const searchingOwnProfile = authUser?.uid == user.uid;

  const onFollowUser = async () => {
    await handleFollowUser();
    setUser({
      ...user,
      followers: isFollowing
        ? user.followers.filter((followerUID) => followerUID !== authUser?.uid)
        : [...user.followers, authUser?.uid || ""],
    });
  };
  return (
    <HStack my={2} gap={6}>
      <Flex gap={3}>
        <Avatar src={user.profilePicUrl} />
        <Flex direction="column">
          <Text
            fontWeight="bold"
            as={RouterLink}
            to={`/user/${user.username}`}
            _hover={{
              color: "blue.500",
            }}
          >
            {user.fullName}
          </Text>
          <Text color="gray.500">{user.followers.length} Followers</Text>
        </Flex>

        {!searchingOwnProfile && (
          <Button
            color="blue.500"
            _hover={{ textDecoration: "none" }}
            onClick={onFollowUser}
            isLoading={isUpdating}
          >
            {isFollowing ? "Unfollow" : "Follow"}
          </Button>
        )}
      </Flex>
    </HStack>
  );
};

export default SuggestedUser;
