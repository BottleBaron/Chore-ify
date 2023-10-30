import { Chore } from '@src/redux/slices/choreSlice';
import React from 'react';
import { Button, TextInput, View } from 'react-native';
import { Text } from 'react-native-svg';

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

  const handleChange = (field: keyof Chore, value: string) => {
    setChoreData({ ...choreData, [field]: value });
  };

  return (
    <View>
      <Text>Titel på sysslan:</Text>
      <TextInput
        value={choreData.title}
        onChangeText={(text) => handleChange('title', text)}
      />
      <Text>Beskrivning av sysslan:</Text>
      <TextInput
        value={choreData.description}
        onChangeText={(text) => handleChange('description', text)}
      />
      <Text>Intervall (i dagar):</Text>
      <TextInput
        value={choreData.dayinterval.toString()}
        onChangeText={(text) => handleChange('dayinterval', text)}
      />
      <Text>Hur jobbig är sysslan: </Text>
      <TextInput
        value={choreData.effortNumber.toString()}
        onChangeText={(text) => handleChange('effortNumber', text)}
      />
      <Button title="Add Chore" onPress={() => handleAddChore(choreData)} />
    </View>
  );
}
