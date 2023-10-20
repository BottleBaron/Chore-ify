import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

interface DataPoint {
  name: string;
  population: number;
  color: string;
  legendFontColor: string;
  legendFontSize: number;
  avatar: string;
}

interface CircleDiagramProps {
  data: DataPoint[];
}

export default function CircleDiagram({ data }: CircleDiagramProps) {
  const chartRadius = 110;
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
    const x = chartRadius * Math.cos((midAngle * Math.PI) / 180);
    const y = chartRadius * Math.sin((midAngle * Math.PI) / 180);

    startAngle = endAngle;

    return (
      <View
        key={point.name}
        style={[
          styles.avatarOverlay,
          {
            left: chartRadius + x - 10,
            top: chartRadius + y - 10,
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
        data={data}
        width={screenWidth}
        height={220}
        chartConfig={{}}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />
      {AvatarOverlays}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
