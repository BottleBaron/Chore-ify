/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-cycle */
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button, TouchableRipple } from 'react-native-paper';
import { useAppTheme } from '../../contexts/ThemeContext';
import { RootStackScreenProps } from '../../navigators/types';

type Props = RootStackScreenProps<'Home'>;

export default function HomeScreen({ navigation }: Props) {
  const theme = useAppTheme();

  return (
    <View style={styles.container}>
      <HouseHoldButton text="min knapp" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  householddivider: {
    flex: 1,
    paddingTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  hairline: {
    backgroundColor: '#A2A2A2',
    height: 2,
    width: 165,
  },
});

interface HouseHoldButtonProps {
  text: string;
}

export const HouseHoldButton: React.FC<HouseHoldButtonProps> = ({ text }) => (
  <TouchableRipple theme={useAppTheme()}>
    <View style={styles2.button}>
      <Text style={styles2.buttonText}>{text}</Text>
    </View>
  </TouchableRipple>
);
const styles2 = StyleSheet.create({
  button: {
    borderRadius: 1,
    paddingVertical: 14,
    paddingHorizontal: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
  },
});
