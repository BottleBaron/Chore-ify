import { useAppTheme } from '@src/contexts/ThemeContext';
import { Chore } from '@src/redux/slices/choreSlice';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, HelperText, TextInput } from 'react-native-paper';
import EffortIndicator from './EffortIndicator';

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
  const [effortValue, setEffortValue] = useState(0);

  const handleEffortChange = (selectedValue: number) => {
    setEffortValue(selectedValue);
  };

  const theme = useAppTheme();

  const handleChange = (field: keyof Chore, value: string) => {
    setChoreData({ ...choreData, [field]: value });
  };

  const validateValues = () => {
    if (choreData.dayinterval > 0 && effortValue > 0) {
      if (choreData.title.length > 0 && choreData.description.length > 0) {
        handleAddChore({ ...choreData, effortNumber: effortValue });
        return;
      }
    }
    setErrorMessage('Invalid input');
  };

  return (
    <View style={styles.modalContent}>
      <TextInput
        label="Sysslans titel"
        style={styles.input}
        placeholder="Title"
        aria-labelledby="Title"
        mode="outlined"
        value={choreData.title}
        onChangeText={(text) => handleChange('title', text)}
      />
      <TextInput
        label="Beskriv sysslan"
        style={styles.input}
        multiline
        numberOfLines={5}
        placeholder="Description"
        aria-labelledby="Description"
        mode="outlined"
        value={choreData.description}
        onChangeText={(text) => handleChange('description', text)}
      />
      <TextInput
        label="Återkommer (dagar)"
        style={styles.input}
        placeholder="Day interval"
        aria-labelledby="Day interval"
        mode="outlined"
        value={choreData.dayinterval.toString()}
        onChangeText={(text) => handleChange('dayinterval', text)}
      />
      <EffortIndicator value={effortValue} onChange={handleEffortChange} />
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
        style={styles.button}
      >
        Lägg till syssla
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
  button: {
    alignSelf: 'center',
    margin: 10,
    borderColor: 'black',
    borderRadius: 10,
  },
});
