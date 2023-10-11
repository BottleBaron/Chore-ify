import React from "react";
import { StyleSheet, Text, View } from "react-native";
// import { BarChart } from "react-native-svg-charts";

export default function StatisticsScreen() {
	const data = [50, 10, 40, 95, 85, 91, 35, 53, 24, 50];

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Statistics</Text>
			{/* <BarChart
				style={styles.chart}
				data={data}
				svg={{ fill: "rgba(134, 65, 244, 0.8)" }}
				contentInset={{ top: 30, bottom: 30 }}></BarChart> */}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#f0f0f0",
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 24,
		marginBottom: 20,
	},
	chart: {
		width: "90%",
		height: 200,
	},
});

