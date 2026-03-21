"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { useQueryState } from "nuqs";
import { apps } from "@/components/launcher/app-data";
import { renderAppContent } from "@/components/launcher/app-content";
import {
	LoadingContent,
	ThemePickerOverlay,
} from "@/components/launcher/overlays";
import {
	getThemePreferenceSnapshot,
	getThemeSnapshot,
	LOADING_PREF_KEY,
	setThemePreference,
	subscribeToThemePreference,
} from "@/components/launcher/preferences";
import { LauncherShell } from "@/components/launcher/shell";
import {
	APP_KEY,
	PROJECT_KEY,
	ARTWORK_KEY,
	TRACK_KEY,
	GAME_KEY,
	GAME_FILTER_KEY,
	GAME_TAB_KEY,
	appIdParser,
	gameTabParser,
} from "@/lib/nuqs-keys";
import type {
	AppId,
	ThemeMode,
	ThemePreference,
} from "@/components/launcher/types";

export default function HomeClient() {
	const [activeApp, setActiveApp] = useQueryState(APP_KEY, appIdParser);
	const [selectedProject, setSelectedProject] = useQueryState(PROJECT_KEY);
	const [selectedArtwork, setSelectedArtwork] = useQueryState(ARTWORK_KEY);
	const [activeTrack, setActiveTrack] = useQueryState(TRACK_KEY);
	const [selectedGame, setSelectedGame] = useQueryState(GAME_KEY);
	const [gameFilter, setGameFilter] = useQueryState(GAME_FILTER_KEY);
	const [gameTab, setGameTab] = useQueryState(GAME_TAB_KEY, gameTabParser);
	const [loadingApp, setLoadingApp] = useState<AppId | null>(null);
	const [isBooting, setIsBooting] = useState(true);
	const [isHydrated, setIsHydrated] = useState(false);
	const [currentTime, setCurrentTime] = useState("");
	const theme = useSyncExternalStore<ThemeMode>(
		subscribeToThemePreference,
		getThemeSnapshot,
		() => "light",
	);
	const themePreference = useSyncExternalStore<ThemePreference | null>(
		subscribeToThemePreference,
		getThemePreferenceSnapshot,
		() => null,
	);
	const [loadingScreensEnabled, setLoadingScreensEnabled] = useState(() => {
		if (typeof window === "undefined") {
			return false;
		}

		return window.localStorage.getItem(LOADING_PREF_KEY) === "true";
	});

	useEffect(() => {
		const updateTime = () => {
			const now = new Date();
			setCurrentTime(
				now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
			);
		};

		updateTime();
		const interval = setInterval(updateTime, 1000);
		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		const hydrationTimeout = window.setTimeout(() => {
			setIsHydrated(true);
		}, 0);
		const bootTimeout = window.setTimeout(() => {
			setIsBooting(false);
		}, 1500);

		return () => {
			window.clearTimeout(hydrationTimeout);
			window.clearTimeout(bootTimeout);
		};
	}, []);

	useEffect(() => {
		if (!isHydrated) {
			return;
		}

		window.localStorage.setItem(
			LOADING_PREF_KEY,
			String(loadingScreensEnabled),
		);
	}, [isHydrated, loadingScreensEnabled]);

	useEffect(() => {
		if (!isHydrated) {
			return;
		}

		document.documentElement.style.colorScheme = theme;
	}, [isHydrated, theme]);

	useEffect(() => {
		if (!activeApp || !loadingApp || !loadingScreensEnabled) {
			return;
		}

		const timeout = window.setTimeout(() => {
			setLoadingApp(null);
		}, 950);

		return () => window.clearTimeout(timeout);
	}, [activeApp, loadingApp, loadingScreensEnabled]);

	const activeAppData = apps.find((app) => app.id === activeApp);
	const isLoading = Boolean(activeApp && loadingApp === activeApp);

	const openApp = (id: AppId) => {
		setActiveApp(id);
		setLoadingApp(loadingScreensEnabled ? id : null);
	};

	const closeApp = () => {
		setActiveApp(null);
		setSelectedProject(null);
		setSelectedArtwork(null);
		setActiveTrack(null);
		setSelectedGame(null);
		setGameFilter(null);
		setGameTab(null);
		setLoadingApp(null);
	};

	const toggleLoadingScreens = () => {
		setLoadingScreensEnabled((current) => {
			const next = !current;
			if (!next) {
				setLoadingApp(null);
			}
			return next;
		});
	};

	const toggleTheme = () => {
		setThemePreference(theme === "light" ? "dark" : "light");
	};

	const resolvedTheme = isHydrated ? theme : "light";
	const resolvedThemePreference = isHydrated ? themePreference : null;

	const urlParams = {
		selectedProject,
		setSelectedProject,
		selectedArtwork,
		setSelectedArtwork,
		activeTrack,
		setActiveTrack,
		selectedGame,
		setSelectedGame,
		gameFilter,
		setGameFilter,
		gameTab,
		setGameTab,
	} as const;

	const appContent = activeAppData
		? renderAppContent(activeAppData.id, {
				theme: resolvedTheme,
				themePreference: resolvedThemePreference,
				loadingScreensEnabled,
				onToggleLoadingScreens: toggleLoadingScreens,
				onSetThemePreference: setThemePreference,
			}, urlParams as Parameters<typeof renderAppContent>[2])
		: null;

	const loadingContent = activeAppData ? (
		<LoadingContent app={activeAppData} theme={resolvedTheme} />
	) : null;
	const themePickerOverlay =
		isHydrated && !isBooting && resolvedThemePreference === null ? (
			<ThemePickerOverlay theme={resolvedTheme} onSelect={setThemePreference} />
		) : null;

	return (
		<LauncherShell
			theme={resolvedTheme}
			currentTime={currentTime}
			apps={apps}
			activeAppData={activeAppData}
			isLoading={isLoading}
			showBootOverlay={isHydrated && isBooting}
			onOpenApp={openApp}
			onCloseApp={closeApp}
			onQuickThemeToggle={toggleTheme}
			appContent={appContent}
			loadingContent={loadingContent}
			themePickerOverlay={themePickerOverlay}
		/>
	);
}
