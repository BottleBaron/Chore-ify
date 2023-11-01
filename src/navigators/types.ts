/* eslint-disable import/no-cycle */
import type { MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs';
import type { CompositeScreenProps } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Auth: undefined;
  SignIn: undefined;
  SignUp: undefined;
  Profile: undefined;
  HouseHoldSelectorScreen: undefined;
  CreateHouseHold: undefined;
  JoinHouseHold: undefined;
  JoinHouseHoldConfirmation: { houseHoldCode: string };
  Statistics: {
    period: string;
  };
  AuthTab: {
    householdId: string;
    userId: string;
  };
};

export type AuthUserTabParamList = {
  ChoreStack: { period: string };
  Today: { period: string };
  // CurrentWeek: { period: string };
  LastWeek: { period: string };
  // CurrentMonth: { period: string };
  // LastMonth: { period: string };
  // CurrentYear: { period: string };
  // LastYear: { period: string };
};

export type ChoreStackParamList = {
  ChoreList: { period: string };
  Chore: undefined;
  Settings: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

// og entension of props
export type AuthUserTabScreenProps<T extends keyof AuthUserTabParamList> =
  CompositeScreenProps<
    MaterialTopTabScreenProps<AuthUserTabParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

export type ChoreStackScreenProps<T extends keyof ChoreStackParamList> =
  NativeStackScreenProps<ChoreStackParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
