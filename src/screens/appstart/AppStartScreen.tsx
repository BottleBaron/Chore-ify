import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import { useAppTheme } from "../../contexts/ThemeContext";
import { RootStackParamList } from "../../navigators/RootStackNavigator";

// Ange typen för navigation prop
type WelcomeProps = NativeStackScreenProps<RootStackParamList, "AppStart">;

export default function AppStartScreen({ navigation }: WelcomeProps) {
	const theme = useAppTheme();

	return (
		<View style={styles.container}>
			<Button
				mode="contained"
				buttonColor={theme.colors.buttonColor}
				onPress={() => navigation.navigate("Home")}
				style={styles.button}>
				Login - just nu direkt till HomeScreen
			</Button>
			<Button mode="contained" onPress={() => navigation.navigate("Register")} style={styles.button}>
				Register - just nu direkt till RegisterScreen
			</Button>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	button: {
		marginTop: 20,
	},
});

