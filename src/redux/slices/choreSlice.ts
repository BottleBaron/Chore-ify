/* eslint-disable no-return-assign */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getFirebaseUserById } from '@root/api/user';
import { getFirebaseUserToChoreTables } from '@root/api/userToChore';
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

interface DisplayChore {
  chore: Chore;
  avatars: string[];
  daysSinceLastDone: number;
  color: string;
}

export interface ChoreState {
  chores: Chore[];
  activeChoreId: string;
  choresWithAvatars: DisplayChore[];
}

const initialState: ChoreState = {
  chores: [],
  activeChoreId: '',
  choresWithAvatars: [],
};

const choreSlice = createSlice({
  name: 'chore',
  initialState,
  reducers: {
    setActiveChoreId: (state, action: PayloadAction<string>) => {
      state.activeChoreId = action.payload;
    },
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
    builder.addCase(fetchDisplayChores.fulfilled, (state, action) => {
      state.choresWithAvatars = action.payload;
    });
  },
});

export const { setChores, setActiveChoreId } = choreSlice.actions;

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

export const fetchChores = createAppAsyncThunk<Chore[], string>(
  'chore/get',
  async (householdId, thunkAPI) => {
    try {
      const choreState = await getFirebaseChores(householdId);
      return choreState;
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

export const fetchDisplayChores = createAppAsyncThunk<DisplayChore[], string>(
  'chore/whodidwhat',
  async (householdId, thunkAPI) => {
    try {
      const date = new Date();
      const activeChores = await getFirebaseChores(householdId);

      const choreWithAvatarList: DisplayChore[] = await Promise.all(
        activeChores.map(async (chore) => {
          const tableResult = await getFirebaseUserToChoreTables(chore.id);
          const filteredTable = tableResult.filter((utc) => {
            const parsedDate = new Date(utc.timestamp);
            return parsedDate.toDateString() === date.toDateString();
          });

          let avatarList: string[] = [];
          if (filteredTable.length > 0) {
            avatarList = await Promise.all(
              filteredTable.map(async (item) => {
                const user = await getFirebaseUserById(item.userId);
                return user.avatar;
              }),
            );
          }

          // Logic to find days since last completed
          const currentHighestDate = tableResult.reduce(
            (highestDate, table) => {
              const newDate = new Date(table.timestamp);
              return newDate > highestDate ? newDate : highestDate;
            },
            new Date(0),
          );

          let daysSinceDoneParameter = 0;
          if (
            currentHighestDate.getFullYear() > 1970 &&
            currentHighestDate < date
          ) {
            // Calculate the difference in days
            const timeDifference =
              date.getTime() - currentHighestDate.getTime();
            const daysSinceLastDone = Math.floor(
              timeDifference / (1000 * 3600 * 24),
            );

            if (daysSinceLastDone > 0) {
              daysSinceDoneParameter = daysSinceLastDone;
            }
          }

          let color = '#67E25D';
          const doubleInterval = chore.dayinterval * 2;
          if (daysSinceDoneParameter > doubleInterval) color = '#D3334D';
          else if (daysSinceDoneParameter > chore.dayinterval)
            color = '#FFFF5B';

          return {
            chore,
            avatars: avatarList,
            daysSinceLastDone: daysSinceDoneParameter,
            color,
          };
        }),
      );

      return choreWithAvatarList;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
