/* eslint-disable import/no-cycle */
import initialBackground from '@src/assets/backgrounds/initial_background.png';
import * as React from 'react';
import { useState } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { Button, HelperText, TextInput, Title } from 'react-native-paper';
// import { useAppTheme } from '../../contexts/ThemeContext';
import { useAppTheme } from '@root/src/contexts/ThemeContext';
import { RootStackScreenProps } from '../../navigators/types';
import { signIntoAccount } from '../../redux/slices/accountSlice';
import { useAppDispatch } from '../../redux/store';

// Ange typen för navigation prop

type Props = RootStackScreenProps<'SignIn'>;

export default function SignInModalScreen({ navigation }: Props) {
  const theme = useAppTheme();
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

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

  const handleSubmit = async () => {
    if (emailError || passwordError) {
      setPasswordError('Input is invalid');
    } else {
      const credentials = { email, password };
      try {
        const action = await dispatch(signIntoAccount(credentials));
        if (signIntoAccount.fulfilled.match(action))
          navigation.navigate('HouseHoldSelectorScreen');
        else {
          setPasswordError('Incorrect Email or Password, please try again');
        }
      } catch (error) {
        setPasswordError(`Login error: ${error}`);
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
            { backgroundColor: theme.colors.backgroundOverlay },
          ]}
        />
        <View style={styles.innerContainer}>
          <Title style={[styles.title, { color: theme.colors.title }]}>
            Chorify
          </Title>
          <TextInput
            label="Email"
            aria-labelledby="Email"
            value={email}
            onChangeText={validateEmail}
            style={styles.input}
            mode="outlined"
            inputMode="email"
            contentStyle={{
              backgroundColor: theme.colors.background,
            }}
            outlineColor={theme.colors.inputOutline}
            activeOutlineColor={theme.colors.inputActiveOutline}
            selectionColor={theme.colors.inputActiveOutline}
            // den blinkande cursorn:
            cursorColor={theme.colors.button}
            // texten:
            textColor={theme.colors.text}
            // underlinjen av texten:
            underlineColor={theme.colors.inputOutline}
            // underlinjen när texten är aktiv:
            activeUnderlineColor={theme.colors.inputOutline}
            placeholderTextColor={theme.colors.text}
          />
          <HelperText
            style={{ color: theme.colors.error }}
            type="error"
            visible={!!emailError}
          >
            {emailError}
          </HelperText>

          <TextInput
            label="Confirm Password"
            aria-labelledby="confirm password"
            value={password}
            onChangeText={validatePassword}
            secureTextEntry
            style={styles.input}
            mode="outlined"
            contentStyle={{
              backgroundColor: theme.colors.background,
            }}
            outlineColor={theme.colors.inputOutline}
            activeOutlineColor={theme.colors.inputActiveOutline}
            selectionColor={theme.colors.inputActiveOutline}
            // den blinkande cursorn:
            cursorColor={theme.colors.button}
            // texten:
            textColor={theme.colors.text}
            // underlinjen av texten:
            underlineColor={theme.colors.inputOutline}
            // underlinjen när texten är aktiv:
            activeUnderlineColor={theme.colors.inputOutline}
            placeholderTextColor={theme.colors.text}
          />
          <HelperText type="error" visible={!!passwordError}>
            {passwordError}
          </HelperText>

          <Button mode="contained" onPress={handleSubmit}>
            Sign In
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
  title: {
    lineHeight: 80,
    fontSize: 80,
    fontWeight: 'bold',
    marginTop: 50,
  },
  cardContainer: {
    marginBottom: 20,
    width: 300,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    width: '70%',
    marginTop: 20,
    margin: 5,
  },
});
