"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { apps } from "@/components/launcher/app-data";
import { renderAppContent } from "@/components/launcher/app-content";
import { LoadingContent } from "@/components/launcher/overlays";
import {
	broadcastThemePreference,
	getThemeSnapshot,
	LOADING_PREF_KEY,
	subscribeToThemePreference,
} from "@/components/launcher/preferences";
import { LauncherShell } from "@/components/launcher/shell";
import type { AppId, ThemeMode } from "@/components/launcher/types";

export default function Home() {
	const [activeApp, setActiveApp] = useState<AppId | null>(null);
	const [loadingApp, setLoadingApp] = useState<AppId | null>(null);
	const [isBooting, setIsBooting] = useState(true);
	const [currentTime, setCurrentTime] = useState("");
	const theme = useSyncExternalStore<ThemeMode>(
		subscribeToThemePreference,
		getThemeSnapshot,
		() => "light",
	);
	const hasMounted = useSyncExternalStore(
		() => () => {},
		() => true,
		() => false,
	);
	const [loadingScreensEnabled, setLoadingScreensEnabled] = useState(() => {
		if (typeof window === "undefined") {
			return true;
		}

		return window.localStorage.getItem(LOADING_PREF_KEY) !== "false";
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
		if (!hasMounted) {
			return;
		}

		const timeout = window.setTimeout(() => {
			setIsBooting(false);
		}, 1500);

		return () => window.clearTimeout(timeout);
	}, [hasMounted]);

	useEffect(() => {
		if (!hasMounted) {
			return;
		}

		window.localStorage.setItem(
			LOADING_PREF_KEY,
			String(loadingScreensEnabled),
		);
	}, [hasMounted, loadingScreensEnabled]);

	useEffect(() => {
		if (!hasMounted) {
			return;
		}

		document.documentElement.style.colorScheme = theme;
	}, [hasMounted, theme]);

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
		broadcastThemePreference(theme === "light" ? "dark" : "light");
	};

	const appContent = activeAppData
		? renderAppContent(activeAppData.id, {
				theme,
				loadingScreensEnabled,
				onToggleLoadingScreens: toggleLoadingScreens,
				onToggleTheme: toggleTheme,
			})
		: null;

	const loadingContent = activeAppData ? (
		<LoadingContent app={activeAppData} theme={theme} />
	) : null;

	return (
		<LauncherShell
			theme={theme}
			currentTime={currentTime}
			apps={apps}
			activeAppData={activeAppData}
			isLoading={isLoading}
			showBootOverlay={hasMounted && isBooting}
			onOpenApp={openApp}
			onCloseApp={closeApp}
			onToggleTheme={toggleTheme}
			appContent={appContent}
			loadingContent={loadingContent}
		/>
	);
}
