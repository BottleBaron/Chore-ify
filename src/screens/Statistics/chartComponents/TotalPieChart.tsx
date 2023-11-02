/* eslint-disable react/require-default-props, import/prefer-default-export, react/function-component-definition */

import { useAppTheme } from '@src/contexts/ThemeContext';
import { PieChartData } from '@src/redux/slices/statisticsSlice';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PieChart } from 'react-native-gifted-charts';

interface TotalPieChartProps {
  widthAndHeight?: number;
  title?: string;
  data: PieChartData[];
}

export const TotalPieChart: React.FC<TotalPieChartProps> = ({
  widthAndHeight = 120,
  title = 'Total',
  data,
}) => {
  const theme = useAppTheme(); // Move this inside the functional component
  return (
    <View style={styles.container}>
      <PieChart
        data={data}
        radius={widthAndHeight}
        showText
        // labelsPosition="mid"
        showTextBackground
        textColor="black"
        textBackgroundRadius={1}
        textBackgroundColor="white"
        textSize={50}
      />
      <View style={styles.textContainer}>
        <Text style={[styles.title, { color: theme.colors.text }]}>
          {title}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingBottom: 1,
  },
  title: {
    fontSize: 24,
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 1,
  },
});
