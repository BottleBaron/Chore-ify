/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
import * as abelFontStyle from '@src/assets/Fonts/Abel-Regular.ttf';
import * as arrowOne from '@src/assets/Pictures/Arrow01.png';
import * as arrowThree from '@src/assets/Pictures/Arrow03.png';
import * as lostConnection from '@src/assets/Pictures/ConnectionLost2.png';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import BottomButtons from './BottomButtonsComponent';

export default function NoChoresPage() {
  const [fontsLoaded, fontError] = useFonts({
    Abel: abelFontStyle,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Text style={styles.headline}>Här var det tomt!</Text>
      <Image style={styles.arrowImage} source={arrowThree} />
      <Text style={styles.infoText}>
        Klicka på inställningar () för att administrera ditt hushåll och börja
        bjuda in andra
      </Text>
      <Image style={styles.catImage} source={lostConnection} />
      <Text style={styles.infoText}>
        ... Eller klicka här för att börja skapa sysslor för ditt hushåll
      </Text>
      <Image style={styles.smallArrowImage} source={arrowOne} />
      <BottomButtons />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headline: {
    fontFamily: 'Abel',
    fontSize: 38,
    // color: '#000000',
    top: -60,
    paddingVertical: 10,
  },
  infoText: {
    fontFamily: 'Abel',
    fontSize: 18,
    // color: '#000000',
    opacity: 0.6,
    padding: 18,
    top: -60,
  },
  arrowImage: {
    position: 'absolute',
    top: 10,
    left: 300,
    height: 100,
    width: 100,
    resizeMode: 'contain',
    zIndex: -1,
  },
  catImage: {
    top: -60,
    height: 270,
    width: 300,
    resizeMode: 'contain',
    zIndex: -1,
  },
  smallArrowImage: {
    top: 10,
    left: -30,
    height: 50,
    width: 50,
    resizeMode: 'contain',
    zIndex: -1,
  },
});
