/* eslint-disable import/no-cycle */
import * as React from 'react';
// eslint-disable-next-line import/no-cycle
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from '../../Screens/Auth/AuthScreen';
import SignInModalScreen from '../../Screens/Auth/SignInModalScreen';
import SignUpModalScreen from '../../Screens/Auth/SignUpModalScreen';
import ChoreScreen from '../../Screens/ChoreScreen';
import HouseHoldDashboardScreen from '../../Screens/mocked-screens/HouseHoldDashboardScreen';
import HouseHoldSelectorScreen from '../../Screens/mocked-screens/HouseHoldSelectorScreen';
import HouseHoldSelectorScreenNoHouseHold from '../../Screens/mocked-screens/HouseHoldSelectorScreenNoHouseHold';
import { RootStackParamList } from '../types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
  const isAuthUser = true; // You can toggle this for testing
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
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen name="SignIn" component={SignInModalScreen} />
        <Stack.Screen name="SignUp" component={SignUpModalScreen} />
        <Stack.Screen name="Chore" component={ChoreScreen} />
        <Stack.Screen
          name="HouseholdDashboard"
          component={HouseHoldDashboardScreen}
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
