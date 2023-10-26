import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getColorForAvatar } from '../../../assets/avatarColorConfig';

import { User } from './userSlice';
import { UserToCompletedChore } from '../../../assets/Data/types';

interface PieChartData {
  value: number;
  color: string;
}

interface StatisticsState {
  totalPieChartData: PieChartData[];
  chorePieChartData: PieChartData[];
}

const initialState: StatisticsState = {
  totalPieChartData: [],
  chorePieChartData: [],
};

const statisticsSlice = createSlice({
  name: 'statistics',
  initialState,
  reducers: {
    generateTotalPieChartData: (
      state,
      action: PayloadAction<{
        completedChores: UserToCompletedChore[];
        users: User[];
      }>,
    ) => {
      // eslint-disable-next-line no-console
      console.log('generateTotalPieChartData action triggered');
      const { completedChores, users } = action.payload;
      const userTally: { [key: string]: number } = {};

      completedChores.forEach((item) => {
        if (!userTally[item.userId]) {
          userTally[item.userId] = 0;
        }
        userTally[item.userId] += 1;
      });

      state.totalPieChartData = Object.keys(userTally).map((userId) => {
        const user = users.find((u) => u.id === userId);
        const color = user
          ? getColorForAvatar(user.avatar)
          : 'rgb(255, 255, 255)';

        return {
          value: userTally[userId],
          color,
        };
      });
    },
    generateChorePieChartData: (
      state,
      action: PayloadAction<{
        choreId: number;
        completedChores: UserToCompletedChore[];
        users: User[];
      }>,
    ) => {
      // eslint-disable-next-line no-console
      console.log('generateChorePieChartData action triggered');
      const { choreId, completedChores, users } = action.payload;
      const choreTally: { [key: string]: number } = {};

      completedChores
        .filter((item) => item.choreId === choreId)
        .forEach((item) => {
          if (!choreTally[item.userId]) {
            choreTally[item.userId] = 0;
          }
          choreTally[item.userId] += 1;
        });

      state.chorePieChartData = Object.keys(choreTally).map((userId) => {
        const user = users.find((u) => u.id === userId);
        const color = user
          ? getColorForAvatar(user.avatar)
          : 'rgb(255, 255, 255)';

        return {
          value: choreTally[userId],
          color,
        };
      });
    },
  },
});

export const { generateTotalPieChartData, generateChorePieChartData } =
  statisticsSlice.actions;

export const statisticsReducer = statisticsSlice.reducer;
