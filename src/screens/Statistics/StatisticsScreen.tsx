import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import {
  mockChores,
  mockUserToCompletedChore,
  mockUsers,
} from '../../../assets/Data/MockData';
import { ChorePieChart } from './chartComponents/ChorePieChart';
import { TotalPieChart } from './chartComponents/TotalPieChart';
import transformer, {
  transformChoreSpecific,
} from './chartComponents/transformer';

export default function StatisticsScreen() {
  const users = mockUsers;
  const chores = mockChores;
  const completed = mockUserToCompletedChore;

  // Transform the raw data into pie chart data
  const pieChartData = transformer({ users, chores, completed });

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.topContainer}>
        <TotalPieChart data={pieChartData} widthAndHeight={150} />
      </View>
      <View style={styles.gridContainer}>
        {chores.map((chore) => {
          const specificPieChartData = transformChoreSpecific(
            { users, chores, completed },
            chore.id,
          );
          return (
            <View style={styles.gridItem} key={chore.id}>
              <ChorePieChart
                data={specificPieChartData}
                widthAndHeight={50}
                title={chore.title}
              />
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: { flex: 1 },
  topContainer: {
    // flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  gridContainer: {
    // flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    // alignItems: 'flex-start', // if you want to fill rows left to right
    // paddingTop: 5,
  },
  gridItem: {
    width: '33.33%', // is 50% of container width
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1, // kommentera ut detta
    // borderColor: 'red', // kommentera ut detta
  },
});
