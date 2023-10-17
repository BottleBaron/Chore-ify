import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ThemeState {
  theme: string;
}

const colorScheme = 'dark'; // Replace with your logic to get the color scheme

const initialState: ThemeState = {
  theme: colorScheme === 'dark' ? 'dark' : 'light',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
