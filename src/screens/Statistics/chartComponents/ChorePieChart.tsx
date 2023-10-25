/* eslint-disable react/require-default-props, import/prefer-default-export, react/function-component-definition */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PieChart } from 'react-native-gifted-charts';
import { useAppTheme } from '../../../contexts/ThemeContext';

type PieChartData = { value: number };

interface ChorePieChartProps {
  widthAndHeight?: number;
  title?: string;
  data: PieChartData[];
}

export const ChorePieChart: React.FC<ChorePieChartProps> = ({
  widthAndHeight = 60,
  title = 'Syssla',
  data,
}) => {
  const theme = useAppTheme();
  return (
    <View style={styles.container}>
      <PieChart data={data} radius={widthAndHeight} labelsPosition="mid" />
      <View style={styles.textContainer}>
        <Text style={[styles.title, { color: theme.colors.textColor }]}>
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
  },
  title: {
    fontSize: 14,
    margin: 5,
    textAlign: 'center',
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
