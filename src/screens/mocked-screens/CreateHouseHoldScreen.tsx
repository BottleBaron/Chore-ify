/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-cycle */
import React, { useState } from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';
import { Text, Button, TextInput, List } from 'react-native-paper';
import { useAppTheme } from '../../contexts/ThemeContext';
import { RootStackScreenProps } from '../../navigators/types';

type Props = RootStackScreenProps<'CreateHouseHold'>;

export default function CreateHouseHoldScreen({ navigation }: Props) {
  const theme = useAppTheme();
  const avatars: string[] = ['🐳', '🦊', '🐙', '🐥', '🐷', '🐸'];
  const [householdName, setHouseholdName] = useState<string>('');
  const [nickName, setNickName] = useState<string>('');
  const [selectedAvatar, setSelectedAvatar] = useState<string>('');
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleAvatarSelection = (avatar: string) => {
    setSelectedAvatar(avatar);
    setExpanded(!expanded); // Stänger listan när en avatar väljs
  };
  const handlePress = () => setExpanded(!expanded);

  return (
    <View style={styles.container}>
      <Text> Create household</Text>
      <TextInput
        mode="outlined"
        label="Hushållets namn"
        value={householdName}
        onChangeText={(householdName) => setHouseholdName(householdName)}
      />
      <TextInput
        mode="outlined"
        label="Ditt namn i hushållet"
        value={nickName}
        onChangeText={(nickName) => setNickName(nickName)}
      />
     <Text>
        <List.Accordion expanded={expanded} title={selectedAvatar || 'Välj din avatar'} onPress={handlePress}>
          {avatars.map((avatar, index) => (
            <List.Item
              key={index}
              title={avatar}
              onPress={() => handleAvatarSelection(avatar)}
            />
          ))}
        </List.Accordion>
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
