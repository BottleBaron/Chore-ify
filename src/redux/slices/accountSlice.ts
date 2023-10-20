import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Account {
  id: string;
  email: string;
  username: string;
  password: string;
  useDarkMode: boolean;
}

export interface AccountState {
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

// TODO: Replace crud operations with auth event listeners from firebase

// export const addAccount = createAppAsyncThunk<Account, Account>(
//   'account/create',
//   async (accountData: Account, thunkAPI) => {
//     try {
//       const newAccount = await createFirebaseAccount(accountData);
//       return newAccount;
//     } catch (e: any) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   },
// );

// export const fetchAccounts = createAppAsyncThunk<Account[], void>(
//   'account/get',
//   async (_, thunkAPI) => {
//     try {
//       const allAccounts = await getFirebaseAccounts();
//       return allAccounts;
//     } catch (e: any) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   },
// );

// // NOTE: Does not return AccountState but all Accounts
// export const updateAccount = createAppAsyncThunk<Account, Account>(
//   'account/update',
//   async (accountData: Account, thunkAPI) => {
//     if (!accountData.id) {
//       return thunkAPI.rejectWithValue('accountData requires an Id to update');
//     }
//     try {
//       await updateFirebaseAccount(accountData);
//       return accountData;
//     } catch (e: any) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   },
// );

// export const deleteAccount = createAppAsyncThunk<string, string>(
//   'account/delete',
//   async (accountId, thunkApi) => {
//     try {
//       await deleteFirebaseAccount(accountId);
//       return accountId;
//     } catch (e: any) {
//       return thunkApi.rejectWithValue(e.message);
//     }
//   },
// );
