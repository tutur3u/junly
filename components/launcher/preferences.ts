"use client";

import type {
	ThemeMode,
	ThemePreference,
} from "@/components/launcher/types";

export const LOADING_PREF_KEY = "chunli-loading-screens";
export const THEME_PREF_KEY = "chunli-theme";

export const getThemePreferenceSnapshot = (): ThemePreference | null => {
	if (typeof window === "undefined") {
		return null;
	}

	const value = window.localStorage.getItem(THEME_PREF_KEY);

	if (value === "light" || value === "dark" || value === "system") {
		return value;
	}

	return null;
};

const getSystemTheme = (): ThemeMode => {
	if (typeof window === "undefined") {
		return "light";
	}

	return window.matchMedia("(prefers-color-scheme: dark)").matches
		? "dark"
		: "light";
};

export const resolveThemePreference = (
	preference: ThemePreference | null,
): ThemeMode => {
	if (preference === "dark") {
		return "dark";
	}

	if (preference === "system") {
		return getSystemTheme();
	}

	return "light";
};

export const getThemeSnapshot = (): ThemeMode => {
	return resolveThemePreference(getThemePreferenceSnapshot());
};

export const subscribeToThemePreference = (callback: () => void) => {
	if (typeof window === "undefined") {
		return () => {};
	}

	const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
	const notify = () => callback();
	window.addEventListener("storage", notify);
	window.addEventListener(THEME_PREF_KEY, notify);
	mediaQuery.addEventListener("change", notify);

	return () => {
		window.removeEventListener("storage", notify);
		window.removeEventListener(THEME_PREF_KEY, notify);
		mediaQuery.removeEventListener("change", notify);
	};
};

export const setThemePreference = (theme: ThemePreference) => {
	window.localStorage.setItem(THEME_PREF_KEY, theme);
	window.dispatchEvent(new Event(THEME_PREF_KEY));
};
