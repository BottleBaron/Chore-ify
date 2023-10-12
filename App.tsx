import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Home from "./src/Screens/Components/Home";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Tab.Screen name="Home" component={Home} />
		</NavigationContainer>
	);
}
