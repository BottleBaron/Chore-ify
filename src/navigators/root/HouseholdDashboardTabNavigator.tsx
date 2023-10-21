/* eslint-disable import/no-cycle */
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import * as React from 'react';
import StatisticsScreen from '../../screens/Statistics/StatisticsScreen';
import ChoreListScreen from '../../screens/mocked-screens/ChoreListScreen';
import { HouseHoldDashboardTabParamList } from '../types';

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
