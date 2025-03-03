import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { PostType } from '../types';
import { RootState } from '../app/store';

interface PostsState {
    posts: PostType[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
  }

  const initialState: PostsState = {
    posts: [],
    status: 'idle',
    error: null
  }

export const fetchPosts = createAsyncThunk<PostType[], void, { rejectValue: string }>('posts/fetchPosts', async () => {
  const response: any = await fetchPosts();
  return response.data;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    fetchPostsStart: (state) => {
      state.status = 'loading';
    },
    fetchPostsSuccess: (state, action: PayloadAction<PostType[]>) => {
      state.status = 'succeeded';
      state.posts = action.payload;
    },
    fetchPostsFailure: (state, action: PayloadAction<string>) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },

});

export const { fetchPostsStart, fetchPostsSuccess, fetchPostsFailure } = postsSlice.actions;

export const selectPostById = (state: RootState, postId: number) =>
    state.posts.posts.find((post) => post.id === postId);

export const selectPostByTitle = (state: RootState, postTitle: string) =>
    state.posts.posts.find((post) => post.title === postTitle);

export default postsSlice.reducer;