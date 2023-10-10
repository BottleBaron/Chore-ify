import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import HomeScreen from "../screens/HomeScreen";

// -- Parameterlista för vad RootStack kan ta emot --
type RootStackParamList = {
	Home: undefined;
	Detail: undefined;
};

// -- Skapa en stack-navigator --
const RootStack = createNativeStackNavigator<RootStackParamList>();

// -- Skapa RootNavigator-komponenten och exportera den --
export default function RootNavigator() {
	return (
		<RootStack.Navigator>
			<RootStack.Screen name="Home" component={HomeScreen} />
			{/* <RootStack.Screen name="Detail" component={DetailScreen} /> */}
		</RootStack.Navigator>
	);
}

