import { DarkTheme, DefaultTheme } from '@react-navigation/native';

export const AppLightTheme = {
  ...DefaultTheme,
  colors: {
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
    buttonTextColor: 'rgb(0, 0, 0)',
    buttonIconColor: 'rgb(255, 255, 255)',
    /*
    TextInputFields
    */
    textColor: 'rgb(0, 0, 0)',
    outLineColor: 'rgb(0, 0, 0)',
    activeOutlineColor: 'rgb(0, 35, 156)',
    /*
    AuthScreens
    */
    themeTitleColor: 'rgb(48, 127, 226)',
    themeBackgroundOverlayTintColor: 'rgba(216, 216, 216, 0.7)',
    /*
    Social Media specific
    */
    facebookColor: 'rgb(59, 89, 152)',
    googleColor: 'rgb(219, 68, 55)',
    outLookColor: 'rgb(0, 114, 198)',
  },
};

export const AppDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(216, 216, 216)',
    secondary: 'rgb(81, 83, 74)',
    background: 'rgb(28, 28, 30)',
    text: 'rgb(150, 150, 150)',
    border: 'rgb(216, 216, 216)',
    notification: 'rgb(255, 59, 48)',
    card: 'rgb(0, 0, 0)',
    /*
    Buttons
    */
    button: 'rgb(83, 86, 90)',
    buttonTextColor: 'rgb(117, 120, 123)',
    buttonIconColor: 'rgb(0, 0, 0)',
    /*
    TextInputFields
    */
    textColor: 'rgb(216, 216, 216)',
    outLineColor: 'rgb(255, 255, 255)',
    activeOutlineColor: 'rgb(255, 255, 255)',
    /*
    AuthScreens
    */
    themeTitleColor: 'rgb(150, 150, 150)',
    themeBackgroundOverlayTintColor: 'rgba(0, 0, 0, 0.8)',
    /*
    Social Media specific
    */
    facebookColor: 'rgb(59, 89, 152)',
    googleColor: 'rgb(219, 68, 55)',
    outLookColor: 'rgb(0, 114, 198)',
  },
};
