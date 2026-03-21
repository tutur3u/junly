import { Sun } from "lucide-react";
import { Moon, Settings2 } from "pixelarticons/react";
import type { SettingsContentProps, ThemePreference } from "@/components/launcher/types";

export function SettingsContent({
	theme,
	themePreference,
	loadingScreensEnabled,
	onToggleLoadingScreens,
	onSetThemePreference,
}: SettingsContentProps) {
	return (
		<div className={`h-full overflow-y-auto p-4 sm:p-6 wii-u-scrollbar ${theme === "dark" ? "text-slate-200" : "text-slate-700"}`}>
			<div className="mb-4 sm:mb-6">
				<div className="flex items-start justify-between gap-4 mb-4">
					<div className="flex-1 min-w-0">
						<h2 className={`text-xl sm:text-2xl font-bold ${theme === "dark" ? "text-white" : "text-slate-800"}`}>System Settings</h2>
						<p className={`mt-1 text-sm sm:text-base ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`}>
							Adjust the launcher behavior and compare both interaction modes.
						</p>
					</div>
					<div
						className={`flex-shrink-0 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border-4 shadow-md ${
							theme === "dark" ? "bg-slate-800 border-slate-700" : "bg-slate-100 border-white"
						}`}
					>
						<Settings2 className="h-6 w-6 sm:h-7 sm:w-7 text-slate-500" />
					</div>
				</div>
			</div>

			<div className="space-y-3 sm:space-y-4">
				<div className={`rounded-2xl border p-4 sm:p-5 ${theme === "dark" ? "bg-slate-800/50 border-white/8" : "bg-white/70 border-white/70"}`}>
					<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
						<div className="flex-1 min-w-0">
							<h3 className={`font-bold ${theme === "dark" ? "text-white" : "text-slate-800"}`}>Loading screens</h3>
							<p className={`mt-1 sm:mt-2 text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`}>
								Show a short launch animation before opening each app window.
							</p>
						</div>

						<button
							type="button"
							onClick={onToggleLoadingScreens}
							aria-pressed={loadingScreensEnabled}
							className={`relative inline-flex h-10 w-20 sm:h-12 sm:w-24 items-center rounded-full border transition-all flex-shrink-0 ${
								loadingScreensEnabled
									? "bg-gradient-to-b from-sky-300 to-sky-400 border-sky-200 shadow-[0_10px_18px_rgba(96,165,250,0.22),inset_0_1px_0_rgba(255,255,255,0.65)]"
									: theme === "dark"
										? "bg-slate-900/85 border-slate-700 shadow-[0_10px_18px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.08)]"
										: "bg-white/80 border-white/80 shadow-[0_8px_14px_rgba(130,169,196,0.14),inset_0_1px_0_rgba(255,255,255,0.9)]"
							}`}
						>
							<span
								className={`absolute h-8 w-8 sm:h-9 sm:w-9 rounded-full shadow-[0_8px_12px_rgba(112,150,179,0.24),inset_0_1px_0_rgba(255,255,255,0.95)] transition-all ${
									loadingScreensEnabled
										? "translate-x-[2.35rem] sm:translate-x-[2.85rem] bg-white"
										: theme === "dark"
											? "translate-x-1 bg-slate-200"
											: "translate-x-1 bg-white"
								}`}
							/>
							<span className="sr-only">Toggle loading screens</span>
						</button>
					</div>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
					<div className={`rounded-2xl border p-4 sm:p-5 ${theme === "dark" ? "bg-slate-800/50 border-white/8" : "bg-white/70 border-white/70"}`}>
						<div className={`text-xs font-bold uppercase tracking-[0.18em] ${theme === "dark" ? "text-slate-500" : "text-slate-400"}`}>
							Current mode
						</div>
						<div className={`mt-2 sm:mt-3 text-xl sm:text-2xl font-bold ${theme === "dark" ? "text-white" : "text-slate-800"}`}>
							{loadingScreensEnabled ? "Cinematic" : "Instant"}
						</div>
						<p className={`mt-2 text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`}>
							{loadingScreensEnabled
								? "Apps open with a startup animation."
								: "Apps open immediately."}
						</p>
					</div>

					<div className={`rounded-2xl border p-4 sm:p-5 ${theme === "dark" ? "bg-slate-800/50 border-white/8" : "bg-white/70 border-white/70"}`}>
						<div className={`text-xs font-bold uppercase tracking-[0.18em] ${theme === "dark" ? "text-slate-500" : "text-slate-400"}`}>
							Why it matters
						</div>
						<ul className={`mt-2 sm:mt-3 space-y-1.5 text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`}>
							<li>Cinematic: playful and presentational.</li>
							<li>Instant: faster for exploration.</li>
							<li>Saved locally for next visit.</li>
						</ul>
					</div>
				</div>

				<div className={`rounded-2xl border p-4 sm:p-5 ${theme === "dark" ? "bg-slate-800/50 border-white/8" : "bg-white/70 border-white/70"}`}>
					<div>
						<h3 className={`font-bold ${theme === "dark" ? "text-white" : "text-slate-800"}`}>Theme mode</h3>
						<p className={`mt-1 sm:mt-2 text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`}>
							Choose a fixed theme or follow your device preference.
						</p>
					</div>

					<div className="mt-4 sm:mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
						{(
							[
								{ id: "light" as ThemePreference, label: "Light", icon: <Sun className="h-5 w-5 text-amber-400" /> },
								{ id: "dark" as ThemePreference, label: "Dark", icon: <Moon className="h-5 w-5 text-sky-300" /> },
								{ id: "system" as ThemePreference, label: "System", icon: <Settings2 className="h-5 w-5 text-emerald-400" /> },
							]
						).map((option) => {
							const isSelected = (themePreference ?? "light") === option.id;

							return (
								<button
									key={option.id}
									type="button"
									onClick={() => onSetThemePreference(option.id)}
									className={`cursor-pointer rounded-2xl border p-4 text-left transition-all ${
										isSelected
											? theme === "dark"
												? "border-sky-300/30 bg-sky-400/10 text-slate-100"
												: "border-sky-200 bg-sky-50 text-slate-800"
											: theme === "dark"
												? "border-white/8 bg-slate-900/30 text-slate-300 hover:border-sky-200/15"
												: "border-white/80 bg-white/45 text-slate-600 hover:border-sky-100"
									}`}
								>
									<div className="flex items-center gap-3">
										{option.icon}
										<span className="font-bold">{option.label}</span>
									</div>
									<div className={`mt-2 text-xs sm:text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`}>
										{option.id === "system" ? "Match device." : `${option.label} mode.`}
									</div>
								</button>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
