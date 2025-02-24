import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { CommentType } from '../types';


interface CommentsState {
    comments: CommentType[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null
}

const initialState: CommentsState = {
 comments: [],
 status: 'idle',
 error: null
}

export const fetchComments = createAsyncThunk<CommentType[], void, { rejectValue: string }>('posts/fetchPosts', async () => {
  const response: any = await fetchComments();
  return response.data;
});


const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        fetchCommentsStart: (state) => {
            state.status = 'loading'
        },
        fetchCommentsSuccess: (state, action: PayloadAction<CommentType[]>) => {
            state.status = 'failed';
            state.comments = action.payload;
        },
        fetchCommentsFailure: (state, action: PayloadAction<string>) => {
            state.status = 'failed';
            state.error = action.payload
        }
    }
})

export const { fetchCommentsStart, fetchCommentsSuccess, fetchCommentsFailure} = commentsSlice.actions;
export default commentsSlice.reducer;
