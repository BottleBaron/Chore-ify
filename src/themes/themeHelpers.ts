import { AppDarkTheme, AppLightTheme } from "./theme";

type ThemeString = "dark" | "light";

const getThemeObject = (theme: ThemeString) => {
	return theme === "dark" ? AppDarkTheme : AppLightTheme;
};

export default getThemeObject;

