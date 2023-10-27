/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useFocusEffect } from '@react-navigation/native';
import doneIcon from '@src/assets/doneIcon.png';
import * as React from 'react';
import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Card, IconButton, Paragraph, Title } from 'react-native-paper';
// eslint-disable-next-line import/no-cycle
import { mockCompletedChores, mockUsers } from '@src/assets/Data/MockData';
import { RootStackScreenProps } from '@src/navigators/types';
import { fetchChores } from '@src/redux/slices/choreSlice';
import { useAppDispatch, useAppSelector } from '@src/redux/store';

type Props = RootStackScreenProps<'Chore'>;

interface StatusCardProps {
  status: string;
  daysLeft: number;
}

// eslint-disable-next-line react/prop-types
function StatusCard({ status, daysLeft }: StatusCardProps) {
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

export default function ChoreScreen({ navigation }: Props) {
  const dispatch = useAppDispatch();

  // Make sure that our choredata is relevant on page load
  useFocusEffect(
    React.useCallback(() => {
      let isActive = true;
      const handleInit = async () => {
        await dispatch(fetchChores(activeHouseholdId));
      };

      handleInit();
      return () => {
        isActive = false;
      };
    }, []),
  );

  // Select our current chore based on activeChoreId,
  const currentChore = useAppSelector((state) =>
    state.chore.chores.find((c) => c.id === state.chore.activeChoreId),
  );

  const activeHouseholdId = useAppSelector(
    (state) => state.household.activeHouseholdId,
  );

  if (!currentChore) {
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
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const getRecentActivity = (choreId: string) => {
    const recentCompletion = mockCompletedChores.find(
      (completion) => completion.choreId === choreId,
    );
    if (!recentCompletion) return null;
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const user = mockUsers.find((user) => user.id === recentCompletion.userId);
    return {
      user,
      completedDate: recentCompletion.dateCompleted,
    };
  };
  const recentActivity = getRecentActivity(currentChore.id);
  const recentCompleter = recentActivity ? recentActivity.user : null;
  const completedDate = recentActivity ? recentActivity.completedDate : null;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{currentChore.title}</Text>
      </View>
      <StatusCard status="done" daysLeft={5} />
      <Text style={styles.activityText}>Senast aktivitet</Text>
      <Card style={styles.card}>
        <Card.Content>
          <Title>{currentChore.title}</Title>
          <Paragraph>{currentChore.description}</Paragraph>
          <Text style={styles.infoText}>
            Dagintervall: {currentChore.dayinterval}
          </Text>
          <Text style={styles.infoText}>
            Ansträngningsnummer: {currentChore.effortNumber}
          </Text>

          <TouchableOpacity onPress={() => {}}>
            <Image
              source={doneIcon}
              style={{
                width: 100,
                height: 100,
                position: 'absolute',
                bottom: -350,
                alignSelf: 'center',
              }}
            />
          </TouchableOpacity>
          {recentCompleter && completedDate && (
            <View style={{ marginTop: 16 }}>
              <Text style={styles.infoText}>
                Senaste utförare: {recentCompleter.name}
              </Text>
              <Text style={styles.infoText}>
                Utförd datum: {completedDate.toLocaleDateString()}
              </Text>
            </View>
          )}
        </Card.Content>
      </Card>

      <View style={styles.actionButtons}>
        <IconButton icon="delete" size={20} onPress={handleDeleteChore} />
      </View>

      <View style={styles.footer}>
        <Button
          title="Stäng"
          onPress={() => navigation.navigate('ChoreList')}
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
  activityText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginTop: 16,
    textAlign: 'center',
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
  activityContainer: {
    padding: 16,
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
  statusText: {
    fontSize: 18,
    textAlign: 'center',
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#f5f5f5',
  },
});
