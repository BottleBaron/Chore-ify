import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
// eslint-disable-next-line import/no-cycle
import AuthScreen from '../../screens/Auth/AuthScreen';
import SignInModalScreen from '../../screens/Auth/SignInModalScreen';
import SignUpModalScreen from '../../screens/Auth/SignUpModalScreen';
import ChoreScreen from '../../screens/ChoreScreen';
import HouseholdDashboardTabNavigator from './HouseholdDashboardTabNavigator';
// import HomeTabs from "../home/RootTabsNavigator";

// -- Parameterlista för vad RootRootStack kan ta emot --
export type RootStackParamList = {
  Auth: undefined;
  Chore: undefined;
  Home: undefined;
  HouseholdDashboard: undefined;
  Login: undefined;
  Profile: undefined;
  SignIn: undefined;
  SignUp: undefined;
};

// -- Skapa en stack-navigator --
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
  const isAuthUser = false; // You can toggle this for testing

  // const config = {
  //   animation: 'spring',
  //   config: {
  //     stiffness: 1000,
  //     damping: 500,
  //     mass: 3,
  //     overshootClamping: true,
  //     restDisplacementThreshold: 0.01,
  //     restSpeedThreshold: 0.01,
  //   },
  // };

  return (
    <Stack.Navigator>
      <Stack.Group>
        {!isAuthUser ? (
          <Stack.Screen
            name="Auth"
            component={AuthScreen}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="Home"
            component={HouseholdDashboardTabNavigator}
          />
        )}
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen name="SignIn" component={SignInModalScreen} />
        <Stack.Screen name="SignUp" component={SignUpModalScreen} />
        <Stack.Screen name="Chore" component={ChoreScreen} />
      </Stack.Group>
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
