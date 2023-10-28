import { mockHouseholds } from '@src/assets/Data/MockData';
import { RootStackScreenProps } from '@src/navigators/types';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import UserHasHouseHoldContent from './ConditonalScreens/UserHasHouseHoldScreenContent';
import UserHasNoHouseHold from './ConditonalScreens/UserHasNoHouseHoldScreenContent';

type Props = RootStackScreenProps<'HouseHoldSelectorScreen'>;

export default function HouseHoldSelectorScreen({ navigation, route }: Props) {
  const hasHouseholds = mockHouseholds.length > 0;

  return (
    <View style={styles.container}>
      {hasHouseholds ? (
        <UserHasHouseHoldContent navigation={navigation} route={route} />
      ) : (
        <UserHasNoHouseHold />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingVertical: 10,
  },
  // scrollView: { flex: 1 },
  // topContainer: {
  //   // flexGrow: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   paddingVertical: 10,
  // },
  // touchableRipple: {
  //   minWidth: '70%',
  //   borderWidth: 1,
  //   padding: 25,
  //   borderRadius: 5,
  // },
});
