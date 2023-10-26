import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  createFirebaseUser,
  deleteFirebaseUser,
  updateFirebaseUser,
} from '../../../api/user';
import createAppAsyncThunk from '../utils';
import { fetchHouseholdsAndUsers } from './householdSlice';

export interface User {
  id: string;
  accountId: string;
  avatar: string;
  name: string;
  isPaused: boolean;
  isAdmin: boolean;
  householdId: string;
}

export interface UserState {
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
  extraReducers: (builder) => {
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.users.push(action.payload);
    });
    // builder.addCase(fetchUsers.fulfilled, (state, action) => {
    //   state.users = action.payload;
    // });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      const updatedIndex = state.users.findIndex(
        (User) => User.id === action.payload.id,
      );
      if (updatedIndex !== -1) {
        state.users[updatedIndex] = action.payload;
      }
    });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    });
    builder.addCase(fetchHouseholdsAndUsers.fulfilled, (state, action) => {
      state.users = action.payload.users;
    });
  },
});

export const { setUsers } = userSlice.actions;

export const userReducer = userSlice.reducer;

export const addUser = createAppAsyncThunk<User, User>(
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

// export const fetchUsers = createAppAsyncThunk<User[], void>(
//   'user/get',
//   async (_, thunkAPI) => {
//     try {
//       return await getFirebaseUsers();
//     } catch (e: any) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   },
// );

export const updateUser = createAppAsyncThunk<User, User>(
  'user/update',
  async (userData: User, thunkAPI) => {
    if (!userData.id) {
      return thunkAPI.rejectWithValue('userData requires an Id to update');
    }
    try {
      await updateFirebaseUser(userData);
      return userData;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const deleteUser = createAppAsyncThunk<string, string>(
  'user/delete',
  async (userId, thunkApi) => {
    try {
      await deleteFirebaseUser(userId);
      return userId;
    } catch (e: any) {
      return thunkApi.rejectWithValue(e.message);
    }
  },
);
