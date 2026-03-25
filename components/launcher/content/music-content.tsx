import { Album, Play, Volume } from "pixelarticons/react";
import Image from "next/image";
import { MUSIC_TRACKS } from "@/components/launcher/content-data";
import type { ThemeMode } from "@/components/launcher/types";

type MusicContentProps = {
	theme: ThemeMode;
	activeTrack: string | null;
	setActiveTrack: (value: string | null) => void;
};

const TRACK_NOTES: Record<string, string> = {
	"lobby-lights":
		"A soft boot-up groove for the launcher: bright, welcoming, and a little toy-like in the best way.",
	"night-plaza":
		"A slower menu drift built for late-hour browsing, glowing panels, and the quieter side of interface polish.",
	"starlight-bus":
		"A brighter handheld pop cut that pushes the playlist toward motion, optimism, and forward momentum.",
};

export function MusicContent({ theme, activeTrack, setActiveTrack }: MusicContentProps) {
	const isDark = theme === "dark";
	const trackData =
		activeTrack !== null
			? MUSIC_TRACKS.find((track) => track.id === activeTrack) ?? MUSIC_TRACKS[0]
			: MUSIC_TRACKS[0];

	return (
		<div className="h-full overflow-y-auto p-6 wii-u-scrollbar">
			<div
				className={`relative overflow-hidden rounded-[30px] border p-6 ${
					isDark
						? "border-pink-200/10 bg-[radial-gradient(circle_at_top_left,rgba(244,114,182,0.18),transparent_22%),linear-gradient(180deg,rgba(14,24,37,0.98),rgba(8,16,27,0.98))]"
						: "border-[#daf7fc] bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_20%),linear-gradient(180deg,rgba(230,251,255,0.96),rgba(202,241,248,0.86))]"
				}`}
			>
				<div className="pointer-events-none absolute inset-0 bg-stripes opacity-10" />
				<div className="relative grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
					<div className="flex items-center justify-center">
						<div className="relative flex h-72 w-72 items-center justify-center">
							<div
								className={`absolute inset-0 rounded-full bg-gradient-to-br ${trackData.accent} blur-3xl opacity-30 glow-pulse`}
							/>
							<div
								className={`relative flex h-60 w-60 items-center justify-center rounded-full border-[10px] vinyl-spin ${
									isDark
										? "border-white/10 bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,0.16),transparent_24%),linear-gradient(180deg,rgba(32,48,65,0.98),rgba(8,16,27,0.98))]"
										: "border-[#daf7fc] bg-[radial-gradient(circle_at_35%_35%,rgba(236,252,255,0.96),transparent_22%),linear-gradient(180deg,rgba(232,252,255,0.98),rgba(196,239,248,0.96))]"
								}`}
							>
								<div className={`absolute inset-8 rounded-full border ${isDark ? "border-white/8" : "border-cyan-200/80"}`} />
								<div className={`absolute h-26 w-26 rounded-full bg-gradient-to-br ${trackData.accent} opacity-70`} />
								<div
									className={`relative flex h-20 w-20 items-center justify-center rounded-full border ${
										isDark ? "border-white/10 bg-slate-950/85" : "border-[#daf7fc] bg-[#ebfdff]/96"
									}`}
								>
									<Album className="h-10 w-10 text-white" />
								</div>
							</div>
						</div>
					</div>

					<div>
						<div
							className="launcher-mini-tab"
						>
							<Volume className="h-4 w-4" />
							Now Spinning
						</div>
						<h2 className={`mt-4 text-3xl font-bold ${isDark ? "text-white" : "text-slate-800"}`}>{trackData.title}</h2>
						<p className={`mt-2 text-lg ${isDark ? "text-slate-300" : "text-slate-600"}`}>{trackData.artist}</p>
						<p className={`mt-4 max-w-xl ${isDark ? "text-slate-400" : "text-slate-500"}`}>
							{TRACK_NOTES[trackData.id]}
						</p>

						<div className="mt-6 flex flex-wrap gap-3">
							<button type="button" className="wii-u-primary-button inline-flex items-center gap-2 rounded-full px-4 py-2 font-bold text-white">
								<Play className="h-4 w-4 fill-current" />
								Start Session
							</button>
							<div
								className={`inline-flex items-center rounded-full border px-4 py-2 font-bold ${
									isDark ? "border-white/8 bg-slate-950/35 text-slate-200" : "border-[#daf7fc] bg-[#e3fbfe]/80 text-sky-900"
								}`}
							>
								{trackData.length}
							</div>
							<div
								className={`inline-flex items-center rounded-full border px-4 py-2 text-sm ${
									isDark ? "border-white/8 bg-slate-950/35 text-slate-400" : "border-[#daf7fc] bg-[#e3fbfe]/80 text-sky-700"
								}`}
							>
								{trackData.mood}
							</div>
						</div>

						<div className="mt-7 flex items-end justify-between gap-1">
							{[52, 38, 68, 58, 86, 44].map((height, index) => (
								<div
									key={`bar-${trackData.id}-${height}`}
									className={`flex-1 rounded-t-full bg-gradient-to-t ${trackData.accent} visualizer-bar`}
									style={{
										height,
										animationDelay: `${index * 0.15}s`,
										animationDuration: `${0.8 + index * 0.1}s`,
									}}
								/>
							))}
						</div>
					</div>
				</div>
			</div>

			<div className="mt-6 grid gap-5 xl:grid-cols-[0.95fr_1.05fr]">
				<div className={`rounded-[28px] border p-5 ${isDark ? "border-white/8 bg-slate-900/55" : "border-[#daf7fc] bg-[#e0f9fd]/84"}`}>
					<div className="flex items-center justify-between">
						<div>
							<div className={`text-xs uppercase tracking-[0.18em] ${isDark ? "text-slate-500" : "text-slate-400"}`}>Queue</div>
							<div className={`mt-2 text-2xl font-bold ${isDark ? "text-white" : "text-slate-800"}`}>Sound Selection</div>
						</div>
						<div className={`text-sm ${isDark ? "text-slate-500" : "text-slate-400"}`}>{MUSIC_TRACKS.length} tracks</div>
					</div>

					<div className="mt-5 space-y-3">
						{MUSIC_TRACKS.map((track) => {
							const isActive = track.id === trackData.id;

							return (
								<button
									key={track.id}
									type="button"
									onClick={() => setActiveTrack(track.id)}
									className={`w-full cursor-pointer rounded-2xl border p-4 text-left transition-all hover:translate-x-1 ${
										isActive
											? isDark
												? "border-pink-300/20 bg-pink-400/10"
												: "border-cyan-200 bg-cyan-50/90"
											: isDark
												? "border-white/8 bg-slate-950/28 hover:border-pink-200/10"
												: "border-[#daf7fc] bg-[#e5fbfe]/76 hover:border-cyan-200"
									}`}
								>
									<div className="flex items-center gap-4">
										<div className={`relative h-16 w-16 overflow-hidden rounded-2xl ${isDark ? "bg-slate-900" : "bg-cyan-100/70"}`}>
											<Image
												src={`https://picsum.photos/seed/${track.seed}/220/220`}
												alt={track.title}
												fill
												className="object-cover"
												referrerPolicy="no-referrer"
											/>
										</div>
										<div className="min-w-0 flex-1">
											<div className={`font-bold ${isDark ? "text-slate-100" : "text-slate-800"}`}>{track.title}</div>
											<div className={`mt-1 text-sm ${isDark ? "text-slate-400" : "text-slate-500"}`}>{track.artist}</div>
								</div>
								<div className={`text-sm ${isDark ? "text-slate-500" : "text-slate-400"}`}>{track.length}</div>
							</div>
						</button>
							);
						})}
					</div>
				</div>

				<div className={`rounded-[28px] border p-5 ${isDark ? "border-white/8 bg-slate-900/55" : "border-[#daf7fc] bg-[#e0f9fd]/84"}`}>
					<div className="flex items-center justify-between">
						<div>
							<div className={`text-xs uppercase tracking-[0.18em] ${isDark ? "text-slate-500" : "text-slate-400"}`}>Status</div>
							<div className={`mt-2 text-2xl font-bold ${isDark ? "text-white" : "text-slate-800"}`}>Listening Room</div>
						</div>
						<div className="rounded-full px-3 py-1 text-sm font-bold bg-gradient-to-r from-pink-500 to-rose-500 text-white">Live</div>
					</div>

					<div className="mt-5 grid gap-3">
						{[
							["Output", "GamePad speakers"],
							["Preset", "Soft vinyl shimmer"],
							["Session", "Visualizer and queue synced"],
							["Theme Sync", isDark ? "Night listening mode" : "Day listening mode"],
						].map(([label, value]) => (
							<div
								key={label}
								className={`flex items-center justify-between rounded-2xl border px-4 py-3 ${
									isDark ? "border-white/8 bg-slate-950/35 text-slate-300" : "border-[#daf7fc] bg-[#e3fbfe]/78 text-sky-800"
								}`}
							>
								<span className={`text-sm uppercase tracking-[0.14em] ${isDark ? "text-slate-500" : "text-slate-400"}`}>{label}</span>
								<span className={`font-bold ${isDark ? "text-slate-100" : "text-slate-800"}`}>{value}</span>
							</div>
						))}
					</div>

					<div
						className={`mt-4 rounded-[24px] border p-4 ${
							isDark ? "border-white/8 bg-slate-950/35" : "border-[#daf7fc] bg-[#e4fbfe]/80"
						}`}
					>
						<div className={`text-xs uppercase tracking-[0.16em] ${isDark ? "text-slate-500" : "text-slate-400"}`}>
							Room Note
						</div>
						<p className={`mt-3 text-sm leading-7 ${isDark ? "text-slate-300" : "text-slate-600"}`}>
							This corner exists to make the portfolio feel lived in. It behaves less
							like a utility widget and more like the soundtrack wing of the same
							console world.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
