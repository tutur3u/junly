"use client";

import { useEffect } from "react";
import { InitialBootOverlay } from "@/components/launcher/overlays";
import type { AppData, AppId, ThemeMode } from "@/components/launcher/types";
import { Moon, Sun } from "lucide-react";
import { User, Cancel } from "pixelarticons/react";
import { AnimatePresence, motion } from "motion/react";
import type { ReactNode } from "react";

function AnimatedSeparator() {
	return (
		<div className="flex items-center gap-1">
			<div className="h-1 w-1 rotate-45 bg-current opacity-40" />
			<div className="h-1 w-1 rotate-45 bg-current opacity-60" />
			<div className="h-1 w-1 rotate-45 bg-current opacity-40" />
		</div>
	);
}

type LauncherShellProps = {
	theme: ThemeMode;
	currentTime: string;
	currentDate: string;
	apps: AppData[];
	activeAppData?: AppData;
	isLoading: boolean;
	showBootOverlay: boolean;
	onOpenApp: (id: AppId) => void;
	onCloseApp: () => void;
	onQuickThemeToggle: () => void;
	appContent: ReactNode;
	loadingContent: ReactNode;
	themePickerOverlay?: ReactNode;
};

export function LauncherShell({
	theme,
	currentTime,
	currentDate,
	apps,
	activeAppData,
	isLoading,
	showBootOverlay,
	onOpenApp,
	onCloseApp,
	onQuickThemeToggle,
	appContent,
	loadingContent,
	themePickerOverlay,
}: LauncherShellProps) {
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape" && activeAppData) {
				onCloseApp();
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [activeAppData, onCloseApp]);

	return (
		<main
			className={`theme-shell theme-${theme} relative min-h-screen w-full overflow-hidden transition-colors duration-500 ${
				theme === "dark"
					? "bg-gradient-to-br from-[#03111d] via-[#0c2032] to-[#163553]"
					: "bg-gradient-to-br from-[#e0f2fe] via-[#bae6fd] to-[#e0f2fe]"
			}`}
		>
			<div className="pointer-events-none absolute inset-0 bg-stripes opacity-30" />
			{theme === "dark" && (
				<>
					<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,rgba(103,232,249,0.12),transparent_22%),radial-gradient(circle_at_78%_22%,rgba(125,211,252,0.12),transparent_24%),radial-gradient(circle_at_50%_70%,rgba(59,130,246,0.08),transparent_30%)]" />
					<div className="pointer-events-none absolute inset-x-0 bottom-0 h-[28vh] bg-gradient-to-t from-[#06111e]/70 via-[#06111e]/10 to-transparent" />
				</>
			)}

			<div className="pointer-events-none absolute inset-0 overflow-hidden">
				{[...Array(15)].map((_, i) => {
					const size = ((i * 17) % 40) + 10;
					const left = (i * 23) % 100;
					const top = (i * 31) % 100;
					const duration = ((i * 13) % 10) + 10;
					const xOffset = ((i * 7) % 50) - 25;

					return (
						<motion.div
							key={i}
							className={`absolute rounded-full blur-sm ${
								theme === "dark" ? "bg-sky-300/10" : "bg-white/40"
							}`}
							style={{
								width: size,
								height: size,
								left: `${left}%`,
								top: `${top}%`,
							}}
							animate={{
								y: [0, -100, 0],
								x: [0, xOffset, 0],
								opacity: [0.2, 0.6, 0.2],
							}}
							transition={{
								duration,
								repeat: Infinity,
								ease: "easeInOut",
							}}
						/>
					);
				})}
			</div>

			<header className={`absolute top-0 left-0 right-0 z-10 flex h-14 items-center justify-between px-5 ${
				theme === "dark" 
					? "bg-gradient-to-b from-slate-900/95 to-slate-900/80 border-b border-slate-800/50" 
					: "bg-white/90 border-b border-gray-200/80"
			}`}>
				<div className="flex items-center gap-3">
					<div className={`flex h-10 w-10 items-center justify-center rounded-full ${
						theme === "dark" ? "bg-slate-800 border border-slate-700" : "bg-gray-100 border border-gray-200"
					}`}>
						<User
							className={`h-5 w-5 ${
								theme === "dark" ? "text-slate-300" : "text-slate-500"
							}`}
						/>
					</div>
					<span
						className={`text-[1rem] font-bold tracking-wide ${
							theme === "dark" ? "text-slate-100" : "text-slate-700"
						}`}
					>
						Chunli
					</span>
				</div>
				<div className="flex items-center gap-3">
					<button
						type="button"
						onClick={onQuickThemeToggle}
						aria-label={
							theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
						}
						className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-all ${
							theme === "dark" 
								? "bg-slate-800 border border-slate-700 hover:bg-slate-700 text-slate-300" 
								: "bg-gray-100 border border-gray-200 hover:bg-gray-200 text-slate-600"
						}`}
					>
						{theme === "dark" ? (
							<Sun className="h-5 w-5 text-amber-400" />
						) : (
							<Moon className="h-5 w-5 text-slate-700" />
						)}
					</button>
					<div className="flex items-center gap-4">
						<div
							className={`text-[1rem] font-medium tracking-wide ${
								theme === "dark" ? "text-slate-400" : "text-slate-500"
							}`}
						>
							{currentDate}
						</div>
						<AnimatedSeparator />
						<div
							className={`text-[1rem] font-medium tracking-wide ${
								theme === "dark" ? "text-slate-400" : "text-slate-500"
							}`}
						>
							{currentTime}
						</div>
						<AnimatedSeparator />
						<div
							className={`text-[0.85rem] font-medium tracking-wide ${
								theme === "dark" ? "text-slate-500" : "text-slate-400"
							}`}
						>
							{new Date().getFullYear()}
						</div>
					</div>
				</div>
			</header>

			<div className="absolute inset-0 overflow-y-auto px-6 pt-20 pb-24 md:overflow-hidden md:flex md:items-center md:justify-center md:px-20">
				<div className="grid w-full max-w-6xl grid-cols-3 place-items-center gap-x-6 gap-y-6 sm:grid-cols-3 md:grid-cols-4 md:gap-x-24 md:gap-y-12">
					{apps.map((app, index) => (
						<motion.div
							key={app.id}
							initial={{ opacity: 0, scale: 0.8, y: 20 }}
							animate={{ opacity: 1, scale: 1, y: 0 }}
							transition={{
								delay: index * 0.05,
								type: "spring",
								stiffness: 200,
								damping: 15,
							}}
							className="group relative flex cursor-pointer flex-col items-center"
						>
							<button
								type="button"
								onClick={() => onOpenApp(app.id)}
								className={`app-icon flex h-28 w-28 cursor-pointer items-center justify-center rounded-2xl bg-gradient-to-br ${app.accent} shadow-lg hover:scale-105 active:scale-95 transition-transform duration-300 sm:h-40 sm:w-40`}
							>
								<div className="text-white drop-shadow-md text-[2.5rem] sm:text-[3.5rem]">
									{app.icon}
								</div>
							</button>
							<span
								className={`mt-2 text-center text-sm font-bold sm:text-lg md:text-xl bg-clip-text text-transparent bg-gradient-to-br ${app.accent}`}
							>
								{app.title}
							</span>
						</motion.div>
					))}
				</div>
			</div>

			<div
				className={`absolute right-0 bottom-0 left-0 z-10 flex h-14 items-center justify-center gap-6 ${
					theme === "dark"
						? "bg-gradient-to-t from-slate-950/50 to-transparent"
						: "bg-gradient-to-t from-white/30 to-transparent"
				}`}
			>
				<div
					className={`flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium ${
						theme === "dark" 
							? "bg-slate-800/80 border border-slate-700/50 text-slate-300" 
							: "bg-white/80 border border-white/80 text-slate-600"
					}`}
				>
					<span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
					System Online
				</div>
				<div
					className={`text-xs ${theme === "dark" ? "text-slate-500" : "text-slate-400"}`}
				>
					v1.0.0
				</div>
				</div>

			{showBootOverlay && <InitialBootOverlay theme={theme} />}
			{themePickerOverlay}

			<AnimatePresence>
				{activeAppData && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className={`fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-6 lg:p-8 ${
							theme === "dark"
								? "bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.12),transparent_30%),rgba(2,6,23,0.72)]"
								: "bg-slate-900/20"
						}`}
						onClick={onCloseApp}
					>
						<motion.div
							initial={{ scale: 0.9, y: 20, opacity: 0 }}
							animate={{ scale: 1, y: 0, opacity: 1 }}
							exit={{ scale: 0.9, y: 20, opacity: 0 }}
							transition={{ type: "spring", stiffness: 300, damping: 25 }}
							className={`relative flex h-full w-full flex-col overflow-hidden sm:inset-auto sm:h-[88vh] sm:min-h-[720px] sm:w-full sm:max-w-[1480px] sm:rounded-[34px] ${
								theme === "dark" ? "bg-slate-900" : "bg-white"
							} sm:wii-u-window`}
							onClick={(event) => event.stopPropagation()}
						>
							<div className="pointer-events-none absolute inset-[10px] rounded-[26px] border border-white/10 opacity-70 hidden sm:block" />
							<div className={`relative flex flex-shrink-0 items-center justify-between px-4 py-3 sm:px-6 sm:py-4 ${
								theme === "dark" 
									? "bg-slate-900 sm:bg-slate-800/95 border-b border-slate-800 sm:border-b-0" 
									: "bg-white sm:bg-white/95 border-b border-gray-200 sm:border-b-0"
							}`}>
								<div className="flex items-center gap-3">
									<div
										className={`flex h-10 w-10 items-center justify-center rounded-full border border-white/90 shadow-inner ${activeAppData.color}`}
									>
										<div className="scale-[0.56]">{activeAppData.icon}</div>
									</div>
									<span
										className={`text-[1.12rem] font-bold tracking-wide ${
											theme === "dark" ? "text-slate-100" : "text-slate-700"
										}`}
									>
										{activeAppData.title}
									</span>
								</div>
								<button
									type="button"
									onClick={onCloseApp}
									className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
										theme === "dark" 
											? "bg-slate-800 text-slate-300 hover:bg-red-500/90 hover:text-white" 
											: "bg-gray-100 text-gray-600 hover:bg-red-500 hover:text-white"
									}`}
								>
									<Cancel className="h-5 w-5" />
								</button>
							</div>

							<div className="wii-u-dialog-surface relative flex-1 overflow-hidden">
								<div
									className={`pointer-events-none absolute inset-0 z-10 ${
										theme === "dark"
											? "shadow-[inset_0_0_22px_rgba(0,0,0,0.22)]"
											: "shadow-[inset_0_0_20px_rgba(0,0,0,0.02)]"
									}`}
								/>
								{isLoading ? loadingContent : appContent}
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</main>
	);
}
