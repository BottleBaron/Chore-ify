import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { Badge, Card, Text } from 'react-native-paper';

type Props = {
  value: number;
  onChange: (selectedValue: number) => void;
};

export default function IntervalIndicator({ value, onChange }: Props) {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = (selectedValue: number) => {
    onChange(selectedValue);
    setIsVisible(true);
  };

  const styles = StyleSheet.create({
    cardContent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 16,
    },
    textContainer: {
      flex: 1,
    },
    boldText: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    badge: {
      backgroundColor: 'gray',
      fontSize: 14,
    },
    scrollViewContent: {
      justifyContent: 'space-between',
      padding: 10,
      gap: 10,
    },
    cardStyle: {
      marginBottom: 10,
    },
  });

  const indicatorContent = isVisible ? (
    <Card style={styles.cardStyle}>
      <Pressable onPress={() => setIsVisible(false)}>
        <View style={styles.cardContent}>
          <View style={styles.textContainer}>
            <Text style={styles.boldText}>Återkommer:</Text>
          </View>
          <Text> Var </Text>
          <Badge style={styles.badge}>{value}</Badge>
          <Text> dagar</Text>
        </View>
      </Pressable>
    </Card>
  ) : (
    <Card style={styles.cardStyle}>
      <ScrollView horizontal contentContainerStyle={styles.scrollViewContent}>
        {Array.from(Array(32)).map((i, index) => (
          <Text onPress={() => handleClick(index + 1)}>{index + 1}</Text>
        ))}
      </ScrollView>
    </Card>
  );

  return indicatorContent;
}
