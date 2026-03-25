import { Heart, Sparkles, Zap } from "pixelarticons/react";
import { motion } from "motion/react";
import type { ThemeMode } from "@/components/launcher/types";

const PROFILE_FACTS = [
	["Name", "Chunli"],
	["Alias", "Chunli.exe"],
	["Base", "Online, bouncing between design systems, ideas, and dreamy UI experiments"],
	["Status", "Open to select freelance, design direction, and frontend collaborations"],
] as const;

const PROFILE_CHIPS = [
	"Interface art direction",
	"Frontend systems and component architecture",
	"Motion-led product presentation",
	"Playful product polish",
] as const;

const ABOUT_TRAITS = [
	{
		title: "Interface Direction",
		description:
			"I like screens that feel staged, tactile, and a little collectible. The goal is never just utility. It is utility with a point of view.",
		icon: <Sparkles className="h-5 w-5" />,
		accent: "from-cyan-300 via-sky-400 to-blue-500",
	},
	{
		title: "Build Practice",
		description:
			"The code side focuses on reusable systems, responsive behavior, and motion that helps the interface feel alive instead of merely animated.",
		icon: <Zap className="h-5 w-5" />,
		accent: "from-emerald-300 via-lime-400 to-yellow-300",
	},
	{
		title: "Taste Profile",
		description:
			"Soft hardware cues, toy-like clarity, and a little weirdness. Enough charm to stay memorable, enough structure to stay useful.",
		icon: <Heart className="h-5 w-5" />,
		accent: "from-pink-400 via-fuchsia-500 to-orange-400",
	},
] as const;

const ABOUT_SIGNALS = [
	{ label: "Frontend Craft", value: "94%", width: "94%" },
	{ label: "Visual Systems", value: "92%", width: "92%" },
	{ label: "Interaction Polish", value: "96%", width: "96%" },
	{ label: "Playful Restraint", value: "89%", width: "89%" },
] as const;

const CURRENT_ROTATION = [
	"Launcher shells and console-inspired UI framing",
	"Component systems that keep their personality",
	"Motion timing that feels sweet instead of noisy",
	"Interfaces that read like tiny worlds with their own rules",
] as const;

const STUDIO_NOTES = [
	"Build the design language from the interaction model outward.",
	"Treat every panel like a product surface, not a plain content box.",
	"Keep whimsy visible, but never at the expense of hierarchy.",
	"Make the interface memorable before it becomes familiar.",
] as const;

