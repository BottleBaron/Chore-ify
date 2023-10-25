/* eslint-disable import/no-cycle */
import * as React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

import initialBackground from '../../../assets/backgrounds/initial_background.png';
import { useAppTheme } from '../../contexts/ThemeContext';
import { RootStackScreenProps } from '../../navigators/types';
import ThemedClickableCardButton from '../../themedComponents/ThemedClickableCardButton';

// Ange typen för navigation prop

type Props = RootStackScreenProps<'SignIn'>;

export default function SignInModalScreen({ navigation }: Props) {
  const theme = useAppTheme();

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
      <ImageBackground
        source={initialBackground}
        resizeMode="cover"
        style={styles.image}
      >
        <View
          style={[
            styles.overlay,
            { backgroundColor: theme.colors.themeBackgroundOverlayTintColor },
          ]}
        />
        <View style={styles.innerContainer}>
          <ThemedClickableCardButton
            hideTitle // or hideTitle={false}
            title="Google"
            content="Sign in with Google"
            iconName="google"
            iconColor={theme.colors.googleColor}
            onPress={() => navigation.navigate('HouseholdDashboard')}
            borderStyle={{
              borderColor: theme.colors.googleColor,
              borderWidth: 3,
            }}
          />
          <ThemedClickableCardButton
            hideTitle // or hideTitle={false}
            title="Facebook"
            content="Sign in with Facebook"
            iconName="facebook"
            iconColor={theme.colors.facebookColor}
            onPress={() => navigation.navigate('HouseholdDashboard')}
            borderStyle={{
              borderColor: theme.colors.facebookColor,
              borderWidth: 3,
            }}
          />
          <ThemedClickableCardButton
            hideTitle // or hideTitle={false}
            title="Email"
            content="Sign in with Email"
            iconName="at"
            iconColor={theme.colors.outLookColor}
            onPress={() => navigation.navigate('HouseholdDashboard')}
            borderStyle={{
              borderColor: theme.colors.outLookColor,
              borderWidth: 3,
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1, // makes sure the image also takes up all available space in container
    // width: '100%', // sets width to 100% of parent
    justifyContent: 'center', // centers children on the y-axis
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // this will make the view take up the whole parent view
    // opacity: 0.5, // or whatever value you like
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    marginBottom: 20,
    width: 300,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
