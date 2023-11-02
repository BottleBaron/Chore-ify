/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-cycle */
import { useAppTheme } from '@src/contexts/ThemeContext';
import { RootStackScreenProps } from '@src/navigators/types';
import ThemedClickableCardButton from '@src/themedComponents/ThemedClickableCardButton';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { TextInput, Title } from 'react-native-paper';
// import { styles } from '../Settings/SettingsScreen';

type Props = RootStackScreenProps<'JoinHouseHold'>;

export default function JoinHouseHoldScreen({ navigation }: Props) {
  const theme = useAppTheme();
  const [houseHoldCode, setHouseHoldCode] = useState<string[]>([
    '',
    '',
    '',
    '',
  ]);

  const handleInputChange = (text: string, index: number) => {
    const updatedHouseHoldCode = [...houseHoldCode];
    updatedHouseHoldCode[index] = text;
    setHouseHoldCode(updatedHouseHoldCode);
  };

  const inputRefs: React.RefObject<any>[] = [
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ];

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <SafeAreaView
        style={[
          { flexGrow: 0, backgroundColor: theme.colors.background, zIndex: 3 },
        ]}
      >
        <View style={styles.headerContainer}>
          <Title
            style={[styles.headerTitleStyle, { color: theme.colors.text }]}
          >
            Gå med i hushåll
          </Title>
        </View>
      </SafeAreaView>
      <View
        style={[
          styles.bodyContainer,
          { backgroundColor: theme.colors.background },
        ]}
      >
        <View style={[styles.card, { backgroundColor: theme.colors.card }]}>
          <View style={styles.titleContainer}>
            <Title style={[styles.titleStyle, { color: theme.colors.text }]}>
              Skriv in hushållets kod
            </Title>
          </View>

          <View style={styles.paragraphContainer}>
            <Text style={[{ textAlign: 'center', color: theme.colors.text }]}>
              Administratören för hushållet har en 4-siffrig kod som du behöver
              fylla i för att gå med i ett existerande hushåll.
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.inputfields}>
              <TextInput
                ref={inputRefs[0]}
                style={styles.textinput}
                mode="outlined"
                value={houseHoldCode[0]}
                onChangeText={(text) => {
                  handleInputChange(text, 0);
                  if (text.length === 1) {
                    inputRefs[1].current?.focus();
                  }
                }}
                maxLength={1}
                textColor={theme.colors.text}
              />
              <TextInput
                ref={inputRefs[1]}
                style={styles.textinput}
                mode="outlined"
                value={houseHoldCode[1]}
                onChangeText={(text) => {
                  handleInputChange(text, 1);
                  if (text.length === 1) {
                    inputRefs[2].current?.focus();
                  }
                }}
                maxLength={1}
                textColor={theme.colors.text}
              />
              <TextInput
                ref={inputRefs[2]}
                style={styles.textinput}
                mode="outlined"
                value={houseHoldCode[2]}
                onChangeText={(text) => {
                  handleInputChange(text, 2);
                  if (text.length === 1) {
                    inputRefs[3].current?.focus();
                  }
                }}
                maxLength={1}
                textColor={theme.colors.text}
              />
              <TextInput
                ref={inputRefs[3]}
                style={styles.textinput}
                mode="outlined"
                value={houseHoldCode[3]}
                onChangeText={(text) => handleInputChange(text, 3)}
                maxLength={1}
                textColor={theme.colors.text}
              />
            </View>
          </View>
        </View>
      </View>
      <View
        style={[
          styles.buttonContainer,
          { backgroundColor: theme.colors.background },
        ]}
      >
        <ThemedClickableCardButton
          hideTitle // or hideTitle={false}
          title="Abslut"
          content="Anslut till hushåll"
          iconName="home"
          onPress={() =>
            navigation.navigate('JoinHouseHoldConfirmation', {
              houseHoldCode: houseHoldCode.join(''),
            })
          }
          showLeftIcon={false}
          showRightIcon={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    alignContent: 'center',
    // borderWidth: 3,
    // borderColor: 'red',
  },

  headerContainer: {
    // flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: '10%',
    // borderWidth: 3,
    // borderColor: 'yellow',
  },
  headerTitleStyle: {
    // fontWeight: 'bold',
    fontSize: 28,
  },

  bodyContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 3,
    // borderColor: 'lime',
  },

  card: {
    justifyContent: 'space-evenly',
    maxWidth: '100%',
    minHeight: '35%',
    borderRadius: 15,
    elevation: 10,
    padding: 3,
  },

  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 3,
    // borderColor: 'red',
    maxHeight: '25%',
  },
  titleStyle: {
    fontSize: 28,
    fontWeight: 'bold',
    // textAlign: 'center',
    // padding: 15,
    // verticalAlign: 'center',
    // variant="headlineSmall"
  },

  paragraphContainer: {
    width: '100%',
    textAlign: 'center',
    paddingHorizontal: '1%',
    fontWeight: 'bold',
    // borderWidth: 3,
    // borderColor: 'lime',
    // varför funkar inte detta?
    textAlignVertical: 'center',
  },
  inputContainer: {
    maxHeight: '50%',
    // flex: 1,
    // alignItems: 'center',
    verticalAlign: 'center',
    justifyContent: 'center',
    // borderWidth: 3,
    // borderColor: 'blue',
  },
  inputfields: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  textinput: {
    marginHorizontal: '1%',
    borderRadius: 150,
    textAlign: 'center',
    fontWeight: 'bold',
    // borderColor: 'blue',
    // borderWidth: 3,
  },

  buttonContainer: {
    height: '25%',
    maxHeight: '25%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 3,
    // borderColor: 'red',
    zIndex: 3,
    // flexDirection: 'row',
    // paddingBottom: '10%',
  },

  innerButtonContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    // paddingBottom: '10%',
  },
});
