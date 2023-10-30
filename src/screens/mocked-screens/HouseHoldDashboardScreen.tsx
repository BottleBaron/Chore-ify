// /* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable import/no-cycle */
// import * as React from 'react';
// import { StyleSheet, View } from 'react-native';
// import { Text, Button, TouchableRipple, Divider } from 'react-native-paper';
// import { useAppTheme } from '../../contexts/ThemeContext';
// import { RootStackScreenProps } from '../../navigators/types';
// import { mockHouseholds, mockChores } from '../../../assets/Data/MockData';

// type Props = RootStackScreenProps<'HouseholdDashboard'>;

// export default function HouseHoldDashboardScreen({ navigation }: Props) {
//   return (
//     <View>
//       <Text>Dina Hushåll</Text>
//       {mockChores.map((chore) => (
//         <Button
//           key={chore.id}
//           icon="home"
//           mode="contained"
//           onPress={() => navigation.navigate('Chore', { choreId: chore.id })}
//         >
//           {chore.title}
//         </Button>
//       ))}
//     </View>
//   );
// }
