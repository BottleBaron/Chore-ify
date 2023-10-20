import React from 'react';
import { Dimensions } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

interface DataPoint {
  name: string; // This can be the user's name
  population: number;
  color: string;
  legendFontColor: string;
  legendFontSize: number;
  avatar: string; // This can be the user's avatar emoji
}

interface CircleDiagramProps {
  data: DataPoint[];
}

export default function CircleDiagram({ data }: CircleDiagramProps) {
  return (
    <PieChart
      data={data}
      width={screenWidth}
      height={220}
      chartConfig={
        {
          // your chart configs here
        }
      }
      accessor="population"
      backgroundColor="transparent"
      paddingLeft="15"
      absolute
    />
  );
}
