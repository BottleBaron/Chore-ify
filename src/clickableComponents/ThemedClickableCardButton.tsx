import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Card, Paragraph, Title } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useAppTheme } from '../contexts/ThemeContext';

type CardButtonProps = {
  title: string;
  content: string;
  iconName: string;
  onPress: () => void;
  iconSize?: number;
};

export default function ThemedClickableCardButton({
  title,
  content,
  iconName,
  onPress,
  iconSize,
}: CardButtonProps) {
  const theme = useAppTheme(); // get the theme
  const actualIconSize = iconSize ?? 30; // Use 30 if `iconSize` is not provided

  return (
    <TouchableOpacity onPress={onPress}>
      <Card style={styles.card}>
        <View style={styles.cardContent}>
          <Icon
            name={iconName}
            size={actualIconSize}
            color={theme.colors.primary}
          />
          <View style={styles.textContainer}>
            <Card.Content>
              <Title>{title}</Title>
              <Paragraph>{content}</Paragraph>
            </Card.Content>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
