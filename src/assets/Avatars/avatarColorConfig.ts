type AvatarColorMapType = { [key: string]: string };

export const avatarColorMap: AvatarColorMapType = {
  '🦊': 'rgb(255,165,0)',
  '🐷': 'rgb(255,192,203)',
  '🐸': 'rgb(0,250,0)',
  '🐥': 'rgb(255,255,0)',
  '🐙': 'rgb(128,0,128)',
  '🐳': 'rgb(0,0,255)',
  // '🦉': 'rgb(165,42,42)',
  // '🦄': 'rgb(216,191,216)',
};

export const getColorForAvatar = (avatar: string): string =>
  avatarColorMap[avatar] || 'rgb(255,255,255)'; // Default color if avatar is not in the map
