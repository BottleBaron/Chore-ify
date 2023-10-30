import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { accountReducer } from './slices/accountSlice';
import { appbarNavigationReducer } from './slices/appbarNavigationSlice';
import { choreReducer } from './slices/choreSlice';
import { householdReducer } from './slices/householdSlice';
import { statisticsReducer } from './slices/statisticsSlice';
import { themeReducer } from './slices/themeSlice';
import { userReducer } from './slices/userSlice';
import { userTochoreReducer } from './slices/userToChoreSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    account: accountReducer,
    user: userReducer,
    household: householdReducer,
    chore: choreReducer,
    appbarNavigation: appbarNavigationReducer,
    statistics: statisticsReducer,
    userToChore: userTochoreReducer,
  },
});

// ------ TYPESCRIPT ------ //
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
