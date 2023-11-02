import { useAppTheme } from '@src/contexts/ThemeContext';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

interface StatusCardProps {
  status: string;
}
export default function StatusCard({ status }: StatusCardProps) {
  const theme = useAppTheme();
  let backgroundColor = ''; // grå
  let text = 'Den här sysslan behöver fortfarande göras idag!';

  // eslint-disable-next-line default-case
  switch (status) {
    case 'done':
      backgroundColor = theme.colors.finished; /* '#4CAF50'; // grön */
      text = 'Toppen! Den här sysslan är gjord för idag!';
      break;
    case 'pending':
      backgroundColor = theme.colors.pending; /* '#FFEB3B'; */ // gul
      text = `Denna sysslan ska göras nu`;
      break;
    case 'missed':
      backgroundColor = theme.colors.notStarted; /* '#F44336'; */ // röd
      text = `Den här sysslan är sen!`;
      break;
  }

  return (
    <View style={{ ...styles.statusCard, backgroundColor }}>
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  statusCard: {
    margin: 16,
    padding: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