export function AboutContent({ theme }: { theme: ThemeMode }) {
	const isDark = theme === "dark";

	return (
		<div className="h-full space-y-6 overflow-y-auto p-6 wii-u-scrollbar">
			<motion.section
				initial={{ opacity: 0, y: 18 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.35, ease: "easeOut" }}
				className="launcher-soft-hero"
			>
				<div className="pointer-events-none absolute inset-0 bg-stripes opacity-10" />
				<div className="relative flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
					<div className="max-w-4xl">
						<div className="launcher-mini-tab">
							<Sparkles className="h-4 w-4" />
							Identity Module
						</div>
						<h2 className={`mt-4 max-w-3xl text-4xl font-bold leading-[1.08] md:text-6xl ${isDark ? "text-white" : "text-slate-800"}`}>
							Chunli, translated into panels, presets, and a slightly over-loved UI brain.
						</h2>
						<p className={`mt-5 max-w-3xl text-[1.02rem] leading-8 ${isDark ? "text-slate-300" : "text-sky-900/80"}`}>
							This page works like a cheerful operator card instead of a formal bio. It
							packs the who, what, and why into soft console panels so the introduction
							feels more like opening a favorite device than reading a resume block.
						</p>
					</div>

					<div className="grid grid-cols-3 gap-3">
						{[
							{ label: "Mode", value: "Playful" },
							{ label: "Focus", value: "UI" },
							{ label: "Signal", value: "Live" },
						].map((item) => (
							<div key={item.label} className="launcher-stat-tile min-w-[112px]">
								<div className={`text-xs uppercase tracking-[0.16em] ${isDark ? "text-slate-500" : "text-sky-700/80"}`}>
									{item.label}
								</div>
								<div className="mt-2 text-xl font-bold">{item.value}</div>
							</div>
						))}
					</div>
				</div>
			</motion.section>

			<section className="grid gap-4 xl:grid-cols-[1.04fr_0.96fr]">
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3, delay: 0.06 }}
					className={`rounded-[30px] border p-5 md:p-6 ${
						isDark
							? "border-white/8 bg-slate-900/55"
							: "border-[#daf7fc] bg-[linear-gradient(180deg,rgba(232,252,255,0.96),rgba(214,246,251,0.88))] shadow-[0_18px_36px_rgba(67,152,184,0.1)]"
					}`}
				>
					<div className={`text-xs uppercase tracking-[0.18em] ${isDark ? "text-slate-500" : "text-cyan-700"}`}>
						Bio
					</div>
					<div className={`mt-4 space-y-4 text-[0.98rem] leading-8 ${isDark ? "text-slate-300" : "text-sky-900/78"}`}>
						<p>
							Chunli builds frontend work that feels intentional from the first glance.
							The sweet spot is where interface design, motion, and system thinking all
							click into the same little universe.
						</p>
						<p>
							I gravitate toward launcher-like navigation, rounded glassy shells, and
							layouts that feel collected rather than generic. Even when the work is
							playful, the structure underneath still needs to be practical and sturdy.
						</p>
						<p>
							The bigger aim is simple: make products that are clear enough to use fast,
							but distinct enough that they leave a taste in your memory after you close
							the tab.
						</p>
					</div>

					<div className="mt-6 flex flex-wrap gap-2">
						{PROFILE_CHIPS.map((tag) => (
							<span
								key={tag}
								className={`rounded-full border px-4 py-2 text-sm ${
									isDark
										? "border-white/10 bg-slate-950/35 text-slate-200"
										: "border-[#daf7fc] bg-[#eafcff]/92 text-sky-900"
								}`}
							>
								{tag}
							</span>
						))}
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3, delay: 0.12 }}
					className={`rounded-[30px] border p-5 md:p-6 ${
						isDark
							? "border-white/8 bg-slate-900/55"
							: "border-[#daf7fc] bg-[linear-gradient(180deg,rgba(229,252,255,0.96),rgba(208,244,250,0.88))] shadow-[0_18px_36px_rgba(67,152,184,0.1)]"
					}`}
				>
					<div className="flex items-start justify-between gap-4">
						<div>
							<div className={`text-xs uppercase tracking-[0.18em] ${isDark ? "text-slate-500" : "text-cyan-700"}`}>
								Profile Card
							</div>
							<div className={`mt-2 text-2xl font-bold ${isDark ? "text-white" : "text-slate-800"}`}>
								Operator Readout
							</div>
						</div>
						<div
							className={`inline-flex h-11 w-11 items-center justify-center rounded-full border text-sm font-bold ${
								isDark
									? "border-white/10 bg-slate-950/45 text-sky-200"
									: "border-[#daf7fc] bg-[#eafcff]/92 text-sky-700"
							}`}
						>
							ID
						</div>
					</div>

					<div className="mt-5 space-y-4">
						{PROFILE_FACTS.map(([label, value]) => (
							<div
								key={label}
								className={`grid gap-2 border-b pb-4 md:grid-cols-[132px_1fr] ${
									isDark ? "border-white/8" : "border-cyan-200/70"
								}`}
							>
								<div className={`${isDark ? "text-slate-500" : "text-sky-700/75"}`}>{label}</div>
								<div className={`leading-7 ${isDark ? "text-slate-200" : "text-sky-950/85"}`}>{value}</div>
							</div>
						))}
					</div>

					<div className={`mt-5 rounded-[24px] border p-4 ${isDark ? "border-white/8 bg-slate-950/35" : "border-[#daf7fc] bg-[#ecfdff]/90"}`}>
						<div className={`text-xs uppercase tracking-[0.16em] ${isDark ? "text-slate-500" : "text-cyan-700"}`}>
							Vibe Check
						</div>
						<p className={`mt-3 text-sm leading-7 ${isDark ? "text-slate-300" : "text-sky-900/78"}`}>
							Soft-console energy, frontend rigor, and a stubborn refusal to let polished
							work become visually anonymous.
						</p>
					</div>
				</motion.div>
			</section>

			<section className="grid gap-4 md:grid-cols-3">
				{ABOUT_TRAITS.map((trait, index) => (
					<motion.div
						key={trait.title}
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3, delay: 0.14 + index * 0.06 }}
						className={`relative overflow-hidden rounded-[28px] border p-5 ${
							isDark
								? "border-white/8 bg-[linear-gradient(180deg,rgba(15,23,42,0.78),rgba(2,6,23,0.88))]"
								: "border-[#daf7fc] bg-[linear-gradient(180deg,rgba(235,253,255,0.96),rgba(214,246,251,0.86))] shadow-[0_18px_36px_rgba(67,152,184,0.08)]"
						}`}
					>
						<div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${trait.accent}`} />
						<div className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${trait.accent} text-white shadow-lg`}>
							{trait.icon}
						</div>
						<h3 className={`mt-4 text-xl font-bold ${isDark ? "text-white" : "text-slate-800"}`}>
							{trait.title}
						</h3>
						<p className={`mt-3 text-sm leading-7 ${isDark ? "text-slate-400" : "text-sky-900/74"}`}>
							{trait.description}
						</p>
					</motion.div>
				))}
			</section>

			<section className="grid gap-4 xl:grid-cols-[1.08fr_0.92fr]">
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3, delay: 0.28 }}
					className={`rounded-[28px] border p-5 ${
						isDark
							? "border-cyan-200/10 bg-slate-950/45"
							: "border-[#daf7fc] bg-[linear-gradient(180deg,rgba(234,253,255,0.96),rgba(211,245,251,0.88))] shadow-[0_18px_36px_rgba(67,152,184,0.08)]"
					}`}
				>
					<div className="flex items-center justify-between">
						<div>
							<div className={`text-xs uppercase tracking-[0.18em] ${isDark ? "text-slate-500" : "text-cyan-700"}`}>
								Signal Board
							</div>
							<div className={`mt-2 text-2xl font-bold ${isDark ? "text-white" : "text-slate-800"}`}>
								Craft Meter
							</div>
						</div>
						<div
							className={`rounded-full px-3 py-1 text-sm font-bold ${
								isDark ? "bg-emerald-400/12 text-emerald-300" : "bg-cyan-50 text-cyan-800"
							}`}
						>
							System Calm
						</div>
					</div>

					<div className="mt-5 space-y-4">
						{ABOUT_SIGNALS.map((item, index) => (
							<div key={item.label}>
								<div className="mb-2 flex items-center justify-between text-sm">
									<span className={isDark ? "text-slate-300" : "text-sky-900/78"}>{item.label}</span>
									<span className={isDark ? "text-slate-500" : "text-sky-700/70"}>{item.value}</span>
								</div>
								<div className={`h-3 rounded-full ${isDark ? "bg-slate-900" : "bg-cyan-100/90"}`}>
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
				</motion.div>

				<div className="grid gap-4">
					<motion.div
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3, delay: 0.32 }}
						className={`rounded-[28px] border p-5 ${
							isDark
								? "border-white/8 bg-slate-950/40"
								: "border-[#daf7fc] bg-[linear-gradient(180deg,rgba(235,253,255,0.96),rgba(216,247,251,0.88))] shadow-[0_18px_36px_rgba(67,152,184,0.08)]"
						}`}
					>
						<div className={`text-xs uppercase tracking-[0.18em] ${isDark ? "text-slate-500" : "text-cyan-700"}`}>
							Current Rotation
						</div>
						<div className={`mt-2 text-2xl font-bold ${isDark ? "text-white" : "text-slate-800"}`}>
							What I Keep Clicking On
						</div>
						<ul className={`mt-5 space-y-3 text-sm leading-6 ${isDark ? "text-slate-300" : "text-sky-900/76"}`}>
							{CURRENT_ROTATION.map((note, index) => (
								<li key={note} className="flex gap-3">
									<span
										className={`mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full ${
											index % 2 === 0
												? isDark
													? "bg-cyan-300"
													: "bg-cyan-500"
												: isDark
													? "bg-pink-300"
													: "bg-sky-500"
										}`}
									/>
									{note}
								</li>
							))}
						</ul>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3, delay: 0.36 }}
						className={`rounded-[28px] border p-5 ${
							isDark
								? "border-white/8 bg-slate-950/40"
								: "border-[#daf7fc] bg-[linear-gradient(180deg,rgba(235,253,255,0.96),rgba(216,247,251,0.88))] shadow-[0_18px_36px_rgba(67,152,184,0.08)]"
						}`}
					>
						<div className={`text-xs uppercase tracking-[0.18em] ${isDark ? "text-slate-500" : "text-cyan-700"}`}>
							Studio Notes
						</div>
						<div className={`mt-2 text-2xl font-bold ${isDark ? "text-white" : "text-slate-800"}`}>
							Keep-It-Cute Rules
						</div>
						<ul className={`mt-5 space-y-3 text-sm leading-6 ${isDark ? "text-slate-300" : "text-sky-900/76"}`}>
							{STUDIO_NOTES.map((note, index) => (
								<li key={note} className="flex gap-3">
									<span
										className={`mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full ${
											index % 3 === 0
												? isDark
													? "bg-cyan-300"
													: "bg-cyan-500"
												: index % 3 === 1
													? isDark
														? "bg-pink-300"
														: "bg-pink-500"
													: isDark
														? "bg-emerald-300"
														: "bg-emerald-500"
										}`}
									/>
									{note}
								</li>
							))}
						</ul>
					</motion.div>
				</div>
			</section>
		</div>
	);
}
