import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Card, Paragraph, Title } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useAppTheme } from '../contexts/ThemeContext';

type CardButtonProps = {
  title: string;
  content: string;
  iconName: string;
  onPress: () => void;
  iconSize?: number;
  hideTitle?: boolean; // Add this line
  width?: number;
};

export default function ThemedClickableCardButton({
  title,
  content,
  iconName,
  onPress,
  iconSize,
  hideTitle,
  width,
}: CardButtonProps) {
  const theme = useAppTheme(); // get the theme
  const actualIconSize = iconSize ?? 30; // Use 30 if `iconSize` is not provided
  const renderTitle = () => {
    if (!hideTitle) {
      return <Title>{title}</Title>;
    }
    return null;
  };
  const actualWidth = width ?? 300;

  return (
    <TouchableOpacity onPress={onPress}>
      <Card
        style={{
          margin: 10,
          backgroundColor: theme.colors.card,
          width: actualWidth,
        }}
      >
        <Card.Content
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              width: 50,
              height: 30,
              borderRadius: 25,
              backgroundColor: theme.colors.card,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Icon
              name={iconName}
              size={actualIconSize}
              color={theme.colors.primary}
              style={{ marginRight: 15 }}
            />
          </View>
          <View>
            {renderTitle()}
            <Paragraph
              style={{
                color: theme.colors.primary,
                marginStart: 10,
                fontSize: 18,
              }}
            >
              {content}
            </Paragraph>
          </View>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
}
