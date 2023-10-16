import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { useAppTheme } from "../../contexts/ThemeContext";
import { RootStackScreenProps } from "../../navigators/types";

type Props = RootStackScreenProps<"Home">;

export default function HomeScreen({ navigation }: Props) {
	const theme = useAppTheme();
	return (
		<View style={styles.container}>
			<Text>Dina Hushåll</Text>
			<Button icon="home" mode="contained" onPress={() => navigation.navigate("HouseholdDashboard")}>
				Gå till hushåll 1
			</Button>
			<Button mode="contained" onPress={() => navigation.navigate("HouseholdDashboard")}>
				Gå till hushåll 1
			</Button>
			<Button mode="contained" onPress={() => navigation.navigate("HouseholdDashboard")}>
				Gå till hushåll 1
			</Button>
			<Button mode="contained" onPress={() => navigation.navigate("HouseholdDashboard")}>
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
