/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-cycle */
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button, TouchableRipple, Divider } from 'react-native-paper';
import { useAppTheme } from '../../contexts/ThemeContext';
import { RootStackScreenProps } from '../../navigators/types';
import { mockHouseholds } from '../../../assets/Data/MockData';

type Props = RootStackScreenProps<'HouseholdDashboard'>;

export default function HouseHoldDashboardScreen({ navigation }: Props) {
  const theme = useAppTheme();

  return (

    <View style={styles.container}>
      <Text>Dina Hushåll</Text>
      <Button
        icon="home"
        mode="contained"
        onPress={() => navigation.navigate('MockedHouseholdDetail')}
      >
        Gå till hushåll 1
      </Button>
      <Button
        icon="home"
        mode="contained"
        onPress={() => navigation.navigate('MockedHouseholdDetail')}
      >
        Gå till hushåll 1
      </Button>
      <Button
        icon="home"
        mode="contained"
        onPress={() => navigation.navigate('MockedHouseholdDetail')}
      >
        Gå till hushåll 1
      </Button>
      <Button
        icon="home"
        mode="contained"
        onPress={() => navigation.navigate('MockedHouseholdDetail')}
      >
        Gå till hushåll 1
      </Button>

    <View>
      <Text>HOUSEHOLDDASHBOARD</Text>

    </View>
  );
}
