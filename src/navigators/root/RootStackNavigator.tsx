/* eslint-disable import/no-cycle */
import * as React from 'react';
// eslint-disable-next-line import/no-cycle
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthScreen from '../../screens/Auth/AuthScreen';
import SignInModalScreen from '../../screens/Auth/SignInModalScreen';
import SignUpModalScreen from '../../screens/Auth/SignUpModalScreen';
import ChoreScreen from '../../screens/ChoreScreen';
import StatisticsScreen from '../../screens/Statistics/StatisticsScreen';
import HouseHoldDashboardScreen from '../../screens/mocked-screens/HouseHoldDashboardScreen';
import HouseHoldSelectorScreen from '../../screens/mocked-screens/HouseHoldSelectorScreen';
import HouseHoldSelectorScreenNoHouseHold from '../../screens/mocked-screens/HouseHoldSelectorScreenNoHouseHold';
import JoinHouseHoldScreen from '../../screens/mocked-screens/JoinHouseHoldScreen';
import CreateHouseHoldScreen from '../../screens/mocked-screens/CreateHouseHoldScreen';
import { RootStackParamList } from '../types';

import SettingsScreen from '../../screens/Settings/SettingsScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
  const isAuthUser = false; // You can toggle this for testing
  const hasExistingHousehold = true; // Toogles the different screens for selecting household
  return (
    <Stack.Navigator>
      <Stack.Group>
        {!isAuthUser ? (
          <Stack.Screen
            name="Auth"
            component={AuthScreen}
            options={{ headerShown: false }}
          />
        ) : null}
        {!hasExistingHousehold ? (
          <Stack.Screen
            name="HouseHoldSelectorScreenNoHouseHold"
            component={HouseHoldSelectorScreenNoHouseHold}
            options={{ headerShown: true }}
          />
        ) : null}
        <Stack.Screen
          name="HouseHoldSelectorScreen"
          component={HouseHoldSelectorScreen}
        />
        <Stack.Screen name="Statistics" component={StatisticsScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen name="SignIn" component={SignInModalScreen} />
        <Stack.Screen name="SignUp" component={SignUpModalScreen} />
        <Stack.Screen name="Chore" component={ChoreScreen} />
        <Stack.Screen
          name="HouseholdDashboard"
          component={HouseHoldDashboardScreen}
        />
        <Stack.Screen name="JoinHouseHold" component={JoinHouseHoldScreen} />
        <Stack.Screen
          options={{ headerShown: false }}
          name="CreateHouseHold"
          component={CreateHouseHoldScreen}
        />
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
