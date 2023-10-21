import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { useAppTheme } from '../../contexts/ThemeContext';

export interface DataPoint {
  name: string;
  population: number;
  color: string;
  avatar: string;
}

interface CircleDiagramProps {
  data: DataPoint[];
  size?: number;
}

CircleDiagram.defaultProps = {
  size: 250,
};

export default function CircleDiagram({ data, size }: CircleDiagramProps) {
  const theme = useAppTheme();

  const actualSize = size ?? 250;

  const chartData = data.map((point) => ({
    name: point.name,
    population: point.population,
    color: point.color,
    legendFontColor: '#7F7F7F', // Assuming a gray legend font color; modify as needed
    legendFontSize: 15, // Assuming a legend font size of 15; modify as needed
  }));

  const totalPopulation = data.reduce(
    (acc, point) => acc + point.population,
    0,
  );

  let startAngle = 0;

  const AvatarOverlays = data.map((point) => {
    const percentage = point.population / totalPopulation;
    const angle = percentage * 360;
    const endAngle = startAngle + angle;
    const midAngle = (startAngle + endAngle) / 2;

    // Trigonometry to find x and y coordinates
    const x = (actualSize / 2) * Math.cos((midAngle * Math.PI) / 180);
    const y = (actualSize / 2) * Math.sin((midAngle * Math.PI) / 180);

    startAngle = endAngle;

    return (
      <View
        key={point.name}
        style={[
          styles.avatarOverlay,
          {
            left: actualSize / 2 + x - 10,
            top: actualSize / 2 + y - 10,
            backgroundColor: point.color,
          },
        ]}
      >
        <Text style={styles.avatarText}>{point.avatar}</Text>
      </View>
    );
  });

  return (
    <View style={styles.container}>
      <PieChart
        data={chartData}
        width={actualSize}
        height={actualSize}
        backgroundColor="#ffffff"
        chartConfig={{
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          color: () => `${theme.colors.button}`, // Add this line
        }}
        accessor="population"
        paddingLeft="15"
      />
      {AvatarOverlays}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    position: 'relative',
  },
  avatarOverlay: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 14,
  },
});
