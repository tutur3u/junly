import { Gamepad, Heart, Link, Sparkles, Trophy } from "pixelarticons/react";
import { motion } from "motion/react";
import type { ThemeMode } from "@/components/launcher/types";

const PROFILE_FACTS = [
	["Name", "Cat Tuong"],
	["Call Me", "Chunli"],
	["Role", "Game Designer and Game Artist"],
] as const;

const PROFILE_CHIPS = [
	"Brainstorming fun and unusual game ideas",
	"Experimenting across different genres",
	"Designing experiences that feel a little unconventional",
	"Building prototypes and demos",
	"Drawing pixel art",
	"Creating game assets",
] as const;

const ABOUT_TRAITS = [
	{
		title: "Idea Playground",
		description:
			"I like concepts that start with a strong player feeling and then twist into something a little unexpected. The fun usually lives in that strange extra step.",
		icon: <Sparkles className="h-5 w-5" />,
		accent: "from-cyan-300 via-sky-400 to-blue-500",
	},
	{
		title: "Prototype First",
		description:
			"Prototypes and demos help me test tone, mechanics, and pacing early. I would rather learn from a rough playable build than over-polish a document in isolation.",
		icon: <Gamepad className="h-5 w-5" />,
		accent: "from-emerald-300 via-lime-400 to-yellow-300",
	},
	{
		title: "Art and Assets",
		description:
			"Pixel art, mockups, and supporting assets are part of how I shape a world. The visual side is not decoration after the fact. It is part of the design language.",
		icon: <Heart className="h-5 w-5" />,
		accent: "from-pink-400 via-fuchsia-500 to-orange-400",
	},
] as const;

const CURRENT_ROTATION = [
	"Brainstorming game ideas that feel playful, weird, or slightly off-center",
	"Trying different genres until the concept finds the right shape",
	"Turning early concepts into fast prototypes and small demos",
	"Building pixel-art details and assets that make a world feel lived in",
] as const;

const TOOL_GROUPS = [
	{
		title: "Game Engine",
		items: ["Unity", "Unreal Engine", "RPG Maker", "Twine"],
	},
	{
		title: "Production Planning",
		items: ["Trello", "Excel", "Miro", "Notion", "Word"],
	},
	{
		title: "Game Mockup",
		items: ["Photoshop", "PowerPoint"],
	},
	{
		title: "Game Art",
		items: ["Clip Studio Paint", "Photoshop", "Aseprite", "Procreate"],
	},
] as const;

