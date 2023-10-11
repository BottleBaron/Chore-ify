import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import * as React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useAppTheme } from "../contexts/ThemeContext";
import HomeScreen from "../screens/home/HomeScreen";
import MockedStatisticsScreen from "../screens/mocked-screens/MockedStatisticsScreen";
import SettingsScreen from "../screens/mocked-screens/SettingsScreen";

const Tab = createMaterialBottomTabNavigator<RootTabParamList>();

type RootTabParamList = {
	HomeIndex: undefined;
	Home: undefined;
	Statistics: undefined;
	Settings: undefined;
};

export default function HomeTabs() {
	const theme = useAppTheme();
	return (
		<Tab.Navigator
			initialRouteName="HomeIndex"
			activeColor={theme.colors.primary}
			inactiveColor={theme.colors.secondary}
			barStyle={{ backgroundColor: theme.colors.background }}>
			<Tab.Screen
				name="Home"
				component={HomeScreen}
				options={{
					tabBarLabel: "Home",
					tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home" color={color} size={26} />,
				}}
			/>
			<Tab.Screen name="Statistics" component={MockedStatisticsScreen} />
			<Tab.Screen name="Settings" component={SettingsScreen} />
		</Tab.Navigator>
	);
}

// function HomeStackNavigator() {
// 	return (
// 		<RootStack.Navigator initialRouteName="Home">
// 			<RootStack.Screen name="Home" component={HomeScreen} />
// 			<RootStack.Screen name="HouseHold" component={SettingsScreen} />
// 		</RootStack.Navigator>
// 	);
// }

