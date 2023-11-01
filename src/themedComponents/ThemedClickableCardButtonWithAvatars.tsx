import { useAppTheme } from '@src/contexts/ThemeContext';
import * as React from 'react';
import { Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import { Card, Title } from 'react-native-paper';

type CardButtonProps = {
  title: string;
  content: string;
  onPress: () => void;
  hideTitle?: boolean;
  width?: number;
  height?: number;
  borderStyle?: ViewStyle;
  avatarList?: string[];
};

export default function ThemedClickableCardButtonWithAvatars({
  title,
  content,
  onPress,
  hideTitle,
  width,
  height,
  borderStyle,
  avatarList,
}: CardButtonProps) {
  const theme = useAppTheme();
  const actualWidth = width ?? 300;
  const actualHeight = height ?? 100;

  const defaultBorderStyle = {
    borderWidth: 1,
    borderColor: 'transparent',
  };

  const actualBorderStyle = borderStyle ?? defaultBorderStyle;

  // console.log('avatarList:', avatarList); // Debugging line

  // Function to render avatars
  const renderAvatars = () => {
    if (avatarList) {
      return (
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          {avatarList.map((item, index) => (
            <View
              key={index.toString()}
              style={{
                marginHorizontal: 2,
                // borderWidth: 1,
                // borderColor: 'teal',
                alignItems: 'center', // Added
                justifyContent: 'center', // Added
                width: 40, // Added
                height: 40, // Added
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  textAlign: 'center', // Added
                  lineHeight: 40, // Added
                }}
              >
                {item}
              </Text>
            </View>
          ))}
        </View>
      );
    }
    return null;
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <Card
        style={{
          ...actualBorderStyle,
          width: actualWidth,
          height: actualHeight,
          backgroundColor: theme.colors.background,
          margin: 2,
        }}
      >
        <Card.Content
          style={{
            alignItems: 'center',
            // borderWidth: 2,
            // borderColor: 'yellow',
          }}
        >
          {!hideTitle && <Title style={{ alignSelf: 'center' }}>{title}</Title>}
          <View
            style={{
              flexGrow: 1,
              alignItems: 'center',
              justifyContent: 'center',
              // borderWidth: 2,
              // borderColor: 'yellow',
            }}
          >
            <Title
              style={{
                color: theme.colors.text,
                textAlign: 'center',
              }}
            >
              {content}
            </Title>
          </View>
          <Text>
            {renderAvatars()} {/* Render avatars here */}
          </Text>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
}
