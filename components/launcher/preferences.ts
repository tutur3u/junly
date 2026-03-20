"use client";

import type { ThemeMode } from "@/components/launcher/types";

export const LOADING_PREF_KEY = "junly-loading-screens";
export const THEME_PREF_KEY = "junly-theme";

export const getThemeSnapshot = (): ThemeMode => {
	if (typeof window === "undefined") {
		return "light";
	}

	return window.localStorage.getItem(THEME_PREF_KEY) === "dark"
		? "dark"
		: "light";
};

export const subscribeToThemePreference = (callback: () => void) => {
	if (typeof window === "undefined") {
		return () => {};
	}

	const notify = () => callback();
	window.addEventListener("storage", notify);
	window.addEventListener(THEME_PREF_KEY, notify);

	return () => {
		window.removeEventListener("storage", notify);
		window.removeEventListener(THEME_PREF_KEY, notify);
	};
};

export const broadcastThemePreference = (theme: ThemeMode) => {
	window.localStorage.setItem(THEME_PREF_KEY, theme);
	window.dispatchEvent(new Event(THEME_PREF_KEY));
};
