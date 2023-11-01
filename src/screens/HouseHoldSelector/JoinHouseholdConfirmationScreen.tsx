/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-cycle */
import { useFocusEffect } from '@react-navigation/core';
import React, { useCallback, useState } from 'react';

import { useAppTheme } from '@src/contexts/ThemeContext';
import { RootStackScreenProps } from '@src/navigators/types';
import { fetchHouseholdByAccesscode } from '@src/redux/slices/householdSlice';
import { useAppDispatch } from '@src/redux/store';
import { StatusBar, StyleSheet, View } from 'react-native';
import HouseHoldDontExistContent from './JoinHouseHoldConditionalContent/HouseHoldDontExistContent';
import HouseHoldExistsContent from './JoinHouseHoldConditionalContent/HouseHoldExistsContent';

type Props = RootStackScreenProps<'JoinHouseHoldConfirmation'>;

export default function JoinHouseholdConfirmationScreen({
  navigation,
  route,
}: Props) {
  const { houseHoldCode } = route.params;
  const dispatch = useAppDispatch();

  const [houseHoldExists, setHouseHoldExists] = useState(false); // Uppdaterad rad

  const theme = useAppTheme();
  useFocusEffect(
    useCallback(() => {
      const fetchData = async () => {
        const result = await dispatch(
          fetchHouseholdByAccesscode(houseHoldCode),
        );
        if (
          result.payload === undefined ||
          typeof result.payload === 'string'
        ) {
          setHouseHoldExists(false);
        } else {
          setHouseHoldExists(true);
        }
      };

      fetchData();

      return () => {
        // Clean up or any necessary actions when the screen loses focus
      };
    }, [dispatch, houseHoldCode]),
  );
  console.log(`Householdexist? ${{ houseHoldExists }}`);
  return (
    // <SafeAreaView
    //   style={[styles.rootContainer, { backgroundColor: theme.colors.card }]}
    // >
    <View
      style={[
        styles.rootContainer,
        { backgroundColor: theme.colors.background },
      ]}
    >
      {houseHoldExists ? (
        <HouseHoldExistsContent navigation={navigation} route={route} />
      ) : (
        <HouseHoldDontExistContent />
      )}
    </View>
    // </SafeAreaView>
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

//Denna styling bör appliceras i denna fil!
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
