/* eslint-disable prefer-destructuring */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  createFirebaseUserToChoreTable,
  deleteFirebaseUserToChoreTable,
  getFirebaseUserToChoreTables,
  updateFirebaseUserToChoreTable,
} from '@root/api/userToChore';
import createAppAsyncThunk from '../utils';

export interface UserToChoreTableDTO {
  timestamp: string;
  id: string;
  userId: string;
  choreId: string;
}

export interface UserToChoreState {
  userToChoreTable: UserToChoreTableDTO[];
}

const initialState: UserToChoreState = {
  userToChoreTable: [],
};

const userToChoreSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setUserToChoreTable: (
      state,
      action: PayloadAction<UserToChoreTableDTO[]>,
    ) => {
      state.userToChoreTable = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addUserToChoreTable.fulfilled, (state, action) => {
      state.userToChoreTable.push(action.payload);
    });
    builder.addCase(fetchUserToChoreTables.fulfilled, (state, action) => {
      state.userToChoreTable = action.payload;
    });
    builder.addCase(updateUserToChoreTable.fulfilled, (state, action) => {
      const updatedIndex = state.userToChoreTable.findIndex(
        (userToChoreTable) => userToChoreTable.id === action.payload.id,
      );
      if (updatedIndex !== -1) {
        state.userToChoreTable[updatedIndex] = action.payload;
      }
    });
    builder.addCase(deleteUserToChoreTable.fulfilled, (state, action) => {
      state.userToChoreTable = state.userToChoreTable.filter(
        (item) => item.id !== action.payload,
      );
    });
  },
});

export const { setUserToChoreTable } = userToChoreSlice.actions;
export const userTochoreReducer = userToChoreSlice.reducer;

export const addUserToChoreTable = createAppAsyncThunk<
  UserToChoreTableDTO,
  UserToChoreTableDTO
>('usersToChores/create', async (table, thunkAPI) => {
  try {
    const newTable = await createFirebaseUserToChoreTable(table);
    return newTable;
  } catch (e: any) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const fetchUserToChoreTables = createAppAsyncThunk<
  UserToChoreTableDTO[],
  string
>('usersToChores/get', async (choreId, thunkAPI) => {
  try {
    const table = await getFirebaseUserToChoreTables(choreId);
    return table;
  } catch (e: any) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const updateUserToChoreTable = createAppAsyncThunk<
  UserToChoreTableDTO,
  UserToChoreTableDTO
>('usersToChores/update', async (table, thunkAPI) => {
  try {
    await updateFirebaseUserToChoreTable(table);
    return table;
  } catch (e: any) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const deleteUserToChoreTable = createAppAsyncThunk<string, string>(
  'usersToChores/delete',
  async (tableId, thunkAPI) => {
    try {
      await deleteFirebaseUserToChoreTable(tableId);
      return tableId;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
