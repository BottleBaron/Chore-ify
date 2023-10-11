import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

// -- Skapa HomeScreen-komponenten och exportera den --
// -- Denna komponent ska innehålla en list-komponent med användarens hushåll --
// -- Varje hushåll ska vara klickbar 'cards' som tar användaren till en index-sida för det hushållet med hjälp av en stack-navigator --
// -- Denna index-sida ska innehålla en lista med alla sysslor i hushållet etc --

// type Props = NativeStackScreenProps<RootStackParamList, "Settings">;

export default function SettingsScreen() {
	//Detta kopieras in i paramtern om denna behöver navigation: { navigation }: Props
	return (
		<View style={styles.container}>
			<Text>Inställningar</Text>
			<Text>Clickable Card 1: Text 1</Text>
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

