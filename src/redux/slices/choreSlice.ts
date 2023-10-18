import {
  PayloadAction,
  createSlice,
  isRejectedWithValue,
} from '@reduxjs/toolkit';
import {
  createFirebaseChore,
  getFirebaseChores,
  updateFirebaseChore,
} from '../../../api/chore';
import createAppAsyncThunk from '../utils';

export interface Chore {
  id: string;
  householdId: number;
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
});

export const { setChores } = choreSlice.actions;

export const choreReducer = choreSlice.reducer;

export const addChore = createAppAsyncThunk(
  'chore/create',
  async (choreData: Chore, thunkAPI) => {
    const { dispatch, getState } = thunkAPI;
    try {
      const newChore = await createFirebaseChore(choreData);
      dispatch(setChores([...getState().chore.chores, newChore]));
      return newChore;
    } catch (e) {
      return isRejectedWithValue(e);
    }
  },
);

export const fetchChores = createAppAsyncThunk(
  'chore/get',
  async (_, thunkAPI) => {
    const { dispatch } = thunkAPI;
    try {
      const choreState = await getFirebaseChores();
      dispatch(setChores([...choreState.chores]));
      return choreState.chores;
    } catch (e) {
      return isRejectedWithValue(e);
    }
  },
);

export const updateChore = createAppAsyncThunk(
  'chore/update',
  async (choreData: Chore, thunkAPI) => {
    const { dispatch, getState } = thunkAPI;

    if (!choreData.id) {
      return isRejectedWithValue(Error('choreData requires an Id to update'));
    }

    try {
      const updatedChore = await updateFirebaseChore(choreData);
      dispatch(
        setChores(
          getState().chore.chores.map((chore) =>
            chore.id === choreData.id ? updatedChore : chore,
          ),
        ),
      );
      return updatedChore;
    } catch (e) {
      return isRejectedWithValue(e);
    }
  },
);
