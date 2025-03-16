import { useEffect, useState } from "react";
import useShowToast from "./useShowToast";
import usePostStore, { Post } from "../store/postStore";
import useUserProfileStore from "../store/userProfileStore";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

const useGetUserPosts = () => {
  const showToast = useShowToast();
  const [isLoading, setIsLoading] = useState(false);
  const { posts, setPosts } = usePostStore();
  const { userProfile } = useUserProfileStore();

  useEffect(() => {
    const getPosts = async () => {
      if (!userProfile) return;
      setIsLoading(true);
      setPosts([]);
      try {
        const q = query(
          collection(firestore, "posts"),
          where("createdBy", "==", userProfile.uid)
        );
        const querySnapshot = await getDocs(q);
        const posts: Post[] = [];
        querySnapshot.forEach((doc) => {
            posts.push(doc.data() as Post)});
        posts.sort((a, b) => b.createdAt - a.createdAt);
        setPosts(posts);
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

    getPosts();
  }, [setPosts, userProfile]);

  return { isLoading, posts };
};

export default useGetUserPosts;
