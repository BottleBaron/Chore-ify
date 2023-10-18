/* eslint-disable import/no-cycle */
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HouseholdDashboardTabNavigator from './HouseholdDashboardTabNavigator';
import SignInScreen from '../../screens/appstart/SignInScreen';
import ChoreScreen from '../../screens/ChoreScreen';
import HomeScreen from '../../screens/mocked-screens/HomeScreen';
import SignUpScreen from '../../screens/appstart/SignUpScreen';
// import HomeTabs from "../home/RootTabsNavigator";

// -- Parameterlista för vad RootRootStack kan ta emot --
export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  SignIn: undefined;
  SignUp: undefined;
  HouseholdDashboard: undefined;
  Chore: undefined;
};

// -- Skapa en stack-navigator --
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
  const isLoggedIn = true;

  return (
    <Stack.Navigator>
      {isLoggedIn ? (
        // Screens for logged in users
        <Stack.Group>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="HouseholdDashboard"
            component={HouseholdDashboardTabNavigator}
          />
          <Stack.Group screenOptions={{ presentation: 'modal' }}>
            <Stack.Screen name="Chore" component={ChoreScreen} />
          </Stack.Group>
        </Stack.Group>
      ) : (
        // Auth screens
        <Stack.Group screenOptions={{ headerShown: false }}>
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
}

// -- Skapa RootNavigator-komponenten och exportera den --
// export default function RootRootStackNavigator() {
// 	return (
// 		<RootRootStack.Navigator>
// 			<RootRootStack.Screen name="Welcome" component={WelcomeScreen} />
// 			<RootRootStack.Screen name="Register" component={RegisterScreen} />
// 			{/* <RootRootStack.Screen name="MyUserDashboard" component={MyUserDashboardScreen} /> */}
// 		</RootRootStack.Navigator>
// 	);
// }
