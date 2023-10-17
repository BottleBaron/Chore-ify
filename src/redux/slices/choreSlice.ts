import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Chore {
  id: number;
  householdId: number;
  title: string;
  description: string;
  dayinterval: number;
  effortNumber: number;
}

interface ChoreState {
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
