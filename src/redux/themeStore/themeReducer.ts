import { initialThemeState, ThemeState } from "./initialThemeState";
import { SetThemeAction } from "./themeStore";

// // Din reducer
export const themeReducer = (state = initialThemeState, action: SetThemeAction): ThemeState => {
	switch (action.type) {
		case "SET_THEME":
			return {
				...state,
				theme: action.payload,
			};
		default:
			return state;
	}
};

