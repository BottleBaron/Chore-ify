import React from 'react'; // Don't forget to import React
import { Text, View } from 'react-native'; // Text was missing in the import
import { useAppTheme } from '../../contexts/ThemeContext';
import ThemedClickableCardButton from '../../themedComponents/ThemedClickableCardButton';
import { AdminSettingsSubComponentProps } from './SettingsScreen';

export default function AdminSettings({
  navigation,
}: AdminSettingsSubComponentProps) {
  const theme = useAppTheme();
  return (
    <View>
      <Text>Admin-settings</Text>
      <ThemedClickableCardButton
        hideTitle
        title="ProfileSettings"
        content="Profile Settings"
        iconName="user-cog"
        iconColor={theme.colors.text}
        onPress={() => navigation.navigate('Statistics', { period: 'today' })}
      />
      <ThemedClickableCardButton
        hideTitle
        title="HandleUsers"
        content="Handle Users"
        iconName="user-edit"
        iconColor={theme.colors.text}
        onPress={() => navigation.navigate('Statistics', { period: 'today' })}
      />
      <ThemedClickableCardButton
        hideTitle
        title="ShowAccessCode"
        content="Show Access Code"
        iconName="key"
        iconColor={theme.colors.text}
        onPress={() => navigation.navigate('Statistics', { period: 'today' })}
      />
      <ThemedClickableCardButton
        hideTitle
        title="ShowQRCode"
        content="Show QR Code"
        iconName="qrcode"
        iconColor={theme.colors.text}
        onPress={() => navigation.navigate('Statistics', { period: 'today' })}
      />
      <ThemedClickableCardButton
        hideTitle
        title="EditHousehold"
        content="Edit Household"
        iconName="home-edit"
        iconColor={theme.colors.text}
        onPress={() => navigation.navigate('Statistics', { period: 'today' })}
      />
    </View>
  );
}
