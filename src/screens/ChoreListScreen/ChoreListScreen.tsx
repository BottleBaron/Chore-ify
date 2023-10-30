/* eslint-disable react/prop-types */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useFocusEffect } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// eslint-disable-next-line import/no-cycle
import { mockChores } from '@src/assets/Data/MockData';
// import { useAppTheme } from '@src/contexts/ThemeContext';
import { useAppTheme } from '@src/contexts/ThemeContext';
import { HouseholdDashboardTabScreenProps } from '@src/navigators/types';
import { fetchChores, setActiveChoreId } from '@src/redux/slices/choreSlice';
import { useAppDispatch, useAppSelector } from '@src/redux/store';
import BottomButtons from './BottomButtonsComponent';
import NoChoresPage from './NoChoresPage';

type Props = HouseholdDashboardTabScreenProps<'ChoreList'>;

  const theme = useAppTheme();
  const dispatch = useAppDispatch();
  const activeHouseholdId = useAppSelector(
    (state) => state.household.activeHouseholdId,
  );
  const dbChores = useAppSelector((state) => state.chore.chores);

  useFocusEffect(
    React.useCallback(() => {
      let isActive = true;
      const handleInit = async () => {
        await dispatch(fetchChores(activeHouseholdId));
      };

      handleInit();
      return () => {
        isActive = false;
      };
    }, []),
  );

  const handleChoreSelection = (id: string) => {
    dispatch(setActiveChoreId(id));

    navigation.navigate('Chore');
  };

  return (
    <View style={styles.container}>
      {mockChores.length === 0 ? (
        <NoChoresPage />
      ) : (
        <View>
          {dbChores.map((chore) => (
            <View key={chore.id} style={styles.choreList}>
              <TouchableOpacity
                style={styles.card}
                onPress={() => handleChoreSelection(chore.id)}
              >
                <Text style={styles.cardText}>{chore.title}</Text>
                {/* Avatars */}
              </TouchableOpacity>
            </View>
          ))}
          <BottomButtons />
          <Button onPress={handleAddChore}>Add mock chore</Button>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  choreList: {
    padding: 7,
  },
  card: {
    // backgroundColor: 'white',
    height: 55,
    width: 390,
    justifyContent: 'space-evenly',
    elevation: 8,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
