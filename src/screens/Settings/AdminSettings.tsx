import { useAppTheme } from '@src/contexts/ThemeContext';
import ThemedClickableCardButton from '@src/themedComponents/ThemedClickableCardButton';
import React from 'react';
import { View, StyleSheet } from 'react-native'; // Text was missing in the import
import { TextInput, Text } from 'react-native-paper';
import { useAppDispatch, useAppSelector } from '@src/redux/store';
import { updateHousehold, Household } from '@src/redux/slices/householdSlice';

import { AdminSettingsSubComponentProps } from './SettingsScreen';

function ChangeHouseHoldName() {
  const householdId = useAppSelector(
    (state) => state.household.activeHouseholdId,
  );
  const household = useAppSelector((state) =>
    state.household.households.find(
      (household) => household.id === householdId,
    ),
  );
  const dispatch = useAppDispatch();
  const [text, setText] = React.useState(household?.name || '');
  const [nameChanged, setNameChanged] = React.useState(false);
  const theme = useAppTheme();
  const changeName = async () => {
    if (household) {
      const modifiedHousehold: Household = { ...household, name: text };
      console.log(modifiedHousehold);
      const result = await dispatch(updateHousehold(modifiedHousehold));
      if (updateHousehold.fulfilled.match(result)) {
        // Om ändringen lyckades
        setNameChanged(true);
      } else if (updateHousehold.rejected.match(result)) {
        // Om det uppstod ett fel
        console.log('Det uppstod ett fel:', result.error);
      }
    }
  };

  return (
    <View>
      {nameChanged ? (
        <Text>Namnändringen lyckades</Text>
      ) : (
        <>
          <TextInput
            label="New name"
            value={text}
            onChangeText={(text) => setText(text)}
          />
          <ThemedClickableCardButton
            hideTitle
            title="SaveHouseholdname"
            content="Ändra namn"
            iconName="save"
            leftIconColor={theme.colors.buttonIcon}
            rightIconColor={theme.colors.buttonIcon}
            onPress={changeName}
            showRightIcon={false}
          />
        </>
      )}
    </View>
  );
}

export default function AdminSettings({
  navigation,
}: AdminSettingsSubComponentProps) {
  const theme = useAppTheme();

  const householdCode = useAppSelector(
    (state) => state.household.activeHouseholdId,
  ).slice(-4);
  // State for showing the dialog
  const [buttonText, setButtonText] = React.useState('Visa hushållskod');
  const [showCode, setShowCode] = React.useState(false);
  const [showChangeForm, setShowChangeForm] = React.useState(false);

  const toogleCode = () => {
    setShowCode(!showCode);
    if (showCode === true) {
      setButtonText(householdCode);
    } else {
      setButtonText('Visa hushållskod');
    }
  };

  const toogleChangeForm = () => setShowChangeForm(!showChangeForm);

  return (
    <View>
      <ThemedClickableCardButton
        hideTitle
        title="ShowAccessCode"
        content={buttonText}
        iconName="key"
        leftIconColor={theme.colors.buttonIcon}
        rightIconColor={theme.colors.buttonIcon}
        onPress={toogleCode}
        showRightIcon={false}
      />
      <ThemedClickableCardButton
        hideTitle
        title="EditHousehold"
        content="Ändra hushållsnamn"
        iconName="edit"
        leftIconColor={theme.colors.buttonIcon}
        rightIconColor={theme.colors.buttonIcon}
        onPress={toogleChangeForm}
        showRightIcon={false}
      />

      {showChangeForm && <ChangeHouseHoldName />}
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
