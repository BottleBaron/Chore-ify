/* eslint-disable react/require-default-props */
import { useAppTheme } from '@src/contexts/ThemeContext';
import * as React from 'react';
import { TouchableOpacity, View, ViewStyle } from 'react-native';
import { Card, Paragraph, Title } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

type CardButtonProps = {
  title: string;
  content: string;
  iconName: string;
  onPress: () => void;
  iconSize?: number;
  iconColor?: string;
  hideTitle?: boolean; // Add this line
  width?: number;
  borderStyle?: ViewStyle;
  rotateIcon?: number; // Add this line
};

export default function ThemedClickableCardButton({
  title,
  content,
  iconName,
  onPress,
  iconSize,
  iconColor,
  hideTitle,
  width,
  borderStyle,
  rotateIcon,
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
  const rotationStyle = rotateIcon
    ? { transform: [{ rotate: `${rotateIcon}deg` }] }
    : {};

  const defaultBorderStyle = {
    // Default border style if not provided
    borderWidth: 1,
    borderColor: 'transparent', // or any default color you'd like
  };

  const actualBorderStyle = borderStyle ?? defaultBorderStyle;
  const actualIconColor = iconColor ?? theme.colors.buttonIcon;

  return (
    <TouchableOpacity onPress={onPress}>
      <Card
        style={{
          margin: 10,
          backgroundColor: theme.colors.background,
          width: actualWidth,
          ...actualBorderStyle, // Spread the default border style
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
              backgroundColor: theme.colors.background,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Icon
              name={iconName}
              size={actualIconSize}
              color={actualIconColor} // Use the actualIconColor here
              style={[{ marginRight: 15 }, rotationStyle]} // Add rotation here
            />
          </View>
          <View>
            {renderTitle()}
            <Paragraph
              style={{
                color: theme.colors.text,
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
