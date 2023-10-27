import { navigateToRoute } from '@src/redux/slices/appbarNavigationSlice';
import React from 'react';
import { Appbar } from 'react-native-paper';
import { useDispatch } from 'react-redux';

interface AppBarProps {
  title: string;
  actions: Array<{
    icon: string;
    route: string;
    id?: string; // Optional unique identifier
  }>;
}

export default function StatisticsAppBar({ title, actions }: AppBarProps) {
  const dispatch = useDispatch();

  const handleIconPress = (route: string) => {
    dispatch(navigateToRoute(route));
  };

  return (
    <Appbar.Header>
      <Appbar.Content title={title} />
      {actions.map((actionObj) => (
        <Appbar.Action
          key={actionObj.id || actionObj.route} // Use unique identifier if available
          icon={actionObj.icon}
          onPress={() => handleIconPress(actionObj.route)}
        />
      ))}
    </Appbar.Header>
  );
}
