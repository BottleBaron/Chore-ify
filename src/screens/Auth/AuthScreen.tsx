/* eslint-disable import/no-cycle */
import initialBackground from '@src/assets/backgrounds/initial_background.png';
import { useAppTheme } from '@src/contexts/ThemeContext';
import { RootStackScreenProps } from '@src/navigators/types';
import ThemedClickableCardButton from '@src/themedComponents/ThemedClickableCardButton';
import * as React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { Title } from 'react-native-paper';

// Ange typen för navigation prop

type Props = RootStackScreenProps<'Auth'>;

export default function AuthScreen({ navigation }: Props) {
  const theme = useAppTheme();

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
            { backgroundColor: theme.colors.backgroundOverlay },
          ]}
        />
        <View style={styles.innerContainer}>
          <View>
            <Title style={[styles.title, { color: theme.colors.text }]}>
              Chorify
            </Title>
          </View>
          <ThemedClickableCardButton
            hideTitle // or hideTitle={false}
            title="Sign In"
            content="Sign in"
            iconName="sign-in"
            iconColor={theme.colors.text}
            onPress={() => navigation.navigate('SignIn')}
          />
          <ThemedClickableCardButton
            hideTitle // or hideTitle={false}
            title="Create Account"
            content="Create Account"
            iconName="plus"
            iconColor={theme.colors.text}
            onPress={() => navigation.navigate('SignUp')}
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
    flex: 1,
    justifyContent: 'center',
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
  title: {
    lineHeight: 80,
    fontSize: 80,
    fontWeight: 'bold',
    marginTop: 50,
  },
  button: {
    width: 300,
    marginBottom: 20,
  },
});
