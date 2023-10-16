import { AppDarkTheme, AppLightTheme } from './theme';

type ThemeString = 'dark' | 'light';

const getThemeObject = (theme: ThemeString) =>
  theme === 'dark' ? AppDarkTheme : AppLightTheme;

export default getThemeObject;
