/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-cycle */
import { useAppTheme } from '@src/contexts/ThemeContext';
import { RootStackScreenProps } from '@src/navigators/types';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Button, Paragraph, TextInput, Title } from 'react-native-paper';

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
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.buttonIcon }]}
    >
      <View style={styles.headerContainer}>
        <Title style={styles.headerTitleStyle}>Gå med i hushåll</Title>
      </View>
      <View
        style={[styles.bodyContainer, { backgroundColor: theme.colors.border }]}
      >
        <View style={[styles.card, { backgroundColor: theme.colors.card }]}>
          <View style={styles.titleContainer}>
            <Title style={[styles.titleStyle, { color: theme.colors.text }]}>
              Skriv in hushållets kod
            </Title>
          </View>
          <View style={styles.paragraphContainer}>
            <Paragraph>
              Administratören för hushållet har en 4-siffrig kod som du behöver
              fylla i för att gå med i ett existerande hushåll.
            </Paragraph>
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
              />
              <TextInput
                ref={inputRefs[3]}
                style={styles.textinput}
                mode="outlined"
                value={houseHoldCode[3]}
                onChangeText={(text) => handleInputChange(text, 3)}
                maxLength={1}
              />
            </View>
          </View>
        </View>
      </View>
      <View
        style={[
          styles.buttonContainer,
          { backgroundColor: theme.colors.border },
        ]}
      >
        <View
          style={[
            styles.innerButtonContainer,
            { backgroundColor: theme.colors.border },
          ]}
        >
          <Button
            onPress={() =>
              navigation.navigate('JoinHouseHoldConfirmation', {
                houseHoldCode: houseHoldCode.join(''),
              })
            }
            // contentStyle={styles.buttoncontentstyle}
            style={styles.buttonStyle}
            icon="plus-circle"
            mode="elevated"
            labelStyle={{ fontSize: 18 }}
            buttonColor={theme.colors.buttonIcon}
          >
            Ansök
          </Button>
          {/* <Button
          contentStyle={styles.buttoncontentstyle}
          style={styles.buttonstyle}
          icon="close-circle"
          mode="outlined"
          labelStyle={{ fontSize: 18 }}
        >
          Stäng
        </Button> */}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    alignContent: 'center',
    borderWidth: 3,
    borderColor: 'red',
  },

  headerContainer: {
    // flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10%',
    borderWidth: 3,
    borderColor: 'yellow',
  },
  headerTitleStyle: {
    fontWeight: 'bold',
  },

  bodyContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: 'lime',
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
    borderWidth: 3,
    borderColor: 'red',
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
    borderWidth: 3,
    borderColor: 'lime',
    paddingHorizontal: '1%',
    fontWeight: 'bold',
  },
  inputContainer: {
    maxHeight: '50%',
    // flex: 1,
    // alignItems: 'center',
    verticalAlign: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: 'blue',
  },
  inputfields: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  textinput: {
    marginHorizontal: '1%',
    borderRadius: 150,
    borderColor: 'blue',
    borderWidth: 3,
  },

  buttonContainer: {
    maxHeight: '25%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: 'black',
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

  buttonStyle: {
    flex: 1,
    borderRadius: 15,
    maxWidth: '85%',
    minHeight: '60%',
    borderWidth: 1,
    borderColor: 'rgb(28, 28, 30)',
    // maxHeight: '30%',
    // width: 'auto',
    // textAlignVertical: 'center',
    // verticalAlign: 'center',
    alignContent: 'center',
  },

  buttoncontentstyle: {
    // verticalAlign: 'center',
    // justifyContent: 'center',
    // alignItems: 'center',
    // paddingVertical: '10%',
  },
});
