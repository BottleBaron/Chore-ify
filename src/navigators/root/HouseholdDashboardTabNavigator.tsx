/* eslint-disable import/no-cycle */

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ChoreListScreen from '@src/screens/ChoreListScreen/ChoreListScreen';
import StatisticsScreen from '@src/screens/Statistics/StatisticsScreen';
import * as React from 'react';
import { HouseHoldDashboardTabParamList } from '../types';

const Tab = createMaterialTopTabNavigator<HouseHoldDashboardTabParamList>();

export default function HouseholdDashboardTabNavigator() {
  return (
    <Tab.Navigator /* tabBar={() =} */>
      <Tab.Screen name="ChoreList" component={ChoreListScreen} />
      <Tab.Screen
        name="Statistics"
        component={StatisticsScreen}
        initialParams={{ period: 'cur-week' }}
      />
      {/* <Tab.Screen
        name="Statistics1"
        component={StatisticsScreen}
        initialParams={{ period: 'prev-week' }}
      /> */}
    </Tab.Navigator>
  );
}
