/* eslint-disable import/no-cycle */
import * as React from 'react';
// eslint-disable-next-line import/no-cycle
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from '@src/screens/Auth/AuthScreen';
import SignInModalScreen from '@src/screens/Auth/SignInModalScreen';
import SignUpModalScreen from '@src/screens/Auth/SignUpModalScreen';
import ChoreScreen from '@src/screens/ChoreScreen';
import HouseHoldSelectorScreen from '@src/screens/HouseHoldSelector/HouseHoldSelectorScreen';
import SettingsScreen from '@src/screens/Settings/SettingsScreen';
import StatisticsScreen from '@src/screens/Statistics/StatisticsScreen';
import JoinHouseHoldScreen from '@src/screens/HouseHoldSelector/JoinHouseHoldScreen';
import CreateHouseHoldScreen from '@src/screens/HouseHoldSelector/CreateHouseHoldScreen';
import JoinHouseholdConfirmationScreen from '@src/screens/HouseHoldSelector/JoinHouseholdConfirmationScreen';
import { RootStackParamList } from '../types';
import HouseholdDashboardTabNavigator from './AuthUserTabNavigator';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
  // const isAuthUser = false; // You can toggle this for testing
  // const hasExistingHousehold = true; // Toogles the different screens for selecting household
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name="Auth"
          component={AuthScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HouseHoldSelectorScreen"
          component={HouseHoldSelectorScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen name="Statistics" component={StatisticsScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen
          name="SignIn"
          component={SignInModalScreen}
          options={{
            headerShown: false,
            // presentation: 'modal',
            animation: 'slide_from_bottom',
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpModalScreen}
          options={{
            headerShown: false,
            // presentation: 'modal',
            animation: 'slide_from_bottom',
          }}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="JoinHouseHold"
          component={JoinHouseHoldScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="JoinHouseHoldConfirmation"
          component={JoinHouseholdConfirmationScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="CreateHouseHold"
          component={CreateHouseHoldScreen}
        />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen
          name="ChoreList"
          component={HouseholdDashboardTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Chore" component={ChoreScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
