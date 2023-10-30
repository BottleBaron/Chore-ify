import { useAppTheme } from '@src/contexts/ThemeContext';
import { RootStackScreenProps } from '@src/navigators/types';
import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import UserHasHouseHoldContent from './ConditonalScreens/UserHasHouseHoldScreenContent';
import UserHasNoHouseHold from './ConditonalScreens/UserHasNoHouseHoldScreenContent';

type Props = RootStackScreenProps<'HouseHoldSelectorScreen'>;

export default function HouseHoldSelectorScreen({ navigation, route }: Props) {
  const theme = useAppTheme();
  const hasHouseholds = true; /* mockHouseholds.length > 0; */

  return (
    <SafeAreaView
      style={[styles.rootContainer, { backgroundColor: theme.colors.card }]}
    >
      <View
        style={[styles.container, { backgroundColor: theme.colors.background }]}
      >
        {hasHouseholds ? (
          <UserHasHouseHoldContent navigation={navigation} route={route} />
        ) : (
          <UserHasNoHouseHold navigation={navigation} />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});
