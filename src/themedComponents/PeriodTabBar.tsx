import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';
import { navigateToRoute } from '@src/redux/slices/appbarNavigationSlice';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { IconButton, Text } from 'react-native-paper';
import { useDispatch } from 'react-redux';

function PeriodTabBar({
  state,
  descriptors,
  navigation,
}: MaterialTopTabBarProps) {
  const dispatch = useDispatch();

  const handleIconPress = (routeName: string) => {
    dispatch(navigateToRoute(routeName));
  };

  return (
    <View style={styles.tabBarContainer}>
      <IconButton icon="arrow-left" onPress={() => handleIconPress('prev')} />
      <Text style={styles.title}>Statistics</Text>
      <IconButton icon="arrow-right" onPress={() => handleIconPress('next')} />
    </View>
  );
}

export default PeriodTabBar;

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
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
