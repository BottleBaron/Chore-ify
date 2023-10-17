import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import * as React from 'react';
// eslint-disable-next-line import/no-cycle
import ChoreListScreen from '../../Screens/mocked-screens/ChoreListScreen';
import StatisticsScreen from '../../Screens/mocked-screens/StatisticsScreen';

export type HouseHoldDashboardParamList = {
  ChoreList: undefined;
  Statistics: { period: string };
};

const Tab = createMaterialTopTabNavigator<HouseHoldDashboardParamList>();

export default function HouseholdDashboardTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ChoreList" component={ChoreListScreen} />
      <Tab.Screen
        name="Statistics"
        component={StatisticsScreen}
        initialParams={{ period: 'week' }}
      />
      {/* <Tab.Screen name="Statistics" component={StatisticsScreen} initialParams={{ period: "week" }} />
			<Tab.Screen name="Statistics" component={StatisticsScreen} initialParams={{ period: "week" }} /> */}
    </Tab.Navigator>
  );
}
