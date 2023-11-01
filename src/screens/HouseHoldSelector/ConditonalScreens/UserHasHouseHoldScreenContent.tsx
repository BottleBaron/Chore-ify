import { useAppTheme } from '@src/contexts/ThemeContext';
import { RootStackScreenProps } from '@src/navigators/types';
import {
  Household,
  fetchHouseholdsAndUsers,
  setActiveHouseholdId,
} from '@src/redux/slices/householdSlice';
import ThemedClickableCardButton from '@src/themedComponents/ThemedClickableCardButton';
import ThemedClickableCardButtonWithAvatars from '@src/themedComponents/ThemedClickableCardButtonWithAvatars';
// import ThemedClickableCardButton from '@src/themedComponents/ThemedClickableCardButton';
// import { mockHouseholds } from 'assets/Data/MockData';
import { useFocusEffect } from '@react-navigation/core';
import React, { useCallback, useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Divider } from 'react-native-paper';

import { useAppDispatch, useAppSelector } from '@src/redux/store';

type Props = RootStackScreenProps<'HouseHoldSelectorScreen'>;

interface HouseholdData extends Household {
  avatars?: string[];
}

export default function UserHasHouseHoldScreenContent({ navigation }: Props) {
  const theme = useAppTheme();
  const dispatch = useAppDispatch();

  useFocusEffect(
    useCallback(() => {
      dispatch(fetchHouseholdsAndUsers());
    }, []),
  );
  const initiateHouseholdNavigation = (householdId: string) => {
    dispatch(setActiveHouseholdId(householdId));

    navigation.navigate('AuthTab', {
      householdId,
      userId: 'hej',
    });
  };
  const households = useAppSelector((state) => state.household.households);
  const usersByHouseholds = useAppSelector((state) => state.user.allUsers);
  const [householdsData, setHouseholdsData] = useState<HouseholdData[]>([]);

  useEffect(() => {
    const newHouseholdsData: HouseholdData[] = households.map((household) => {
      const householdUsers = usersByHouseholds.filter(
        (user) => user.householdId === String(household.id),
      );
      // console.log('householdUsers for id', household.id, ':', householdUsers); // Debugging line
      const avatars = householdUsers.map((user) => user.avatar);
      // console.log('avatars:', avatars); // Debugging line
      return { ...household, avatars };
    });
    // console.log('newHouseholdsData:', newHouseholdsData); // Debugging line
    setHouseholdsData(newHouseholdsData);
  }, [households, usersByHouseholds]);

  return (
    <SafeAreaView style={[{ flex: 1 }]}>
      <View
        style={[
          styles.rootContainer,
          { backgroundColor: theme.colors.divider },
        ]}
      >
        <View
          style={[
            styles.topContainer,
            { backgroundColor: theme.colors.background, zIndex: 2 },
          ]}
        >
          <Text style={[styles.text, { color: theme.colors.text }]}>
            DINA HUSHÅLL
          </Text>
          <Divider
            style={[styles.divider, { backgroundColor: theme.colors.divider }]}
          />
        </View>
        <ScrollView
          contentContainerStyle={[
            styles.scrollView,
            {
              paddingTop: 50,
              paddingBottom: 150,
              backgroundColor: theme.colors.divider,
            },
          ]}
        >
          {householdsData.map(
            (
              mappedHouseholdsData, // Debugging line
            ) => (
              <View style={{ marginBottom: 10 }}>
                <ThemedClickableCardButtonWithAvatars
                  hideTitle
                  key={mappedHouseholdsData.id}
                  title={mappedHouseholdsData.name}
                  content={mappedHouseholdsData.name} // Add your own content
                  onPress={() =>
                    initiateHouseholdNavigation(mappedHouseholdsData.id)
                  }
                  width={300} // Custom width, you can change this manually
                  height={100} // Custom height, you can change this manually
                  avatarList={mappedHouseholdsData.avatars} // Add your own avatar list
                />
              </View>
            ),
          )}
        </ScrollView>
        <View
          style={[
            styles.buttonContainer,
            { backgroundColor: theme.colors.transparency, zIndex: 2 },
          ]}
        >
          <ThemedClickableCardButton
            hideTitle // or hideTitle={false}
            title="SKAPA HUSHÅLL"
            content="SKAPA HUSHÅLL"
            iconName="plus-circle"
            onPress={() => navigation.navigate('CreateHouseHold')}
            width={325}
            // leftIconColor={theme.colors.primary}
            // rightIconColor={theme.colors.text}
            // showLeftIcon={false} // New prop, default to true
            showRightIcon={false} // New prop, default to true
          />
          <ThemedClickableCardButton
            hideTitle
            title="GÅ MED I HUSHÅLL"
            content="GÅ MED I HUSHÅLL"
            iconName="plus-circle"
            onPress={() => navigation.navigate('JoinHouseHold')}
            width={325}
            // leftIconColor={theme.colors.primary}
            // rightIconColor={theme.colors.text}
            // showLeftIcon={false} // New prop, default to true
            showRightIcon={false} // New prop, default to true
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flexGrow: 1,
  },
  topContainer: {
    position: 'absolute', // Added
    top: 0, // Added
    left: 0, // Added
    right: 0, // Added
    // borderWidth: 2,
    // borderColor: 'red',
  },
  text: {
    // flexWrap: 'wrap',
    fontSize: 28,
    // fontWeight: 'bold',
    textAlign: 'center',
    // borderWidth: 2,
    // borderColor: 'yellow',
  },
  divider: {
    flexWrap: 'wrap',
    width: '100%',
  },
  scrollView: {
    flexGrow: 1,
    alignItems: 'center',
    zIndex: 1, // Added
  },
  buttonContainer: {
    position: 'absolute', // Added
    bottom: 10, // Added
    left: 0, // Added
    right: 0, // Added
    width: '100%',
    alignItems: 'center',
    // justifyContent: 'center',
    // flexDirection: 'column',
    // alignItems: 'center',
    // zIndex: 10,
  },
});
