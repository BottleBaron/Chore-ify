/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-cycle */
import { useFocusEffect } from '@react-navigation/core';
import React, { useCallback, useState } from 'react';

import { StyleSheet, View, Image, Dimensions } from 'react-native';
import {
  Text,
  Button,
  TextInput,
  List,
  Title,
  Paragraph,
} from 'react-native-paper';
import { useSelector } from 'react-redux';
import { User, addUser } from '@src/redux/slices/userSlice';
import {
  Household,
  addHousehold,
  fetchHouseholdsAndUsers,
} from '@src/redux/slices/householdSlice';
import { useAppDispatch, useAppSelector } from '@src/redux/store';
import { useAppTheme } from '@src/contexts/ThemeContext';
import { RootStackScreenProps } from '@src/navigators/types';
import { auth } from 'firebaseConfig';

export default function HouseHoldExistsContent() {
  const dispatch = useAppDispatch();

  const avatars: string[] = ['🐳', '🦊', '🐙', '🐥', '🐷', '🐸'];
  const [householdName, setHouseholdName] = useState<string>('');
  const [nickName, setNickName] = useState<string>('');
  const [selectedAvatar, setSelectedAvatar] = useState<string>('');
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleAvatarSelection = (avatar: string) => {
    setSelectedAvatar(avatar);
    setExpanded(!expanded);
  };

  const handlePress = () => setExpanded(!expanded);

  const handleCreate = async () => {
    const createdHousehold: Household = {
      id: '',
      name: householdName,
      accessCode: '',
    };

    const actionresult = await dispatch(addHousehold(createdHousehold));

    if (
      actionresult.payload === undefined ||
      typeof actionresult.payload === 'string'
    ) {
      throw new Error('Payload is not of type HouseHold');
    } else {
      const lastAddedHouseHold: Household = actionresult.payload;

      const accountIdfromState: string = auth.currentUser?.uid || '';
      const createdUser: User = {
        id: '',
        accountId: accountIdfromState,
        avatar: selectedAvatar,
        name: nickName,
        isPaused: false,
        isAdmin: true,
        householdId: lastAddedHouseHold.id,
      };

      await dispatch(addUser(createdUser));
      //   navigation.navigate('HouseHoldSelectorScreen');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputview}>
        <View>
          <Title>Hushållets namn</Title>
        </View>
        <View>
          <Paragraph>
            {' '}
            -Du är påväg att ansluta dig till hushållsnamnet{' '}
          </Paragraph>
          <Text>Ägare: hushållsägarna</Text>
          <Text>Medlemmar: medlemmarna utöver hushållsägarna</Text>
        </View>
        <TextInput
          style={styles.textinput}
          mode="outlined"
          label="Ditt namn i hushållet"
          value={nickName}
          onChangeText={(nickName) => setNickName(nickName)}
        />
        <View style={styles.avatarselector}>
          <Text>
            <List.Accordion
              expanded={expanded}
              title={selectedAvatar || 'Välj din avatar'}
              onPress={handlePress}
            >
              {avatars.map((avatar) => (
                <List.Item
                  key={avatar}
                  title={avatar}
                  onPress={() => handleAvatarSelection(avatar)}
                />
              ))}
            </List.Accordion>
          </Text>
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
            onPress={handleCreate}
          >
            Anslut
          </Button>
          <Button
            contentStyle={styles.buttoncontentstyle}
            style={styles.buttonstyle}
            icon="close-circle"
            mode="outlined"
            labelStyle={{ fontSize: 18 }}
            // onPress={() => navigation.navigate('HouseHoldSelectorScreen')}
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
  inputview: {
    marginVertical: '40%',
    flexDirection: 'column',
    alignContent: 'center',
  },
  avatarselector: {
    minWidth: '90%',
    marginVertical: '10%',
    borderWidth: 1,
    borderRadius: 15,
  },
  inputfields: {
    marginVertical: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textinput: {
    minWidth: '90%',
    marginVertical: '10%',
    borderRadius: 0,
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
