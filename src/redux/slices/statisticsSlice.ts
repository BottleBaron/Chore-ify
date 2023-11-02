/* eslint-disable @typescript-eslint/return-await */
/* eslint-disable prefer-destructuring */
import { createSlice } from '@reduxjs/toolkit';
import { getFirebaseChores } from '@root/api/chore';
import { getFirebaseUsersByHouseholdId } from '@root/api/user';
import { getFirebaseUserToChoreTables } from '@root/api/userToChore';
import { getColorForAvatar } from '@src/assets/Avatars/avatarColorConfig';
import createAppAsyncThunk from '../utils';
// import { UserToCompletedChore } from 'assets/Data/types';
// import { getColorForAvatar } from '../../../assets/avatarColorConfig';
// import { getColorForAvatar } from 'assets/avatarColorConfig';
// import { UserToCompletedChore } from '../../../assets/Data/types';

export interface PieChartData {
  value: number;
  text: string;
  color: string;
}

interface ChorePieChartData {
  choreTitle: string;
  pieChartdata: PieChartData[];
}

interface StatisticsState {
  totalPieChartData: PieChartData[];
  chorePieChartData: ChorePieChartData[];
}

const initialState: StatisticsState = {
  totalPieChartData: [],
  chorePieChartData: [],
};

const statisticsSlice = createSlice({
  name: 'statistics',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGlobalStatistics.fulfilled, (state, action) => {
      state.totalPieChartData = action.payload;
    });
    builder.addCase(getChoreStatistics.fulfilled, (state, action) => {
      state.chorePieChartData = action.payload;
    });
  },
});

// export const {} = statisticsSlice.actions;
export const statisticsReducer = statisticsSlice.reducer;

async function fetchChoresAndUsers(activeHouseholdId: string) {
  const allChores = await getFirebaseChores(activeHouseholdId);
  const allUsers = await getFirebaseUsersByHouseholdId([activeHouseholdId]);
  return { allChores, allUsers };
}

export const getGlobalStatistics = createAppAsyncThunk<PieChartData[], Date>(
  'statistics/getGlobal',
  async (lowestDate, thunkAPI) => {
    try {
      const activeHouseholdId = thunkAPI.getState().household.activeHouseholdId;

      const { allChores, allUsers } =
        await fetchChoresAndUsers(activeHouseholdId);
      const allUsersToChores = await Promise.all(
        allChores.map(async (chore) => {
          const fullResult = await getFirebaseUserToChoreTables(chore.id);

          const filteredByDate = fullResult.filter(
            (utc) => new Date(utc.timestamp) > lowestDate,
          );

          return filteredByDate;
        }),
      );

      const output: PieChartData[] = allUsers.map((user) => {
        const thisUsersCompleted = allUsersToChores
          .flat()
          .filter((utc) => utc.userId === user.id);

        let sumOfCompletedChores: number = 0;
        thisUsersCompleted.forEach((utc) => {
          const filteredChore = allChores.find(
            (chore) => chore.id === utc.choreId,
          );
          const effortNumber = filteredChore
            ? parseFloat(filteredChore.effortNumber.toString())
            : 1;
          sumOfCompletedChores += effortNumber;
        });

        const color = getColorForAvatar(user.avatar);
        if (sumOfCompletedChores > 0) {
          return {
            value: sumOfCompletedChores,
            text: user.avatar,
            color,
          };
        }

        return {
          value: 0,
          text: '',
          color: '#808080',
        };
      });

      return output;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const getChoreStatistics = createAppAsyncThunk<
  ChorePieChartData[],
  Date
>('statistics/getChoreStatistics', async (lowestDate, thunkAPI) => {
  try {
    const activeHouseholdId = thunkAPI.getState().household.activeHouseholdId;

    const { allChores, allUsers } =
      await fetchChoresAndUsers(activeHouseholdId);
    const allUsersToChores = await Promise.all(
      allChores.map(async (chore) => {
        const fullResult = await getFirebaseUserToChoreTables(chore.id);

        const filteredByDate = fullResult.filter(
          (utc) => new Date(utc.timestamp) > lowestDate,
        );

        return filteredByDate;
      }),
    );

    console.log(allUsersToChores);

    const output = allChores.map((chore) => {
      const thisChoresCompleted = allUsersToChores
        .flat()
        .filter((utc) => utc.choreId === chore.id);

      const pieChartData: PieChartData[] = [];

      allUsers.forEach((user) => {
        const completedByUser = thisChoresCompleted.filter(
          (utc) => utc.userId === user.id,
        );

        if (completedByUser.length > 0) {
          const color = getColorForAvatar(user.avatar);
          const chartData = {
            value: completedByUser.length,
            text: user.avatar,
            color,
          };
          pieChartData.push(chartData);
        } else {
          const defaultChartData = {
            value: 0,
            text: '',
            color: '#808080',
          };
          pieChartData.push(defaultChartData);
        }
      });

      return {
        choreTitle: chore.title,
        pieChartdata: pieChartData,
      };
    });

    return output;
  } catch (e: any) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
