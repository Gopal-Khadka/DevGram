import { useState } from "react";
import useAuthStore from "../store/authStore";
import useShowToast from "./useShowToast";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import { Post } from "../store/postStore";

const useLikePost = (post: Post) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const { user: authUser } = useAuthStore();
  const [likes, setLikes] = useState(post.likes.length || 0);
  const [isLiked, setIsLiked] = useState(
    post.likes.includes(authUser?.uid || "")
  );
  const showToast = useShowToast();

  const handleLikePost = async () => {
    if (isUpdating) return;
    if (!authUser)
      return showToast({
        title: "Error",
        description: "You must be logged in to like a post",
        status: "error",
      });
    setIsUpdating(true);

    try {
      const postRef = doc(firestore, "posts", post?.id || "");
      await updateDoc(postRef, {
        likes: isLiked ? arrayRemove(authUser.uid) : arrayUnion(authUser.uid),
      });

      setIsLiked(!isLiked);
      isLiked ? setLikes(likes - 1) : setLikes(likes + 1);
    } catch (error: any) {
      showToast({
        title: "Error",
        description: error.message,
        status: "error",
      });
    } finally {
      setIsUpdating(false);
    }
  };

  return { isLiked, likes, handleLikePost, isUpdating };
};

export default useLikePost;
