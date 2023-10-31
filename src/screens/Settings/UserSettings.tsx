// UserSettings.tsx
import { useAppTheme } from '@src/contexts/ThemeContext';
import ThemedClickableCardButton from '@src/themedComponents/ThemedClickableCardButton';
import React from 'react'; // Don't forget to import React
import { View } from 'react-native'; // Text was missing in the import
import { UserSettingsSubComponentProps } from './SettingsScreen'; // placed here for now, might be typefile later

// Export the function so it can be imported elsewhere
export default function UserSettings({
  navigation,
}: UserSettingsSubComponentProps) {
  const theme = useAppTheme();
  return (
    <View>
      {/* <Text>User-settings</Text> */}
      <ThemedClickableCardButton
        hideTitle
        title="ProfileSettings"
        content="Profile Settings"
        iconName="user"
        iconColor={theme.colors.text}
        onPress={() => navigation.navigate('ChoreList', { period: 'today' })}
      />
      <ThemedClickableCardButton
        hideTitle
        title="LeaveHousehold"
        content="Leave Household"
        iconName="times-circle"
        iconColor={theme.colors.text}
        onPress={() => navigation.navigate('ChoreList', { period: 'today' })}
      />
      <ThemedClickableCardButton
        hideTitle
        title="SignOut"
        content="Sign Out"
        iconName="sign-out"
        rotateIcon={180}
        iconColor={theme.colors.text}
        onPress={() => navigation.navigate('ChoreList', { period: 'today' })}
      />
    </View>
  );
}
