// UserHasNoHouseHold.tsx
import createHouseholdImage from '@src/assets/button-images/create-household.png';
import joinHouseholdImage from '@src/assets/button-images/join-household.png';
import { useAppTheme } from '@src/contexts/ThemeContext';
import * as React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Text, TouchableRipple } from 'react-native-paper';

// type Props = RootStackScreenProps<'UserHasNoHouseHold'>;

export default function UserHasNoHouseHoldScreenContent() {
  const theme = useAppTheme();

  return (
    <View style={styles.container}>
      <TouchableRipple
        // onPress={() => console.log('Pressed')}
        style={[styles.touchableRipple, { borderColor: theme.colors.border }]}
      >
        <View style={styles.buttonContainer}>
          <Image
            // eslint-disable-next-line global-require
            source={joinHouseholdImage}
            style={styles.image}
          />
          <Text style={{ color: theme.colors.text }}>GÅ MED I ETT HUSHÅLL</Text>
          <Text style={{ color: theme.colors.text }}>
            Gå med i ett hushåll som någon redan har skapat
          </Text>
        </View>
      </TouchableRipple>
      <TouchableRipple
        // onPress={() => console.log('Pressed')}
        style={[styles.touchableRipple, { borderColor: theme.colors.border }]}
      >
        <View style={styles.buttonContainer}>
          <Image
            // eslint-disable-next-line global-require
            source={createHouseholdImage}
            style={styles.image}
          />
          <Text style={{ color: theme.colors.text }}>
            SKAPA ETT NYTT HUSHÅLL
          </Text>
          <Text style={{ color: theme.colors.text }}>
            Skapa ett nytt hushåll och bjud in andra att gå med
          </Text>
        </View>
      </TouchableRipple>
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
