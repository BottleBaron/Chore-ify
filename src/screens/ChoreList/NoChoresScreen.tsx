/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function NoChoresScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Här var det tomt!</Text>
      <Text style={styles.infoText}>
        Om du är administratör för det här hushållet så kan du nu börja lägga
        till sysslor eller bjuda in andra till ditt hushåll!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20, // Add horizontal padding for small gaps
  },
  headline: {
    fontSize: 24,
    marginVertical: 10, // Adjust vertical margin for gaps
  },
  infoText: {
    textAlign: 'center',
    marginVertical: 10, // Adjust vertical margin for gaps
  },
});
