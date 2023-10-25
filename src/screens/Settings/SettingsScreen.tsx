import React from 'react';
import { ScrollView } from 'react-native';
import { RootStackScreenProps } from '../../navigators/types';
import AdminSettings from './AdminSettings';
import UserSettings from './UserSettings';

type Props = RootStackScreenProps<'Settings'>;

export type AdminSettingsSubComponentProps = {
  navigation: Props['navigation'];
};

export type UserSettingsSubComponentProps = {
  navigation: Props['navigation'];
};

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
