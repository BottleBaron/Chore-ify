/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
  id: number;
  houseHoldId: number;
  accountId: number;
  avatar: string;
  name: string;
  isPaused: boolean;
}

interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
  },
});

export const { setUsers } = userSlice.actions;

export const userReducer = userSlice.reducer;
