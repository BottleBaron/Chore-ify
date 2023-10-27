/* eslint-disable react/prop-types */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// eslint-disable-next-line import/no-cycle
import { Button } from 'react-native-paper';
import { mockChores } from '../../../assets/Data/MockData';
import { useAppTheme } from '../../contexts/ThemeContext';
import { addChore } from '../../redux/slices/choreSlice';
import { fetchHouseholds } from '../../redux/slices/householdSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import BottomButtons from './BottomButtonsComponent';
import NoChoresPage from './NoChoresPage';

// export type ChoreStackParamList = {
// 	ChoreIndex: undefined;
// 	Chore: undefined;
// };

export default function ChoreListScreen({ navigation }: any) {
  // TODO: Replace placeholder id with actual id
  const dispatch = useAppDispatch();
  console.log('bingus');
  const activeHouseHoldId = useAppSelector(
    (state) => state.household.activeHouseHoldId,
  );

  const mockedChore = {
    id: '1',
    householdId: activeHouseHoldId,
    title: 'Diska',
    description: 'Diska och torka all smutsig disk i köket',
    dayinterval: 2,
    effortNumber: 2,
  };

  const handleAddChore = async () => {
    await dispatch(fetchHouseholds());

    const action = await dispatch(addChore(mockedChore));
    console.log(action);
  };

  const theme = useAppTheme();
  return (
    <View style={styles.container}>
      {mockChores.length === 0 ? (
        <NoChoresPage />
      ) : (
        <View>
          {mockChores.map((chore) => (
            <View key={chore.id} style={styles.choreList}>
              <TouchableOpacity style={styles.card}>
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
