import { useAppTheme } from '@src/contexts/ThemeContext';
import ThemedClickableCardButton from '@src/themedComponents/ThemedClickableCardButton';
import React from 'react'; // Don't forget to import React
import { View, StyleSheet } from 'react-native'; // Text was missing in the import
import { Snackbar, Text, TextInput } from 'react-native-paper';
import { useAppDispatch, useAppSelector } from '@src/redux/store';
import { AdminSettingsSubComponentProps } from './SettingsScreen';

function ChangeHouseHoldName() {
  const theme = useAppTheme();
  return (
    <View>
      <TextInput />
    </View>
  );
}

export default function AdminSettings({
  navigation,
}: AdminSettingsSubComponentProps) {
  const theme = useAppTheme();

  const activeHouseholdId = useAppSelector(
    (state) => state.household.activeHouseholdId,
  );
  // State for showing the dialog
  const [visible, setVisible] = React.useState(false);
  const [householdNameChangeVisible, setHouseholdNameChangeVisible] =
    React.useState(false);
  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);
  const onToogleChangeName = () =>
    setHouseholdNameChangeVisible(!householdNameChangeVisible);
  return (
    <View>
      <ThemedClickableCardButton
        hideTitle
        title="ShowAccessCode"
        content="Visa hushållskod"
        iconName="key"
        leftIconColor={theme.colors.buttonIcon}
        rightIconColor={theme.colors.buttonIcon}
        onPress={onToggleSnackBar}
        showRightIcon={false}
      />
      <ThemedClickableCardButton
        hideTitle
        title="EditHousehold"
        content="Ändra hushållsnamn"
        iconName="edit"
        leftIconColor={theme.colors.buttonIcon}
        rightIconColor={theme.colors.buttonIcon}
        onPress={onToogleChangeName}
        showRightIcon={false}
      />

      <Snackbar
        // icon="arrow-left"
        visible={visible}
        elevation={5}
        onDismiss={onDismissSnackBar}
        style={styles.snackBarStyle}
        wrapperStyle={[styles.wrapperStyle]}
      >
        <Text
          style={[
            {
              textAlign: 'center',
              fontSize: 14,
              fontWeight: 'bold',
              letterSpacing: 4,
            },
          ]}
        >
          Detta är hushållskoden: {activeHouseholdId.slice(-4)}{' '}
        </Text>
      </Snackbar>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {},
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  snacBarContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
    // borderColor: 'red',
  },
  snackBarStyle: {
    flexBasis: 'auto',
    alignItems: 'flex-end',
    // borderWidth: 1,
    // borderColor: 'teal',
  },
  wrapperStyle: {
    // backgroundColor: 'white',
    // borderWidth: 1,
    // borderColor: 'lime',
    // textAlign: 'center',
  },
});
