/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-cycle */
import { useFocusEffect } from '@react-navigation/core';
import React, { useCallback, useEffect, useState } from 'react';

import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {
  Text,
  Button,
  TextInput,
  List,
  Title,
  Paragraph,
} from 'react-native-paper';
import { useSelector } from 'react-redux';
import {
  Household,
  addHousehold,
  fetchHouseholdByAccesscode,
  fetchHouseholdsAndUsers,
} from '@src/redux/slices/householdSlice';
import { useAppDispatch, useAppSelector } from '@src/redux/store';
import { useAppTheme } from '@src/contexts/ThemeContext';
import { RootStackScreenProps } from '@src/navigators/types';
import { User, addUser } from '@src/redux/slices/userSlice';
import { auth } from 'firebaseConfig';
import RootStackNavigator from '@src/navigators/root/RootStackNavigator';
import HouseHoldSelectorScreen from './HouseHoldSelectorScreen';
import HouseHoldExistsContent from './JoinHouseHoldConditionalContent/HouseHoldExistsContent';
import HouseHoldDontExistContent from './JoinHouseHoldConditionalContent/HouseHoldDontExistContent';

type Props = RootStackScreenProps<'JoinHouseHoldConfirmation'>;

export default function JoinHouseholdConfirmationScreen({ route }: Props) {
  const { houseHoldCode } = route.params;
  const dispatch = useAppDispatch();

  let houseHoldExists = false; /* mockHouseholds.length > 0; */

  const theme = useAppTheme();
  useFocusEffect(
    useCallback(() => {
      dispatch(fetchHouseholdByAccesscode(houseHoldCode));
    }, []),
  );
  const household = useAppSelector((state) => state.household.joinHousehold);

  if (household.id === '') {
    houseHoldExists = false;
  } else houseHoldExists = true;

  return (
    <SafeAreaView
      style={[styles.rootContainer, { backgroundColor: theme.colors.card }]}
    >
      <View
        style={[
          styles.rootContainer,
          { backgroundColor: theme.colors.background },
        ]}
      >
        {houseHoldExists ? (
          <HouseHoldExistsContent />
        ) : (
          <HouseHoldDontExistContent />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 15,
  },
  divider: {
    width: '100%',
    height: 2,
  },
  scrollView: {
    flex: 1,
    marginHorizontal: 35,
    marginTop: StatusBar.currentHeight,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  bottomButtons: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

// <View style={styles.container}>
//   <View style={styles.inputview}>
//     <View>
//       <Title>Hushållets namn</Title>
//     </View>
//     <View>
//       <Paragraph>
//         {' '}
//         -Du är påväg att ansluta dig till hushållsnamnet{' '}
//       </Paragraph>
//       <Text>Ägare: hushållsägarna</Text>
//       <Text>Medlemmar: medlemmarna utöver hushållsägarna</Text>
//     </View>
//     <TextInput
//       style={styles.textinput}
//       mode="outlined"
//       label="Ditt namn i hushållet"
//       value={nickName}
//       onChangeText={(nickName) => setNickName(nickName)}
//     />
//     <View style={styles.avatarselector}>
//       <Text>
//         <List.Accordion
//           expanded={expanded}
//           title={selectedAvatar || 'Välj din avatar'}
//           onPress={handlePress}
//         >
//           {avatars.map((avatar) => (
//             <List.Item
//               key={avatar}
//               title={avatar}
//               onPress={() => handleAvatarSelection(avatar)}
//             />
//           ))}
//         </List.Accordion>
//       </Text>
//     </View>
//   </View>
//   <View style={{ justifyContent: 'flex-end' }}>
//     <View style={styles.buttonview}>
//       <Button
//         contentStyle={styles.buttoncontentstyle}
//         style={styles.buttonstyle}
//         icon="plus-circle"
//         mode="outlined"
//         labelStyle={{ fontSize: 18 }}
//         onPress={handleCreate}
//       >
//         Anslut
//       </Button>
//       <Button
//         contentStyle={styles.buttoncontentstyle}
//         style={styles.buttonstyle}
//         icon="close-circle"
//         mode="outlined"
//         labelStyle={{ fontSize: 18 }}
//         onPress={() => navigation.navigate('HouseHoldSelectorScreen')}
//       >
//         Stäng
//       </Button>
//     </View>
//   </View>
// </View>

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     alignContent: 'center',
//   },
//   inputview: {
//     marginVertical: '40%',
//     flexDirection: 'column',
//     alignContent: 'center',
//   },
//   avatarselector: {
//     minWidth: '90%',
//     marginVertical: '10%',
//     borderWidth: 1,
//     borderRadius: 15,
//   },
//   inputfields: {
//     marginVertical: '10%',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   textinput: {
//     minWidth: '90%',
//     marginVertical: '10%',
//     borderRadius: 0,
//   },
//   buttonview: {
//     flexDirection: 'row',
//     minWidth: '80%',
//   },
//   buttonstyle: {
//     borderRadius: 0,
//     minWidth: '45%',
//     minHeight: '10%',
//   },
//   buttoncontentstyle: {
//     paddingVertical: '10%',
//   },
// });
