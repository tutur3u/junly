"use client";

import { useEffect } from "react";
import { InitialBootOverlay } from "@/components/launcher/overlays";
import type { AppData, AppId, ThemeMode } from "@/components/launcher/types";
import { Sun } from "lucide-react";
import { Cancel, Moon } from "pixelarticons/react";
import { AnimatePresence, motion } from "motion/react";
import type { ReactNode } from "react";

function generateParticleId(index: number, left: number, top: number): string {
	return `particle-${index}-${left}-${top}`;
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
				// Check if a modal already handled this escape
				if ((globalThis as unknown as { escapeHandledByModal?: boolean }).escapeHandledByModal) return;
				// Also check DOM markers as fallback
				const isModalOpen = document.querySelector('[data-lightbox-open="true"]') !== null;
				const isPdfOpen = document.querySelector('[data-pdf-open="true"]') !== null;
				if (!isModalOpen && !isPdfOpen) {
					onCloseApp();
				}
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
					: "bg-gradient-to-br from-[#d4f0f7] via-[#bce8f4] to-[#9fdcf0]"
			}`}
		>
			<div className="pointer-events-none absolute inset-0 bg-stripes opacity-25" />
			<div
				className={`pointer-events-none absolute inset-0 ${
					theme === "dark"
						? "bg-[radial-gradient(circle_at_18%_30%,rgba(103,232,249,0.12),transparent_22%),radial-gradient(circle_at_78%_22%,rgba(125,211,252,0.12),transparent_24%),radial-gradient(circle_at_50%_70%,rgba(59,130,246,0.08),transparent_30%)]"
						: "bg-[radial-gradient(circle_at_12%_14%,rgba(233,252,255,0.62),transparent_22%),radial-gradient(circle_at_84%_18%,rgba(34,211,238,0.24),transparent_24%),radial-gradient(circle_at_24%_88%,rgba(56,189,248,0.18),transparent_22%),radial-gradient(circle_at_76%_78%,rgba(103,232,249,0.18),transparent_26%)]"
				}`}
			/>
			<div
				className={`pointer-events-none absolute inset-x-0 bottom-0 h-[28vh] ${
					theme === "dark"
						? "bg-gradient-to-t from-[#06111e]/70 via-[#06111e]/10 to-transparent"
						: "bg-gradient-to-t from-[#d6f7fd]/18 via-[#d6f7fd]/4 to-transparent"
				}`}
			/>

			<div className="pointer-events-none absolute inset-0 overflow-hidden">
				<div className="absolute inset-0 particles-container">
					{[...Array(6)].map((_, i) => {
						const size = ((i * 17) % 40) + 10;
						const left = (i * 23) % 100;
						const top = (i * 31) % 100;
						const duration = ((i * 13) % 8) + 12;

						return (
							<div
								key={generateParticleId(i, left, top)}
								className={`absolute rounded-full blur-sm particle-float ${
									theme === "dark" ? "bg-sky-300/10" : "bg-cyan-100/38"
								}`}
								style={{
									width: size,
									height: size,
									left: `${left}%`,
									top: `${top}%`,
									animationDuration: `${duration}s`,
									animationDelay: `${i * 0.8}s`,
								}}
							/>
						);
					})}
				</div>
			</div>

			<header className="absolute left-4 right-4 top-4 z-20">
				<div
					className={`wii-u-topbar relative mx-auto flex h-16 max-w-[1480px] items-center justify-between rounded-full border px-4 sm:px-6 ${
						theme === "dark"
							? "border-sky-200/10"
							: "border-[#d5f4fb]"
					}`}
				>
					<div className="flex min-w-0 items-center gap-3">
						<div
							className={`wii-u-user-badge flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border ${
								theme === "dark"
									? "border-slate-700 bg-slate-800"
									: "border-[#d5f4fb]"
							}`}
						>
							<span className={`text-sm font-bold ${theme === "dark" ? "text-sky-200" : "text-sky-700"}`}>J</span>
						</div>
						<div className="min-w-0">
							<div className={`truncate text-[0.92rem] font-bold uppercase tracking-[0.22em] ${theme === "dark" ? "text-slate-100" : "text-slate-700"}`}>
								CHUNLI
							</div>
							<div className={`truncate text-[0.62rem] uppercase tracking-[0.2em] ${theme === "dark" ? "text-slate-500" : "text-slate-500"}`}>
								Personal Console Web
							</div>
						</div>
					</div>
					<div className="flex items-center gap-2 sm:gap-3">
						<div
							className={`wii-u-status-pill hidden items-center gap-2 rounded-full border px-3 py-1.5 text-[0.72rem] font-bold uppercase tracking-[0.18em] sm:inline-flex ${
								theme === "dark"
									? "border-slate-700 text-slate-300"
									: "border-[#d5f4fb] text-sky-800"
							}`}
						>
							<span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.7)]" />
							Online
						</div>
						<div
							className={`wii-u-status-pill hidden rounded-full border px-3 py-1.5 text-[0.72rem] font-bold uppercase tracking-[0.18em] md:inline-flex ${
								theme === "dark"
									? "border-slate-700 text-slate-400"
									: "border-[#d5f4fb] text-sky-700"
							}`}
						>
							{currentDate}
						</div>
						<div
							className={`wii-u-status-pill rounded-full border px-3 py-1.5 text-[0.72rem] font-bold uppercase tracking-[0.18em] ${
								theme === "dark"
									? "border-slate-700 text-slate-300"
									: "border-[#d5f4fb] text-sky-800"
							}`}
						>
							{currentTime}
						</div>
					<button
						type="button"
						onClick={onQuickThemeToggle}
						aria-label={
							theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
						}
						className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-all ${
							theme === "dark"
								? "border border-slate-700 bg-slate-800 text-slate-300 hover:bg-slate-700"
								: "wii-u-round-button border border-[#d5f4fb] text-sky-800 hover:bg-[#d8f6fc]"
						}`}
					>
						{theme === "dark" ? (
							<Sun className="h-5 w-5 text-amber-400" />
						) : (
							<Moon className="h-5 w-5 text-sky-800" />
						)}
					</button>
				</div>
				</div>
			</header>

			<div className="absolute inset-0 overflow-y-auto px-6 pt-28 pb-24 md:flex md:items-center md:justify-center md:overflow-hidden md:px-20">
				<div className="grid w-full max-w-6xl grid-cols-3 place-items-center gap-x-6 gap-y-6 sm:grid-cols-3 md:grid-cols-4 md:gap-x-24 md:gap-y-12">
					{apps.map((app, index) => (
						<motion.div
							key={app.id}
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{
								delay: index * 0.04,
								duration: 0.35,
								ease: "easeOut",
							}}
							className="group relative flex cursor-pointer flex-col items-center"
						>
							<button
								type="button"
								onClick={() => onOpenApp(app.id)}
								className="wii-u-icon flex h-28 w-28 cursor-pointer items-center justify-center sm:h-40 sm:w-40"
							>
								<div className="transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-2 group-active:scale-95">
									{app.icon}
								</div>
							</button>
							<span
								className={`mt-2 text-center text-xs font-bold sm:hidden ${
									theme === "dark" ? "text-slate-300" : "text-slate-600"
								}`}
							>
								{app.title}
							</span>
							<div
								className={`absolute left-1/2 top-full mt-3 z-20 -translate-x-1/2 rounded-full border px-3 py-1.5 text-sm font-bold whitespace-nowrap opacity-0 shadow-md transition-opacity backdrop-blur-sm hidden md:block group-hover:opacity-100 ${
									theme === "dark"
										? "bg-slate-950/90 text-slate-100 border-sky-100/20"
										: "bg-[#cbf0f7]/94 text-sky-900 border-[#d9f7fc] shadow-[0_12px_28px_rgba(67,152,184,0.16)]"
								}`}
							>
								{app.title}
							</div>
						</motion.div>
					))}
				</div>
			</div>

			<div
				className={`absolute right-0 bottom-0 left-0 z-10 flex h-14 items-center justify-center ${
					theme === "dark"
						? "bg-gradient-to-t from-slate-950/50 to-transparent"
						: "bg-gradient-to-t from-[#d6f7fd]/22 to-transparent"
				}`}
			>
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
						transition={{ duration: 0.2 }}
						className={`fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-6 lg:p-8 ${
							theme === "dark"
								? "bg-black/90"
								: "bg-[rgba(86,114,136,0.32)] backdrop-blur-sm"
						}`}
						onClick={onCloseApp}
					>
						<motion.div
							initial={{ scale: 0.96, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.96, opacity: 0 }}
							transition={{ duration: 0.25, ease: "easeOut" }}
							className={`relative flex h-full w-full flex-col overflow-hidden sm:inset-auto sm:h-[88vh] sm:min-h-[720px] sm:w-full sm:max-w-[1480px] sm:rounded-[34px] border-2 ${
								theme === "dark" ? "bg-slate-900 border-slate-700" : "border-[#d5f4fb] bg-[#c4ecf5]/86"
							} sm:wii-u-window`}
							onClick={(event) => event.stopPropagation()}
						>
							<div className="pointer-events-none absolute inset-[10px] rounded-[26px] border border-[#dcf8fd]/70 opacity-70 hidden sm:block" />
							<div className={`relative flex flex-shrink-0 items-center justify-between px-4 py-3 sm:px-6 sm:py-4 ${
								theme === "dark"
									? "border-b border-slate-800 bg-slate-900 sm:bg-slate-800/95 sm:border-b-0"
									: "border-b border-[#cceff7] bg-[#d3f3f9]/95 sm:wii-u-titlebar sm:border-b-0"
							}`}>
								<div className="flex items-center gap-3">
									<div className={`flex h-10 w-10 items-center justify-center ${
										theme === "dark" ? "text-white" : "text-slate-700"
									}`}>
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
											: "bg-[#b9e6f0] text-sky-800 hover:bg-red-500 hover:text-white"
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
