import * as React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { Button, TextInput, Title } from 'react-native-paper';
// eslint-disable-next-line import/no-cycle
import initialBackground from '../../../assets/backgrounds/initial_background.png';
import { useAppTheme } from '../../contexts/ThemeContext';
import { RootStackScreenProps } from '../../navigators/types';

type Props = RootStackScreenProps<'SignUp'>;

export default function SignUpModalScreen({ navigation }: Props) {
  // const [isFocused, setIsFocused] = React.useState(false);
  const [username, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const theme = useAppTheme();
  // const background = 'initial_background';

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
          <Title
            style={[styles.title, { color: theme.colors.themeTitleColor }]}
          >
            Chorify
          </Title>
          <TextInput
            label="Email"
            aria-labelledby="email"
            value={username}
            onChangeText={setEmail}
            style={styles.input}
            mode="outlined"
            // contentStyle={{
            //   backgroundColor: theme.colors.contentStyleBackgroundColor,
            // }}
            // // textContentType="oneTimeCode"
            outlineColor={theme.colors.secondary}
            activeOutlineColor={theme.colors.button}
            cursorColor={theme.colors.button}
            textColor={theme.colors.textColor}
          />
          <TextInput
            label="Password"
            aria-labelledby="password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
            mode="outlined"
            // contentStyle={{
            //   backgroundColor: theme.colors.contentStyleBackgroundColor,
            // }}
            // onFocus={() => setIsFocused(true)}
            // onBlur={() => setIsFocused(false)}
            // textContentType={isFocused ? 'password' : 'oneTimeCode'}
            outlineColor={theme.colors.secondary}
            activeOutlineColor={theme.colors.button}
            cursorColor={theme.colors.button}
            textColor={theme.colors.textColor}
          />
          <TextInput
            label="Confirm Password"
            aria-labelledby="confirm password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            style={styles.input}
            mode="outlined"
            // contentStyle={{
            //   backgroundColor: theme.colors.contentStyleBackgroundColor,
            // }}
            // onFocus={() => setIsFocused(true)}
            // onBlur={() => setIsFocused(false)}
            // textContentType={isFocused ? 'password' : 'oneTimeCode'}
            outlineColor={theme.colors.secondary}
            activeOutlineColor={theme.colors.button}
            cursorColor={theme.colors.button}
            textColor={theme.colors.textColor}
          />
          <Button
            mode="contained"
            onPress={() => navigation.navigate('HouseholdDashboard')}
            style={styles.button}
            buttonColor={theme.colors.button}
          >
            Sign Up
          </Button>
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
  input: {
    width: 300,
    marginTop: 20,
    margin: 5,
  },
  button: {
    marginTop: 20,
  },
});
