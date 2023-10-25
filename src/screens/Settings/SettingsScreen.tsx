import React from 'react';
import { Button, ScrollView, Text, View } from 'react-native';
import { useAppTheme } from '../../contexts/ThemeContext';
import { RootStackScreenProps } from '../../navigators/types';
import ThemedClickableCardButton from '../../themedComponents/ThemedClickableCardButton';

type Props = RootStackScreenProps<'Settings'>;

type AdminSettingsSubComponentProps = {
  navigation: Props['navigation'];
};

type UserSettingsSubComponentProps = {
  navigation: Props['navigation'];
};

function AdminSettings({ navigation }: AdminSettingsSubComponentProps) {
  const theme = useAppTheme();
  return (
    <View>
      <Text>Admin-settings</Text>
      <Button title="Change name" onPress={() => {}} />
      <Button title="Change email" onPress={() => {}} />
      <ThemedClickableCardButton
        hideTitle // or hideTitle={false}
        title="Profile"
        content="Profile"
        iconName="user"
        iconColor={theme.colors.text}
        onPress={() => navigation.navigate('Statistics', { period: 'today' })}
      />
      <ThemedClickableCardButton
        hideTitle // or hideTitle={false}
        title="ChangeName"
        content="Change Name"
        iconName="cog"
        iconColor={theme.colors.text}
        onPress={() => navigation.navigate('Statistics', { period: 'today' })}
      />
      <ThemedClickableCardButton
        hideTitle // or hideTitle={false}
        title="ChangeName"
        content="Change Name"
        iconName="cog"
        iconColor={theme.colors.text}
        onPress={() => navigation.navigate('Statistics', { period: 'today' })}
      />
      <ThemedClickableCardButton
        hideTitle // or hideTitle={false}
        title="ChangeName"
        content="Change Name"
        iconName="cog"
        iconColor={theme.colors.text}
        onPress={() => navigation.navigate('Statistics', { period: 'today' })}
      />
      <ThemedClickableCardButton
        hideTitle // or hideTitle={false}
        title="ChangeName"
        content="Change Name"
        iconName="cog"
        iconColor={theme.colors.text}
        onPress={() => navigation.navigate('Statistics', { period: 'today' })}
      />
    </View>
  );
}

function UserSettings({ navigation }: UserSettingsSubComponentProps) {
  const theme = useAppTheme();
  return (
    <View>
      <Text>User-settings</Text>
      <Button title="Change name" onPress={() => {}} />
      <Button title="Change email" onPress={() => {}} />
      <ThemedClickableCardButton
        hideTitle // or hideTitle={false}
        title="Profile"
        content="Profile"
        iconName="user"
        iconColor={theme.colors.text}
        onPress={() => navigation.navigate('Statistics', { period: 'today' })}
      />
      <ThemedClickableCardButton
        hideTitle // or hideTitle={false}
        title="ChangeName"
        content="Change Name"
        iconName="cog"
        iconColor={theme.colors.text}
        onPress={() => navigation.navigate('Statistics', { period: 'today' })}
      />
      <ThemedClickableCardButton
        hideTitle // or hideTitle={false}
        title="ChangeName"
        content="Change Name"
        iconName="cog"
        iconColor={theme.colors.text}
        onPress={() => navigation.navigate('Statistics', { period: 'today' })}
      />
      <ThemedClickableCardButton
        hideTitle // or hideTitle={false}
        title="ChangeName"
        content="Change Name"
        iconName="cog"
        iconColor={theme.colors.text}
        onPress={() => navigation.navigate('Statistics', { period: 'today' })}
      />
      <ThemedClickableCardButton
        hideTitle // or hideTitle={false}
        title="ChangeName"
        content="Change Name"
        iconName="cog"
        iconColor={theme.colors.text}
        onPress={() => navigation.navigate('Statistics', { period: 'today' })}
      />
      <ThemedClickableCardButton
        hideTitle // or hideTitle={false}
        title="ChangeName"
        content="Change Name"
        iconName="cog"
        iconColor={theme.colors.text}
        onPress={() => navigation.navigate('Statistics', { period: 'today' })}
      />
    </View>
  );
}

export default function SettingsScreen({ navigation }: Props) {
  const userIsAdmin = false; // You can toggle this for testing
  return (
    <ScrollView>
      {!userIsAdmin ? (
        <UserSettings navigation={navigation} />
      ) : (
        <AdminSettings navigation={navigation} />
      )}
    </ScrollView>
  );
}

// Dependant of whether the user is an admin within this household or not
// If admin, show the following:
// - Profile-settings
//   - Screen or modal with this content:
//    - Change name
//    - Change email
//    - Change password
//    - Change avatar
//    - Delete account(?) - opens modal with password input = turns other user into admin aswell?
// - HandleUsers - would show and contain the following:
//   - Screen or modal with this content:
//      - Listed users with edit and delete icons
//      - Edit contains this:
//      - Pause
//      - Delete
//      - Make admin
// - Show the households acccess code - button - same as below
// - Show the households QR-code - button - same as above
// - Förfrågningar - button - opens modal with requests to the household
// EditHousehold - would show and contain the following:
// - Screen or modal with this content:
// - Change household name
// - Change household password
// - Delete household
// If not admin, show the following:
// - Profile-settings
//   - Screen or modal with this content:
//    - Change name
//    - Change email
//    - Change password
//    - Change avatar
//    - Delete account(?) - opens modal with password input
// Leave household - button - opens modal with password input
