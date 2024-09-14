import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Post {
  id: number;
  title: string;
  body: string;
  liked?: boolean;
}

interface PostsState {
  posts: Post[];
  loading: boolean;
//   liked: boolean;
}

const initialState: PostsState = {
  posts: [],
  loading: false,
//   liked: false,
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return response.data;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    toggleLike(state, action) {
      const post = state.posts.find(post => post.id === action.payload);
      if (post) {
        post.liked = !post.liked;
      }
    },
    deletePost(state, action) {
      state.posts = state.posts.filter(post => post.id !== action.payload);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.loading = false;
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { toggleLike, deletePost } = postsSlice.actions;

export default postsSlice.reducer;