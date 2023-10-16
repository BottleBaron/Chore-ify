/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { useAppTheme } from '../../contexts/ThemeContext';
// eslint-disable-next-line import/no-cycle
import { HouseholdDashboardTabScreenProps } from '../../navigators/types';

// -- Denna komponent ska innehålla en list-komponent med användarens hushåll --
// -- Varje hushåll ska vara klickbar 'cards' som tar användaren till en index-sida för det hushållet med hjälp av en stack-navigator --
// -- Denna index-sida ska innehålla en lista med alla sysslor i hushållet etc --

// export type ChoreStackParamList = {
// 	ChoreIndex: undefined;
// 	Chore: undefined;
// };

type Props = HouseholdDashboardTabScreenProps<'ChoreList'>;

export default function ChoreListScreen({ navigation }: Props) {
  const theme = useAppTheme();
  return (
    <View style={styles.container}>
      <Text>Dina Hushåll</Text>
      <Button
        icon="home"
        mode="contained"
        onPress={() => navigation.navigate('Chore')}
      >
        Syssla 1
      </Button>
      <Button mode="contained" onPress={() => navigation.navigate('Chore')}>
        Syssla 2
      </Button>
      <Button mode="contained" onPress={() => navigation.navigate('Chore')}>
        Syssla 3
      </Button>
      <Button mode="contained" onPress={() => navigation.navigate('Chore')}>
        Syssla 4
      </Button>
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
