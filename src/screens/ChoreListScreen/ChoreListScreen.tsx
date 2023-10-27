/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useAppTheme } from '../../contexts/ThemeContext';
// eslint-disable-next-line import/no-cycle
import { mockChores } from '../../../assets/Data/MockData';
import { addChore, fetchChores, Chore, setActiveChoreId } from '../../redux/slices/choreSlice';
import { useAppSelector, useAppDispatch } from '../../redux/store';
import { HouseholdDashboardTabScreenProps } from '../../navigators/types';
import BottomButtons from './BottomButtonsComponent';
import NoChoresPage from './NoChoresPage';

// export type ChoreStackParamList = {
// 	ChoreIndex: undefined;
// 	Chore: undefined;
// };

type Props = HouseholdDashboardTabScreenProps<'ChoreList'>;

export default function ChoreListScreen({ navigation }: Props) {
  const theme = useAppTheme();
  const dispatch = useAppDispatch();
  const activeHouseholdId = useAppSelector(
    (state) => state.household.activeHouseholdId,
  );
  const dbChores = useAppSelector((state) => state.chore.chores);
  // Dags att fakea lite mer data
  const mockedChore = {
    id: '1',
    householdId: activeHouseholdId,
    title: 'Diska',
    description: 'Diska och torka all smutsig disk i köket',
    dayinterval: 2,
    effortNumber: 2,
  };
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
    backgroundColor: 'white',
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
