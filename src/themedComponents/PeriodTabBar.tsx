import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';
import { useAppTheme } from '@src/contexts/ThemeContext';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IconButton } from 'react-native-paper';

function getDisplayLabel(tabName: string): string {
  const mapping: { [key: string]: string } = {
    Today: 'Idag',
    CurrentWeek: 'Denna vecka',
    LastWeek: 'Förra veckan',
    CurrentMonth: 'Denna månad',
    LastMonth: 'Förra månaden',
    CurrentYear: 'Detta år',
    LastYear: 'Förra året',
  };
  return mapping[tabName] || tabName; // fallback to tabName if mapping doesn't exist
}

const handleHomeIconPress = () => {
  // Navigate to home or perform some action
};

const handleCogIconPress = () => {
  // Navigate to settings or perform some action
};

const currentHousehold = 'Household Name'; // Replace with your actual household name

function PeriodTabBar({
  state,
  descriptors,
  navigation,
}: MaterialTopTabBarProps) {
  // const dispatch = useDispatch();
  const theme = useAppTheme();

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
    <View style={styles.rootContainer}>
      <View style={styles.topBarContainer}>
        <IconButton
          icon="home" // replace with your actual icon name for home
          onPress={handleHomeIconPress}
          color={theme.colors.button}
        />
        <Text>{currentHousehold}</Text>
        <IconButton
          icon="cog" // replace with your actual icon name for settings
          onPress={handleCogIconPress}
          color={theme.colors.button}
        />
      </View>

      <View style={styles.tabBarContainer}>
        <IconButton
          icon="arrow-left" // replace with your actual icon name for left arrow
          onPress={goPrevious}
          color={theme.colors.button}
        />
        <View style={styles.textContainer}>
          <Text>{currentLabel}</Text>
        </View>
        <IconButton
          icon="arrow-right" // replace with your actual icon name for right arrow
          onPress={goNext}
          color={theme.colors.button}
        />
      </View>
    </View>
  );
}

export default PeriodTabBar;

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: 'white',
  },
  topBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

// import { navigateToRoute } from '@src/redux/slices/appbarNavigationSlice';
// import React from 'react';
// import { Appbar } from 'react-native-paper';
// import { useDispatch } from 'react-redux';

// interface AppBarProps {
//   title: string;
//   actions: Array<{
//     icon: string;
//     route: string;
//     id?: string; // Optional unique identifier
//   }>;
// }

// export default function StatisticsAppBar({ title, actions }: AppBarProps) {
//   const dispatch = useDispatch();

//   const handleIconPress = (route: string) => {
//     dispatch(navigateToRoute(route));
//   };

//   return (
//     <Appbar.Header>
//       <Appbar.Content title={title} />
//       {actions.map((actionObj) => (
//         <Appbar.Action
//           key={actionObj.id || actionObj.route} // Use unique identifier if available
//           icon={actionObj.icon}
//           onPress={() => handleIconPress(actionObj.route)}
//         />
//       ))}
//     </Appbar.Header>
//   );
// }
