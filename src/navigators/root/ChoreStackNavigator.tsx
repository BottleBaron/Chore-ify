/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable import/no-cycle */

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChoreListScreen from '@src/screens/ChoreListScreen/ChoreListScreen';
import ChoreScreen from '@src/screens/ChoreScreen';
import SettingsScreen from '@src/screens/Settings/SettingsScreen';
import React from 'react';
import { ChoreStackParamList } from '../types';

const Stack = createNativeStackNavigator<ChoreStackParamList>();

export default function ChoreStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ChoreList"
        component={ChoreListScreen}
        initialParams={{ period: 'cur-week' }}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Chore"
        component={ChoreScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
