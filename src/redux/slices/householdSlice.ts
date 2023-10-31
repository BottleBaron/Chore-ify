import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  createFirebaseHousehold,
  deleteFirebaseHousehold,
  getFirebaseHouseholds,
  getFirebaseHouseholdsByCode,
  updateFirebaseHousehold,
} from '../../../api/household';
import {
  getFirebaseUsers,
  getFirebaseUsersByHouseholdId,
} from '../../../api/user';
import { auth } from '../../../firebaseConfig';
import createAppAsyncThunk from '../utils';
import { User } from './userSlice';

export interface Household {
  accessCode: string;
  id: string;
  name: string;
}

export interface HouseholdState {
  households: Household[];
  activeHouseholdId: string;
  joinHousehold: Household;
}

const initialState: HouseholdState = {
  households: [],
  activeHouseholdId: '',
  joinHousehold: { accessCode: '', id: '', name: '' },
};

export interface HouseholdsAndUsersDTO {
  myUsers: User[];
  households: Household[];
  allUsers: User[];
}

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
    setJoinHousehold: (state, action: PayloadAction<Household>) => {
      state.joinHousehold = action.payload;
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
    builder.addCase(fetchHouseholdByAccesscode.fulfilled, (state, action) => {
      state.joinHousehold = action.payload ?? {
        accessCode: '',
        id: '',
        name: '',
      };
    });
  },
});

export const { setHouseholds, setActiveHouseholdId, setJoinHousehold } =
  householdSlice.actions;
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

export const fetchHouseholdByAccesscode = createAppAsyncThunk<
  Household | undefined,
  string
>('household/get', async (houseHoldCode, thunkAPI) => {
  try {
    console.log(`Här loggas vår prop med ID: ${houseHoldCode}`);
    const foundHousehold = await getFirebaseHouseholdsByCode(houseHoldCode);
    const result =
      foundHousehold && foundHousehold.accessCode === houseHoldCode
        ? foundHousehold
        : undefined;
    console.log(`Här loggas resultatet: ${result?.id}`);
    if (result === undefined) {
      throw new Error('No Household was found');
    }
    return result;
  } catch (error) {
    return thunkAPI.rejectWithValue(
      error instanceof Error ? error.message : 'An error occurred.',
    );
  }
});

// Steg 1. Hämta users med account id.
// Steg 2. Hämta hushållen med householdId som finns på user.
// Steg 3. Hämta users igen med de householdId på household.
export const fetchHouseholdsAndUsers = createAppAsyncThunk<
  HouseholdsAndUsersDTO,
  void
>('household/get/code', async (_, thunkAPI) => {
  const accountId = auth.currentUser?.uid;

  if (!accountId) return { myUsers: [], households: [], allUsers: [] };

  try {
    const myUsers = await getFirebaseUsers(accountId);

    const householdIds = myUsers.map((u) => u.householdId);

    const households = await getFirebaseHouseholds(householdIds);
    const allUsers = await getFirebaseUsersByHouseholdId(householdIds);

    return { myUsers, households, allUsers };
  } catch (e: any) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

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
