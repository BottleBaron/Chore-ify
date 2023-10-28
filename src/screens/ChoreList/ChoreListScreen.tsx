// /* eslint-disable import/no-cycle */
// /* eslint-disable @typescript-eslint/no-unused-vars */
// import { mockChores } from '@src/assets/Data/MockData';
// import { useAppTheme } from '@src/contexts/ThemeContext';
// import { HouseholdDashboardTabScreenProps } from '@src/navigators/types';
// import React from 'react';
// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// // eslint-disable-next-line import/no-cycle
// import BottomButtons from './BottomButtonsComponent';
// import NoChoresPage from './NoChoresPage';

// // export type ChoreStackParamList = {
// // 	ChoreIndex: undefined;
// // 	Chore: undefined;
// // };

// type Props = HouseholdDashboardTabScreenProps<'ChoreList'>;

// export default function ChoreListScreen({ navigation }: Props) {
//   const theme = useAppTheme();
//   return (
//     <View style={styles.container}>
//       {mockChores.length === 0 ? (
//         <NoChoresPage />
//       ) : (
//         <View>
//           {mockChores.map((chore) => (
//             <View key={chore.id} style={styles.choreList}>
//               <TouchableOpacity
//                 style={styles.card}
//                 onPress={() =>
//                   navigation.navigate('Chore', { choreId: chore.id })
//                 }
//               >
//                 <Text style={styles.cardText}>{chore.title}</Text>
//                 {/* Avatars */}
//               </TouchableOpacity>
//             </View>
//           ))}
//           <BottomButtons />
//         </View>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     paddingTop: 20,
//   },
//   choreList: {
//     padding: 7,
//   },
//   card: {
//     backgroundColor: 'white',
//     height: 55,
//     width: 390,
//     justifyContent: 'space-evenly',
//     elevation: 8,
//     borderRadius: 10,
//     paddingVertical: 10,
//     paddingHorizontal: 12,
//   },
//   cardText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });
