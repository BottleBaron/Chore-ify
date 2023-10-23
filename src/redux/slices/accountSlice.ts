/* eslint-disable no-console */
/* eslint-disable prefer-destructuring */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  AuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
  User,
} from '@firebase/auth';
import {
  createSlice,
  isRejectedWithValue,
  PayloadAction,
} from '@reduxjs/toolkit';
import { auth } from '../../../firebaseConfig';
import { useAppDispatch } from '../store';

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
    signIntoAccount: (state, action: PayloadAction<LoginCredentialsDTO>) => {
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

export async function signInWithExternalProvider(provider: AuthProvider) {
  await signInWithPopup(auth, provider);
}

onAuthStateChanged(auth, (currentUser) => {
  const dispatch = useAppDispatch();
  dispatch(setActiveUser(currentUser));
});

export const {
  setActiveUser,
  createNewAccount,
  signIntoAccount,
  updateDisplayname,
} = accountSlice.actions;
export const accountReducer = accountSlice.reducer;
