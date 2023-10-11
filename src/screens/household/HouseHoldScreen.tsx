import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../../navigators/RootStackNavigator";

// -- Skapa HomeScreen-komponenten och exportera den --
// -- Denna komponent ska innehålla en list-komponent med användarens hushåll --
// -- Varje hushåll ska vara klickbar 'cards' som tar användaren till en index-sida för det hushållet med hjälp av en stack-navigator --
// -- Denna index-sida ska innehålla en lista med alla sysslor i hushållet etc --

type Props = NativeStackScreenProps<RootStackParamList, "HouseHold">;

export default function HouseHoldScreen() {
	return (
		<View style={styles.container}>
			<Text>Clickable Card 1: Syssla</Text>
			<Text>Clickable Card 1: Syssla</Text>
			<Text>Clickable Card 1: Syssla</Text>
			<Text>Clickable Card 2: Syssla</Text>
			<Text>Clickable Card 3: Syssla</Text>
			<Text>Clickable Card 4: Syssla</Text>
			<Text>Clickable Card 5: Syssla</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});

