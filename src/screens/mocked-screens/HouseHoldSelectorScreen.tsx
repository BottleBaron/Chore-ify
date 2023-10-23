/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-cycle */
import { GoogleAuthProvider } from '@firebase/auth';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';
import { auth } from '../../../firebaseConfig';
import { useAppTheme } from '../../contexts/ThemeContext';
import { RootStackScreenProps } from '../../navigators/types';
import {
  createNewAccount,
  signInWithExternalProvider,
  signIntoAccount,
} from '../../redux/slices/accountSlice';
import { useAppDispatch } from '../../redux/store';

type Props = RootStackScreenProps<'HouseHoldSelectorScreen'>;

export default function HouseHoldSelectorScreen({ navigation }: Props) {
  const theme = useAppTheme();

  const dispatch = useAppDispatch();

  const dto = { email: 'apa123@mail.com', password: 'apa123' };
  const mockcreateAccount = () => {
    dispatch(createNewAccount(dto));
  };

  const mockLoginAccount = () => {
    dispatch(signIntoAccount(dto));
  };

  const activeAccountLog = () => {
    console.log(auth.currentUser);
  };

  const googleLoginTest = () => {
    const provider = new GoogleAuthProvider();
    signInWithExternalProvider(provider);
  };

  return (
    <View style={styles.container}>
      <Button onPress={mockcreateAccount}>Create Account</Button>
      <Button onPress={mockLoginAccount}>Login Account</Button>
      <Button onPress={activeAccountLog}>LOG</Button>
      <Button onPress={googleLoginTest}>Login With Google</Button>
      {/* //   <View style={{ alignItems: 'center', marginTop: 10 }}>
    //     <Text style={{ color: theme.colors.color }}>DINA HUSHÅLL</Text>
    //     <Divider
    //       style={{
    //         backgroundColor: theme.colors.color,
    //         minWidth: '100%',
    //         height: 3,
    //       }}
    //     />
    //   </View>
    //   {mockHouseholds.map((household) => (
    //     <TouchableRipple
    //       key={household.id}
    //       style={[styles.touchableRipple, { borderColor: theme.colors.border }]}
    //       onPress={() => navigation.navigate('HouseholdDashboard')}
    //     >
    //       <View style={{ alignItems: 'center' }}>
    //         <Text style={{ color: theme.colors.color }}>{household.name}</Text>
    //         <Text>🐙 </Text>
    //       </View>
    //     </TouchableRipple>
    //   ))}

    //   <View style={styles.bottomButtons}>
    //     <ThemedClickableCardButton
    //       hideTitle // or hideTitle={false}
    //       title="SKAPA HUSHÅLL"
    //       content="SKAPA HUSHÅLL"
    //       iconName="plus-circle"
    //       onPress={() => navigation.navigate('SignIn')}
    //     />
    //     <ThemedClickableCardButton
    //       hideTitle // or hideTitle={false}
    //       title="GÅ MED I HUSHÅLL"
    //       content="GÅ MED I HUSHÅLL"
    //       iconName="plus-circle"
    //       onPress={() => navigation.navigate('SignIn')}
    //     />
    //   </View> */}
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
    padding: 25,
    borderRadius: 5,
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
  heading: {
    marginTop: -100, // Justera avståndet till toppen
  },
});
