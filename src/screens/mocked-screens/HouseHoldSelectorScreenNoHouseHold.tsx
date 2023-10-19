/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-cycle */
import * as React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Text, Button, TouchableRipple, Divider } from 'react-native-paper';
import { useAppTheme } from '../../contexts/ThemeContext';
import { RootStackScreenProps } from '../../navigators/types';

type Props = RootStackScreenProps<'HouseHoldSelectorScreenNoHouseHold'>;

export default function HouseHoldSelectorScreenNoHouseHold({
  navigation,
}: Props) {
  const theme = useAppTheme();

  return (
    <View style={styles.container}>
      <View>
        <TouchableRipple
          // Byt till join-household screen.
          // eslint-disable-next-line no-console
          onPress={() => console.log('Pressed')}
          style={[styles.touchableRipple, { borderColor: theme.colors.border }]}
        >
          <View style={styles.buttonContainer}>
            <Image
              // eslint-disable-next-line global-require
              source={require('../../../assets/button-images/joinHousehold.png')}
              style={styles.image}
            />
            <Text style={{ color: theme.colors.color }}>
              {' '}
              GÅ MED I ETT HUSHÅLL{' '}
            </Text>
            <Text style={{ color: theme.colors.color }}>
              {' '}
              Gå med i ett hushåll som någon redan har skapat
            </Text>
          </View>
        </TouchableRipple>

        <TouchableRipple
          // Byt till create-household screen.
          // eslint-disable-next-line no-console
          onPress={() => console.log('Pressed')}
          style={[styles.touchableRipple, { borderColor: theme.colors.border }]}
        >
          <View style={styles.buttonContainer}>
            <Image
              // eslint-disable-next-line global-require
              source={require('../../../assets/button-images/create-household.png')}
              style={styles.image}
            />
            <Text style={{ color: theme.colors.color }}>
              {' '}
              SKAPA ETT NYTT HUSHÅLL{' '}
            </Text>
            <Text style={{ color: theme.colors.color }}>
              Skapa ett nytt hushåll och bjud in andra att gå med
            </Text>
          </View>
        </TouchableRipple>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },

  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  image: {},

  touchableRipple: {
    marginTop: 20,
    minWidth: '70%',
    minHeight: '40%',
    borderWidth: 1,
    padding: 25,
    borderRadius: 15,
  },
});
