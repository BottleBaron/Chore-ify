/* eslint-disable import/no-cycle */

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import ChoreListScreen from '@src/screens/ChoreList/ChoreListScreen';
import ChoreListScreen from '@src/screens/ChoreListScreen/ChoreListScreen';
import StatisticsScreen from '@src/screens/Statistics/StatisticsScreen';
import CustomTabBar from '@src/themedComponents/CustomTabBar';
import * as React from 'react';
import { HouseHoldDashboardTabParamList } from '../types';

const Tab = createMaterialTopTabNavigator<HouseHoldDashboardTabParamList>();
// const StatsTab = createMaterialTopTabNavigator<StatisticsTabParamList>();

export default function AuthUserTabNavigator() {
  return (
    <Tab.Navigator
      /* tabBar={() =} */ tabBar={(props: any) => <CustomTabBar {...props} />}
    >
      <Tab.Screen name="ChoreList" component={ChoreListScreen} />
      <Tab.Screen
        name="CurrentWeek"
        component={StatisticsScreen}
        initialParams={{ period: 'cur-week' }}
      />
      <Tab.Screen
        name="LastWeek"
        component={StatisticsScreen}
        initialParams={{ period: 'prev-week' }}
      />
      <Tab.Screen
        name="CurrentMonth"
        component={StatisticsScreen}
        initialParams={{ period: 'cur-month' }}
      />
      <Tab.Screen
        name="LastMonth"
        component={StatisticsScreen}
        initialParams={{ period: 'prev-month' }}
      />
      <Tab.Screen
        name="CurrentYear"
        component={StatisticsScreen}
        initialParams={{ period: 'cur-year' }}
      />
      <Tab.Screen
        name="LastYear"
        component={StatisticsScreen}
        initialParams={{ period: 'prev-year' }}
      />
    </Tab.Navigator>
  );
}
