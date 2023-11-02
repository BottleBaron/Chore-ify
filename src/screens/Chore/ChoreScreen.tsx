/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import doneIcon from '@src/assets/doneIcon.png';
import * as React from 'react';
import {
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { Card, IconButton, Paragraph, Text, Title } from 'react-native-paper';
// eslint-disable-next-line import/no-cycle
import { mockCompletedChores, mockUsers } from '@src/assets/Data/MockData';
import { ChoreStackScreenProps } from '@src/navigators/types';
import {
  Chore,
  deleteChore,
  fetchDisplayChores,
  updateChore,
} from '@src/redux/slices/choreSlice';
import {
  addUserToChoreTable,
  deleteUserToChoreTable,
  fetchUserToChoreTables,
} from '@src/redux/slices/userToChoreSlice';
import { useAppDispatch, useAppSelector } from '@src/redux/store';
// eslint-disable-next-line import/no-duplicates
// import EditChoreModalScreen from './EditChoreModalScreen';
import StatusCard from './StatusCard';

type Props = ChoreStackScreenProps<'Chore'>;

interface StatusCardProps {
  status: string;
  daysLeft: number;
}

export default function ChoreScreen({ navigation }: Props) {
  const dispatch = useAppDispatch();
  // Select our current chore based on activeChoreId,
  const currentChore = useAppSelector((state) =>
    state.chore.choresWithAvatars.find(
      (dc) => dc.chore.id === state.chore.activeChoreId,
    ),
  );

  const activeHouseholdId = useAppSelector(
    (state) => state.household.activeHouseholdId,
  );

  const currentUser = useAppSelector((state) =>
    state.user.myUsers.find((u) => u.householdId === activeHouseholdId),
  );

  const userToChores = useAppSelector(
    (state) => state.userToChore.userToChoreTable,
  );

  const handleEditPress = () => {
    // setEditModalVisible(true);
    if (typeof currentChore !== 'undefined') {
      navigation.navigate('EditChoreModal', { chore: currentChore.chore });
    }
  };

  const handleUpdateChore = (updatedChore: Chore) => {
    dispatch(updateChore(updatedChore));
  };

  const [loading, setLoading] = React.useState(true);
  const [choreStatus, setChoreStatus] = React.useState('');
  // Make sure that our choredata is relevant on page load

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const action = await dispatch(fetchDisplayChores(activeHouseholdId));
        if (fetchDisplayChores.fulfilled.match(action)) {
          console.log('Chore fetch succeeded');
        } else console.error(action.payload);
        setLoading(false); // Data has been fetched
      } catch (error) {
        // Handle any errors here
        console.error(error);
        setLoading(false); // Ensure loading state is updated in case of an error
      }
    };

    fetchData();

    if (!currentChore || !currentUser) setLoading(true);
    else parseChoreData();
  }, [dispatch, activeHouseholdId]);

  if (currentChore === undefined || currentUser === undefined)
    throw new Error('Data initialization failed in ChoreScreen');

  function parseChoreData() {
    if (currentChore?.color === '#67E25D') setChoreStatus('done');
    else if (currentChore?.color === '#FFFF5B') setChoreStatus('pending');
    else setChoreStatus('missed');
  }

  const handleChoreCompletion = async () => {
    if (!currentUser) throw new Error('No active user could be found');
    await dispatch(fetchUserToChoreTables(currentChore.chore.id));

    let loggedDate: Date;
    if (
      userToChores.some((connection) => {
        loggedDate = new Date(connection.timestamp);
        const today = new Date();

        const isCheckedToday =
          loggedDate.getFullYear() === today.getFullYear() &&
          loggedDate.getMonth() === today.getMonth() &&
          loggedDate.getDate() === today.getDate() &&
          connection.userId === currentUser.id;

        return isCheckedToday;
      })
    ) {
      const match = userToChores.find(
        (item) =>
          item.timestamp === loggedDate.toISOString() &&
          item.choreId === currentChore.chore.id,
      );
      if (match) dispatch(deleteUserToChoreTable(match.id));
    } else {
      const userToChoreDTO = {
        id: '',
        timestamp: new Date().toISOString(),
        userId: currentUser.id,
        choreId: currentChore.chore.id,
      };
      await dispatch(addUserToChoreTable(userToChoreDTO));
      console.log('CONNECTION ADDED');
    }
  };

  const handleDeleteChore = async () => {
    await dispatch(deleteChore(currentChore.chore.id));
    navigation.navigate('ChoreList', { period: 'today' });
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
  const recentActivity = getRecentActivity(currentChore.chore.id);
  const recentCompleter = recentActivity ? recentActivity.user : null;
  const completedDate = recentActivity ? recentActivity.completedDate : null;

  return (
    <View style={{ flex: 1 }}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>{currentChore.chore.title}</Text>
          </View>
          <StatusCard status={choreStatus} />
          <Text style={styles.activityText}>Senast aktivitet</Text>
          <Card style={styles.card}>
            <Card.Content>
              <Title>{currentChore.chore.title}</Title>
              <Paragraph>{currentChore.chore.description}</Paragraph>
              <Text style={styles.infoText}>
                Dagintervall: {currentChore.chore.dayinterval}
              </Text>
              <Text style={styles.infoText}>
                Ansträngningsnummer: {currentChore.chore.effortNumber}
              </Text>

              <TouchableOpacity onPress={handleChoreCompletion}>
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
            {currentUser?.isAdmin && (
              <>
                <IconButton
                  icon="delete"
                  mode="contained"
                  size={30}
                  onPress={handleDeleteChore}
                />
                <Button
                  title="Redigera"
                  onPress={() =>
                    navigation.navigate('EditChoreModal', {
                      chore: currentChore.chore,
                    })
                  }
                />
              </>
            )}
          </View>
          {/*       <Modal
        visible={isEditModalVisible}
        onRequestClose={() => setEditModalVisible(false)}
        animationType="slide"
        transparent
      >
        <View style={styles.modalView}>
          <EditChoreModalScreen
            chore={currentChore}
            handleUpdateChore={handleUpdateChore}
            navigation={navigation}
          />
        </View>
      </Modal>
 */}
          <View style={styles.footer}>
            <Button
              title="Stäng"
              onPress={() =>
                navigation.navigate('ChoreList', { period: 'today' })
              }
            />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    /* backgroundColor: 'white', */
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
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
    /*  borderBottomColor: '#ddd',
    backgroundColor: '#f5f5f5', */
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
    /*  borderTopColor: '#ddd',
    backgroundColor: '#f5f5f5', */
  },
});
