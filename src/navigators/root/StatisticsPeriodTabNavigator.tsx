import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import StatisticsScreen from '@src/screens/Statistics/StatisticsScreen';
import PeriodTabBar from '@src/themedComponents/PeriodTabBar';
import React from 'react';
import { StatisticsTabParamList } from '../types';
// import CustomTabBar from './CustomTabBar'; // Assuming the import is like this

const StatsTab = createMaterialTopTabNavigator<StatisticsTabParamList>();

export default function StatisticsPeriodTabNavigator() {
  return (
    <StatsTab.Navigator tabBar={(props: any) => <PeriodTabBar {...props} />}>
      <StatsTab.Screen
        name="CurrentWeek"
        component={StatisticsScreen}
        initialParams={{ period: 'cur-week' }}
      />
      <StatsTab.Screen
        name="LastWeek"
        component={StatisticsScreen}
        initialParams={{ period: 'prev-week' }}
      />
      <StatsTab.Screen
        name="CurrentMonth"
        component={StatisticsScreen}
        initialParams={{ period: 'cur-month' }}
      />
      <StatsTab.Screen
        name="LastMonth"
        component={StatisticsScreen}
        initialParams={{ period: 'prev-month' }}
      />
      <StatsTab.Screen
        name="CurrentYear"
        component={StatisticsScreen}
        initialParams={{ period: 'cur-year' }}
      />
      <StatsTab.Screen
        name="LastYear"
        component={StatisticsScreen}
        initialParams={{ period: 'prev-year' }}
      />
    </StatsTab.Navigator>
  );
}
