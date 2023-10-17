import * as React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
// eslint-disable-next-line import/no-cycle
import initialBackground from '../../../assets/backgrounds/initial_background.png';
import { useAppTheme } from '../../contexts/ThemeContext';
import { RootStackScreenProps } from '../../navigators/types';

type Props = RootStackScreenProps<'SignUp'>;

export default function SignUpModalScreen({ navigation }: Props) {
  const [username, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const theme = useAppTheme();
  // const background = 'initial_background';

  return (
    <ImageBackground
      source={initialBackground}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.container}>
        {/* <Text
        style={styles.title}
        disabled={false}
        theme={{ colors: { primary: theme.colors.button } }}
      >
        Register Screen
      </Text> */}
        <TextInput
          label="Email"
          aria-labelledby="email"
          value={username}
          onChangeText={setEmail}
          style={styles.input}
          mode="outlined"
          contentStyle={{
            backgroundColor: theme.colors.contentStyleBackgroundColor,
          }}
          outlineColor={theme.colors.outLineColor}
          activeOutlineColor={theme.colors.activeOutlineColor}
          selectionColor={theme.colors.activeOutlineColor}
          // den blinkande cursorn:
          cursorColor={theme.colors.button}
          // texten:
          textColor={theme.colors.textColor}
          // underlinjen av texten:
          underlineColor={theme.colors.outLineColor}
          // underlinjen när texten är aktiv:
          activeUnderlineColor={theme.colors.outLineColor}
          placeholderTextColor={theme.colors.color}
        />
        <TextInput
          label="Password"
          aria-labelledby="password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
          mode="outlined"
          contentStyle={{
            backgroundColor: theme.colors.contentStyleBackgroundColor,
          }}
          outlineColor={theme.colors.outLineColor}
          activeOutlineColor={theme.colors.activeOutlineColor}
          selectionColor={theme.colors.activeOutlineColor}
          // den blinkande cursorn:
          cursorColor={theme.colors.button}
          // texten:
          textColor={theme.colors.textColor}
          // underlinjen av texten:
          underlineColor={theme.colors.outLineColor}
          // underlinjen när texten är aktiv:
          activeUnderlineColor={theme.colors.outLineColor}
          placeholderTextColor={theme.colors.color}
        />
        <TextInput
          label="Confirm Password"
          aria-labelledby="confirm password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          style={styles.input}
          mode="outlined"
          contentStyle={{
            backgroundColor: theme.colors.contentStyleBackgroundColor,
          }}
          outlineColor={theme.colors.outLineColor}
          activeOutlineColor={theme.colors.activeOutlineColor}
          selectionColor={theme.colors.activeOutlineColor}
          // den blinkande cursorn:
          cursorColor={theme.colors.button}
          // texten:
          textColor={theme.colors.textColor}
          // underlinjen av texten:
          underlineColor={theme.colors.outLineColor}
          // underlinjen när texten är aktiv:
          activeUnderlineColor={theme.colors.outLineColor}
          placeholderTextColor={theme.colors.color}
        />
        <Button
          mode="contained"
          onPress={() => navigation.navigate('HouseholdDashboard')}
          style={styles.button}
          buttonColor={theme.colors.buttonColor}
        >
          Sign Up
        </Button>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  // const themeStyle = useAppTheme(),
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    // theme: { colors: { primary: theme.colors.button } },
  },
  input: {
    width: '100%',
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
  },
  image: {
    flex: 1, // makes sure the image also takes up all available space in container
    width: '100%', // sets width to 100% of parent
    justifyContent: 'center', // centers children on the y-axis
  },
});
