import { useAppTheme } from '@src/contexts/ThemeContext';
import { Chore } from '@src/redux/slices/choreSlice';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, HelperText, TextInput } from 'react-native-paper';

interface AddChoreScreenProps {
  handleAddChore: (choreData: Chore) => void;
}
export default function AddChoreScreen({
  handleAddChore,
}: AddChoreScreenProps) {
  const [choreData, setChoreData] = React.useState({
    id: '',
    householdId: '',
    title: '',
    description: '',
    dayinterval: 0,
    effortNumber: 0,
  });

  const [errorMessage, setErrorMessage] = useState('');

  const theme = useAppTheme();

  const handleChange = (field: keyof Chore, value: string) => {
    setChoreData({ ...choreData, [field]: value });
  };

  const validateValues = () => {
    if (choreData.dayinterval > 0 && choreData.effortNumber > 0) {
      if (choreData.title.length > 0 && choreData.description.length > 0) {
        handleAddChore(choreData);
        return;
      }
    }
    setErrorMessage('Invalid input');
  };

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
        aria-label="Add Chore"
        onPress={validateValues}
      >
        Add Chore
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
