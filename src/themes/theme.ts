import { DarkTheme, DefaultTheme } from '@react-navigation/native';

export const AppLightTheme = {
  ...DefaultTheme,
  colors: {
    primary: 'rgb(255, 106, 19)',
    secondary: 'rgb(255, 59, 48)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(216, 216, 216)',
    notification: 'rgb(255, 59, 48)',
    color: 'rgb(255, 59, 48)',
    button: 'rgb(255, 59, 48)',
    buttonColor: 'rgb(255, 103, 31)',

    /*
    TextInputFields
    */
    activeOutlineColor: 'rgb(0, 0, 0)',
    outLineColor: 'rgb(0, 0, 0)',
    textColor: 'rgb(0, 0, 0)',
    contentStyleBackgroundColor: 'rgb(245, 225, 164)',

    /*
    AuthScreens
    */
    themeTitleColor: 'rgb(255, 94, 0)',
    // themeBackgroundTintColor: 'rgba(255, 114, 118, 0.5)',
    themeBackgroundTintColor: 'rgba(255, 170, 77, 0.7)',
  },
};

export const AppDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 111, 97)',
    secondary: 'rgb(255, 111, 97)',
    background: 'rgb(0, 0, 0)',
    card: 'rgb(0, 0, 0)',
    text: 'rgb(150, 150, 150)',
    border: 'rgb(216, 216, 216)',
    notification: 'rgb(255, 59, 48)',
    color: 'rgb(255, 111, 97)',
    button: 'rgb(255, 111, 97)',
    buttonColor: 'rgb(255, 111, 97)',

    /*
    TextInputFields
    */
    activeOutlineColor: 'rgb(255, 59, 48)',
    outLineColor: 'rgb(0, 0, 0)',
    textColor: 'rgb(255, 111, 97)',
    contentStyleBackgroundColor: 'rgb(0, 0, 0)',

    /*
    AuthScreens
    */
    themeTitleColor: 'rgb(255, 111, 97)',
    themeBackgroundTintColor: 'rgba(0, 0, 0, 0.8)',
  },
};
