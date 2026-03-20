"use client";

import { Moon, Sun, User, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import type { ReactNode } from "react";
import { InitialBootOverlay } from "@/components/launcher/overlays";
import type { AppData, AppId, ThemeMode } from "@/components/launcher/types";

type LauncherShellProps = {
	theme: ThemeMode;
	currentTime: string;
	apps: AppData[];
	activeAppData?: AppData;
	isLoading: boolean;
	showBootOverlay: boolean;
	onOpenApp: (id: AppId) => void;
	onCloseApp: () => void;
	onToggleTheme: () => void;
	appContent: ReactNode;
	loadingContent: ReactNode;
};

export function LauncherShell({
	theme,
	currentTime,
	apps,
	activeAppData,
	isLoading,
	showBootOverlay,
	onOpenApp,
	onCloseApp,
	onToggleTheme,
	appContent,
	loadingContent,
}: LauncherShellProps) {
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

			<header className="wii-u-topbar absolute top-0 left-0 right-0 z-10 flex h-16 items-center justify-between px-6">
				<div className="flex items-center gap-3">
					<div className="wii-u-user-badge flex h-11 w-11 items-center justify-center rounded-full border border-white/90">
						<User
							className={`h-5 w-5 ${
								theme === "dark" ? "text-slate-300" : "text-slate-400"
							}`}
						/>
					</div>
					<span
						className={`text-[1.05rem] font-bold tracking-wide ${
							theme === "dark" ? "text-slate-100" : "text-slate-600"
						}`}
					>
						Junly
					</span>
				</div>
				<div className="flex items-center gap-3">
					<button
						type="button"
						onClick={onToggleTheme}
						aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
						className="wii-u-round-button inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/80 transition-transform hover:-translate-y-0.5"
					>
						{theme === "dark" ? (
							<Sun className="h-5 w-5 text-amber-400" />
						) : (
							<Moon className="h-5 w-5 text-slate-700" />
						)}
					</button>
					<div
						className={`text-[1.05rem] font-bold tracking-wider ${
							theme === "dark" ? "text-slate-300" : "text-slate-500"
						}`}
					>
						{currentTime}
					</div>
				</div>
			</header>

			<div className="absolute inset-0 flex items-center justify-center px-8 pt-24 pb-24 md:px-20">
				<div className="grid w-full max-w-6xl grid-cols-2 place-items-center gap-x-10 gap-y-8 sm:grid-cols-3 md:grid-cols-4 md:gap-x-18 md:gap-y-8">
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
							className="flex cursor-pointer flex-col items-center gap-3"
						>
							<button
								type="button"
								onClick={() => onOpenApp(app.id)}
								className="wii-u-icon group relative flex h-28 w-28 cursor-pointer items-center justify-center sm:h-40 sm:w-40"
							>
								<motion.div className="transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-2 group-active:scale-95">
									{app.icon}
								</motion.div>

								<div
									className={`pointer-events-none absolute -bottom-12 z-20 rounded-full border px-3 py-1 text-sm font-bold whitespace-nowrap opacity-0 shadow-md transition-opacity backdrop-blur-sm group-hover:opacity-100 ${
										theme === "dark"
											? "bg-slate-950/80 text-slate-100 border-sky-100/10"
											: "bg-white/90 text-slate-700 border-white/50"
									}`}
								>
									{app.title}
								</div>
							</button>
						</motion.div>
					))}
				</div>
			</div>

			<div
				className={`absolute right-0 bottom-0 left-0 z-10 flex h-16 items-center justify-center gap-8 ${
					theme === "dark"
						? "bg-gradient-to-t from-slate-950/30 to-transparent"
						: "bg-gradient-to-t from-white/25 to-transparent"
				}`}
			>
				<div
					className={`wii-u-status-pill flex items-center gap-2 rounded-full border border-white/70 px-5 py-2 text-sm font-medium backdrop-blur-sm ${
						theme === "dark" ? "text-slate-300" : "text-slate-500"
					}`}
				>
					<span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
					System Online
				</div>
				<div className={`text-xs ${theme === "dark" ? "text-slate-500" : "text-slate-400"}`}>
					v1.0.0
				</div>
			</div>

			<div className="absolute bottom-6 left-6 z-10">
				<div className="wii-u-home-button flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-xl font-medium text-white/90 shadow-lg">
					N
				</div>
			</div>

			{showBootOverlay && <InitialBootOverlay theme={theme} />}

			<AnimatePresence>
				{activeAppData && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className={`fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm sm:p-8 ${
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
							className="wii-u-window flex h-[80vh] max-h-[800px] w-full max-w-4xl flex-col overflow-hidden"
							onClick={(event) => event.stopPropagation()}
						>
							<div className="wii-u-titlebar flex-shrink-0">
								<div className="flex items-center gap-2">
									<div
										className={`flex h-8 w-8 items-center justify-center rounded-full border border-white/90 shadow-inner ${activeAppData.color}`}
									>
										<div className="scale-50">{activeAppData.icon}</div>
									</div>
									<span
										className={`font-bold tracking-wide ${
											theme === "dark" ? "text-slate-100" : "text-slate-700"
										}`}
									>
										{activeAppData.title}
									</span>
								</div>
								<button
									type="button"
									onClick={onCloseApp}
									className={`wii-u-close-button flex h-9 w-9 items-center justify-center rounded-full border border-white/80 transition-colors ${
										theme === "dark" ? "text-slate-300" : "text-slate-500"
									}`}
								>
									<X className="h-5 w-5" />
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
