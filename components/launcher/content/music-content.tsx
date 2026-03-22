import { Album, Play, Volume } from "pixelarticons/react";
import Image from "next/image";
import { MUSIC_TRACKS } from "@/components/launcher/content-data";
import type { ThemeMode } from "@/components/launcher/types";

type MusicContentProps = {
	theme: ThemeMode;
	activeTrack: string | null;
	setActiveTrack: (value: string | null) => void;
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
						: "border-white/85 bg-[radial-gradient(circle_at_top_left,rgba(244,114,182,0.12),transparent_20%),linear-gradient(180deg,rgba(255,255,255,0.94),rgba(245,239,255,0.82))]"
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
										: "border-white/90 bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,0.95),transparent_22%),linear-gradient(180deg,rgba(250,250,255,0.98),rgba(224,236,248,0.96))]"
								}`}
							>
								<div className={`absolute inset-8 rounded-full border ${isDark ? "border-white/8" : "border-slate-200/70"}`} />
								<div className={`absolute h-26 w-26 rounded-full bg-gradient-to-br ${trackData.accent} opacity-70`} />
								<div
									className={`relative flex h-20 w-20 items-center justify-center rounded-full border ${
										isDark ? "border-white/10 bg-slate-950/85" : "border-white/90 bg-white/95"
									}`}
								>
									<Album className="h-10 w-10 text-white" />
								</div>
							</div>
						</div>
					</div>

					<div>
						<div
							className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-bold uppercase tracking-[0.18em] ${
								isDark
									? "border border-pink-200/10 bg-pink-400/10 text-pink-200"
									: "border border-white/80 bg-pink-100/80 text-pink-700"
							}`}
						>
							<Volume className="h-4 w-4" />
							Now Spinning
						</div>
						<h2 className={`mt-4 text-3xl font-bold ${isDark ? "text-white" : "text-slate-800"}`}>{trackData.title}</h2>
						<p className={`mt-2 text-lg ${isDark ? "text-slate-300" : "text-slate-600"}`}>{trackData.artist}</p>
						<p className={`mt-4 max-w-xl ${isDark ? "text-slate-400" : "text-slate-500"}`}>
							A stylized music placeholder with a featured track, visualizer motion, and a queue designed to feel like a console-native media app.
						</p>

						<div className="mt-6 flex flex-wrap gap-3">
							<button type="button" className="wii-u-primary-button inline-flex items-center gap-2 rounded-full px-4 py-2 font-bold text-white">
								<Play className="h-4 w-4 fill-current" />
								Play Demo Mix
							</button>
							<div
								className={`inline-flex items-center rounded-full border px-4 py-2 font-bold ${
									isDark ? "border-white/8 bg-slate-950/35 text-slate-200" : "border-white/80 bg-white/65 text-slate-700"
								}`}
							>
								{trackData.length}
							</div>
							<div
								className={`inline-flex items-center rounded-full border px-4 py-2 text-sm ${
									isDark ? "border-white/8 bg-slate-950/35 text-slate-400" : "border-white/80 bg-white/65 text-slate-500"
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
				<div className={`rounded-[28px] border p-5 ${isDark ? "border-white/8 bg-slate-900/55" : "border-white/85 bg-white/72"}`}>
					<div className="flex items-center justify-between">
						<div>
							<div className={`text-xs uppercase tracking-[0.18em] ${isDark ? "text-slate-500" : "text-slate-400"}`}>Queue</div>
							<div className={`mt-2 text-2xl font-bold ${isDark ? "text-white" : "text-slate-800"}`}>Featured Tracks</div>
						</div>
						<div className={`text-sm ${isDark ? "text-slate-500" : "text-slate-400"}`}>{MUSIC_TRACKS.length} items</div>
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
												: "border-pink-200 bg-pink-50/80"
											: isDark
												? "border-white/8 bg-slate-950/28 hover:border-pink-200/10"
												: "border-white/80 bg-white/55 hover:border-pink-100"
									}`}
								>
									<div className="flex items-center gap-4">
										<div className={`relative h-16 w-16 overflow-hidden rounded-2xl ${isDark ? "bg-slate-900" : "bg-slate-100"}`}>
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

				<div className={`rounded-[28px] border p-5 ${isDark ? "border-white/8 bg-slate-900/55" : "border-white/85 bg-white/72"}`}>
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
							["Session", "Visualizer enabled"],
							["Theme sync", isDark ? "Night listening mode" : "Day listening mode"],
						].map(([label, value]) => (
							<div
								key={label}
								className={`flex items-center justify-between rounded-2xl border px-4 py-3 ${
									isDark ? "border-white/8 bg-slate-950/35 text-slate-300" : "border-white/80 bg-white/60 text-slate-600"
								}`}
							>
								<span className={`text-sm uppercase tracking-[0.14em] ${isDark ? "text-slate-500" : "text-slate-400"}`}>{label}</span>
								<span className={`font-bold ${isDark ? "text-slate-100" : "text-slate-800"}`}>{value}</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
