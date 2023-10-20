import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import createAppAsyncThunk from '../utils';

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

// FIXME: not done
export const addHousehold = createAppAsyncThunk<User, User>(
  'user/create',
  async (userData: User, thunkAPI) => {
    try {
      const newUser = await createFirebaseUser(userData);
      return newUser;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
