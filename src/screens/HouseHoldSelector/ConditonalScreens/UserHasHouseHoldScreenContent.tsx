import { mockHouseholds, mockUsers } from '@src/assets/Data/MockData';
import { useAppTheme } from '@src/contexts/ThemeContext';
import { RootStackScreenProps } from '@src/navigators/types';
import { Household } from '@src/redux/slices/householdSlice';
import ThemedClickableCardButtonWithAvatars from '@src/themedComponents/ThemedClickableCardButtonWithAvatars';
// import ThemedClickableCardButton from '@src/themedComponents/ThemedClickableCardButton';
// import { mockHouseholds } from 'assets/Data/MockData';
import React, { useEffect, useState } from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Divider } from 'react-native-paper';

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
});
