/* eslint-disable import/no-cycle */
import * as React from 'react';
// eslint-disable-next-line import/no-cycle
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from '@src/screens/Auth/AuthScreen';
import SignInModalScreen from '@src/screens/Auth/SignInModalScreen';
import SignUpModalScreen from '@src/screens/Auth/SignUpModalScreen';
import HouseHoldSelectorScreen from '@src/screens/HouseHoldSelector/HouseHoldSelectorScreen';
import SettingsScreen from '@src/screens/Settings/SettingsScreen';
import StatisticsScreen from '@src/screens/Statistics/StatisticsScreen';
import { RootStackParamList } from '../types';
import HouseholdDashboardTabNavigator from './HouseholdDashboardTabNavigator';
// import AuthScreen from '@src/screens/Auth/AuthScreen';
// import SignInModalScreen from '@src/screens/Auth/SignInModalScreen';
// import SignUpModalScreen from '@src/screens/Auth/SignUpModalScreen';
// import HouseHoldSelectorScreen from '@src/screens/HouseHoldSelector/HouseHoldSelectorScreen';
// import SettingsScreen from '@src/screens/Settings/SettingsScreen';
// import StatisticsScreen from '@src/screens/Statistics/StatisticsScreen';
// import { RootStackParamList } from '../types';
// import HouseholdDashboardTabNavigator from './HouseholdDashboardTabNavigator';

// import AuthScreen from '../../screens/Auth/AuthScreen';
// import SignInModalScreen from '../../screens/Auth/SignInModalScreen';
// import SignUpModalScreen from '../../screens/Auth/SignUpModalScreen';
// import StatisticsScreen from '../../screens/Statistics/StatisticsScreen';
// // import HouseHoldSelectorScreen from '../../screens/mocked-screens/HouseHoldSelectorScreen';
// import { RootStackParamList } from '../types';

// import HouseHoldSelectorScreen from '../../screens/HouseHoldSelector/HouseHoldSelectorScreen';
// import SettingsScreen from '../../screens/Settings/SettingsScreen';
// import HouseholdDashboardTabNavigator from './HouseholdDashboardTabNavigator';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
  // const isAuthUser = false; // You can toggle this for testing
  // const hasExistingHousehold = true; // Toogles the different screens for selecting household
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name="Auth"
          component={AuthScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HouseHoldSelectorScreen"
          component={HouseHoldSelectorScreen}
        />
        <Stack.Screen name="Statistics" component={StatisticsScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen
          name="SignIn"
          component={SignInModalScreen}
          options={{
            headerShown: false,
            // presentation: 'modal',
            animation: 'slide_from_bottom',
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpModalScreen}
          options={{
            headerShown: false,
            // presentation: 'modal',
            animation: 'slide_from_bottom',
          }}
        />
        {/* <Stack.Screen
          name="Chore"
          component={ChoreScreen}
          options={{
            headerShown: false,
            presentation: 'fullScreenModal',
            animation: 'slide_from_bottom',
          }}
        /> */}
        <Stack.Screen
          name="ChoreList"
          component={HouseholdDashboardTabNavigator}
        />
      </Stack.Group>
      <Stack.Group>
        {/* <Stack.Screen name="ChoreList" component={ChoreListScreen} />
        <Stack.Screen
          name="Chore"
          component={ChoreScreen}
          options={
            {
              // headerShown: false,
              // presentation: 'fullScreenModal',
              // animation: 'slide_from_bottom',
            }
          }
        /> */}
      </Stack.Group>
    </Stack.Navigator>
  );
}

//* Og-handle of isAuthUser:
// return (
//   <Stack.Navigator>
//     <Stack.Group>
//       {!isAuthUser ? (
//         <Stack.Screen
//           name="Auth"
//           component={AuthScreen}
//           options={{ headerShown: false }}
//         />
//       ) : (
//         <Stack.Screen
//           name="HouseholdDashboard"
//           component={HouseHoldDashboardScreen}
//         />
//       )}
//     </Stack.Group>
//     <Stack.Group>
//       <Stack.Screen name="SignIn" component={SignInModalScreen} />
//       <Stack.Screen name="SignUp" component={SignUpModalScreen} />
//       <Stack.Screen name="Chore" component={ChoreScreen} />
//     </Stack.Group>
//   </Stack.Navigator>
// );}
