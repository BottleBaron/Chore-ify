import { mockHouseholds, mockUsers } from '@src/assets/Data/MockData';
import { useAppTheme } from '@src/contexts/ThemeContext';
import { RootStackScreenProps } from '@src/navigators/types';
import { Household } from '@src/redux/slices/householdSlice';
import ThemedClickableCardButtonWithAvatars from '@src/themedComponents/ThemedClickableCardButtonWithAvatars';
// import ThemedClickableCardButton from '@src/themedComponents/ThemedClickableCardButton';
// import { mockHouseholds } from 'assets/Data/MockData';
import React, { useEffect, useState } from 'react';
import { ScrollView, StatusBar, StyleSheet } from 'react-native';

type Props = RootStackScreenProps<'HouseHoldSelectorScreen'>;

interface HouseholdData extends Household {
  avatars?: string[];
}

export default function UserHasHouseHoldScreenContent({ navigation }: Props) {
  const theme = useAppTheme();

  const [householdsData, setHouseholdsData] = useState<HouseholdData[]>([]);

  useEffect(() => {
    const newHouseholdsData: HouseholdData[] = mockHouseholds.map(
      (household) => {
        const householdUsers = mockUsers.filter(
          (user) => user.houseHoldId === parseInt(household.id, 10),
        );
        console.log('householdUsers for id', household.id, ':', householdUsers); // Debugging line
        const avatars = householdUsers.map((user) => user.avatar);
        console.log('avatars:', avatars); // Debugging line
        return { ...household, avatars };
      },
    );
    console.log('newHouseholdsData:', newHouseholdsData); // Debugging line
    setHouseholdsData(newHouseholdsData);
  }, []);

  return (
    <ScrollView style={styles.scrollView}>
      {householdsData.map((household) => (
        <ThemedClickableCardButtonWithAvatars
          hideTitle
          key={household.id}
          title={household.name}
          content={household.name} // Add your own content
          iconName="" // Add an appropriate icon name
          onPress={() => navigation.navigate('ChoreList')}
          width={280} // Custom width, you can change this
          iconColor={theme.colors.primary} // Custom icon color, you can change this'
          avatarList={household.avatars} // Add your own avatar list
          // Add any other props you might need
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
});
