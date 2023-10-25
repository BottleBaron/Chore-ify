/* eslint-disable import/no-cycle */
import * as React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { Title } from 'react-native-paper';
import initialBackground from '../../../assets/backgrounds/initial_background.png';
import { useAppTheme } from '../../contexts/ThemeContext';
import { RootStackScreenProps } from '../../navigators/types';
import ThemedClickableCardButton from '../../themedComponents/ThemedClickableCardButton';

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
            { backgroundColor: theme.colors.themeBackgroundOverlayTintColor },
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
          <ThemedClickableCardButton
            hideTitle // or hideTitle={false}
            title="Statistic"
            content="Test Statistics"
            iconName="home"
            iconColor={theme.colors.text}
            onPress={() =>
              navigation.navigate('Statistics', { period: 'today' })
            }
          />
          <ThemedClickableCardButton
            hideTitle // or hideTitle={false}
            title="Settings"
            content="Settings"
            iconName="cog"
            iconColor={theme.colors.text}
            onPress={() => navigation.navigate('Settings')}
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
