/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-cycle */
import React, { useState } from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';
import { Text, Button, TextInput } from 'react-native-paper';
import { useAppTheme } from '../../contexts/ThemeContext';
import { RootStackScreenProps } from '../../navigators/types';

type Props = RootStackScreenProps<'CreateHouseHold'>;

export default function CreateHouseHoldScreen({ navigation }: Props) {
  const theme = useAppTheme();

  return <Text> Create household</Text>;
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
