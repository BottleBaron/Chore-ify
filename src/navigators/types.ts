/* eslint-disable import/no-cycle */
import type { MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs';
import type { CompositeScreenProps } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Auth: undefined;
  SignIn: undefined;
  SignUp: undefined;
  Profile: undefined;
  Settings: undefined;
  HouseHoldSelectorScreen: undefined;
  CreateHouseHold: undefined;
  JoinHouseHold: undefined;
  JoinHouseHoldConfirmation: { houseHoldCode: string };
  Statistics: {
    period: string;
  };
  Chore: {
    choreId: string;
  };
  ChoreList: {
    householdId: string;
    userId: string;
  };
};

export type HouseHoldDashboardTabParamList = {
  ChoreList: { period: string };
  Today: { period: string };
  CurrentWeek: { period: string };
  LastWeek: { period: string };
  CurrentMonth: { period: string };
  LastMonth: { period: string };
  CurrentYear: { period: string };
  LastYear: { period: string };
};

// export type StatisticsTabParamList = {
//   Today: { period: string };
//   CurrentWeek: { period: string };
//   LastWeek: { period: string };
//   CurrentMonth: { period: string };
//   LastMonth: { period: string };
//   CurrentYear: { period: string };
//   LastYear: { period: string };
// };

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type HouseholdDashboardTabScreenProps<
  T extends keyof HouseHoldDashboardTabParamList,
> = CompositeScreenProps<
  MaterialTopTabScreenProps<HouseHoldDashboardTabParamList, T>,
  RootStackScreenProps<keyof RootStackParamList>
>;

// export type StatisticsTabScreenProps<T extends keyof StatisticsTabParamList> =
//   CompositeScreenProps<
//     MaterialTopTabScreenProps<StatisticsTabParamList, T>,
//     RootStackScreenProps<keyof RootStackParamList>
//   >;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

// declare global {
//   namespace ReactNavigation {
//     interface RootParamList
//       extends RootStackParamList,
//         StatisticsTabParamList {}
//   }
// }
