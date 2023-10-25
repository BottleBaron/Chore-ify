import React from 'react';
import { Button, Text, View } from 'react-native';
import { RootStackScreenProps } from '../../navigators/types';

type Props = RootStackScreenProps<'Settings'>;

export default function SettingsScreen({ navigation }: Props) {
  const userIsAdmin = true; // You can toggle this for testing

  const AdminSettings = () => (
    <View>
      <Text>Profile-settings</Text>
      <Button title="Change name" onPress={() => {}} />
      <Button title="Change email" onPress={() => {}} />
    </View>
  );

  const UserSettings = () => (
    <View>
      <Text>Profile-settings</Text>
      <Button title="Change name" onPress={() => {}} />
      <Button title="Change email" onPress={() => {}} />
      {/* ...other user options */}
    </View>
  );

  return (
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
}
