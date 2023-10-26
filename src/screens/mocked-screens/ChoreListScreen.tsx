import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
// eslint-disable-next-line import/no-cycle
import { HouseholdDashboardTabScreenProps } from '../../navigators/types';
// eslint-disable-next-line import/extensions
import { mockChores } from '../../../assets/Data/MockData';

type Props = HouseholdDashboardTabScreenProps<'ChoreList'>;

export default function ChoreListScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text>Dina Hushåll</Text>
      {mockChores.map((chore) => (
        <Button
          key={chore.id}
          icon="home"
          mode="contained"
          onPress={() => navigation.navigate('Chore', { choreId: chore.id })}
        >
          {chore.title}
        </Button>
      ))}
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
