/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useFocusEffect } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// eslint-disable-next-line import/no-cycle
// import { useAppTheme } from '@src/contexts/ThemeContext';
import { useAppTheme } from '@src/contexts/ThemeContext';
import { HouseholdDashboardTabScreenProps } from '@src/navigators/types';
import {
  Chore,
  addChore,
  fetchChoresWithAvatars,
  setActiveChoreId,
} from '@src/redux/slices/choreSlice';
import { useAppDispatch, useAppSelector } from '@src/redux/store';
import { Button, Modal, PaperProvider, Portal } from 'react-native-paper';
import AddChoreScreen from './AddChoreModalScreen';

type Props = HouseholdDashboardTabScreenProps<'ChoreList'>;

export default function ChoreListScreen({ navigation }: Props) {
  const theme = useAppTheme();
  const dispatch = useAppDispatch();
  const activeHouseholdId = useAppSelector(
    (state) => state.household.activeHouseholdId,
  );
  const dbChores = useAppSelector((state) => state.chore.choresWithAvatars);

  useFocusEffect(
    React.useCallback(() => {
      let isActive = true;
      const handleInit = async () => {
        await dispatch(fetchChoresWithAvatars(activeHouseholdId));
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

  // Bottom buttons props
  const [visible, setVisible] = React.useState(false);
  const ActivehouseholdId = useAppSelector(
    (state) => state.household.activeHouseholdId,
  );
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: 'white', padding: 20 };

  const handleAddChore = (choreData: Chore) => {
    const newChore = { ...choreData, householdId: ActivehouseholdId };
    dispatch(addChore(newChore));
    dispatch(fetchChoresWithAvatars(activeHouseholdId));
    hideModal();
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        {dbChores.map((choreWithAvatar, index) => (
          <View key={index} style={styles.choreList}>
            <TouchableOpacity
              style={[styles.card, { backgroundColor: theme.colors.card }]}
              onPress={() => handleChoreSelection(choreWithAvatar.chore.id)}
            >
              <Text style={styles.cardText}>{choreWithAvatar.chore.title}</Text>
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                }}
              >
                {choreWithAvatar.avatars.map((avatar) => (
                  <Text>{avatar}</Text>
                ))}
              </View>
            </TouchableOpacity>
          </View>
        ))}
        <View style={styles.outerButtonContainer}>
          <View style={styles.buttonContainer}>
            <Button
              style={styles.button}
              buttonColor="white"
              textColor="black"
              icon="plus"
              mode="elevated"
              onPress={showModal}
            >
              Lägg till
            </Button>
            <View style={styles.buttonGap} />
            <Button
              style={styles.button}
              buttonColor="white"
              textColor="black"
              icon="pen"
              mode="elevated"
              // eslint-disable-next-line no-console
              onPress={() => console.log('Pressed')}
            >
              Ändra
            </Button>
            <Portal>
              <Modal
                visible={visible}
                onDismiss={hideModal}
                contentContainerStyle={containerStyle}
              >
                <AddChoreScreen handleAddChore={handleAddChore} />
              </Modal>
            </Portal>
          </View>
        </View>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  choreList: {
    justifyContent: 'center',
    padding: 7,
  },
  card: {
    height: 55,
    width: 390,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 8,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  outerButtonContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    padding: 20,
  },
  button: {
    width: 160,
    height: 40,
  },
  buttonGap: {
    width: 40,
  },
});
