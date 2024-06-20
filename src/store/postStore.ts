import { create } from "zustand";

export interface Post {
  id?: string;
  imageURL?: string;
  caption: string;
  likes: string[];
  comments: Comment[];
  createdAt: number;
  createdBy: string;
}
export interface Comment {
  comment: string;
  createdAt: number;
  createdBy: string;
  postId: string;
}

interface PostState {
  posts: Post[];
  createPost: (post: Post) => void;
  setPosts: (posts: Post[]) => void;
  deletePost: (id: string | null) => void;
  addComment: (postId: string, newComment: Comment) => void;
}

const usePostStore = create<PostState>()((set) => ({
  posts: [],
  createPost: (post) => set((state) => ({ posts: [post, ...state.posts] })),
  setPosts: (posts) => set({ posts }),

  deletePost: (id) =>
    set((state) => ({ posts: state.posts.filter((post) => post.id != id) })),
  addComment: (postId, newComment) =>
    set((state) => ({
      posts: state.posts?.map((post) => {
        if (post.id == postId) {
          return {
            ...post,
            comments: [...post.comments, newComment],
          };
        }
        return post;
      }),
    })),
}));

export default usePostStore;
