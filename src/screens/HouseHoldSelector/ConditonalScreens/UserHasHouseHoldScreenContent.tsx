import { mockHouseholds } from '@src/assets/Data/MockData';
import { useAppTheme } from '@src/contexts/ThemeContext';
import { RootStackScreenProps } from '@src/navigators/types';
// import { mockHouseholds } from 'assets/Data/MockData';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableRipple } from 'react-native-paper';

type Props = RootStackScreenProps<'HouseHoldSelectorScreen'>;

export default function UserHasHouseHoldScreenContent({ navigation }: Props) {
  const theme = useAppTheme();

  return (
    <View style={styles.container}>
      {mockHouseholds.map((household) => (
        <TouchableRipple
          key={household.id}
          style={[styles.touchableRipple, { borderColor: theme.colors.border }]}
          onPress={() => navigation.navigate('ChoreList')}
        >
          <View style={{ alignItems: 'center' }}>
            <Text style={{ color: theme.colors.text }}>{household.name}</Text>
            <Text>🐙</Text>
          </View>
        </TouchableRipple>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  touchableRipple: {
    minWidth: '70%',
    borderWidth: 1,
    padding: 25,
    borderRadius: 5,
  },
});
