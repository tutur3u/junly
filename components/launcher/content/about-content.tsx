import { Heart, Sparkles, Trophy, Zap } from "pixelarticons/react";
import { motion } from "motion/react";
import Image from "next/image";
import type { ThemeMode } from "@/components/launcher/types";

const ABOUT_TRAITS = [
	{
		title: "Design Direction",
		description:
			"Soft-console interfaces, nostalgic product worlds, and tactile UI that feels collectible.",
		icon: <Sparkles className="h-5 w-5" />,
		accent: "from-cyan-300 via-sky-400 to-blue-500",
	},
	{
		title: "Build Style",
		description:
			"Frontend systems shaped around motion, playful interaction, and memorable visual identity.",
		icon: <Zap className="h-5 w-5" />,
		accent: "from-emerald-300 via-lime-400 to-yellow-300",
	},
	{
		title: "Creative Energy",
		description:
			"A balance of polish and warmth, with enough weirdness to keep things from feeling generic.",
		icon: <Heart className="h-5 w-5" />,
		accent: "from-pink-400 via-fuchsia-500 to-orange-400",
	},
] as const;

const ABOUT_SIGNALS = [
	{ label: "Frontend Craft", value: "94%", width: "94%" },
	{ label: "Visual Systems", value: "91%", width: "91%" },
	{ label: "Interaction Polish", value: "96%", width: "96%" },
	{ label: "Experimental Energy", value: "88%", width: "88%" },
] as const;

