import { ArrowRight, Comment, Link, Mail, Rss } from "pixelarticons/react";
import { motion } from "motion/react";
import type { ThemeMode } from "@/components/launcher/types";

const CONTACT_MODULES = [
	{
		title: "Best For",
		value: "Game ideas, prototypes, demos, and game art collaborations",
		icon: <Mail className="h-5 w-5" />,
	},
	{
		title: "Working Style",
		value: "Collaborative, experiment-friendly, and detail-focused",
		icon: <Comment className="h-5 w-5" />,
	},
	{
		title: "Reply Window",
		value: "Usually within a few business days for well-scoped briefs",
		icon: <Link className="h-5 w-5" />,
	},
] as const;

const EMAIL_GUIDE = [
	"Who you are and what kind of game or project you are building",
	"The design, art, or prototype support you need",
	"The audience, platform, and timing if those are already defined",
	"Any references, documents, or visual directions worth sharing",
] as const;

export function ContactContent({ theme }: { theme: ThemeMode }) {
	const isDark = theme === "dark";

	return (
		<div className="h-full overflow-y-auto p-6 wii-u-scrollbar">
			<div className="launcher-soft-hero">
				<div className="pointer-events-none absolute inset-0 bg-stripes opacity-10" />

				<div className="relative grid gap-6 xl:grid-cols-[1.02fr_0.98fr]">
					<div>
						<div className="launcher-mini-tab">
							<Rss className="h-4 w-4" />
							Contact Console
						</div>
						<h2 className={`mt-5 max-w-2xl text-4xl font-bold leading-[1.15] md:text-5xl ${isDark ? "text-white" : "text-slate-800"}`}>
							Game pitches, prototype briefs, and art-heavy collaborations are all welcome here.
						</h2>
						<p className={`mt-5 max-w-2xl text-[1.02rem] leading-8 ${isDark ? "text-slate-300" : "text-slate-600"}`}>
							If a project needs design support, visual development, or a prototype that
							helps the idea become playable, that is the right kind of email to send.
							The most useful notes usually mention the project itself, the kind of help
							needed, and any timing or references already in place.
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

					<motion.div
						initial={{ opacity: 0, y: 14 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.32, ease: "easeOut" }}
						className={`rounded-[30px] border p-5 md:p-6 ${
							isDark
								? "border-white/8 bg-slate-950/40"
								: "border-white/90 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(243,249,255,0.8))]"
						}`}
					>
						<div className="flex items-start justify-between gap-4">
							<div>
								<div className={`text-xs uppercase tracking-[0.18em] ${isDark ? "text-slate-500" : "text-slate-400"}`}>
									Direct Line
								</div>
								<div className={`mt-2 text-2xl font-bold ${isDark ? "text-white" : "text-slate-800"}`}>
									Email Works Best
								</div>
							</div>
							<div
								className={`rounded-full px-3 py-1 text-sm font-bold ${
									isDark ? "bg-emerald-400/12 text-emerald-300" : "bg-emerald-50 text-emerald-700"
								}`}
							>
								Open Inbox
							</div>
						</div>

						<p className={`mt-4 text-sm leading-7 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
							Skip the form and send a note straight to the inbox instead. A clear email
							is the fastest route to a real conversation, especially when it explains
							the project, the support needed, and what stage the work is currently in.
						</p>

						<div
							className={`mt-5 rounded-[26px] border p-4 md:p-5 ${
								isDark
									? "border-cyan-300/15 bg-[linear-gradient(180deg,rgba(8,47,73,0.22),rgba(2,6,23,0.45))]"
									: "border-[#daf7fc] bg-[linear-gradient(180deg,rgba(235,252,255,0.98),rgba(220,246,251,0.92))] shadow-[0_18px_34px_rgba(67,152,184,0.1)]"
							}`}
						>
							<div className={`text-xs uppercase tracking-[0.18em] ${isDark ? "text-slate-500" : "text-cyan-700"}`}>
								Send To
							</div>
							<div className={`mt-3 break-all text-[1.65rem] font-bold leading-tight md:text-[2rem] ${isDark ? "text-white" : "text-slate-800"}`}>
								hi@chunli.space
							</div>
							<p className={`mt-3 max-w-lg text-sm leading-7 ${isDark ? "text-slate-300" : "text-sky-900/76"}`}>
								Use this address for collaboration inquiries, prototype work, game design
								support, game art, and student or indie projects that need an extra set
								of hands.
							</p>

							<div className="mt-5 flex flex-col gap-3 sm:flex-row">
								<a
									href="mailto:hi@chunli.space?subject=Project%20Inquiry"
									className="wii-u-primary-button inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 font-bold text-white transition-transform hover:scale-[1.01]"
								>
									<Mail className="h-4 w-4" />
									Email hi@chunli.space
									<ArrowRight className="h-4 w-4" />
								</a>
								<a
									href="mailto:hi@chunli.space"
									className={`inline-flex items-center justify-center gap-2 rounded-2xl border px-5 py-3 font-bold transition-colors ${
										isDark
											? "border-white/10 bg-slate-900/65 text-slate-100 hover:bg-slate-800/90"
											: "border-[#daf7fc] bg-white/75 text-sky-900 hover:bg-[#f5feff]"
									}`}
								>
									<Link className="h-4 w-4" />
									Open plain compose
								</a>
							</div>
						</div>

						<div className="mt-5 grid gap-4 md:grid-cols-[1.08fr_0.92fr]">
							<div
								className={`rounded-[24px] border p-4 ${
									isDark
										? "border-white/8 bg-slate-950/45"
										: "border-[#daf7fc] bg-white/72"
								}`}
							>
								<div className={`text-xs uppercase tracking-[0.16em] ${isDark ? "text-slate-500" : "text-slate-400"}`}>
									Helpful First Email
								</div>
								<ul className={`mt-4 space-y-3 text-sm leading-7 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
									{EMAIL_GUIDE.map((item, index) => (
										<li key={item} className="flex gap-3">
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
											{item}
										</li>
									))}
								</ul>
							</div>

							<div
								className={`rounded-[24px] border p-4 ${
									isDark
										? "border-white/8 bg-slate-950/45"
										: "border-[#daf7fc] bg-white/72"
								}`}
							>
								<div className={`text-xs uppercase tracking-[0.16em] ${isDark ? "text-slate-500" : "text-slate-400"}`}>
									Response Rhythm
								</div>
								<div className={`mt-3 text-3xl font-bold ${isDark ? "text-white" : "text-slate-800"}`}>
									A few business days
								</div>
								<p className={`mt-3 text-sm leading-7 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
									If the brief is well-scoped, the reply is usually quicker and much more
									useful on the first pass.
								</p>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
}
