// UserHasNoHouseHold.tsx
import createHouseholdImage from '@src/assets/button-images/create-household.png';
import joinHouseholdImage from '@src/assets/button-images/join-household.png';
import { useAppTheme } from '@src/contexts/ThemeContext';
import * as React from 'react';
import { Image, SafeAreaView, StyleSheet, View } from 'react-native';
// import { styles } from 'react-native-gifted-charts/src/LineChart/styles';
import { Text, TouchableRipple } from 'react-native-paper';
// import { StackNavigationProp } from 'react-navigation-stack/lib/typescript/src/vendor/types';
import { RootStackScreenProps } from '@src/navigators/types';

// this?
// type Props = RootStackScreenProps<'HouseHoldSelectorScreen'>;

// or this?
type Props = {
  navigation: RootStackScreenProps<'HouseHoldSelectorScreen'>['navigation'];
};

export default function UserHasNoHouseHoldScreenContent({ navigation }: Props) {
  const theme = useAppTheme();

  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.container}> */}
      <TouchableRipple
        // onPress={() => console.log('Pressed')}
        style={[styles.touchableRipple, { borderColor: theme.colors.border }]}
        onPress={() => navigation.navigate('ChoreList')}
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
        onPress={() => navigation.navigate('ChoreList')}
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
    // justifyContent: 'center',
    justifyContent: 'space-evenly',
  },
  touchableRipple: {
    width: '90%',
    // height: '45%',
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '90%',
    height: '45%',
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  innerTextContainer: {
    // padding: 15,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    // padding: 15,
  },
  text: {
    fontSize: 12,
    textAlign: 'center',
    padding: 15,
  },
});
