/* eslint-disable import/no-cycle */
import * as React from 'react';
// eslint-disable-next-line import/no-cycle
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from '../../screens/Auth/AuthScreen';
import SignInModalScreen from '../../screens/Auth/SignInModalScreen';
import SignUpModalScreen from '../../screens/Auth/SignUpModalScreen';
import ChoreScreen from '../../screens/ChoreScreen';
import HouseHoldDashboardScreen from '../../screens/mocked-screens/HouseHoldDashboardScreen';
import { RootStackParamList } from '../types';
import HouseHoldSelectorScreen from '../../screens/mocked-screens/HouseHoldSelectorScreen';
import HouseHoldSelectorScreenNoHouseHold from '../../screens/mocked-screens/HouseHoldSelectorScreenNoHouseHold';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
  const isAuthUser = true; // You can toggle this for testing
  const hasExistingHousehold = false; // Toogles the different screens for selecting household
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
            options={{ headerShown: false }}
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
