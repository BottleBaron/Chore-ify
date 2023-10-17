import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { accountReducer } from './slices/accountSlice';
import householdSlice from './slices/householdSlice';
import { themeReducer } from './slices/themeSlice';
import { userReducer } from './slices/userSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    account: accountReducer,
    user: userReducer,
    household: householdSlice,
  },
});

// ------ TYPESCRIPT ------ //
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
