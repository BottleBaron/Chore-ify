import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  createFirebaseHousehold,
  deleteFirebaseHousehold,
  getFirebaseHouseholds,
  updateFirebaseHousehold,
} from '../../../api/household';
import createAppAsyncThunk from '../utils';

export interface Household {
  id: string;
  adminIds: number[];
  name: string;
  accessCode: string;
}

export interface HouseholdState {
  households: Household[];
  activeHouseholdId: string;
}

const initialState: HouseholdState = {
  households: [],
  activeHouseholdId: '',
};

const householdSlice = createSlice({
  name: 'household',
  initialState,
  reducers: {
    setActiveHouseholdId: (state, action: PayloadAction<string>) => {
      state.activeHouseholdId = action.payload;
    },
    setHouseholds: (state, action: PayloadAction<Household[]>) => {
      state.households = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addHousehold.fulfilled, (state, action) => {
      state.households.push(action.payload);
    });
    builder.addCase(fetchHouseholds.fulfilled, (state, action) => {
      state.households = action.payload;
    });
    builder.addCase(updateHousehold.fulfilled, (state, action) => {
      const updatedIndex = state.households.findIndex(
        (household) => household.id === action.payload.id,
      );
      if (updatedIndex !== -1) {
        state.households[updatedIndex] = action.payload;
      }
    });
    builder.addCase(deleteHousehold.fulfilled, (state, action) => {
      state.households = state.households.filter(
        (household) => household.id !== action.payload,
      );
    });
  },
});

export const { setHouseholds, setActiveHouseholdId } = householdSlice.actions;
export const householdReducer = householdSlice.reducer;

export const addHousehold = createAppAsyncThunk<Household, Household>(
  'household/create',
  async (householdData: Household, thunkAPI) => {
    try {
      const newHousehold = await createFirebaseHousehold(householdData);
      return newHousehold;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const fetchHouseholds = createAppAsyncThunk(
  'household/get',
  async (_, thunkAPI) => {
    try {
      const householdState = await getFirebaseHouseholds();
      return householdState.households;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const updateHousehold = createAppAsyncThunk<Household, Household>(
  'household/update',
  async (householdData: Household, thunkAPI) => {
    if (!householdData.id) {
      return thunkAPI.rejectWithValue('householdData requires an Id to update');
    }
    try {
      await updateFirebaseHousehold(householdData);
      return householdData;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const deleteHousehold = createAppAsyncThunk<string, string>(
  'household/delete',
  async (householdId, thunkApi) => {
    try {
      await deleteFirebaseHousehold(householdId);
      return householdId;
    } catch (e: any) {
      return thunkApi.rejectWithValue(e.message);
    }
  },
);
