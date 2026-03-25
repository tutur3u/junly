import { Comment, Link, Mail, Rss } from "pixelarticons/react";
import type { ThemeMode } from "@/components/launcher/types";

const CONTACT_MODULES = [
	{
		title: "Best For",
		value: "Frontend builds, interface direction, portfolio refreshes",
		icon: <Mail className="h-5 w-5" />,
	},
	{
		title: "Working Style",
		value: "Async-friendly, collaborative, and detail-obsessed",
		icon: <Comment className="h-5 w-5" />,
	},
	{
		title: "Reply Window",
		value: "Usually within a few business days for well-scoped briefs",
		icon: <Link className="h-5 w-5" />,
	},
] as const;

export function ContactContent({ theme }: { theme: ThemeMode }) {
	const isDark = theme === "dark";

	return (
		<div className="h-full overflow-y-auto p-6 wii-u-scrollbar">
			<div
				className="launcher-soft-hero"
			>
				<div className="pointer-events-none absolute inset-0 bg-stripes opacity-10" />

				<div className="relative grid gap-6 xl:grid-cols-[1.02fr_0.98fr]">
					<div>
						<div className="launcher-mini-tab">
							<Rss className="h-4 w-4" />
							Contact Console
						</div>
						<h2 className={`mt-5 max-w-2xl text-4xl font-bold leading-[1.15] md:text-5xl ${isDark ? "text-white" : "text-slate-800"}`}>
							Fun briefs, cool product ideas, and weird little internet worlds are all welcome here.
						</h2>
						<p className={`mt-5 max-w-2xl text-[1.02rem] leading-8 ${isDark ? "text-slate-300" : "text-slate-600"}`}>
							If a site or interface needs more charm, more personality, or just a
							better sense of itself, that is the sweet spot. The most useful messages
							usually mention the goal, the audience, the timing, and the vibe the
							finished thing should leave behind.
						</p>

						<div className="mt-6 grid gap-3 md:grid-cols-3">
							{CONTACT_MODULES.map((module) => (
								<div
									key={module.title}
									className={`rounded-[24px] border p-4 ${
										isDark
											? "border-white/8 bg-slate-950/38"
											: "border-white/90 bg-white/74"
									}`}
								>
									<div
										className={`inline-flex h-10 w-10 items-center justify-center rounded-2xl ${
											isDark ? "bg-cyan-400/10 text-cyan-200" : "bg-cyan-50 text-cyan-700"
										}`}
									>
										{module.icon}
									</div>
									<div className={`mt-4 text-xs uppercase tracking-[0.16em] ${isDark ? "text-slate-500" : "text-slate-400"}`}>
										{module.title}
									</div>
									<div className={`mt-2 text-sm leading-7 ${isDark ? "text-slate-200" : "text-slate-700"}`}>
										{module.value}
									</div>
								</div>
							))}
						</div>
					</div>

					<div
						className={`rounded-[30px] border p-5 md:p-6 ${
							isDark
								? "border-white/8 bg-slate-950/40"
								: "border-white/90 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(243,249,255,0.8))]"
						}`}
					>
						<div className="flex items-start justify-between gap-4">
							<div>
								<div className={`text-xs uppercase tracking-[0.18em] ${isDark ? "text-slate-500" : "text-slate-400"}`}>
									Message Queue
								</div>
								<div className={`mt-2 text-2xl font-bold ${isDark ? "text-white" : "text-slate-800"}`}>
									Brief Sketch
								</div>
							</div>
							<div
								className={`rounded-full px-3 py-1 text-sm font-bold ${
									isDark ? "bg-amber-400/12 text-amber-300" : "bg-amber-50 text-amber-700"
								}`}
							>
								UI Only
							</div>
						</div>

						<p className={`mt-4 text-sm leading-7 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
							This is a styled preview rather than a live form, but it shows the kind of
							notes that make collaboration smoother and more fun from the start.
						</p>

						<div className="mt-5 space-y-4">
							<div>
								<label className={`mb-2 block text-xs font-bold uppercase tracking-[0.16em] ${isDark ? "text-slate-500" : "text-slate-400"}`}>
									Name / Studio
								</label>
								<input
									type="text"
									readOnly
									value="Who is asking?"
									className={`wii-u-field w-full rounded-2xl border px-4 py-3 ${
										isDark
											? "border-slate-700 text-slate-300"
											: "border-slate-200 text-slate-600"
									}`}
								/>
							</div>

							<div>
								<label className={`mb-2 block text-xs font-bold uppercase tracking-[0.16em] ${isDark ? "text-slate-500" : "text-slate-400"}`}>
									What Needs Help
								</label>
								<input
									type="text"
									readOnly
									value="Landing page, system refresh, portfolio shell, product UI..."
									className={`wii-u-field w-full rounded-2xl border px-4 py-3 ${
										isDark
											? "border-slate-700 text-slate-300"
											: "border-slate-200 text-slate-600"
									}`}
								/>
							</div>

							<div>
								<label className={`mb-2 block text-xs font-bold uppercase tracking-[0.16em] ${isDark ? "text-slate-500" : "text-slate-400"}`}>
									Desired Feel
								</label>
								<textarea
									readOnly
									value="Share the audience, timeline, references to avoid, and what the finished interface should make people feel."
									className={`wii-u-field h-32 w-full resize-none rounded-2xl border px-4 py-3 leading-7 ${
										isDark
											? "border-slate-700 text-slate-300"
											: "border-slate-200 text-slate-600"
									}`}
								/>
							</div>

							<button
								type="button"
								aria-disabled="true"
								className="wii-u-primary-button w-full rounded-2xl py-3 font-bold text-white opacity-85"
							>
								Transmit Brief Preview
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
