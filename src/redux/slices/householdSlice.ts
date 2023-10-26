import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  createFirebaseHousehold,
  deleteFirebaseHousehold,
  getFirebaseHouseholds,
  updateFirebaseHousehold,
} from '../../../api/household';
import createAppAsyncThunk from '../utils';
import { getFirebaseUsers } from '../../../api/user';
import { User } from './userSlice';

export interface Household {
  id: string;
  adminIds: number[];
  name: string;
  accessCode: string;
}

export interface HouseholdState {
  households: Household[];
}

const initialState: HouseholdState = {
  households: [],
};

export interface HouseholdsAndUsersDTO {
  users: User[];
  households: Household[];
}

const householdSlice = createSlice({
  name: 'household',
  initialState,
  reducers: {
    setHouseholds: (state, action: PayloadAction<Household[]>) => {
      state.households = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addHousehold.fulfilled, (state, action) => {
      state.households.push(action.payload);
    });
    builder.addCase(fetchHouseholdsAndUsers.fulfilled, (state, action) => {
      state.households = action.payload.households;
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

export const { setHouseholds } = householdSlice.actions;
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

export const fetchHouseholdsAndUsers =
  createAppAsyncThunk<HouseholdsAndUsersDTO>(
    'household/get',
    async (_, thunkAPI) => {
      const state = thunkAPI.getState();
      const accountId = state.account.authUser?.uid;
      console.log('accountId', accountId);

      if (!accountId) return { users: [], households: [] };

      try {
        console.log('FETCHING DATA');
        const users = await getFirebaseUsers(accountId);
        console.log(users);
        const householdIds = users.map((u) => u.householdId);
        const households = await getFirebaseHouseholds(householdIds);
        console.log(householdIds);
        return { users, households };
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
