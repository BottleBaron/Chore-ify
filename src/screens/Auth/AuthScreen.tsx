/* eslint-disable import/no-cycle */
import initialBackground from '@src/assets/backgrounds/initial_background.png';
import { useAppTheme } from '@src/contexts/ThemeContext';
import { RootStackScreenProps } from '@src/navigators/types';
// import { signIntoAccount } from '@src/redux/slices/accountSlice';
// import { useAppDispatch } from '@src/redux/store';
import ThemedClickableCardButton from '@src/themedComponents/ThemedClickableCardButton';
import * as React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { Title } from 'react-native-paper';

// Ange typen för navigation prop

type Props = RootStackScreenProps<'Auth'>;

export default function AuthScreen({ navigation }: Props) {
  const theme = useAppTheme();
  /*
  const dispatch = useAppDispatch();
  
  const handleLoginBypass = async () => {
    const credentials = { email: 'apa123@mail.com', password: 'apa123' };
    const action = await dispatch(signIntoAccount(credentials));
    if (signIntoAccount.fulfilled.match(action))
      navigation.navigate('HouseHoldSelectorScreen');
  };
*/
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
            <Title style={[styles.title, { color: theme.colors.title }]}>
              Chorify
            </Title>
          </View>
          <ThemedClickableCardButton
            hideTitle // or hideTitle={false}
            title="Sign In"
            content="Logga in"
            iconName="sign-in"
            onPress={() => navigation.navigate('SignIn')}
            // leftIconColor={theme.colors.inputActiveOutline}
            // rightIconColor={theme.colors.inputActiveOutline}
            // showLeftIcon={false} // New prop, default to true
            showRightIcon={false}
          />
          <ThemedClickableCardButton
            hideTitle // or hideTitle={false}
            title="Create Account"
            content="Skapa konto"
            iconName="plus"
            onPress={() => navigation.navigate('SignUp')}
            // leftIconColor={theme.colors.inputActiveOutline}
            // rightIconColor={theme.colors.inputActiveOutline}
            // showLeftIcon={false} // New prop, default to true
            showRightIcon={false}
          />

          {/*   <ThemedClickableCardButton
            hideTitle // or hideTitle={false}
            title="Login Bypass"
            content="Login Bypass"
            iconName="cog"
            leftIconColor={theme.colors.buttonIcon}
            onPress={handleLoginBypass}
          /> */}
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
