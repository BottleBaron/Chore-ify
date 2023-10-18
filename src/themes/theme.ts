import { DarkTheme, DefaultTheme } from '@react-navigation/native';

export const AppLightTheme = {
  ...DefaultTheme,
  colors: {
    primary: 'rgb(0, 122, 255)',
    secondary: 'rgb(255, 59, 48)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(216, 216, 216)',
    notification: 'rgb(255, 59, 48)',
    color: 'rgb(255, 59, 48)',
    button: 'rgb(255, 59, 48)',
    buttonColor: 'rgb(155, 255, 0)',

    activeOutlineColor: 'rgb(0, 0, 0)',
    outLineColor: 'rgb(63,165,145)',
    textColor: 'rgb(0, 0, 0)',
    contentStyleBackgroundColor: 'rgb(234, 129, 18)',
  },
};

export const AppDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 59, 48)',
    secondary: 'rgb(255, 59, 48)',
    background: 'rgb(0, 0, 0)',
    card: 'rgb(0, 0, 0)',
    text: 'rgb(150, 150, 150)',
    border: 'rgb(216, 216, 216)',
    notification: 'rgb(255, 59, 48)',
    color: 'rgb(255, 59, 48)',
    button: 'rgb(255, 59, 48)',
    buttonColor: 'rgb(255, 59, 48)',

    activeOutlineColor: 'rgb(155,255,0)',
    outLineColor: 'rgb(255, 59, 48)',
    textColor: 'rgb(150, 150, 150)',
    contentStyleBackgroundColor: 'rgb(155,255,0)',
  },
};
