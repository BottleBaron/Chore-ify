/* eslint-disable import/no-cycle */

import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { HouseHoldDashboardTabParamList } from '../types';
import ChoreListScreen from '../../screens/mocked-screens/ChoreListScreen';
import StatisticsScreen from '../../screens/Statistics/StatisticsScreen';

const Tab = createMaterialTopTabNavigator<HouseHoldDashboardTabParamList>();

export default function HouseholdDashboardTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ChoreList" component={ChoreListScreen} />
      <Tab.Screen
        name="Statistics"
        component={StatisticsScreen}
        // initialParams={{ period: 'week' }}
      />
      {/* <Tab.Screen name="Statistics" component={StatisticsScreen} initialParams={{ period: "week" }} />
			<Tab.Screen name="Statistics" component={StatisticsScreen} initialParams={{ period: "week" }} /> */}
    </Tab.Navigator>
  );
}
