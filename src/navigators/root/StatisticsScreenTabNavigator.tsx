// /* eslint-disable import/no-cycle */
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import * as React from 'react';
// import StatisticsScreen from '../../screens/Statistics/StatisticsScreen';
// import ChoreListScreen from '../../screens/mocked-screens/ChoreListScreen';
// import { HouseHoldDashboardParamList } from './HouseholdDashboardTabNavigator';

// export type StatisticsScreenProps = {
//   ChoreList: undefined;
//   Statistics: { period: string };
// };

// const Tab = createMaterialTopTabNavigator<HouseHoldDashboardParamList>();

// export default function StatisticsScreenTabNavigator() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="ChoreList" component={ChoreListScreen} />
//       <Tab.Screen
//         name="Statistics"
//         component={StatisticsScreen}
//         initialParams={{ period: 'week' }}
//       />
//       {/* <Tab.Screen name="Statistics" component={StatisticsScreen} initialParams={{ period: "week" }} />
// 			<Tab.Screen name="Statistics" component={StatisticsScreen} initialParams={{ period: "week" }} /> */}
//     </Tab.Navigator>
//   );
// }