/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-cycle */
import React, { useState } from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';
import { Text, Button, TextInput } from 'react-native-paper';
import { useAppTheme } from '../../contexts/ThemeContext';
import { RootStackScreenProps } from '../../navigators/types';

type Props = RootStackScreenProps<'JoinHouseHold'>;

export default function JoinHouseHoldScreen({ navigation }: Props) {
  const theme = useAppTheme();
  const [houseHoldCode, setHouseHoldCode] = useState<string[]>([
    '',
    '',
    '',
    '',
  ]);

  const handleInputChange = (text: string, index: number) => {
    const updatedHouseHoldCode = [...houseHoldCode];
    updatedHouseHoldCode[index] = text;
    setHouseHoldCode(updatedHouseHoldCode);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.box, { borderColor: theme.colors.border }]}>
        <Text variant="headlineSmall" style={{ color: theme.colors.color }}>
          {' '}
          Skriv in hushållets kod{' '}
        </Text>
        <Text
          variant="bodyMedium"
          style={[{ margin: 20 }, { color: theme.colors.color }]}
        >
          {' '}
          Administratören för hushållet har en 4-siffrig kod som du behöver
          fylla i för att gå med i ett existerande hushåll{' '}
        </Text>

        <View style={styles.inputfields}>
          <TextInput
            style={styles.textinput}
            mode="outlined"
            value={houseHoldCode[0]}
            onChangeText={(text) => handleInputChange(text, 0)}
          />
          <TextInput
            style={styles.textinput}
            mode="outlined"
            value={houseHoldCode[1]}
            onChangeText={(text) => handleInputChange(text, 1)}
          />
          <TextInput
            style={styles.textinput}
            mode="outlined"
            value={houseHoldCode[2]}
            onChangeText={(text) => handleInputChange(text, 2)}
          />
          <TextInput
            style={styles.textinput}
            mode="outlined"
            value={houseHoldCode[3]}
            onChangeText={(text) => handleInputChange(text, 3)}
          />
        </View>
      </View>

      <View style={{ justifyContent: 'flex-end' }}>
        <View style={styles.buttonview}>
          <Button
            contentStyle={styles.buttoncontentstyle}
            style={styles.buttonstyle}
            icon="plus-circle"
            mode="outlined"
            labelStyle={{ fontSize: 18 }}
          >
            Ansök
          </Button>
          <Button
            contentStyle={styles.buttoncontentstyle}
            style={styles.buttonstyle}
            icon="close-circle"
            mode="outlined"
            labelStyle={{ fontSize: 18 }}
          >
            Stäng
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  box: {
    marginVertical: '40%',
    maxWidth: '80%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    alignContent: 'center',
    borderWidth: 3,
    minHeight: '40%',
    borderRadius: 15,
  },
  inputfields: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textinput: {
    marginHorizontal: '1%',
    borderRadius: 150,
  },
  buttonview: {
    flexDirection: 'row',
    minWidth: '80%',
  },
  buttonstyle: {
    borderRadius: 0,
    minWidth: '45%',
    minHeight: '10%',
  },
  buttoncontentstyle: {
    paddingVertical: '10%',
  },
});
