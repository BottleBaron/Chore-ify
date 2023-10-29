import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';
import { useAppTheme } from '@src/contexts/ThemeContext';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { IconButton } from 'react-native-paper';

// type Props = RootStackScreenProps<'ChoreList'>;

function getDisplayLabel(tabName: string): string {
  const mapping: { [key: string]: string } = {
    ChoreList: 'Idag',
    CurrentWeek: 'Denna vecka',
    LastWeek: 'Förra veckan',
    CurrentMonth: 'Denna månad',
    LastMonth: 'Förra månaden',
    CurrentYear: 'Detta år',
    LastYear: 'Förra året',
  };
  return mapping[tabName] || tabName; // fallback to tabName if mapping doesn't exist
}

const currentHousehold = 'Household Name'; // Replace with your actual household name

function CustomTabBar({
  state,
  descriptors,
  navigation,
}: MaterialTopTabBarProps) {
  // const dispatch = useDispatch();
  const theme = useAppTheme();

  const handleHomeIconPress = () => {
    // Navigate back to the "HouseHoldSelectorScreen" in the RootStackNavigator
    navigation.navigate('HouseHoldSelectorScreen');
  };

  const handleCogIconPress = () => {
    // Navigate to the "Settings" screen in the RootStackNavigator
    navigation.navigate('Settings');
  };

  const goPrevious = () => {
    if (state.index > 0) {
      const previousRouteName = state.routes[state.index - 1].name;
      navigation.navigate(previousRouteName);
    }
  };

  const goNext = () => {
    if (state.index < state.routes.length - 1) {
      const nextRouteName = state.routes[state.index + 1].name;
      navigation.navigate(nextRouteName);
    }
  };

  const currentLabel = getDisplayLabel(state.routes[state.index].name);

  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.rootContainer}>
        <View style={styles.topBarContainer}>
          <IconButton
            icon="home" // replace with your actual icon name for home
            onPress={handleHomeIconPress}
            // color={theme.colors.button}
            iconColor={theme.colors.button}
          />
          <Text style={(styles.textStyle, { color: theme.colors.text })}>
            {currentHousehold}
          </Text>
          <IconButton
            icon="cog" // replace with your actual icon name for settings
            onPress={handleCogIconPress}
            // color={theme.colors.button}
            iconColor={theme.colors.button}
          />
        </View>

        <View style={styles.tabBarContainer}>
          <IconButton
            icon="arrow-left" // replace with your actual icon name for left arrow
            onPress={goPrevious}
            // color={theme.colors.button}
            iconColor={theme.colors.button}
          />
          <View style={styles.textContainer}>
            <Text style={(styles.textStyle, { color: theme.colors.text })}>
              {currentLabel}
            </Text>
          </View>
          <IconButton
            icon="arrow-right" // replace with your actual icon name for right arrow
            onPress={goNext}
            // color={theme.colors.button}
            iconColor={theme.colors.button}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default CustomTabBar;

const styles = StyleSheet.create({
  rootContainer: {
    // backgroundColor: 'white',
  },
  topBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'white',
  },
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'white',
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 14,
    margin: 5,
    textAlign: 'center',
  },
});
