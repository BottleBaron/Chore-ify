/* eslint-disable import/no-cycle */

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import * as React from 'react';
import ChoreListScreen from '../../screens/ChoreListScreen/ChoreListScreen';
import StatisticsScreen from '../../screens/Statistics/StatisticsScreen';
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