export function AboutContent({ theme }: { theme: ThemeMode }) {
	const isDark = theme === "dark";

	return (
		<div className="h-full space-y-6 overflow-y-auto p-6 wii-u-scrollbar">
			<motion.section
				initial={{ opacity: 0, y: 18 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.35, ease: "easeOut" }}
				className={`relative overflow-hidden rounded-[32px] border p-6 md:p-7 ${
					isDark
						? "border-cyan-200/10 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(244,114,182,0.14),transparent_22%),linear-gradient(180deg,rgba(10,20,31,0.98),rgba(8,16,27,0.98))]"
						: "border-white/90 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.12),transparent_20%),radial-gradient(circle_at_bottom_right,rgba(244,114,182,0.12),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.96),rgba(240,248,255,0.88))]"
				}`}
			>
				<div className="pointer-events-none absolute inset-0 bg-stripes opacity-10" />
				<div
					className={`pointer-events-none absolute -top-10 right-16 h-44 w-44 rounded-full blur-3xl ${
						isDark ? "bg-cyan-400/14" : "bg-cyan-200/60"
					}`}
				/>
				<div
					className={`pointer-events-none absolute bottom-0 left-10 h-36 w-36 rounded-full blur-3xl ${
						isDark ? "bg-pink-400/12" : "bg-pink-200/60"
					}`}
				/>

				<div className="relative grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
					<div className="space-y-5">
						<div
							className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm uppercase tracking-[0.2em] ${
								isDark
									? "border-cyan-200/10 bg-cyan-400/10 text-cyan-200"
									: "border-white/90 bg-cyan-50/85 text-cyan-700"
							}`}
						>
							<Trophy className="h-4 w-4" />
							Player Profile
						</div>

						<div className="flex flex-col gap-5 md:flex-row md:items-center">
							<div
								className={`relative h-28 w-28 flex-shrink-0 overflow-hidden rounded-[30px] border-4 shadow-[0_20px_40px_rgba(0,0,0,0.12)] ${
									isDark ? "border-white/10 bg-slate-900" : "border-white bg-sky-100"
								}`}
							>
								<Image
									src="https://picsum.photos/seed/chunli/320/320"
									alt="Chunli"
									fill
									className="object-cover"
									referrerPolicy="no-referrer"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-white/10" />
							</div>

							<div className="min-w-0">
								<h2 className={`text-4xl font-bold md:text-5xl ${isDark ? "text-white" : "text-slate-800"}`}>
									Chunli
								</h2>
								<p className={`mt-2 text-lg md:text-xl ${isDark ? "text-slate-300" : "text-slate-600"}`}>
									Digital creator building playful interfaces with console-era soul.
								</p>
								<div className="mt-4 flex flex-wrap gap-2">
									{["UI Worldbuilder", "Frontend Developer", "Motion-Loving Designer"].map((tag) => (
										<span
											key={tag}
											className={`rounded-full border px-3 py-1 text-sm ${
												isDark
													? "border-white/10 bg-white/5 text-slate-200"
													: "border-white/90 bg-white/70 text-slate-700"
											}`}
										>
											{tag}
										</span>
									))}
								</div>
							</div>
						</div>

						<div className={`max-w-3xl space-y-4 text-[1.05rem] leading-8 ${isDark ? "text-slate-300" : "text-slate-600"}`}>
							<p>
								I like websites that feel like places, not templates. My work leans
								into nostalgia, tactile depth, and interface fiction so a portfolio
								can feel like a world you enter instead of a page you skim.
							</p>
							<p>
								That usually means rounded hardware-inspired surfaces, cinematic
								transitions, and playful systems that still read clearly. The goal is
								not just polish. It is atmosphere, memory, and a sense that every tap
								or hover belongs to a larger universe.
							</p>
						</div>

						<div className="grid gap-3 sm:grid-cols-3">
							{[
								["Rank", "Web Weaver"],
								["Current Arc", "Wii U-style portfolio OS"],
								["Mood", "Creative and dangerously specific"],
							].map(([label, value]) => (
								<div
									key={label}
									className={`rounded-[24px] border px-4 py-4 ${
										isDark
											? "border-white/8 bg-slate-950/38 text-slate-200"
											: "border-white/85 bg-white/72 text-slate-700"
									}`}
								>
									<div className={`text-xs uppercase tracking-[0.18em] ${isDark ? "text-slate-500" : "text-slate-400"}`}>
										{label}
									</div>
									<div className={`mt-3 font-bold ${isDark ? "text-white" : "text-slate-800"}`}>
										{value}
									</div>
								</div>
							))}
						</div>
					</div>

					<div className="grid gap-4">
						<div
							className={`rounded-[28px] border p-5 ${
								isDark ? "border-cyan-200/10 bg-slate-950/45" : "border-white/90 bg-white/80"
							}`}
						>
							<div className="flex items-center justify-between">
								<div>
									<div className={`text-xs uppercase tracking-[0.18em] ${isDark ? "text-slate-500" : "text-slate-400"}`}>
										Signal Board
									</div>
									<div className={`mt-2 text-2xl font-bold ${isDark ? "text-white" : "text-slate-800"}`}>
										Craft Readout
									</div>
								</div>
								<div
									className={`rounded-full px-3 py-1 text-sm font-bold ${
										isDark ? "bg-emerald-400/12 text-emerald-300" : "bg-emerald-50 text-emerald-700"
									}`}
								>
									System Calm
								</div>
							</div>

							<div className="mt-5 space-y-4">
								{ABOUT_SIGNALS.map((item, index) => (
									<div key={item.label}>
										<div className="mb-2 flex items-center justify-between text-sm">
											<span className={isDark ? "text-slate-300" : "text-slate-600"}>{item.label}</span>
											<span className={isDark ? "text-slate-500" : "text-slate-400"}>{item.value}</span>
										</div>
										<div className={`h-3 rounded-full ${isDark ? "bg-slate-900" : "bg-sky-100/80"}`}>
											<motion.div
												initial={{ width: 0 }}
												animate={{ width: item.width }}
												transition={{ duration: 0.55, delay: 0.08 * index, ease: "easeOut" }}
												className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500"
											/>
										</div>
									</div>
								))}
							</div>
						</div>

						<div
							className={`rounded-[28px] border p-5 ${
								isDark ? "border-white/8 bg-slate-950/40" : "border-white/90 bg-white/76"
							}`}
						>
							<div className={`text-xs uppercase tracking-[0.18em] ${isDark ? "text-slate-500" : "text-slate-400"}`}>
								Right Now
							</div>
							<div className={`mt-2 text-2xl font-bold ${isDark ? "text-white" : "text-slate-800"}`}>
								Current Focus
							</div>
							<ul className={`mt-5 space-y-3 text-sm leading-6 ${isDark ? "text-slate-300" : "text-slate-600"}`}>
								<li className="flex gap-3">
									<span className={`mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full ${isDark ? "bg-cyan-300" : "bg-cyan-500"}`} />
									Turning navigation into a console-like ritual instead of a plain page transition.
								</li>
								<li className="flex gap-3">
									<span className={`mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full ${isDark ? "bg-pink-300" : "bg-pink-500"}`} />
									Making dark mode feel authored, not simply inverted.
								</li>
								<li className="flex gap-3">
									<span className={`mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full ${isDark ? "bg-emerald-300" : "bg-emerald-500"}`} />
									Building interfaces that leave behind a visual memory after one visit.
								</li>
							</ul>
						</div>
					</div>
				</div>
			</motion.section>

			<section className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
				<div className="grid gap-4 md:grid-cols-3">
					{ABOUT_TRAITS.map((trait, index) => (
						<motion.div
							key={trait.title}
							initial={{ opacity: 0, y: 16 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.3, delay: 0.08 * index }}
							className={`relative overflow-hidden rounded-[28px] border p-5 ${
								isDark
									? "border-white/8 bg-[linear-gradient(180deg,rgba(15,23,42,0.78),rgba(2,6,23,0.88))]"
									: "border-white/90 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(245,249,255,0.78))]"
							}`}
						>
							<div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${trait.accent}`} />
							<div className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${trait.accent} text-white shadow-lg`}>
								{trait.icon}
							</div>
							<h3 className={`mt-4 text-xl font-bold ${isDark ? "text-white" : "text-slate-800"}`}>
								{trait.title}
							</h3>
							<p className={`mt-3 text-sm leading-7 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
								{trait.description}
							</p>
						</motion.div>
					))}
				</div>

				<div
					className={`relative overflow-hidden rounded-[30px] border p-5 ${
						isDark
							? "border-white/8 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.12),transparent_26%),linear-gradient(180deg,rgba(15,23,42,0.82),rgba(2,6,23,0.94))]"
							: "border-white/90 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.1),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.95),rgba(242,248,255,0.84))]"
					}`}
				>
					<div className="pointer-events-none absolute inset-0 bg-stripes opacity-5" />
					<div className="relative">
						<div className={`text-xs uppercase tracking-[0.18em] ${isDark ? "text-slate-500" : "text-slate-400"}`}>
							Philosophy
						</div>
						<h3 className={`mt-2 text-2xl font-bold ${isDark ? "text-white" : "text-slate-800"}`}>
							What I want people to feel
						</h3>
						<p className={`mt-4 text-[1.02rem] leading-8 ${isDark ? "text-slate-300" : "text-slate-600"}`}>
							I want the work to feel welcoming, surprising, and very obviously cared
							for. Even when the visuals are playful, the structure should still feel
							deliberate. Every panel, hover, and transition should tell you that
							someone obsessed over how this world fits together.
						</p>

						<div className="mt-6 grid gap-3 sm:grid-cols-2">
							{[
								["Favorite Ingredient", "Glass, glow, and rounded hardware metaphors"],
								["Best Outcome", "A portfolio that feels closer to software than slides"],
								["Creative Rule", "If it looks replaceable, it needs more personality"],
								["North Star", "Make the interface memorable before it becomes familiar"],
							].map(([label, value]) => (
								<div
									key={label}
									className={`rounded-[22px] border px-4 py-4 ${
										isDark ? "border-white/8 bg-slate-950/34" : "border-white/85 bg-white/70"
									}`}
								>
									<div className={`text-xs uppercase tracking-[0.15em] ${isDark ? "text-slate-500" : "text-slate-400"}`}>
										{label}
									</div>
									<div className={`mt-2 text-sm leading-6 ${isDark ? "text-slate-200" : "text-slate-700"}`}>
										{value}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
