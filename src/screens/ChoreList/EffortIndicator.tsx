import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { Badge, Card, Text } from 'react-native-paper';

type Props = {
  value: number;
  onChange: (selectedValue: number) => void;
};

export default function EffortIndicator({ value, onChange }: Props) {
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
    },
  });

  const indicatorContent = isVisible ? (
    <Card>
      <Pressable onPress={() => setIsVisible(false)}>
        <View style={styles.cardContent}>
          <View style={styles.textContainer}>
            <Text style={styles.boldText}>Värde:</Text>
            <Text>Hur energikrävande är sysslan?</Text>
          </View>
          <Badge style={styles.badge}>{value}</Badge>
        </View>
      </Pressable>
    </Card>
  ) : (
    <Card>
      <ScrollView horizontal contentContainerStyle={styles.scrollViewContent}>
        {[1, 2, 4, 6, 8].map((value) => (
          <Pressable key={value} onPress={() => handleClick(value)}>
            <Badge
              size={35}
              style={{
                marginHorizontal: 18,
                backgroundColor: `rgb(${120 + (6 - value) * 13}, ${
                  120 + (6 - value) * 13
                }, ${120 + (6 - value) * 13})`,
              }}
            >
              {value}
            </Badge>
          </Pressable>
        ))}
      </ScrollView>
    </Card>
  );

  return indicatorContent;
}
