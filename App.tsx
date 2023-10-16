/* eslint-disable react/style-prop-object */
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ThemeProvider from './src/contexts/ThemeContext';
import RootStackNavigator from './src/navigators/root/RootStackNavigator';

export default function App() {
  return (
    <SafeAreaProvider>
      {/* <ReduxProvider store={}> */}
      <ThemeProvider>
        <StatusBar style="auto" />
        <RootStackNavigator />
      </ThemeProvider>
      {/* </ReduxProvider> */}
    </SafeAreaProvider>
  );
}
