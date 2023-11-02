/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// eslint-disable-next-line import/no-cycle
// import { useAppTheme } from '@src/contexts/ThemeContext';
import { useAppTheme } from '@src/contexts/ThemeContext';
// import { HouseholdDashboardTabScreenProps } from '@src/navigators/types';
import { ChoreStackScreenProps } from '@src/navigators/types';
import {
  Chore,
  addChore,
  fetchDisplayChores,
  setActiveChoreId,
} from '@src/redux/slices/choreSlice';
import { useAppDispatch, useAppSelector } from '@src/redux/store';
import { Button, Modal, PaperProvider, Portal } from 'react-native-paper';
import AddChoreScreen from './AddChoreModalScreen';

type Props = ChoreStackScreenProps<'ChoreList'>;

export default function ChoreListScreen({ navigation }: Props) {
  const theme = useAppTheme();
  const dispatch = useAppDispatch();
  const activeHouseholdId = useAppSelector(
    (state) => state.household.activeHouseholdId,
  );
  const dbChores = useAppSelector((state) => state.chore.choresWithAvatars);

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const action = await dispatch(fetchDisplayChores(activeHouseholdId));
        if (fetchDisplayChores.fulfilled.match(action)) {
          console.log('DisplayChores fetched Successfully');
        } else console.error(action.payload);
        setLoading(false); // Data has been fetched
      } catch (error) {
        // Handle any errors here
        console.error(error);
        setLoading(false); // Ensure loading state is updated in case of an error
      }
    };

    fetchData();
  }, [dispatch, activeHouseholdId]);

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
    dispatch(fetchDisplayChores(activeHouseholdId));
    hideModal();
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          <View style={styles.container}>
            {dbChores.map((choreWithAvatar, index) => (
              <View key={index} style={styles.choreList}>
                <TouchableOpacity
                  style={[styles.card, { backgroundColor: theme.colors.card }]}
                  onPress={() => handleChoreSelection(choreWithAvatar.chore.id)}
                >
                  <Text style={styles.cardText}>
                    {choreWithAvatar.chore.title}
                  </Text>
                  <View
                    style={{
                      alignItems: 'center',
                      flexDirection: 'row',
                    }}
                  >
                    <View
                      style={[
                        styles.dayscounterContainer,
                        { backgroundColor: choreWithAvatar.color },
                      ]}
                    >
                      <Text>{choreWithAvatar.daysSinceLastDone}</Text>
                    </View>
                    {choreWithAvatar.avatars.map((avatar, index) => (
                      <Text key={index}>{avatar}</Text>
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
        )}
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
  dayscounterContainer: {
    backgroundColor: 'grey',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    borderRadius: 50,
    marginHorizontal: 10,
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
