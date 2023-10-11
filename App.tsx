import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ThemeProvider, { useAppTheme } from "./src/contexts/ThemeContext";
import RootNavigator from "./src/navigators/RootStackNavigator";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
	const theme = useAppTheme();

	const isUserAuthenticated = true;

	return (
		<SafeAreaProvider>
			<ThemeProvider>
				<StatusBar style="auto" />
				<NavigationContainer theme={theme}>
					<RootNavigator />
				</NavigationContainer>
			</ThemeProvider>
		</SafeAreaProvider>
	);
}
