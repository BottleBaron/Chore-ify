import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Card, Paragraph } from 'react-native-paper';
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
  // title,
  content,
  iconName,
  onPress,
  iconSize,
}: CardButtonProps) {
  const theme = useAppTheme(); // get the theme
  const actualIconSize = iconSize ?? 30; // Use 30 if `iconSize` is not provided

  return (
    <TouchableOpacity onPress={onPress}>
      <Card style={{ margin: 10 }}>
        <Card.Content
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Icon
            name={iconName}
            size={actualIconSize}
            color={theme.colors.primary}
            style={{ marginRight: 15 }}
          />
          <View>
            {/* <Title>{title}</Title> */}
            <Paragraph style={{ color: theme.colors.primary }}>
              {content}
            </Paragraph>
          </View>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
}
