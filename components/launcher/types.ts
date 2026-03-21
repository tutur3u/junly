import type { ReactNode } from "react";

export type ThemeMode = "light" | "dark";
export type ThemePreference = ThemeMode | "system";

export type AppId =
	| "about"
	| "projects"
	| "gallery"
	| "blog"
	| "music"
	| "games"
	| "contact"
	| "settings";

export type AppData = {
	id: AppId;
	title: string;
	icon: ReactNode;
	color: string;
};

export type SettingsContentProps = {
	theme: ThemeMode;
	themePreference: ThemePreference | null;
	loadingScreensEnabled: boolean;
	onToggleLoadingScreens: () => void;
	onSetThemePreference: (preference: ThemePreference) => void;
};

export type UrlParams = {
	selectedProject: string | null;
	setSelectedProject: (value: string | null) => void;
	selectedArtwork: string | null;
	setSelectedArtwork: (value: string | null) => void;
	activeTrack: string | null;
	setActiveTrack: (value: string | null) => void;
	selectedGame: string | null;
	setSelectedGame: (value: string | null) => void;
	gameFilter: string | null;
	setGameFilter: (value: string | null) => void;
	gameTab: string | null;
	setGameTab: (value: string | null) => void;
};
