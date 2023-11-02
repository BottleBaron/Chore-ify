/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-cycle */
import { useFocusEffect } from '@react-navigation/core';
import avatars from '@src/assets/Avatars/avatars';
import { User, addUser, fetchUsers } from '@src/redux/slices/userSlice';
import { useAppDispatch, useAppSelector } from '@src/redux/store';
import React, { useCallback, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Button,
  List,
  Paragraph,
  Snackbar,
  Text,
  TextInput,
  Title,
} from 'react-native-paper';

import { RootStackScreenProps } from '@src/navigators/types';
import { useAppTheme } from '@src/contexts/ThemeContext';
import { auth } from '../../../../firebaseConfig';

type Props = RootStackScreenProps<'JoinHouseHoldConfirmation'>;

export default function HouseHoldExistsContent({ navigation }: Props) {
  const theme = useAppTheme();
  const dispatch = useAppDispatch();
  const [visible, setVisible] = React.useState(false);
  const [nickName, setNickName] = useState<string>('');
  const [selectedAvatar, setSelectedAvatar] = useState<string>('');
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleAvatarSelection = (avatar: string) => {
    setSelectedAvatar(avatar);
    setExpanded(!expanded);
  };
  const onDismissSnackBar = () => setVisible(false);
  const household = useAppSelector((state) => state.household.joinHousehold);
  const householdId: string[] = [household.id];
  const allusers = useAppSelector((state) => state.user.joinHouseholdUsers);
  useFocusEffect(
    useCallback(() => {
      dispatch(fetchUsers(householdId));
    }, []),
  );
  const owners = allusers
    .filter((user) => user.isAdmin === true)
    .map((user) => user.name);

  const members = allusers
    .filter((user) => user.isAdmin === false)
    .map((user) => user.name);

  const usedAvatars = allusers.map((user) => user.avatar);
  const availableAvatars = avatars.filter(
    (avatar) => !usedAvatars.includes(avatar),
  );

  const handlePress = () => setExpanded(!expanded);

  const handleCreate = async () => {
    const accountIdfromState: string = auth.currentUser?.uid || '';
    const createdUser: User = {
      id: '',
      accountId: accountIdfromState,
      avatar: selectedAvatar,
      name: nickName,
      isPaused: false,
      isAdmin: false,
      householdId: household.id,
    };

    if (createdUser.avatar === '') {
      setVisible(true);
    } else await dispatch(addUser(createdUser));
    navigation.navigate('HouseHoldSelectorScreen');
  };

  return (
    <View style={styles.container}>
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'Undo',
          onPress: () => {
            // Do something
          },
        }}
      >
        Alla avatarer är redan valda.
      </Snackbar>
      <View style={styles.inputview}>
        <View>
          <Title style={{ color: theme.colors.text }}>{household.name}</Title>
        </View>
        <View>
          <Paragraph style={{ color: theme.colors.text }}>
            {' '}
            -Du är påväg att ansluta dig till hushållsnamnet: {household.name}
          </Paragraph>
          <Text style={{ color: theme.colors.text }}>Ägare: {owners}</Text>
          <Text style={{ color: theme.colors.text }}>Medlemmar:</Text>
          <View>
            {members.map((member) => (
              <Text style={{ color: theme.colors.text }} key={member}>
                {member}
              </Text>
            ))}
          </View>
        </View>

        <TextInput
          style={styles.textinput}
          mode="outlined"
          label="Ditt namn i hushållet"
          value={nickName}
          onChangeText={(nickName) => setNickName(nickName)}
          contentStyle={{
            backgroundColor: theme.colors.transparency,
          }}
          placeholder="Skriv hushållets namn här" // Lägg till ditt placeholder-text här
          placeholderTextColor={theme.colors.text} // Ange färgen för placeholder-text
          outlineColor={theme.colors.inputOutline}
          activeOutlineColor={theme.colors.inputActiveOutline}
          selectionColor={theme.colors.inputActiveOutline}
          // den blinkande cursorn:
          cursorColor={theme.colors.button}
          // texten:
          textColor={theme.colors.text}
          // underlinjen av texten:
          underlineColor={theme.colors.inputOutline}
          // underlinjen när texten är aktiv:
          activeUnderlineColor={theme.colors.inputOutline}
        />
        <View style={styles.avatarselector}>
          <Text>
            <List.Accordion
              expanded={expanded}
              title={selectedAvatar || 'Välj din avatar'}
              onPress={handlePress}
            >
              {availableAvatars.map((avatar) => (
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
            onPress={() => navigation.navigate('HouseHoldSelectorScreen')}
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
    paddingTop: '10%',
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
