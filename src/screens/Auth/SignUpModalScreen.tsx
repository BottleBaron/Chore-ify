import * as React from 'react';
import { useState } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { Button, HelperText, TextInput, Title } from 'react-native-paper';
// eslint-disable-next-line import/no-cycle
import initialBackground from '../../../assets/backgrounds/initial_background.png';
import { useAppTheme } from '../../contexts/ThemeContext';
import { RootStackScreenProps } from '../../navigators/types';
import { createAccount } from '../../redux/slices/accountSlice';
import { useAppDispatch } from '../../redux/store';

type Props = RootStackScreenProps<'SignUp'>;

export default function SignUpModalScreen({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');

  const theme = useAppTheme();
  const dispatch = useAppDispatch();
  // const background = 'initial_background';

  const validateEmail = (text: string) => {
    const emailRegex = /\S+@\S+\.\S+/;

    if (!emailRegex.test(text)) {
      setEmailError('Invalid email');
    } else {
      setEmailError('');
    }
    setEmail(text);
  };

  const validatePassword = (text: string) => {
    // Password validation logic (e.g., at least 6 characters)
    if (text.length < 6) {
      setPasswordError('Password must be at least 6 characters');
    } else {
      setPasswordError('');
    }
    setPassword(text);
  };

  const validatePasswordConfirmed = (text: string) => {
    if (text !== password) {
      setPasswordError('Passwords do not match');
    } else {
      setPasswordError('');
    }

    setConfirmPassword(text);
  };

  const handleSubmit = async () => {
    if (emailError || passwordError) {
      setPasswordError('Input is invalid');
    } else {
      try {
        // Account Created
        const credentials = { email, password };
        const action = await dispatch(createAccount(credentials));
        if (createAccount.fulfilled.match(action))
          navigation.navigate('HouseHoldSelectorScreen');
        else setPasswordError('createAccount function was rejected');
      } catch (e) {
        setPasswordError(`Account creation error: ${e}`);
      }
    }
  };

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
            value={email}
            onChangeText={validateEmail}
            style={styles.input}
            mode="outlined"
            inputMode="email"
            contentStyle={{
              backgroundColor: theme.colors.background,
            }}
            // textContentType="oneTimeCode"
            outlineColor={theme.colors.outLineColor}
            activeOutlineColor={theme.colors.activeOutlineColor}
            selectionColor={theme.colors.activeOutlineColor}
            // den blinkande cursorn:
            cursorColor={theme.colors.button}
            textColor={theme.colors.textColor}
          />
          <HelperText
            type="error"
            style={{ color: theme.colors.error }}
            visible={!!emailError}
          >
            {emailError}
          </HelperText>

          <TextInput
            label="Password"
            aria-labelledby="password"
            value={password}
            onChangeText={validatePassword}
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
            onChangeText={validatePasswordConfirmed}
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
          <HelperText
            type="error"
            style={{ color: theme.colors.error }}
            visible={!!passwordError}
          >
            {passwordError}
          </HelperText>

          <Button
            mode="contained"
            onPress={handleSubmit}
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
    width: '70%',
    marginTop: 20,
    margin: 5,
  },
  button: {
    marginTop: 20,
  },
});
