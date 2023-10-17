/* eslint-disable import/no-cycle */
import * as React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';
import initialBackground from '../../../assets/backgrounds/initial_background.png';
import { useAppTheme } from '../../contexts/ThemeContext';
import { RootStackScreenProps } from '../../navigators/types';

// Ange typen för navigation prop

type Props = RootStackScreenProps<'Auth'>;

export default function AuthScreen({ navigation }: Props) {
  const theme = useAppTheme();

  return (
    <ImageBackground
      source={initialBackground}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.container}>
        <Button
          mode="contained"
          buttonColor={theme.colors.buttonColor}
          onPress={() => navigation.navigate('SignIn')}
          style={styles.button}
        >
          Login - just nu direkt till SignIn
        </Button>
        <Button
          mode="contained"
          buttonColor={theme.colors.buttonColor}
          onPress={() => navigation.navigate('SignUp')}
          style={styles.button}
        >
          Register - just nu direkt till SignUp
        </Button>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 20,
  },
  image: {
    flex: 1, // makes sure the image also takes up all available space in container
    // width: '100%', // sets width to 100% of parent
    justifyContent: 'center', // centers children on the y-axis
  },
});
