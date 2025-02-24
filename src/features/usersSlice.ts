import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserType } from '../types';



interface UsersState {
    users: UserType[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: UsersState = {
    users: [],
    status: 'idle',
    error: null,
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        fetchUsersStart(state) {
            state.status = 'idle';
        },
        fetchUsersSuccess(state, action: PayloadAction<UserType[]>) {
            state.status = 'succeeded';
            state.users = action.payload;
        },
        fetchUsersFailure(state, action: PayloadAction<string>) {
            state.status = 'failed';
            state.error = action.payload;
        },
        // addUser(state, action: PayloadAction<User>) {
        //     state.users.push(action.payload);
        // },
        // removeUser(state, action: PayloadAction<string>) {
        //     state.users = state.users.filter(user => user.id !== action.payload);
        // },
        // updateUser(state, action: PayloadAction<User>) {
        //     const index = state.users.findIndex(user => user.id === action.payload.id);
        //     if (index !== -1) {
        //         state.users[index] = action.payload;
        //     }
        // },
    }
});

export const {
    fetchUsersStart,
    fetchUsersSuccess,
    fetchUsersFailure,
    // addUser,
    // removeUser,
    // updateUser,
} = usersSlice.actions;

export default usersSlice.reducer;