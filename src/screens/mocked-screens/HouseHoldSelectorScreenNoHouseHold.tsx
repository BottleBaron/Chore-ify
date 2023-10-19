/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-cycle */
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button, TouchableRipple, Divider } from 'react-native-paper';
import { useAppTheme } from '../../contexts/ThemeContext';
import { RootStackScreenProps } from '../../navigators/types';
import { mockHouseholds } from '../../../assets/Data/MockData';
import ThemedClickableCardButton from '../../themedComponents/ThemedClickableCardButton';

type Props = RootStackScreenProps<'HouseHoldSelectorScreenNoHouseHold'>;

export default function HouseHoldSelectorScreenNoHouseHold({
  navigation,
}: Props) {
  const theme = useAppTheme();

  return (
    <View style={styles.container}>
      <View style={styles.bottomButtons}>
        <ThemedClickableCardButton
          hideTitle // or hideTitle={false}
          title="SKAPA HUSHÅLL"
          content="SKAPA HUSHÅLL"
          iconName="plus-circle"
          onPress={() => navigation.navigate('SignIn')}
        />
        <ThemedClickableCardButton
          hideTitle // or hideTitle={false}
          title="GÅ MED I HUSHÅLL"
          content="GÅ MED I HUSHÅLL"
          iconName="plus-circle"
          onPress={() => navigation.navigate('SignIn')}
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
    padding: 25, // Anpassa padding efter behov
    borderRadius: 5, // Anpassa gränsvärdet efter behov
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
  button: {
    width: '80%',
    marginTop: 10,
    borderRadius: 15,
    minHeight: '10%',
  },
  buttonContent: {
    width: '100%',
    flexDirection: 'row',
  },
  heading: {
    marginTop: -100, // Justera avståndet till toppen
  },
});
