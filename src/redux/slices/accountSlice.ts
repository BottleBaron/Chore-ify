import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Account {
  id: number;
  email: string;
  username: string;
  password: string;
  useDarkMode: boolean;
}

interface AccountState {
  account: Account | null;
}

const initialState: AccountState = {
  account: null,
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setAccount: (state, action: PayloadAction<Account | null>) => {
      state.account = action.payload;
    },
  },
});

export const { setAccount } = accountSlice.actions;
export const accountReducer = accountSlice.reducer;
