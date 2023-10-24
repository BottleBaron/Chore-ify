/* eslint-disable no-console */
/* eslint-disable prefer-destructuring */
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
import { sendEmailVerification, signOut } from 'firebase/auth';
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
      )
        .then((userCredential) => {
          const user = userCredential.user;
          setActiveUser(user);
          SendVerificationMail();
        })
        .catch((error) => {
          const e = isRejectedWithValue(error.message);
          return e;
        });
    },
    signIntoAccount: (state, action: PayloadAction<LoginCredentialsDTO>) => {
      signInWithEmailAndPassword(
        auth,
        action.payload.email,
        action.payload.password,
      )
        .then((userCredential) => {
          const user = userCredential.user;
          setActiveUser(user);
        })
        .catch((error) => {
          const e = isRejectedWithValue(error.message);
          return e;
        });
    },
    updateDisplayname: (state, action: PayloadAction<string>) => {
      if (auth.currentUser != null) {
        updateProfile(auth.currentUser, {
          displayName: action.payload,
        })
          .then(() => {
            // Displayname updated successfully
          })
          .catch((error) => {
            const e = isRejectedWithValue(error.message);
            return e;
          });
      }
    },
    signOutOfAccount: (state, action) => {
      signOut(auth)
        .then(() => {
          // User signed out successfully
          setActiveUser(null);
        })
        .catch((error) => {
          const e = isRejectedWithValue(error.message);
          return e;
        });
    },
  },
});

export function SendVerificationMail() {
  if (auth.currentUser != null) {
    sendEmailVerification(auth.currentUser).then(() => {
      // Email sent successfully
    });
  }
}

onAuthStateChanged(auth, (currentUser) => {
  setActiveUser(currentUser);
});

export const {
  setActiveUser,
  createNewAccount,
  signIntoAccount,
  signOutOfAccount,
  updateDisplayname,
} = accountSlice.actions;
export const accountReducer = accountSlice.reducer;
