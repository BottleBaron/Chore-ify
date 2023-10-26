/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-cycle */
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Divider, Text, TouchableRipple } from 'react-native-paper';
import { mockHouseholds } from '../../../assets/Data/MockData';
import { useAppTheme } from '../../contexts/ThemeContext';
import { RootStackScreenProps } from '../../navigators/types';
import ThemedClickableCardButton from '../../themedComponents/ThemedClickableCardButton';

type Props = RootStackScreenProps<'HouseHoldSelectorScreen'>;

export default function HouseHoldSelectorScreen({ navigation }: Props) {
  const theme = useAppTheme();

  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center', marginTop: 10 }}>
        <Text style={{ color: theme.colors.textColor }}>DINA HUSHÅLL</Text>
        <Divider
          style={{
            backgroundColor: theme.colors.textColor,
            minWidth: '100%',
            height: 3,
          }}
        />
      </View>
      {mockHouseholds.map((household) => (
        <TouchableRipple
          key={household.id}
          style={[styles.touchableRipple, { borderColor: theme.colors.border }]}
          onPress={() => navigation.navigate('Statistics', { period: 'today' })}
        >
          <View style={{ alignItems: 'center' }}>
            <Text style={{ color: theme.colors.textColor }}>
              {household.name}
            </Text>
            <Text>🐙 </Text>
          </View>
        </TouchableRipple>
      ))}

      <View style={styles.bottomButtons}>
        <ThemedClickableCardButton
          hideTitle // or hideTitle={false}
          title="SKAPA HUSHÅLL"
          content="SKAPA HUSHÅLL"
          iconName="plus-circle"
          onPress={() => navigation.navigate('CreateHouseHold')}
        />
        <ThemedClickableCardButton
          hideTitle // or hideTitle={false}
          title="GÅ MED I HUSHÅLL"
          content="GÅ MED I HUSHÅLL"
          iconName="plus-circle"
          onPress={() => navigation.navigate('JoinHouseHold')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  householddivider: {
    flex: 1,
    paddingTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },

  touchableRipple: {
    minWidth: '70%',
    borderWidth: 1,
    padding: 25,
    borderRadius: 5,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomButtons: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  heading: {
    marginTop: -100, // Justera avståndet till toppen
  },
});
