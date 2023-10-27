import { useAppTheme } from '@src/contexts/ThemeContext';
import * as React from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { Card, Paragraph, Title } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

type CardButtonProps = {
  title: string;
  content: string;
  iconName: string;
  onPress: () => void;
  iconSize?: number;
  iconColor?: string;
  hideTitle?: boolean;
  width?: number;
  borderStyle?: ViewStyle;
  rotateIcon?: number;
  avatarList?: string[];
};

export default function ThemedClickableCardButtonWithAvatars({
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
  avatarList,
}: CardButtonProps) {
  const theme = useAppTheme();
  const actualIconSize = iconSize ?? 30;
  const actualWidth = width ?? 300;
  const actualIconColor = iconColor ?? theme.colors.buttonIconColor;

  const defaultBorderStyle = {
    // Default border style if not provided
    borderWidth: 1,
    borderColor: 'transparent', // or any default color you'd like
  };

  const actualBorderStyle = borderStyle ?? defaultBorderStyle;

  // Function to render avatars
  const renderAvatars = () => {
    if (avatarList) {
      return (
        <FlatList
          horizontal
          data={avatarList}
          renderItem={({ item }) => (
            <Text
              style={{
                fontSize: 20, // Adjust size as needed
                marginRight: 10, // Add some margin to separate the items
              }}
            >
              {item}
            </Text>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      );
    }
    return null;
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <Card
        style={{
          margin: 10,
          backgroundColor: theme.colors.background,
          width: actualWidth,
          borderWidth: 1,
          borderColor: 'transparent',
          ...actualBorderStyle, // Spread the default border style
        }}
      >
        <Card.Content
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between', // Adjusted alignment to space-between
          }}
        >
          <View>
            {!hideTitle && <Title>{title}</Title>}
            <Paragraph
              style={{
                color: theme.colors.text,
                marginStart: 10,
                fontSize: 18,
              }}
            >
              {content}
            </Paragraph>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 5,
              }}
            >
              <Text
                style={{
                  alignItems: 'center',
                  color: theme.colors.text,
                  marginStart: 10,
                  fontSize: 18,
                }}
              >
                {renderAvatars()} {/* Render avatars here */}
              </Text>
            </View>
          </View>

          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Icon
              name={iconName}
              size={actualIconSize}
              color={actualIconColor}
              style={{
                transform: rotateIcon
                  ? [{ rotate: `${rotateIcon}deg` }]
                  : undefined,
              }}
            />
            {/* <Paragraph
              style={{
                color: theme.colors.text,
                marginStart: 10,
                fontSize: 18,
              }}
            >
              {avatarList}
            </Paragraph> */}
          </View>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
}
