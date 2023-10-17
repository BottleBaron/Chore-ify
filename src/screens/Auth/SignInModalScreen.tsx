/* eslint-disable import/no-cycle */
import * as React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Button, Card, Paragraph, Title } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { useAppTheme } from '../../contexts/ThemeContext';
import { RootStackScreenProps } from '../../navigators/types';

// Ange typen för navigation prop

type Props = RootStackScreenProps<'SignIn'>;

export default function SignInModalScreen({ navigation }: Props) {
  const theme = useAppTheme();

  return (
    <View style={styles.container}>
      <Card style={styles.cardContainer}>
        <Card.Content style={styles.cardContent}>
          <Icon name="google" size={30} color={theme.colors.primary} />
          <Title>Google</Title>
        </Card.Content>
        <TouchableOpacity onPress={() => console.log('Card Pressed')}>
          <Card>
            <Card.Content>
              <Title>Card title</Title>
              <Paragraph>Card content</Paragraph>
              <Icon name="rocket" size={30} color="#900" />
            </Card.Content>
          </Card>
        </TouchableOpacity>
      </Card>

      <Card style={styles.cardContainer}>
        <Card.Content style={styles.cardContent}>
          <Icon name="facebook" size={30} color={theme.colors.primary} />
          <Title>Facebook</Title>
        </Card.Content>
        <Card.Actions>
          <Button
            mode="contained"
            onPress={() => {
              () => navigation.navigate('HouseholdDashboard');
              // Handle Facebook Sign-in
            }}
          >
            Sign in with Facebook
          </Button>
        </Card.Actions>
      </Card>

      <Card style={styles.cardContainer}>
        <Card.Content style={styles.cardContent}>
          <Icon name="at" size={30} color={theme.colors.primary} />
          <Title>Email</Title>
        </Card.Content>
        <Card.Actions>
          <Button
            mode="contained"
            onPress={() => {
              () => navigation.navigate('HouseholdDashboard');
              // Handle Email Sign-in
            }}
          >
            Sign in with Email
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
}

//   return (
//     <View style={styles.container}>
//       <Button
//         mode="contained"
//         buttonColor={theme.colors.buttonColor}
//         onPress={() => navigation.navigate('HouseholdDashboard')}
//         style={styles.button}
//       >
//         Login - just nu direkt till HomeScreen
//       </Button>
//       <Button
//         mode="contained"
//         onPress={() => navigation.navigate('HouseholdDashboard')}
//         style={styles.button}
//       >
//         Register - just nu direkt till RegisterScreen
//       </Button>
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    marginBottom: 20,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    marginTop: 20,
  },
});
