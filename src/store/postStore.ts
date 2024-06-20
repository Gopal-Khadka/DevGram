import { create } from "zustand";

export interface Post {
  id?: string;
  imageURL?: string;
  caption: string;
  likes: [];
  comments: [];
  createdAt: number;
  createdBy: string;
}

interface PostState {
  posts: Post[];
  createPost: (post: Post) => void;
  setPosts: (posts: Post[]) => void;
  deletePost: (id: string | null) => void;
}

const usePostStore = create<PostState>()((set) => ({
  posts: [],
  createPost: (post) => set((state) => ({ posts: [post, ...state.posts] })),
  setPosts: (posts) => set({ posts }),

  deletePost: (id) =>
    set((state) => ({ posts: state.posts.filter((post) => post.id != id) })),
  // addComment
}));

export default usePostStore;
