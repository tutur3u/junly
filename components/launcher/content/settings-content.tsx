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
			<div className="launcher-soft-hero mb-4 sm:mb-6">
				<div className="pointer-events-none absolute inset-0 bg-stripes opacity-10" />
				<div className="relative flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
					<div className="flex-1 min-w-0">
						<div className="launcher-mini-tab">
							<Settings2 className="h-4 w-4" />
							System Settings
						</div>
						<h2 className={`mt-4 text-3xl font-bold ${theme === "dark" ? "text-white" : "text-slate-800"}`}>
							Tune the launcher until it feels just right.
						</h2>
						<p className={`mt-3 max-w-2xl text-sm sm:text-base leading-7 ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`}>
							Choose whether the console feels snappy, cinematic, sunny, moody, or a
							little bit of everything. Nothing here is heavy, but the tiny touches add up.
						</p>
					</div>
					<div className="grid grid-cols-3 gap-3">
						{[
							{ label: "Theme", value: (themePreference ?? "light").toUpperCase() },
							{ label: "Boot", value: loadingScreensEnabled ? "ON" : "OFF" },
							{ label: "Mood", value: theme === "dark" ? "Night" : "Day" },
						].map((item) => (
							<div key={item.label} className="launcher-stat-tile min-w-[108px]">
								<div className={`text-xs uppercase tracking-[0.16em] ${theme === "dark" ? "text-slate-500" : "text-slate-400"}`}>
									{item.label}
								</div>
								<div className="mt-2 text-xl font-bold">{item.value}</div>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="space-y-3 sm:space-y-4">
				<div className={`rounded-2xl border p-4 sm:p-5 ${theme === "dark" ? "bg-slate-800/50 border-white/8" : "bg-[#e1f9fd]/84 border-[#daf7fc]"}`}>
					<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
						<div className="flex-1 min-w-0">
							<h3 className={`font-bold ${theme === "dark" ? "text-white" : "text-slate-800"}`}>Loading screens</h3>
							<p className={`mt-1 sm:mt-2 text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`}>
								Let each app arrive with a tiny bit of ceremony before the window opens.
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
										: "bg-[#def8fd]/94 border-[#daf7fc] shadow-[0_8px_14px_rgba(67,152,184,0.14),inset_0_1px_0_rgba(231,252,255,0.9)]"
							}`}
						>
							<span
								className={`absolute h-8 w-8 sm:h-9 sm:w-9 rounded-full shadow-[0_8px_12px_rgba(112,150,179,0.24),inset_0_1px_0_rgba(255,255,255,0.95)] transition-all ${
									loadingScreensEnabled
										? "translate-x-[2.35rem] sm:translate-x-[2.85rem] bg-cyan-50"
										: theme === "dark"
											? "translate-x-1 bg-slate-200"
											: "translate-x-1 bg-cyan-50"
								}`}
							/>
							<span className="sr-only">Toggle loading screens</span>
						</button>
					</div>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
					<div className={`rounded-2xl border p-4 sm:p-5 ${theme === "dark" ? "bg-slate-800/50 border-white/8" : "bg-[#e1f9fd]/84 border-[#daf7fc]"}`}>
						<div className={`text-xs font-bold uppercase tracking-[0.18em] ${theme === "dark" ? "text-slate-500" : "text-slate-400"}`}>
							Current mode
						</div>
						<div className={`mt-2 sm:mt-3 text-xl sm:text-2xl font-bold ${theme === "dark" ? "text-white" : "text-slate-800"}`}>
							{loadingScreensEnabled ? "Cinematic" : "Instant"}
						</div>
						<p className={`mt-2 text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`}>
							{loadingScreensEnabled
								? "Apps glide in with a startup flourish."
								: "Apps pop open right away."}
						</p>
					</div>

					<div className={`rounded-2xl border p-4 sm:p-5 ${theme === "dark" ? "bg-slate-800/50 border-white/8" : "bg-[#e1f9fd]/84 border-[#daf7fc]"}`}>
						<div className={`text-xs font-bold uppercase tracking-[0.18em] ${theme === "dark" ? "text-slate-500" : "text-slate-400"}`}>
							Why it matters
						</div>
						<ul className={`mt-2 sm:mt-3 space-y-1.5 text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`}>
							<li>Cinematic: a little sweeter and more theatrical.</li>
							<li>Instant: quicker when you want to hop around.</li>
							<li>Saved locally for next visit.</li>
						</ul>
					</div>
				</div>

				<div className={`rounded-2xl border p-4 sm:p-5 ${theme === "dark" ? "bg-slate-800/50 border-white/8" : "bg-[#e1f9fd]/84 border-[#daf7fc]"}`}>
					<div>
						<h3 className={`font-bold ${theme === "dark" ? "text-white" : "text-slate-800"}`}>Theme mode</h3>
						<p className={`mt-1 sm:mt-2 text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`}>
							Pick a favorite mood or let the console follow your device.
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
												: "border-cyan-200 bg-cyan-50/90 text-sky-900"
											: theme === "dark"
												? "border-white/8 bg-slate-900/30 text-slate-300 hover:border-sky-200/15"
												: "border-[#daf7fc] bg-[#e4fbfe]/76 text-sky-800 hover:border-cyan-200"
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
