import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';

function BottomButtons() {
  return (
    <View style={styles.buttonContainer}>
      <Button
        style={styles.button}
        buttonColor="white"
        textColor="black"
        icon="plus"
        mode="elevated"
        // eslint-disable-next-line no-console
        onPress={() => console.log('Pressed')}
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
    </View>
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
