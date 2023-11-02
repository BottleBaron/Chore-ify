/* eslint-disable react/style-prop-object */
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as ReduxProvider } from 'react-redux';
import ThemeProvider from './src/contexts/ThemeContext';
import RootStackNavigator from './src/navigators/root/RootStackNavigator';
import { store } from './src/redux/store';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 5000);

export default function App() {
  return (
    <ReduxProvider store={store}>
      <SafeAreaProvider>
        <ThemeProvider>
          <StatusBar style="auto" />
          <RootStackNavigator />
        </ThemeProvider>
      </SafeAreaProvider>
    </ReduxProvider>
  );
}
