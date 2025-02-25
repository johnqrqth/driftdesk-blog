import { configureStore } from "@reduxjs/toolkit";
import postsReducer from '../features/postsSlice';
import commentsReducer from '../features/commentsSlice';
import usersReducer from '../features/usersSlice';


export const store = configureStore({
    reducer: {
        posts: postsReducer,
        comments: commentsReducer,
        users: usersReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

