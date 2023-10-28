import { DarkTheme, DefaultTheme } from '@react-navigation/native';

const commonColors = {
  error: 'rgb(220, 0, 0)',
  facebookColor: 'rgb(59, 89, 152)',
  googleColor: 'rgb(219, 68, 55)',
  outLookColor: 'rgb(0, 114, 198)',
  finished: 'rgb(0, 255, 0)',
  pending: 'rgb(255, 255, 0)',
  notStarted: 'rgb(255, 0, 0)',
};

export const AppLightTheme = {
  ...DefaultTheme,
  colors: {
    ...commonColors,
    primary: 'rgb(0, 132, 202)',
    secondary: 'rgb(150, 150, 150)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(216, 216, 216)',
    notification: 'rgb(255, 59, 48)',
    /*
    Buttons
    */
    button: 'rgb(48, 127, 226)',
    buttonText: 'rgb(0, 0, 0)',
    buttonIcon: 'rgb(255, 255, 255)',
    /*
    TextInputFields
    */
    inputText: 'rgb(0, 0, 0)',
    inputOutline: 'rgb(0, 0, 0)',
    inputActiveOutline: 'rgb(0, 35, 156)',
    /*
    AuthScreens
    */
    title: 'rgb(48, 127, 226)',
    backgroundOverlay: 'rgba(216, 216, 216, 0.7)',
  },
};

export const AppDarkTheme = {
  ...DarkTheme,
  colors: {
    ...commonColors,
    primary: 'rgb(216, 216, 216)',
    secondary: 'rgb(81, 83, 74)',
    background: 'rgb(28, 28, 30)',
    card: 'rgb(0, 0, 0)',
    text: 'rgb(150, 150, 150)',
    border: 'rgb(216, 216, 216)',
    notification: 'rgb(255, 59, 48)',
    /*
    Buttons
    */
    button: 'rgb(83, 86, 90)',
    buttonText: 'rgb(117, 120, 123)',
    buttonIcon: 'rgb(0, 0, 0)',
    /*
    TextInputFields
    */
    inputText: 'rgb(216, 216, 216)',
    inputOutline: 'rgb(255, 255, 255)',
    inputActiveOutline: 'rgb(255, 255, 255)',
    /*
    AuthScreens
    */
    title: 'rgb(150, 150, 150)',
    backgroundOverlay: 'rgba(0, 0, 0, 0.8)',
  },
};
