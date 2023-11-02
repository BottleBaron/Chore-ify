import { useAppTheme } from '@src/contexts/ThemeContext';
import { ChoreStackScreenProps } from '@src/navigators/types';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ThemedClickableCardButton from '@src/themedComponents/ThemedClickableCardButton';
import { useAppSelector } from '@src/redux/store';
import AdminSettings from './AdminSettings';
import UserSettings from './UserSettings';

type Props = ChoreStackScreenProps<'Settings'>;

export type AdminSettingsSubComponentProps = {
  navigation: Props['navigation'];
};

export type UserSettingsSubComponentProps = {
  navigation: Props['navigation'];
};

export default function SettingsScreen({ navigation }: Props) {
  const theme = useAppTheme();
  const activeHouseholdId = useAppSelector(
    (state) => state.household.activeHouseholdId,
  );
  const currentUser = useAppSelector((state) =>
    state.user.myUsers.find((u) => u.householdId === activeHouseholdId),
  );

  if (currentUser === undefined) {
    console.error('User could not be found on choreListScreens rendering');
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <View style={styles.textContainer}>
          <Text style={[styles.sectionHeader, { color: theme.colors.text }]}>
            {currentUser?.isAdmin ? 'Admin Settings' : 'User Settings'}
          </Text>
        </View>
        {!currentUser?.isAdmin ? <UserSettings /> : <AdminSettings />}
        <ThemedClickableCardButton
          hideTitle
          title="EditHousehold"
          content="Gå tillbaka"
          iconName="arrow-left"
          leftIconColor={theme.colors.buttonIcon}
          rightIconColor={theme.colors.buttonIcon}
          onPress={() => navigation.navigate('ChoreList', { period: 'today' })}
          showRightIcon={false}
        />
      </View>
    </ScrollView>
  );
}
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  sectionHeader: {
    fontSize: 28,
    fontWeight: 'bold',
  },
});

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
