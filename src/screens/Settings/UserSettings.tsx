// UserSettings.tsx
import { useAppTheme } from '@src/contexts/ThemeContext';
import React from 'react'; // Don't forget to import React
import { View } from 'react-native'; // Text was missing in the import
import { Text } from 'react-native-paper';

export default function UserSettings() {
  const theme = useAppTheme();
  return (
    <View>
      <Text style={{ color: theme.colors.text }}>
        Du är inte admin så här finns inget att se just nu
      </Text>
    </View>
  );
}
