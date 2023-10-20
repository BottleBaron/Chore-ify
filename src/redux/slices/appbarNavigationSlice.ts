import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AppBarNavigationState {
  currentRoute: string;
}

const initialState: AppBarNavigationState = {
  currentRoute: '/',
};

const appbarNavigationSlice = createSlice({
  name: 'appbarNavigation',
  initialState,
  reducers: {
    navigateToRoute: (state, action: PayloadAction<string>) => {
      state.currentRoute = action.payload;
    },
  },
});

export const { navigateToRoute } = appbarNavigationSlice.actions;
export const appbarNavigationReducer = appbarNavigationSlice.reducer;
