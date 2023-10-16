export interface User {
  id: string;
  name: string;
  avatar: string;
}

export const mockedUsers: User[] = [
  {
    id: '1',
    name: 'John',
    avatar: 'frog',
  },
];
