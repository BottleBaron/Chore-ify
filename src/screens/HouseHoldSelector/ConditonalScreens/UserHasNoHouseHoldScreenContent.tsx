// UserHasNoHouseHold.tsx
import createHouseholdImage from '@src/assets/button-images/create-household.png';
import joinHouseholdImage from '@src/assets/button-images/join-household.png';
import { useAppTheme } from '@src/contexts/ThemeContext';
import * as React from 'react';
import { Image, SafeAreaView, StyleSheet, View } from 'react-native';
// import { styles } from 'react-native-gifted-charts/src/LineChart/styles';
import { Text, TouchableRipple } from 'react-native-paper';

// type Props = RootStackScreenProps<'UserHasNoHouseHold'>;

export default function UserHasNoHouseHoldScreenContent() {
  const theme = useAppTheme();

  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.container}> */}
      <TouchableRipple
        // onPress={() => console.log('Pressed')}
        style={[styles.touchableRipple, { borderColor: theme.colors.border }]}
      >
        <View style={styles.buttonContainer}>
          <View style={styles.imageContainer}>
            <Image
              // eslint-disable-next-line global-require
              source={joinHouseholdImage}
              style={styles.image}
            />
            <View style={styles.innerTextContainer}>
              <Text style={[styles.header, { color: theme.colors.text }]}>
                GÅ MED I ETT HUSHÅLL
              </Text>
              <Text style={[styles.text, { color: theme.colors.text }]}>
                Gå med i ett hushåll som någon redan har skapat
              </Text>
            </View>
          </View>
        </View>
      </TouchableRipple>
      <TouchableRipple
        // onPress={() => console.log('Pressed')}
        style={[styles.touchableRipple, { borderColor: theme.colors.border }]}
      >
        <View style={styles.buttonContainer}>
          <View style={styles.imageContainer}>
            <Image
              // eslint-disable-next-line global-require
              source={createHouseholdImage}
              style={styles.image}
            />
          </View>
          <Text style={[styles.header, { color: theme.colors.text }]}>
            SKAPA ETT NYTT HUSHÅLL
          </Text>
          <View style={styles.innerTextContainer}>
            <Text style={[styles.text, { color: theme.colors.text }]}>
              Skapa ett nytt hushåll och bjud in andra att gå med
            </Text>
          </View>
        </View>
      </TouchableRipple>
      {/* </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  touchableRipple: {
    // marginTop: 20,
    // minWidth: '70%',
    // minHeight: '40%',
    borderWidth: 1,
    // padding: 25,
    borderRadius: 15,
  },
  innerTextContainer: {
    padding: 15,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 15,
  },
  text: {
    fontSize: 12,
    textAlign: 'center',
    padding: 15,
  },
});
