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
  hideTitle?: boolean; // Add this line
  width?: number;
  height?: number;
  borderStyle?: ViewStyle;
  rotateIcon?: number; // Add this line
  leftIconColor?: string;
  rightIconColor?: string;
  showLeftIcon?: boolean; // Add this line
  showRightIcon?: boolean; // Add this line
};

export default function ThemedClickableCardButton({
  title,
  content,
  iconName,
  onPress,
  iconSize,
  hideTitle,
  width,
  height,
  borderStyle,
  rotateIcon,
  showLeftIcon = true, // New prop, default to true
  showRightIcon = true, // New prop, default to true
  leftIconColor,
  rightIconColor,
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
  const actualHeight = height ?? 70;
  const rotationStyle = rotateIcon
    ? { transform: [{ rotate: `${rotateIcon}deg` }] }
    : {};

  const defaultBorderStyle = {
    // Default border style if not provided
    borderWidth: 1,
    borderColor: 'transparent', // or any default color you'd like
  };
  const transparentColor = 'transparent';
  const actualBorderStyle = borderStyle ?? defaultBorderStyle;
  const actualLeftIconColor = leftIconColor ?? theme.colors.buttonIcon;
  const actualRightIconColor = rightIconColor ?? theme.colors.buttonIcon;

  return (
    <TouchableOpacity onPress={onPress}>
      <Card
        style={{
          margin: 2,
          backgroundColor: theme.colors.background,
          width: actualWidth,
          height: actualHeight,
          ...actualBorderStyle,
          // borderWidth: 1,
          // borderColor: 'red',
        }}
      >
        <Card.Content
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between', // Add this to space the items
            // borderWidth: 1,
            // borderColor: 'lime',
          }}
        >
          {/* {showLeftIcon && ( */}
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              // borderWidth: 1,
              // borderColor: 'red',
            }}
          >
            <Icon
              name={iconName}
              size={actualIconSize}
              color={showLeftIcon ? actualLeftIconColor : transparentColor} // <-- Change here
              style={[{ marginRight: 15 }, rotationStyle]}
            />
          </View>
          {/* )} */}
          <View
            style={{
              flexGrow: 1,
              justifyContent: 'center',
              alignItems: 'center',
              maxHeight: 70,
              // borderWidth: 1,
              // borderColor: 'teal',
            }}
          >
            {renderTitle()}
            <Paragraph
              style={{
                color: theme.colors.title,
                fontSize: 20,
                lineHeight: 30,
                // borderWidth: 1,
                // borderColor: 'red',
              }}
            >
              {content}
            </Paragraph>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              // borderWidth: 1,
              // borderColor: 'yellow',
            }}
          >
            <Icon
              name={iconName}
              size={actualIconSize}
              color={showRightIcon ? actualRightIconColor : transparentColor}
              style={[{ marginLeft: 15 }, rotationStyle]}
            />
          </View>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
}
