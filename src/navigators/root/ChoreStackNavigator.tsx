/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable import/no-cycle */

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChoreListScreen from '@src/screens/ChoreList/ChoreListScreen';
import ChoreScreen from '@src/screens/Chore/ChoreScreen';
import SettingsScreen from '@src/screens/Settings/SettingsScreen';
import React from 'react';
import EditChoreModalScreen from '@src/screens/Chore/EditChoreModalScreen';
// import { Chore } from '@src/redux/slices/choreSlice';
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
        name="EditChoreModal"
        component={EditChoreModalScreen}
        initialParams={{
          chore: {
            id: '',
            householdId: '',
            title: '',
            description: '',
            dayinterval: 0,
            effortNumber: 0,
          },
        }}
        options={{ headerShown: false, presentation: 'fullScreenModal' }}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
