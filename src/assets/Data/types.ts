// types.ts: Detta för att typerna krockar när de ska importeras och användas
export interface Account {
  id: string;
  email: string;
  username: string;
  password: string;
  useDarkMode: boolean;
}

export interface User {
  id: string;
  houseHoldId: number;
  accountId: number;
  avatar: string;
  name: string;
  isPaused: boolean;
}

export interface Household {
  id: string;
  adminIds: number[];
  name: string;
  accessCode: string;
}

export interface Chore {
  id: string;
  householdId: string;
  title: string;
  description: string;
  dayinterval: number;
  effortNumber: number;
}

// NOTE: Not sure if this will be required as a class
export interface UserToCompletedChore {
  userId: string;
  choreId: string;
  dateCompleted?: Date;
}
