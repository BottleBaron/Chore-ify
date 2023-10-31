// import { Account, Chore, Household, User, UserToCompletedChore } from './types';

import { Account, Chore, Household, User, UserToCompletedChore } from './types';

export const mockUserToCompletedChore: UserToCompletedChore[] = [
  // User 1
  { userId: '1', choreId: '1' },
  { userId: '1', choreId: '1' },
  { userId: '1', choreId: '2' },
  { userId: '1', choreId: '6' },
  { userId: '1', choreId: '4' },
  { userId: '1', choreId: '7' },
  { userId: '1', choreId: '8' },
  { userId: '1', choreId: '9' },
  // User 2
  { userId: '2', choreId: '1' },
  { userId: '2', choreId: '5' },
  { userId: '2', choreId: '5' },
  { userId: '2', choreId: '5' },
  { userId: '2', choreId: '7' },
  { userId: '2', choreId: '7' },
  { userId: '2', choreId: '8' },
  // User 3
  { userId: '3', choreId: '2' },
  { userId: '3', choreId: '3' },
  { userId: '3', choreId: '4' },
  { userId: '3', choreId: '1' },
  { userId: '3', choreId: '9' },
  { userId: '3', choreId: '8' },
  { userId: '3', choreId: '7' },
  // User 4
  { userId: '4', choreId: '4' },
  { userId: '4', choreId: '5' },
  { userId: '4', choreId: '6' },
  { userId: '4', choreId: '6' },
  { userId: '4', choreId: '6' },
  { userId: '4', choreId: '7' },
  { userId: '4', choreId: '8' },
  { userId: '4', choreId: '9' },
  { userId: '4', choreId: '9' },
];

export const mockAccounts: Account[] = [
  {
    id: '1',
    email: 'apa123@testmail.com',
    username: 'jensIsCool',
    password: 'hemligtlösen',
    useDarkMode: false,
  },
  {
    id: '2',
    email: 'banan123@testmail.com',
    username: 'johnIsCool',
    password: 'annatHemligtLösen',
    useDarkMode: true,
  },
];

export const mockUsers: User[] = [
  {
    id: '1',
    houseHoldId: 1,
    accountId: 1,
    avatar: '🐸',
    name: 'Jens',
    isAdmin: false,
    isPaused: false,
  },
  {
    id: '2',
    houseHoldId: 1,
    accountId: 2,
    avatar: '🐸',
    name: 'John',
    isAdmin: false,
    isPaused: false,
  },
  {
    id: '3',
    houseHoldId: 1,
    accountId: 3,
    avatar: '🦊', // Ingen kollision med tidigare avatars
    name: 'Kalle',
    isAdmin: false,
    isPaused: false,
  },
  {
    id: '4',
    houseHoldId: 1,
    accountId: 4,
    avatar: '🐷', // Ingen kollision med tidigare avatars
    name: 'Sara',
    isAdmin: false,
    isPaused: false,
  },
  {
    id: '5',
    houseHoldId: 2,
    accountId: 5,
    avatar: '🐬',
    name: 'Anna',
    isAdmin: false,
    isPaused: false,
  },
  {
    id: '6',
    houseHoldId: 2,
    accountId: 6,
    avatar: '🐳',
    name: 'Erik',
    isAdmin: false,
    isPaused: false,
  },
  {
    id: '7',
    houseHoldId: 2,
    accountId: 7,
    avatar: '🐷',
    name: 'Mia',
    isAdmin: false,
    isPaused: false,
  },
  {
    id: '8',
    houseHoldId: 2,
    accountId: 8,
    avatar: '🐥',
    name: 'Oliver',
    isAdmin: false,
    isPaused: false,
  },
];

export const mockHouseholds: Household[] = [
  {
    id: '1',
    adminIds: [1],
    name: 'Frugans&Mitt Hushåll',
    accessCode: 'someGeneratedCode',
  },
  {
    id: '2',
    adminIds: [2],
    name: 'Vänsterprasslets Hushåll',
    accessCode: 'annanGeneratedCode',
  },
];

export const mockChores: Chore[] = [
  {
    id: '1',
    householdId: '1',
    title: 'Diska',
    description: 'Diska och torka all smutsig disk i köket',
    dayinterval: 2,
    effortNumber: 2,
  },
  {
    id: '2',
    householdId: '1',
    title: 'Dammsugning',
    description: 'Dammsug hela huset och byt dammsugspåse om det behövs',
    dayinterval: 2,
    effortNumber: 4,
  },
  {
    id: '3',
    householdId: '1',
    title: 'Moppa golven',
    description: 'Moppa alla golvytor i huset',
    dayinterval: 3,
    effortNumber: 3,
  },
  {
    id: '4',
    householdId: '1',
    title: 'Gräsklippning',
    description: 'Klippa gräset på både fram- och baksidan',
    dayinterval: 7,
    effortNumber: 5,
  },
  {
    id: '5',
    householdId: '1',
    title: 'Bädda rent',
    description: 'Byta lakan i alla sängar och tvätta de smutsiga',
    dayinterval: 14,
    effortNumber: 3,
  },
  {
    id: '6',
    householdId: '1',
    title: 'Städa toaletten',
    description: 'Städa och desinficera toaletten',
    dayinterval: 7,
    effortNumber: 4,
  },
  {
    id: '7',
    householdId: '1',
    title: 'Tvätta fönster',
    description: 'Clean all the windows inside and out',
    dayinterval: 30,
    effortNumber: 5,
  },
  {
    id: '8',
    householdId: '1',
    title: 'Släng sopor',
    description: 'Take out all the trash and separate recyclables',
    dayinterval: 7,
    effortNumber: 1,
  },
  {
    id: '9',
    householdId: '1',
    title: 'Storhandla',
    description: 'Purchase weekly groceries',
    dayinterval: 7,
    effortNumber: 4,
  },
];

export const mockCompletedChores: UserToCompletedChore[] = [
  { userId: '1', choreId: '1', dateCompleted: new Date('2023-10-23') },
];
