import { useColorScheme } from 'react-native';

const colorScheme = useColorScheme(); // Hämta enhetens färgschema

export interface ThemeState {
  theme: string;
}

export const initialThemeState = {
  theme: colorScheme === 'dark' ? 'dark' : 'light',
};
