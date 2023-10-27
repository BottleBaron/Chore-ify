// import * as React from 'react';
// import { Button, StyleSheet, Switch, Text, View } from 'react-native';

// // -- Skapa HomeScreen-komponenten och exportera den --
// // -- Denna komponent ska innehålla en list-komponent med användarens hushåll --
// // -- Varje hushåll ska vara klickbar 'cards' som tar användaren till en index-sida för det hushållet med hjälp av en stack-navigator --
// // -- Denna index-sida ska innehålla en lista med alla sysslor i hushållet etc --

// // type Props = NativeStackScreenProps<RootStackParamList, "Settings">;

// export default function MockedSettingsScreen() {
//   // Använd useState hook för att hålla reda på switch-värden
//   const [isSwitchEnabled, setSwitchEnabled] = React.useState(false);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Inställningar</Text>

//       {/* Exempel på en switch-komponent för en inställning */}
//       <View style={styles.settingRow}>
//         <Text>Notifikationer</Text>
//         <Switch value={isSwitchEnabled} onValueChange={setSwitchEnabled} />
//       </View>

//       {/* Exempel på en knapp för att navigera till en annan skärm eller utföra en åtgärd */}
//       <Button title="Spara inställningar" onPress={() => {}} />

//       {/* Exempel på en klickbar "card" */}
//       <View style={styles.card}>
//         <Text style={styles.cardText}>Clickable Card 1: Text 1</Text>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 20,
//   },
//   settingRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 20,
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
//   card: {
//     padding: 20,
//     backgroundColor: '#f9f9f9',
//     borderRadius: 10,
//     marginTop: 20,
//     alignItems: 'center',
//     justifyContent: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   cardText: {
//     fontSize: 16,
//   },
// });
