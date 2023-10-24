import * as React from 'react';
import { StyleSheet, View, Text, Button, Alert } from 'react-native';
import { Card, Title, Paragraph, IconButton } from 'react-native-paper';
// eslint-disable-next-line import/no-cycle
import { RootStackScreenProps } from '../navigators/types';
import { mockChores } from '../../assets/Data/MockData';

type Props = RootStackScreenProps<'Chore'>;

// eslint-disable-next-line react/prop-types
function StatusCard({ status, daysLeft }) {
  let backgroundColor = '#CCCCCC'; // grå
  let text = 'Den här sysslan behöver fortfarande göras idag!';

  // eslint-disable-next-line default-case
  switch (status) {
    case 'done':
      backgroundColor = '#4CAF50'; // grön
      text = 'Toppen! Den här sysslan är gjord för idag!';
      break;
    case 'pending':
      backgroundColor = '#FFEB3B'; // gul
      text = `${daysLeft} dagar kvar tills denna syssla ska göras`;
      break;
    case 'missed':
      backgroundColor = '#F44336'; // röd
      text = `Woh, den här sysslan är ${daysLeft} dagar sen!`;
      break;
  }

  return (
    <View style={{ ...styles.statusCard, backgroundColor }}>
      <Text>{text}</Text>
    </View>
  );
}

export default function ChoreScreen({ route, navigation }: Props) {
  const { choreId } = route.params;

  const chore = mockChores.find((ch) => ch.id === choreId);

  if (!chore) {
    return <Text>Sysslan kunde inte hittas</Text>;
  }

  const handleDeleteChore = () => {
    Alert.alert(
      'Ta bort syssla',
      'All statistik gällande sysslan kommer att tas bort. Vill du arkivera istället?',
      [
        { text: 'Avbryt', style: 'cancel' },
        { text: 'Arkivera', onPress: () => {} },
        { text: 'Ta bort', onPress: () => {} },
      ],
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{chore.title}</Text>
      </View>
      <StatusCard status="done" daysLeft={5} />
      <Card style={styles.card}>
        <Card.Content>
          <Title>{chore.title}</Title>
          <Paragraph>{chore.description}</Paragraph>
          <Text style={styles.infoText}>Dagintervall: {chore.dayinterval}</Text>
          <Text style={styles.infoText}>
            Ansträngningsnummer: {chore.effortNumber}
          </Text>
          <Button title="Markera som gjord" onPress={() => {}} />
        </Card.Content>
      </Card>

      <View style={styles.actionButtons}>
        <IconButton icon="delete" size={20} onPress={handleDeleteChore} />
      </View>

      <View style={styles.footer}>
        <Button
          title="Stäng"
          onPress={() => navigation.navigate('HouseholdDashboard')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  statusCard: {
    margin: 16,
    padding: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    flex: 1,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  infoText: {
    marginTop: 8,
    fontSize: 16,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#f5f5f5',
  },
});
