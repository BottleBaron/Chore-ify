import { useAppTheme } from '@src/contexts/ThemeContext';
import ThemedClickableCardButton from '@src/themedComponents/ThemedClickableCardButton';
import React from 'react'; // Don't forget to import React
import { View } from 'react-native'; // Text was missing in the import
import { AdminSettingsSubComponentProps } from './SettingsScreen';

export default function AdminSettings({
  navigation,
}: AdminSettingsSubComponentProps) {
  const theme = useAppTheme();
  return (
    <View>
      {/* <Text>Admin-settings</Text> */}
      <ThemedClickableCardButton
        hideTitle
        title="ProfileSettings"
        content="Profile Settings"
        iconName="user"
        leftIconColor={theme.colors.buttonIcon}
        rightIconColor={theme.colors.buttonIcon}
        onPress={() => navigation.navigate('ChoreList', { period: 'today' })}
      />
      <ThemedClickableCardButton
        hideTitle
        title="HandleUsers"
        content="Handle Users"
        iconName="edit"
        leftIconColor={theme.colors.buttonIcon}
        rightIconColor={theme.colors.buttonIcon}
        onPress={() => navigation.navigate('ChoreList', { period: 'today' })}
      />
      <ThemedClickableCardButton
        hideTitle
        title="ShowAccessCode"
        content="Show Access Code"
        iconName="key"
        leftIconColor={theme.colors.buttonIcon}
        rightIconColor={theme.colors.buttonIcon}
        onPress={() => navigation.navigate('ChoreList', { period: 'today' })}
      />
      <ThemedClickableCardButton
        hideTitle
        title="ShowQRCode"
        content="Show QR Code"
        iconName="qrcode"
        leftIconColor={theme.colors.buttonIcon}
        rightIconColor={theme.colors.buttonIcon}
        onPress={() => navigation.navigate('ChoreList', { period: 'today' })}
      />
      <ThemedClickableCardButton
        hideTitle
        title="EditHousehold"
        content="Edit Household"
        iconName="edit"
        leftIconColor={theme.colors.buttonIcon}
        rightIconColor={theme.colors.buttonIcon}
        onPress={() => navigation.navigate('ChoreList', { period: 'today' })}
      />
    </View>
  );
}
