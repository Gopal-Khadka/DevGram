import { useState } from "react";
import useShowToast from "./useShowToast";
import useAuthStore from "../store/authStore";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import usePostStore from "../store/postStore";
import { Comment } from "../store/postStore";

const usePostComment = () => {
  const [isCommenting, setIsCommenting] = useState(false);
  const showToast = useShowToast();
  const { user: authUser } = useAuthStore();
  const { addComment } = usePostStore();

  const handlePostComment = async (postId: string, comment: string) => {
    if (isCommenting) return;
    if (!authUser)
      return showToast({
        title: "Error",
        description: "You must be logged in ",
        status: "error",
      });
    setIsCommenting(true);
    const newComment: Comment = {
      comment,
      createdAt: Date.now(),
      createdBy: authUser.uid,
      postId,
    };
    try {
      await updateDoc(doc(firestore, "posts", postId), {
        comments: arrayUnion(newComment),
      });
      addComment(postId, newComment);
    } catch (error: any) {
      showToast({
        title: "Error",
        description: error.message || "Error occurred",
        status: "error",
      });
    } finally {
      setIsCommenting(false);
    }
  };
  return { isCommenting, handlePostComment };
};

export default usePostComment;
