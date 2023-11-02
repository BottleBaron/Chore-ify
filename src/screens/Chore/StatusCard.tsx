import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useAppTheme } from '@src/contexts/ThemeContext';
import { Text } from 'react-native-paper';

interface StatusCardProps {
  status: string;
  daysLeft: number;
}
export default function StatusCard({ status, daysLeft }: StatusCardProps) {
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
      text = `${daysLeft} dagar kvar tills denna syssla ska göras`;
      break;
    case 'missed':
      backgroundColor = theme.colors.notStarted; /* '#F44336'; */ // röd
      text = `Woh, den här sysslan är ${daysLeft} dagar sen!`;
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
