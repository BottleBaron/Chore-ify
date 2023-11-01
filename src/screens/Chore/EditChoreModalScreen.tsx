import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, HelperText, TextInput } from 'react-native-paper';
import { useAppTheme } from '@src/contexts/ThemeContext';
import { Chore, updateChore } from '@src/redux/slices/choreSlice';
import { ChoreStackScreenProps } from '@src/navigators/types';
import { useAppDispatch } from '@src/redux/store';
// import { ChoreStackScreenProps } from '@src/navigators/types';

type Props = ChoreStackScreenProps<'EditChoreModal'>;

export default function EditChoreModalScreen({ route, navigation }: Props) {
  const { chore } = route.params;
  const [choreData, setChoreData] = useState<Chore>(chore);
  const [errorMessage] = useState('');
  const dispatch = useAppDispatch();
  const theme = useAppTheme();
  useEffect(() => {
    setChoreData(chore);
  }, [chore]);
  const handleChange = (field: keyof Chore, value: string) => {
    let newValue;
    if (field === 'dayinterval' || field === 'effortNumber') {
      newValue = parseInt(value, 10);
      // eslint-disable-next-line no-restricted-globals
      if (isNaN(newValue)) {
        newValue = 0;
      }
    } else {
      newValue = value;
    }
    setChoreData({ ...choreData, [field]: newValue });
  };
  const handleUpdateChore = async () => {
    navigation.goBack();
    await dispatch(updateChore(choreData));
  };
  /* const validateValues = () => {
     if (choreData.dayinterval > 0 && choreData.effortNumber > 0) {
      if (choreData.title.length > 0 && choreData.description.length > 0) {
        handleUpdateChore(choreData);
        navigation.goBack();
       return;
       }
     }
     setErrorMessage('Invalid input');
   }; */
  return (
    <View style={styles.modalContent}>
      <TextInput
        label="Title"
        style={styles.input}
        placeholder="Title"
        aria-labelledby="Title"
        mode="outlined"
        value={choreData.title}
        onChangeText={(text) => handleChange('title', text)}
      />
      <TextInput
        label="Description"
        style={styles.input}
        placeholder="Description"
        aria-labelledby="Description"
        mode="outlined"
        value={choreData.description}
        onChangeText={(text) => handleChange('description', text)}
      />
      <TextInput
        label="Day Interval"
        style={styles.input}
        placeholder="Day interval"
        aria-labelledby="Day interval"
        mode="outlined"
        value={choreData.dayinterval.toString()}
        onChangeText={(text) => handleChange('dayinterval', text)}
      />
      <TextInput
        label="Effort"
        style={styles.input}
        placeholder="Effort"
        aria-labelledby="Effort"
        mode="outlined"
        value={choreData.effortNumber.toString()}
        onChangeText={(text) => handleChange('effortNumber', text)}
      />
      <HelperText
        style={[styles.helperText, { color: theme.colors.error }]}
        type="error"
        visible={!!errorMessage}
      >
        {errorMessage}
      </HelperText>
      <Button
        buttonColor={theme.colors.button}
        textColor={theme.colors.buttonText}
        aria-label="Update Chore"
        onPress={handleUpdateChore}
      >
        Update Chore
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    height: 400,
    justifyContent: 'center',
  },
  input: {
    margin: 10,
  },
  helperText: {
    alignSelf: 'center',
  },
});