const FEATURED_LINK = {
	label: "itch.io",
	href: "https://chunlii.itch.io",
	title: "Play Space",
	description:
		"Playable prototypes, experiments, and finished game work that show how the ideas hold up once they are in motion.",
} as const;

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
						<h2
							className={`mt-4 max-w-3xl text-4xl font-bold leading-[1.08] md:text-6xl ${
								isDark ? "text-white" : "text-slate-800"
							}`}
						>
							About Me
						</h2>
						<p
							className={`mt-5 max-w-3xl text-[1.02rem] leading-8 ${
								isDark ? "text-slate-300" : "text-sky-900/80"
							}`}
						>
							Hi! I&apos;m Cat Tuong, but everyone around me prefers me as Chunli, so I
							would appreciate it if you could call me that. My role is primarily a
							game designer and game artist.
						</p>
					</div>

					<div className="grid grid-cols-3 gap-3">
						{[
							{ label: "Role", value: "Design + Art" },
							{ label: "Degree", value: "Distinction '26" },
							{ label: "Focus", value: "Prototypes" },
						].map((item) => (
							<div key={item.label} className="launcher-stat-tile min-w-[112px]">
								<div
									className={`text-xs uppercase tracking-[0.16em] ${
										isDark ? "text-slate-500" : "text-sky-700/80"
									}`}
								>
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
					<div
						className={`text-xs uppercase tracking-[0.18em] ${
							isDark ? "text-slate-500" : "text-cyan-700"
						}`}
					>
						I Enjoy
					</div>

					<div
						className={`mt-4 rounded-[24px] border p-4 ${
							isDark ? "border-white/8 bg-slate-950/35" : "border-[#daf7fc] bg-[#ecfdff]/90"
						}`}
					>
						<ul
							className={`grid gap-x-5 gap-y-3 text-sm leading-7 md:grid-cols-2 ${
								isDark ? "text-slate-300" : "text-sky-900/78"
							}`}
						>
							{PROFILE_CHIPS.map((tag, index) => (
								<li key={tag} className="flex gap-3">
									<span
										className={`mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full ${
											index % 2 === 0
												? isDark
													? "bg-cyan-300"
													: "bg-cyan-500"
												: isDark
													? "bg-pink-300"
													: "bg-sky-500"
										}`}
									/>
									{tag}
								</li>
							))}
						</ul>
					</div>

					<a
						href={FEATURED_LINK.href}
						target="_blank"
						rel="noopener noreferrer"
						className={`mt-6 flex items-start justify-between gap-4 rounded-[24px] border p-4 transition-all hover:-translate-y-0.5 ${
							isDark
								? "border-cyan-300/15 bg-slate-950/40 hover:border-cyan-300/30 hover:bg-slate-900/70"
								: "border-[#daf7fc] bg-[#ecfdff]/92 hover:bg-[#f5feff] shadow-[0_16px_30px_rgba(67,152,184,0.1)]"
						}`}
						aria-label="Visit Chunli on itch.io"
					>
						<div>
							<div
								className={`text-xs uppercase tracking-[0.18em] ${
									isDark ? "text-slate-500" : "text-cyan-700"
								}`}
							>
								{FEATURED_LINK.title}
							</div>
							<div
								className={`mt-2 flex items-center gap-2 text-lg font-bold ${
									isDark ? "text-white" : "text-slate-800"
								}`}
							>
								<Link className="h-4 w-4" />
								{FEATURED_LINK.label}
							</div>
							<p
								className={`mt-2 max-w-xl text-sm leading-7 ${
									isDark ? "text-slate-300" : "text-sky-900/76"
								}`}
							>
								{FEATURED_LINK.description}
							</p>
						</div>
						<div
							className={`shrink-0 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] ${
								isDark ? "bg-cyan-400/12 text-cyan-200" : "bg-cyan-50 text-cyan-700"
							}`}
						>
							Open
						</div>
					</a>
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
							<div
								className={`text-xs uppercase tracking-[0.18em] ${
									isDark ? "text-slate-500" : "text-cyan-700"
								}`}
							>
								Profile Card
							</div>
							<div
								className={`mt-2 text-2xl font-bold ${
									isDark ? "text-white" : "text-slate-800"
								}`}
							>
								Creative Readout
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

					<div
						className={`mt-5 rounded-[24px] border p-4 ${
							isDark ? "border-white/8 bg-slate-950/35" : "border-[#daf7fc] bg-[#ecfdff]/90"
						}`}
					>
						<div
							className={`text-xs uppercase tracking-[0.16em] ${
								isDark ? "text-slate-500" : "text-cyan-700"
							}`}
						>
							Vibe Check
						</div>
						<p
							className={`mt-3 text-sm leading-7 ${
								isDark ? "text-slate-300" : "text-sky-900/78"
							}`}
						>
							Game design, game art, and prototypes that get to the point quickly.
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
						<div
							className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${trait.accent} text-white shadow-lg`}
						>
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

			<section className="grid gap-4 xl:grid-cols-[0.92fr_1.08fr]">
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3, delay: 0.28 }}
					className={`rounded-[28px] border p-5 xl:order-2 ${
						isDark
							? "border-cyan-200/10 bg-slate-950/45"
							: "border-[#daf7fc] bg-[linear-gradient(180deg,rgba(234,253,255,0.96),rgba(211,245,251,0.88))] shadow-[0_18px_36px_rgba(67,152,184,0.08)]"
					}`}
				>
					<div className="flex items-center justify-between">
						<div>
							<div
								className={`text-xs uppercase tracking-[0.18em] ${
									isDark ? "text-slate-500" : "text-cyan-700"
								}`}
							>
								Tool Stack
							</div>
							<div
								className={`mt-2 text-2xl font-bold ${
									isDark ? "text-white" : "text-slate-800"
								}`}
							>
								What I Build With
							</div>
						</div>
						<div
							className={`rounded-full px-3 py-1 text-sm font-bold ${
								isDark ? "bg-emerald-400/12 text-emerald-300" : "bg-cyan-50 text-cyan-800"
							}`}
						>
							Active Kit
						</div>
					</div>

					<div className="mt-5 grid gap-4 md:grid-cols-2">
						{TOOL_GROUPS.map((group) => (
							<div
								key={group.title}
								className={`rounded-[24px] border p-4 ${
									isDark
										? "border-white/8 bg-slate-950/40"
										: "border-[#daf7fc] bg-[#ecfdff]/86"
								}`}
							>
								<div
									className={`text-xs uppercase tracking-[0.16em] ${
										isDark ? "text-slate-500" : "text-sky-700/80"
									}`}
								>
									{group.title}
								</div>
								<ul
									className={`mt-4 space-y-3 text-sm leading-6 ${
										isDark ? "text-slate-300" : "text-sky-900/78"
									}`}
								>
									{group.items.map((item, index) => (
										<li key={item} className="flex gap-3">
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
											{item}
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</motion.div>

				<div className="grid gap-4 xl:order-1">
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
						<div
							className={`text-xs uppercase tracking-[0.18em] ${
								isDark ? "text-slate-500" : "text-cyan-700"
							}`}
						>
							Education
						</div>
						<div className={`mt-2 text-2xl font-bold ${isDark ? "text-white" : "text-slate-800"}`}>
							Game Design Degree
						</div>
						<div
							className={`mt-5 rounded-[24px] border p-4 ${
								isDark
									? "border-amber-300/20 bg-[linear-gradient(180deg,rgba(251,191,36,0.08),rgba(15,23,42,0.4))]"
									: "border-[#daf7fc] bg-[linear-gradient(180deg,#f7feff,#eefcff)]"
							}`}
						>
							<div className="flex items-start gap-3">
								<div
									className={`inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl ${
										isDark ? "bg-amber-300/12 text-amber-200" : "bg-amber-50 text-amber-700"
									}`}
								>
									<Trophy className="h-5 w-5" />
								</div>
								<div>
									<div
										className={`inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] ${
											isDark ? "bg-amber-300/10 text-amber-200" : "bg-amber-50 text-amber-700"
										}`}
									>
										Distinction 2026
									</div>
									<div
										className={`mt-3 text-sm font-bold ${
											isDark ? "text-white" : "text-slate-800"
										}`}
									>
										Bachelor of Design in Games
									</div>
									<p
										className={`mt-2 text-sm leading-7 ${
											isDark ? "text-slate-300" : "text-sky-900/78"
										}`}
									>
										Graduated with Distinction in 2026.
									</p>
								</div>
							</div>
						</div>
					</motion.div>

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
						<div
							className={`text-xs uppercase tracking-[0.18em] ${
								isDark ? "text-slate-500" : "text-cyan-700"
							}`}
						>
							Creative Loop
						</div>
						<div className={`mt-2 text-2xl font-bold ${isDark ? "text-white" : "text-slate-800"}`}>
							What I Keep Returning To
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
				</div>
			</section>
		</div>
	);
}
