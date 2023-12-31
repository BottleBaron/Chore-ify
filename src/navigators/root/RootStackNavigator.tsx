/* eslint-disable import/no-cycle */
import * as React from 'react';
// eslint-disable-next-line import/no-cycle
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from '@src/screens/Auth/AuthScreen';
import SignInModalScreen from '@src/screens/Auth/SignInModalScreen';
import SignUpModalScreen from '@src/screens/Auth/SignUpModalScreen';
import CreateHouseHoldScreen from '@src/screens/HouseHoldSelector/CreateHouseHoldScreen';
import HouseHoldSelectorScreen from '@src/screens/HouseHoldSelector/HouseHoldSelectorScreen';
import JoinHouseHoldScreen from '@src/screens/HouseHoldSelector/JoinHouseHoldScreen';
import JoinHouseholdConfirmationScreen from '@src/screens/HouseHoldSelector/JoinHouseholdConfirmationScreen';
import { RootStackParamList } from '../types';
import AuthUserTabNavigator from './AuthUserTabNavigator';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
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
          name="AuthTab"
          component={AuthUserTabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
