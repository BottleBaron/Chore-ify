import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { RootStackScreenProps } from "../../navigators/types";

type Props = RootStackScreenProps<"SignUp">;

export default function SignUpScreen({ navigation }: Props) {
	const [username, setUsername] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [confirmPassword, setConfirmPassword] = React.useState("");

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Register Screen</Text>
			<TextInput label="Username" value={username} onChangeText={setUsername} />
			<TextInput label="Password" value={password} onChangeText={setPassword} />
			<TextInput
				label="Confirm Password"
				value={confirmPassword}
				onChangeText={setConfirmPassword}
				secureTextEntry
				// style={styles.input}
				mode="outlined"
			/>
			<Button mode="contained" onPress={() => navigation.navigate("HouseholdDashboard")} style={styles.button}>
				Register and Go to Home
			</Button>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 20,
	},
	title: {
		fontSize: 24,
		marginBottom: 20,
	},
	input: {
		width: "100%",
		marginBottom: 10,
	},
	button: {
		marginTop: 20,
	},
});

