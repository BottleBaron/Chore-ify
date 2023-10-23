/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
  User,
} from '@firebase/auth';
import {
  createSlice,
  isRejectedWithValue,
  PayloadAction,
} from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { auth } from '../../../firebaseConfig';

export interface LoginCredentialsDTO {
  email: string;
  password: string;
}

export interface AccountState {
  authUser: User | null;
}

const initialState: AccountState = {
  authUser: null,
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setActiveUser: (state, action: PayloadAction<User | null>) => {
      state.authUser = action.payload;
    },
    createNewAccount: (state, action: PayloadAction<LoginCredentialsDTO>) => {
      createUserWithEmailAndPassword(
        auth,
        action.payload.email,
        action.payload.password,
      ).catch((error) => {
        const e = isRejectedWithValue(error.message);
        return e;
      });
    },
    signInToAccount: (state, action: PayloadAction<LoginCredentialsDTO>) => {
      signInWithEmailAndPassword(
        auth,
        action.payload.email,
        action.payload.password,
      ).catch((error) => {
        const e = isRejectedWithValue(error.message);
        return e;
      });
    },
    updateDisplayname: (state, action: PayloadAction<string>) => {
      if (auth.currentUser != null) {
        updateProfile(auth.currentUser, {
          displayName: action.payload,
        }).catch((error) => {
          const e = isRejectedWithValue(error.message);
          return e;
        });
      }
    },
  },
});

onAuthStateChanged(auth, (currentUser) => {
  const dispatch = useDispatch();
  dispatch(setActiveUser(currentUser));
});

export const { setActiveUser, createNewAccount, signInToAccount } =
  accountSlice.actions;
export const accountReducer = accountSlice.reducer;
