import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// eslint-disable-next-line import/no-cycle
import { RootStackScreenProps } from '../navigators/types';

// -- Skapa HomeScreen-komponenten och exportera den --
// -- Denna komponent ska innehålla en list-komponent med användarens hushåll --
// -- Varje hushåll ska vara klickbar 'cards' som tar användaren till en index-sida för det hushållet med hjälp av en stack-navigator --
// -- Denna index-sida ska innehålla en lista med alla sysslor i hushållet etc --
export type MyProfileStackParamList = {
  MyUserName: undefined;
  Statistics: undefined;
  Settings: undefined;
  HouseHold: undefined;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Props = RootStackScreenProps<'Chore'>;

export default function ChoreScreen() {
  return (
    <View style={styles.container}>
      <Text>CHORE</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
