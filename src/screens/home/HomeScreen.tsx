import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { RootStackParamList } from "../../navigators/RootStackNavigator";

// -- Skapa HomeScreen-komponenten och exportera den --
// -- Denna komponent ska innehålla en list-komponent med användarens hushåll --
// -- Varje hushåll ska vara klickbar 'cards' som tar användaren till en index-sida för det hushållet med hjälp av en stack-navigator --
// -- Denna index-sida ska innehålla en lista med alla sysslor i hushållet etc --

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: Props) {
	return (
		<View style={styles.container}>
			<Text>Dina Hushåll</Text>
			<Text>Clickable Card 1: Hushåll 1</Text>
			<Button icon="home" mode="contained" onPress={() => navigation.navigate("HouseHold")}>
				Gå till hushåll 1
			</Button>
			<Button mode="contained" onPress={() => navigation.navigate("HouseHold")}>
				Gå till hushåll 1
			</Button>
			<Button mode="contained" onPress={() => navigation.navigate("HouseHold")}>
				Gå till hushåll 1
			</Button>
			<Button mode="contained" onPress={() => navigation.navigate("HouseHold")}>
				Gå till hushåll 1
			</Button>
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
