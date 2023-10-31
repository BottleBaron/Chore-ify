/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable import/no-cycle */

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import StatisticsScreen from '@src/screens/Statistics/StatisticsScreen';
import CustomTabBar from '@src/themedComponents/CustomTabBar';
import * as React from 'react';
import { AuthUserTabParamList } from '../types';
import ChoreStackNavigator from './ChoreStackNavigator';

const Tab = createMaterialTopTabNavigator<AuthUserTabParamList>();

export default function AuthUserTabNavigator() {
  return (
    <Tab.Navigator
      /* tabBar={() =} */ tabBar={(props: any) => <CustomTabBar {...props} />}
    >
      <Tab.Screen
        name="ChoreStack"
        component={ChoreStackNavigator}
        initialParams={{ period: 'today' }}
        options={{}}
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
