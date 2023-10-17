/* eslint-disable import/no-cycle */
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';
import { useAppTheme } from '../../contexts/ThemeContext';
import { RootStackScreenProps } from '../../navigators/types';

// Ange typen för navigation prop

type Props = RootStackScreenProps<'SignIn'>;

export default function SignInModalScreen({ navigation }: Props) {
  const theme = useAppTheme();

  return (
    <View style={styles.container}>
      <Button
        mode="contained"
        buttonColor={theme.colors.buttonColor}
        onPress={() => navigation.navigate('HouseholdDashboard')}
        style={styles.button}
      >
        Login - just nu direkt till HomeScreen
      </Button>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('HouseholdDashboard')}
        style={styles.button}
      >
        Register - just nu direkt till RegisterScreen
      </Button>
    </View>
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
});
