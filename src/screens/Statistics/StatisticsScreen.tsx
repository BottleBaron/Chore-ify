/* eslint-disable no-console */
/* eslint-disable react/no-array-index-key */
import {
  getChoreStatistics,
  getGlobalStatistics,
} from '@src/redux/slices/statisticsSlice';
import { useAppDispatch, useAppSelector } from '@src/redux/store';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { ChorePieChart } from './chartComponents/ChorePieChart';
import { TotalPieChart } from './chartComponents/TotalPieChart';

export default function StatisticsScreen(/* { route } */) {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const aboutAWeekAgo = new Date();
        aboutAWeekAgo.setDate(aboutAWeekAgo.getDate() - 7);

        // Dispatch global statistics and chore statistics separately
        const globalStatsAction = await dispatch(
          getGlobalStatistics(aboutAWeekAgo),
        );
        const choreStatsAction = await dispatch(
          getChoreStatistics(aboutAWeekAgo),
        );

        if (
          getGlobalStatistics.fulfilled.match(globalStatsAction) &&
          getChoreStatistics.fulfilled.match(choreStatsAction)
        ) {
          console.log('Data fetched successfully');
        } else {
          console.error(
            'Data fetch failed:',
            globalStatsAction.payload,
            choreStatsAction.payload,
          );
        }

        setLoading(false);
      } catch (error) {
        console.error('Error while fetching data:', error);
        setLoading(false);
      }
    };

    if (loading) {
      fetchData();
    }
  }, [dispatch, loading]);

  const pieChartData = useAppSelector(
    (state) => state.statistics.totalPieChartData,
  );
  const chorePieChartData = useAppSelector(
    (state) => state.statistics.chorePieChartData,
  );

  return (
    <SafeAreaView style={styles.scrollView}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <ScrollView style={styles.scrollView}>
          <View style={styles.topContainer}>
            <TotalPieChart data={pieChartData} widthAndHeight={150} />
          </View>
          <View style={styles.gridContainer}>
            {chorePieChartData.map((chore, index) => (
              <View style={styles.gridItem} key={index}>
                <ChorePieChart
                  data={chore.pieChartdata}
                  widthAndHeight={50}
                  title={chore.choreTitle}
                />
              </View>
            ))}
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
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
