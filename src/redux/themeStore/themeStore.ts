import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import { AppDarkTheme, AppLightTheme } from "../../themes/theme";
import { initialThemeState } from "./initialThemeState";
import { themeReducer } from "./themeReducer";

// Din initial state
type ThemeState = typeof initialThemeState;

export type SetThemeAction = {
	type: string;
	payload: string;
};

export const selectThemeColors = (state: RootState) => {
	return state.theme === "dark" ? AppDarkTheme.colors : AppLightTheme.colors;
};

export const selectTheme = (state: RootState) => {
	return state.theme === "dark" ? AppDarkTheme : AppLightTheme;
};

// CustomHook för att sätta temat
export const useTheme = () => {
	return useAppSelector(selectTheme);
};

export const store = createStore(themeReducer);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof themeReducer>;
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

