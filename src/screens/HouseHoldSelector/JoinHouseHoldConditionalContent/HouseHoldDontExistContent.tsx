// HouseHoldDontExistContent.tsx
import { useAppTheme } from '@src/contexts/ThemeContext';
import * as React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Title, Paragraph } from 'react-native-paper';

export default function HouseHoldDontExistContent() {
  const theme = useAppTheme();
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Title style={[styles.title, { color: theme.colors.text }]}>
          INGET HUSHÅLL
        </Title>
        <Paragraph style={[styles.paragraph, { color: theme.colors.text }]}>
          Det finns inget hushåll med detta id och generead kod, gå tillbaka och
          försök igen eller skapa ett hushåll.
        </Paragraph>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    justifyContent: 'space-evenly',
  },
  innerTextContainer: {
    // padding: 15,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    // padding: 15,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    padding: 15,
  },
  paragraph: {
    fontSize: 12,
    textAlign: 'center',
    padding: 15,
  },
});
