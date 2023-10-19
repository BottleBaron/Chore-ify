import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// eslint-disable-next-line import/no-cycle
import { RootStackScreenProps } from '../navigators/types';
import { mockChores } from '../../assets/Data/MockData';

type Props = RootStackScreenProps<'Chore'>;

export default function ChoreScreen({ route }: Props) {
  const { choreId } = route.params;

  const chore = mockChores.find((ch) => ch.id === choreId);

  if (!chore) {
    return <Text>Sysslan kunde inte hittas</Text>;
  }

  return (
    <View style={styles.container}>
      <Text>{chore.title}</Text>
      <Text>{chore.description}</Text>
      <Text>Dagintervall: {chore.dayinterval}</Text>
      <Text>Ansträngningsnummer: {chore.effortNumber}</Text>
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
