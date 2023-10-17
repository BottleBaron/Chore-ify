/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Household {
  id: number;
  adminIds: number[];
  name: string;
  accessCode: string;
}

interface HouseholdState {
  households: Household[];
}

const initialState: HouseholdState = {
  households: [],
};

const householdSlice = createSlice({
  name: 'household',
  initialState,
  reducers: {
    setHouseholds: (state, action: PayloadAction<Household[]>) => {
      state.households = action.payload;
    },
  },
});

export const { setHouseholds } = householdSlice.actions;

export default householdSlice.reducer;
