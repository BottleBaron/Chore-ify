import { mockHouseholds } from '@src/assets/Data/MockData';
import { RootStackScreenProps } from '@src/navigators/types';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Divider } from 'react-native-paper';
import UserHasHouseHoldContent from './ConditonalScreens/UserHasHouseHoldScreenContent';
import UserHasNoHouseHold from './ConditonalScreens/UserHasNoHouseHoldScreenContent';

type Props = RootStackScreenProps<'HouseHoldSelectorScreen'>;

export default function HouseHoldSelectorScreen({ navigation, route }: Props) {
  const hasHouseholds = mockHouseholds.length > 0;

  return (
    <View>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>DINA HUSHÅLL</Text>
        <Divider style={styles.householddivider} />
      </View>
      {hasHouseholds ? (
        <UserHasHouseHoldContent navigation={navigation} route={route} />
      ) : (
        <UserHasNoHouseHold />
      )}
    </View>
  );
}

// This will primarily contain styles that are common or are parent styles.
const styles = StyleSheet.create({
  headingContainer: {
    alignItems: 'center',
    paddingTop: 20, // padding added to separate heading from the top
  },
  heading: {
    fontSize: 18, // increased font size for clarity
    fontWeight: 'bold', // added bold for emphasis
  },
  householddivider: {
    backgroundColor: 'black',
    minWidth: '100%',
    height: 3,
  },
});

// import * as React from 'react';
// import { StyleSheet, View } from 'react-native';
// import { Divider, Text, TouchableRipple } from 'react-native-paper';
// import { mockHouseholds } from '../../../assets/Data/MockData';
// import { useAppTheme } from '../../contexts/ThemeContext';
// import { RootStackScreenProps } from '../../navigators/types';
// import ThemedClickableCardButton from '../../themedComponents/ThemedClickableCardButton';

// type Props = RootStackScreenProps<'HouseHoldSelectorScreen'>;

// export default function HouseHoldSelectorScreen({ navigation }: Props) {
//   const theme = useAppTheme();

//   return (
//     <View style={styles.container}>
//       <View style={{ alignItems: 'center', marginTop: 10 }}>
//         <Text style={{ color: theme.colors.text }}>DINA HUSHÅLL</Text>
//         <Divider
//           style={{
//             backgroundColor: theme.colors.text,
//             minWidth: '100%',
//             height: 3,
//           }}
//         />
//       </View>
//       {mockHouseholds.map((household) => (
//         <TouchableRipple
//           key={household.id}
//           style={[styles.touchableRipple, { borderColor: theme.colors.border }]}
//           onPress={() => navigation.navigate('ChoreList')}
//         >
//           <View style={{ alignItems: 'center' }}>
//             <Text style={{ color: theme.colors.text }}>{household.name}</Text>
//             <Text>🐙 </Text>
//           </View>
//         </TouchableRipple>
//       ))}

//       <View style={styles.bottomButtons}>
//         <ThemedClickableCardButton
//           hideTitle // or hideTitle={false}
//           title="SKAPA HUSHÅLL"
//           content="SKAPA HUSHÅLL"
//           iconName="plus-circle"
//           onPress={() => navigation.navigate('SignIn')}
//         />
//         <ThemedClickableCardButton
//           hideTitle // or hideTitle={false}
//           title="GÅ MED I HUSHÅLL"
//           content="GÅ MED I HUSHÅLL"
//           iconName="plus-circle"
//           onPress={() => navigation.navigate('SignIn')}
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'space-evenly',
//   },

//   householddivider: {
//     flex: 1,
//     paddingTop: 20,
//     borderBottomWidth: 1,
//     borderBottomColor: 'black',
//   },

//   touchableRipple: {
//     minWidth: '70%',
//     borderWidth: 1,
//     padding: 25,
//     borderRadius: 5,
//   },
//   content: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   bottomButtons: {
//     width: '100%',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   heading: {
//     marginTop: -100, // Justera avståndet till toppen
//   },
// });
