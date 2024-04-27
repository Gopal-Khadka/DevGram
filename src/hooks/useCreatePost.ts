import { useState } from "react";
import useShowToast from "./useShowToast";
import useAuthStore from "../store/authStore";
import usePostStore, { Post } from "../store/postStore";
import useUserProfileStore from "../store/userProfileStore";
import { useLocation } from "react-router-dom";
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  updateDoc,
} from "firebase/firestore";
import { fireStorage, firestore } from "../firebase/firebase";
import { getDownloadURL, ref, uploadString } from "firebase/storage";

const useCreatePost = () => {
  const showToast = useShowToast();
  const [isLoading, setIsLoading] = useState(false);
  const authUser = useAuthStore((state) => state.user);
  const { createPost } = usePostStore();
  const { addPost } = useUserProfileStore();
  const { pathname } = useLocation();

  const handleCreatePost = async (selectedFile: string, caption: string) => {
    if (!selectedFile)
      return showToast({
        title: "Error",
        description: "Please upload image file",
        status: "error",
      });
    setIsLoading(true);
    const newPost: Post = {
      likes: [],
      comments: [],
      createdBy: authUser?.uid || "",
      createdAt: Date.now(),
      caption: caption,
    };
    try {
      const postDocRef = await addDoc(collection(firestore, "posts"), newPost);
      newPost.id = postDocRef.id;

      const userDocRef = doc(firestore, "users", authUser?.uid || "");
      const imageRef = ref(fireStorage, `posts/${postDocRef.id}`);

      await updateDoc(userDocRef, { posts: arrayUnion(newPost) });
      await uploadString(imageRef, selectedFile, "data_url");

      const downloadURL = await getDownloadURL(imageRef);
      await updateDoc(postDocRef, { imageURL: downloadURL });
      newPost.imageURL = downloadURL;

      createPost(newPost);
      addPost(newPost);
      showToast({
        title: "Success",
        description: "Post created successfully.",
        status: "success",
      });
    } catch (error: any) {
      showToast({
        title: "Error",
        description: error.message,
        status: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return { handleCreatePost, isLoading };
};

export default useCreatePost;
