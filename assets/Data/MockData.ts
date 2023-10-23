export interface Account {
  id: number;
  email: string;
  username: string;
  password: string;
  useDarkMode: boolean;
}

export interface User {
  id: number;
  houseHoldId: number;
  accountId: number;
  avatar: string;
  name: string;
  isPaused: boolean;
}

export interface Household {
  id: number;
  adminIds: number[];
  name: string;
  accesCode: string;
}

export interface Chore {
  id: string;
  householdId: number;
  title: string;
  description: string;
  dayinterval: number;
  effortNumber: number;
}

// NOTE: Not sure if this will be required as a class
export interface UserToCompletedChore {
  userId: number;
  choreId: number;
}

export const mockAccounts: Account[] = [
  {
    id: 1,
    email: 'apa123@testmail.com',
    username: 'jensIsCool',
    password: 'hemligtlösen',
    useDarkMode: false,
  },
];

export const mockUsers: User[] = [
  {
    id: 1,
    houseHoldId: 1,
    accountId: 1,
    avatar: '🐙',
    name: 'Jens',
    isPaused: false,
  },
];

export const mockHouseholds: Household[] = [
  {
    id: 1,
    adminIds: [1],
    name: 'Johansson Hushållet',
    accesCode: 'someGeneratedCode',
  },
];

export const mockChores: Chore[] = [
  {
    id: '',
    householdId: 1,
    title: 'Diska',
    description: 'Diska och torka all smutsig disk i köket',
    dayinterval: 2,
    effortNumber: 2,
  },
  {
    id: '',
    householdId: 1,
    title: 'Dammsug huset',
    description: 'Dammsug hela huset och byt dammsugspåse om det behövs',
    dayinterval: 2,
    effortNumber: 4,
  },
];
