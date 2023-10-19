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
      <View style={{ alignItems: 'center', marginTop: 10 }}>
        <Text style={{ color: theme.colors.color }}>DINA HUSHÅLL</Text>
        <Divider
          style={{
            backgroundColor: theme.colors.color,
            minWidth: '100%',
            height: 3,
          }}
        />
      </View>
      {mockHouseholds.map((household) => (
        <TouchableRipple
          key={household.id}
          style={styles.touchableRipple}
          onPress={() => navigation.navigate('HouseholdDashboard')}
        >
          <View style={{ alignItems: 'center' }}>
            <Text style={{ color: theme.colors.color }}>{household.name}</Text>
            <Text>🐙 </Text>
          </View>
        </TouchableRipple>
      ))}

      <View style={styles.bottomButtons}>
        <Button
          labelStyle={{ fontSize: 20 }}
          icon="plus-circle-outline"
          mode="contained"
          style={styles.button}
          contentStyle={styles.buttonContent}
        >
          {' '}
          GÅ MED I ETT HUSHÅLL
        </Button>
        <Button
          icon="plus-circle-outline"
          mode="contained"
          style={styles.button}
          contentStyle={styles.buttonContent}
        >
          {' '}
          SKAPA ETT NYTT HUSHÅLL
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  householddivider: {
    flex: 1,
    paddingTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },

  touchableRipple: {
    minWidth: '70%',
    borderWidth: 1,
    padding: 25, // Anpassa padding efter behov
    borderRadius: 5, // Anpassa gränsvärdet efter behov
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomButtons: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    width: '80%',
    marginTop: 10,
    borderRadius: 15,
    minHeight: '10%',
  },
  buttonContent: {
    width: '100%',
    flexDirection: 'row',
  },
  heading: {
    marginTop: -100, // Justera avståndet till toppen
  },
});
