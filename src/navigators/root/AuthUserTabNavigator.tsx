/* eslint-disable import/no-cycle */

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import ChoreListScreen from '@src/screens/ChoreList/ChoreListScreen';
import ChoreListScreen from '@src/screens/ChoreListScreen/ChoreListScreen';
// import StatisticsPeriodTabNavigator from '@src/themedComponents/PeriodTabBar';
import * as React from 'react';
import { HouseHoldDashboardTabParamList } from '../types';
import StatisticsPeriodTabNavigator from './StatisticsPeriodTabNavigator';

const Tab = createMaterialTopTabNavigator<HouseHoldDashboardTabParamList>();
// const StatsTab = createMaterialTopTabNavigator<StatisticsTabParamList>();

export default function AuthUserTabNavigator() {
  return (
    <Tab.Navigator /* tabBar={() =} */>
      <Tab.Screen name="ChoreList" component={ChoreListScreen} />
      <Tab.Screen
        name="Statistics"
        component={StatisticsPeriodTabNavigator}
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
