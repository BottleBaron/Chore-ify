import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import AppStartScreen from "../screens/appstart/AppStartScreen";
import HomeScreen from "../screens/home/HomeScreen";
import RegisterScreen from "../screens/register/RegisterScreen";
import HomeTabs from "./HomeTabNavigator";

// -- Parameterlista för vad RootStack kan ta emot --
export type RootStackParamList = {
	AppStart: undefined;
	Home: undefined;
	HouseHold: undefined;
	Login: undefined;
	Register: undefined;
};

// -- Skapa en stack-navigator --
const RootStack = createNativeStackNavigator<RootStackParamList>();

// -- Skapa RootNavigator-komponenten och exportera den --
export default function RootNavigator() {
	return (
		<RootStack.Navigator initialRouteName="AppStart">
			<RootStack.Screen name="AppStart" component={AppStartScreen} />
			<RootStack.Screen name="Home" component={HomeTabs} />
			<RootStack.Screen name="Register" component={RegisterScreen} />
		</RootStack.Navigator>
	);
}

