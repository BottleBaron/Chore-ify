// SplashScreen.tsx

import React, { useEffect } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { Title } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import initialBackground from '@src/assets/backgrounds/initial_background.png';
import { useAppTheme } from '@src/contexts/ThemeContext';

export default function SplashScreen() {
  const theme = useAppTheme();
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Auth'); // Navigate to AuthScreen after 3 seconds
    }, 3000);
  }, [navigation]);

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
          <Title style={[styles.title, { color: theme.colors.title }]}>
            Loading Chorify...
          </Title>
          {/* You can add some loading spinners or icons here */}
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
    ...StyleSheet.absoluteFillObject,
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
  },
});
