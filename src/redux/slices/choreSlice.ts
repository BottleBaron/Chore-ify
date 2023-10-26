/* eslint-disable no-return-assign */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
  createFirebaseChore,
  deleteFirebaseChore,
  getFirebaseChores,
  updateFirebaseChore,
} from '../../../api/chore';
import createAppAsyncThunk from '../utils';

export interface Chore {
  id: string;
  householdId: string;
  title: string;
  description: string;
  dayinterval: number;
  effortNumber: number;
}

export interface ChoreState {
  chores: Chore[];
}

const initialState: ChoreState = {
  chores: [],
};

const choreSlice = createSlice({
  name: 'chore',
  initialState,
  reducers: {
    setChores: (state, action: PayloadAction<Chore[]>) => {
      state.chores = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addChore.fulfilled, (state, action) => {
      state.chores.push(action.payload);
    });
    builder.addCase(fetchChores.fulfilled, (state, action) => {
      state.chores = action.payload;
    });
    builder.addCase(updateChore.fulfilled, (state, action) => {
      const updatedIndex = state.chores.findIndex(
        (chore) => chore.id === action.payload.id,
      );
      if (updatedIndex !== -1) {
        state.chores[updatedIndex] = action.payload;
      }
    });
    builder.addCase(deleteChore.fulfilled, (state, action) => {
      state.chores = state.chores.filter(
        (chore) => chore.id !== action.payload,
      );
    });
    // builder.addMatcher(
    //   (action) => action.type.endsWith('/rejected'),
    //   //handleRejected,
    // );
  },
});

export const { setChores } = choreSlice.actions;

export const choreReducer = choreSlice.reducer;

export const addChore = createAppAsyncThunk<Chore, Chore>(
  'chore/create',
  async (choreData: Chore, thunkAPI) => {
    try {
      const newChore = await createFirebaseChore(choreData);
      return newChore;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const fetchChores = createAppAsyncThunk<Chore[], void>(
  'chore/get',
  async (_, thunkAPI) => {
    try {
      const choreState = await getFirebaseChores();
      return choreState.chores;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const updateChore = createAppAsyncThunk<Chore, Chore>(
  'chore/update',
  async (choreData: Chore, thunkAPI) => {
    if (!choreData.id) {
      return thunkAPI.rejectWithValue('choreData requires an Id to update');
    }
    try {
      await updateFirebaseChore(choreData);
      return choreData;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const deleteChore = createAppAsyncThunk<string, string>(
  'chore/delete',
  async (choreId, thunkApi) => {
    try {
      await deleteFirebaseChore(choreId);
      return choreId;
    } catch (e: any) {
      return thunkApi.rejectWithValue(e.message);
    }
  },
);
