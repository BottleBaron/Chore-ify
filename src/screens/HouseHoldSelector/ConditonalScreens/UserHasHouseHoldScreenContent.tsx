import { useAppTheme } from '@src/contexts/ThemeContext';
import { RootStackScreenProps } from '@src/navigators/types';
import {
  Household,
  fetchHouseholdsAndUsers,
} from '@src/redux/slices/householdSlice';
import ThemedClickableCardButtonWithAvatars from '@src/themedComponents/ThemedClickableCardButtonWithAvatars';
import ThemedClickableCardButton from '@src/themedComponents/ThemedClickableCardButton';
// import ThemedClickableCardButton from '@src/themedComponents/ThemedClickableCardButton';
// import { mockHouseholds } from 'assets/Data/MockData';
import React, { useEffect, useState, useCallback } from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Divider } from 'react-native-paper';
import { useFocusEffect } from '@react-navigation/core';

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

  const households = useAppSelector((state) => state.household.households);
  const usersByHouseholds = useAppSelector((state) => state.user.allUsers);
  const [householdsData, setHouseholdsData] = useState<HouseholdData[]>([]);

  useEffect(() => {
    const newHouseholdsData: HouseholdData[] = households.map((household) => {
      const householdUsers = usersByHouseholds.filter(
        (user) => user.householdId === String(household.id),
      );
      console.log('householdUsers for id', household.id, ':', householdUsers); // Debugging line
      const avatars = householdUsers.map((user) => user.avatar);
      console.log('avatars:', avatars); // Debugging line
      return { ...household, avatars };
    });
    console.log('newHouseholdsData:', newHouseholdsData); // Debugging line
    setHouseholdsData(newHouseholdsData);
  }, [households, usersByHouseholds]);

  return (
    <View style={styles.rootContainer}>
      <View
        style={[styles.textContainer, { backgroundColor: theme.colors.card }]}
      >
        <Text style={[styles.text, { color: theme.colors.text }]}>
          Dina hushåll
        </Text>
        <Divider
          style={[styles.divider, { backgroundColor: theme.colors.divider }]}
        />
      </View>
      <ScrollView
        style={[
          styles.scrollView /* ,
          { backgroundColor: theme.colors.background } */,
        ]}
      >
        {householdsData.map((mappedHouseholdsData) => (
          <ThemedClickableCardButtonWithAvatars
            hideTitle
            key={mappedHouseholdsData.id}
            title={mappedHouseholdsData.name}
            content={mappedHouseholdsData.name} // Add your own content
            iconName="" // Add an appropriate icon name
            onPress={() =>
              navigation.navigate('ChoreList', {
                householdId: mappedHouseholdsData.id,
                userId: 'hej',
              })
            }
            width={280} // Custom width, you can change this
            iconColor={theme.colors.primary} // Custom icon color, you can change this'
            avatarList={mappedHouseholdsData.avatars} // Add your own avatar list
            // Add any other props you might need
          />
        ))}
      </ScrollView>
      <View style={styles.bottomButtons}>
        <ThemedClickableCardButton
          hideTitle // or hideTitle={false}
          title="SKAPA HUSHÅLL"
          content="SKAPA HUSHÅLL"
          iconName="plus-circle"
          onPress={() => navigation.navigate('CreateHouseHold')}
        />
        <ThemedClickableCardButton
          hideTitle // or hideTitle={false}
          title="GÅ MED I HUSHÅLL"
          content="GÅ MED I HUSHÅLL"
          iconName="plus-circle"
          onPress={() => navigation.navigate('JoinHouseHold')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 15,
  },
  divider: {
    width: '100%',
    height: 2,
  },
  scrollView: {
    flex: 1,
    marginHorizontal: 35,
    marginTop: StatusBar.currentHeight,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  bottomButtons: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
});
