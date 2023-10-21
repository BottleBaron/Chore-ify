import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import React, { useState } from 'react';
import {
  mockChores,
  mockUserToCompletedChore,
  mockUsers,
} from '../../../assets/Data/MockData';
import { HouseholdDashboardTabScreenProps } from '../../navigators/types';
import CircleDiagram, { DataPoint } from './CircleDiagram';
import StatisticsAppBar from './StatisticsAppBar';

type Props = HouseholdDashboardTabScreenProps<'Statistics'>;

const periods = ['year', 'month', 'week', 'today']; // Arrange in reverse order

export default function StatisticsScreen({ route }: Props) {
  const [currentPeriod, setCurrentPeriod] = useState(route.params.period);

  const prevPeriod = () => {
    const currentIndex = periods.indexOf(currentPeriod);
    if (currentIndex > 0) {
      // Only go back if not already at the earliest period
      const prevIndex = currentIndex - 1;
      setCurrentPeriod(periods[prevIndex]);
    }
  };

  const nextPeriod = () => {
    const currentIndex = periods.indexOf(currentPeriod);
    if (currentIndex < periods.length - 1) {
      // Only go forward if not already at the latest period
      const nextIndex = currentIndex + 1;
      setCurrentPeriod(periods[nextIndex]);
    }
  };

  // Define types
  type CompletedChore = {
    userId: number;
    choreId: number;
  };

  // Aggregating data by user
  // Explicitly specify types in reduce function
  const totalDataByUser = mockUserToCompletedChore.reduce<DataPoint[]>(
    (acc: DataPoint[], completedChore: CompletedChore) => {
      const chore = mockChores.find((ch) => ch.id === completedChore.choreId);
      const user = mockUsers.find((usr) => usr.id === completedChore.userId);
      if (!chore || !user) return acc; // skip if chore or user not found

      const foundUser = acc.find((item: DataPoint) => item.name === user.name);
      if (foundUser) {
        foundUser.population += chore.effortNumber;
      } else {
        acc.push({
          name: user.name,
          population: chore.effortNumber,
          color: '', // You can dynamically generate or assign this
          avatar: user.avatar,
        });
      }
      return acc;
    },
    [],
  );

  return (
    <View style={styles.screenContainer}>
      <StatisticsAppBar title="Today" actions={[]} />
      <View style={styles.arrowContainer}>
        <TouchableOpacity onPress={prevPeriod}>
          <Text>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={nextPeriod}>
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.container}>
        {/* <Text style={styles.title}>Total Statistics</Text> */}
        <CircleDiagram data={totalDataByUser} size={200} />
        <View style={styles.gridContainer}>
          {mockChores.map((chore) => {
            const individualData: DataPoint[] = [
              {
                name: chore.title,
                population: chore.effortNumber,
                color: 'blue',
                avatar: 'B',
              },
            ];
            return (
              <View key={chore.id} style={styles.gridItem}>
                <CircleDiagram data={individualData} size={100} />
                <Text>{chore.title}</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  arrowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    alignSelf: 'center',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridItem: {
    flex: 1,
    width: '30%',
    alignItems: 'center',
    margin: 5,
  },
});
