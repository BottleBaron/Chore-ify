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

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
  const isAuthUser = false; // You can toggle this for testing

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
        <Stack.Screen
          name="HouseholdDashboard"
          component={HouseHoldDashboardScreen}
        />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen name="SignIn" component={SignInModalScreen} />
        <Stack.Screen name="SignUp" component={SignUpModalScreen} />
        <Stack.Screen name="Chore" component={ChoreScreen} />
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
