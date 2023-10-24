/* eslint-disable import/no-cycle */
import type { MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs';
import type { CompositeScreenProps } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HouseHoldDashboardParamList as HouseHoldDashboardTabParamList } from './root/HouseholdDashboardTabNavigator';

export type RootStackParamList = {
  Auth: undefined;
  Chore: undefined;
  HouseholdDashboard: undefined;
  HouseHoldSelectorScreen: undefined;
  HouseHoldSelectorScreenNoHouseHold: undefined;
  JoinHouseHold: undefined;
  Login: undefined;
  Profile: undefined;
  SignIn: undefined;
  SignUp: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type HouseholdDashboardTabScreenProps<
  T extends keyof HouseHoldDashboardTabParamList,
> = CompositeScreenProps<
  MaterialTopTabScreenProps<HouseHoldDashboardTabParamList, T>,
  RootStackScreenProps<keyof RootStackParamList>
>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
