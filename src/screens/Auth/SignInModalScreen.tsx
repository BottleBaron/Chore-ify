/* eslint-disable import/no-cycle */
import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import ThemedClickableCardButton from '../../clickableComponents/ThemedClickableCardButton';
import { RootStackScreenProps } from '../../navigators/types';

// Ange typen för navigation prop

type Props = RootStackScreenProps<'SignIn'>;

export default function SignInModalScreen({ navigation }: Props) {
  // const theme = useAppTheme();

  // const handleGoogleSignIn = () => {
  //   console.log('Google Sign In');
  //   // Implement Google Sign-in logic
  // };

  // const handleFacebookSignIn = () => {
  //   console.log('Google Sign In');
  //   // Implement Google Sign-in logic
  // };

  // const handleEmailSignIn = () => {
  //   console.log('Google Sign In');
  //   // Implement Google Sign-in logic
  // };

  return (
    <View style={styles.container}>
      <ThemedClickableCardButton
        title="Google"
        content="Sign in with Google"
        iconName="google"
        onPress={() => navigation.navigate('HouseholdDashboard')}
      />
      <ThemedClickableCardButton
        title="Google"
        content="Sign in with Facebook"
        iconName="facebook"
        onPress={() => navigation.navigate('HouseholdDashboard')}
      />
      <ThemedClickableCardButton
        title="Email"
        content="Sign in with Email"
        iconName="at"
        onPress={() => navigation.navigate('HouseholdDashboard')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    marginBottom: 20,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    marginTop: 20,
  },
});
