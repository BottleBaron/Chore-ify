import { addChore } from '@src/redux/slices/choreSlice';
import { useAppDispatch, useAppSelector } from '@src/redux/store';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Modal, PaperProvider, Portal } from 'react-native-paper';
import AddChoreScreen from './AddChoreModalScreen';

function BottomButtons() {
  const [visible, setVisible] = React.useState(false);
  const ActivehouseholdId = useAppSelector(
    (state) => state.household.activeHouseholdId,
  );
  const dispatch = useAppDispatch();

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: 'white', padding: 20 };

  const handleAddChore = (choreData: any) => {
    const newChore = { ...choreData, householdId: ActivehouseholdId };
    dispatch(addChore(newChore));
    hideModal();
  };

  return (
    <PaperProvider>
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
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    position: 'absolute',
    top: 650,
  },
  button: {
    width: 160,
    height: 40,
  },
  buttonGap: {
    width: 40,
  },
});

export default BottomButtons;
