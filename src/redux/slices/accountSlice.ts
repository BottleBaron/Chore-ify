/* eslint-disable no-useless-catch */
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
import { sendEmailVerification, signOut, UserCredential } from 'firebase/auth';
import { auth } from '../../../firebaseConfig';
import createAppAsyncThunk from '../utils';

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
  extraReducers: (builder) => {
    builder.addCase(signIntoAccount.fulfilled, (state, action) => {
      const result = JSON.parse(action.payload) as UserCredential;
      setActiveUser(result.user);
    });
    builder.addCase(createAccount.fulfilled, (state, action) => {
      const result = JSON.parse(action.payload) as UserCredential;
      setActiveUser(result.user);
      SendVerificationMail();
    });
  },
});

export const signIntoAccount = createAppAsyncThunk<string, LoginCredentialsDTO>(
  'account/signIn',
  async (credentials: LoginCredentialsDTO) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password,
      );
      return JSON.stringify(userCredential);
    } catch (e: any) {
      throw e;
    }
  },
);

export const createAccount = createAppAsyncThunk<string, LoginCredentialsDTO>(
  'account/create',
  async (credentials: LoginCredentialsDTO) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password,
      );
      return JSON.stringify(userCredential);
    } catch (e: any) {
      throw e;
    }
  },
);

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

export const { setActiveUser, signOutOfAccount, updateDisplayname } =
  accountSlice.actions;
export const accountReducer = accountSlice.reducer;
