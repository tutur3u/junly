"use client";

import { User } from "lucide-react";
import { motion } from "motion/react";
import type { AppData, ThemeMode } from "@/components/launcher/types";

export function InitialBootOverlay({ theme }: { theme: ThemeMode }) {
	return (
		<div
			className={`fixed inset-0 z-[60] flex items-center justify-center ${
				theme === "dark"
					? "bg-gradient-to-br from-[#020912] via-[#0b1624] to-[#14304a]"
					: "bg-gradient-to-br from-[#eff8ff] via-[#d6efff] to-[#c1e6ff]"
			}`}
		>
			<div className="pointer-events-none absolute inset-0 bg-stripes opacity-25" />

			<div className="w-full max-w-2xl px-6 text-center">
				<motion.div
					initial={{ opacity: 0, y: 14, scale: 0.95 }}
					animate={{ opacity: 1, y: 0, scale: 1 }}
					transition={{ duration: 0.45, ease: "easeOut" }}
					className={`wii-u-soft-panel rounded-[36px] border px-10 py-12 ${
						theme === "dark" ? "border-sky-200/10" : "border-white/85"
					}`}
				>
					<div
						className={`mx-auto mb-7 flex h-32 w-32 items-center justify-center rounded-[32px] border-[5px] shadow-[0_18px_40px_rgba(120,170,205,0.22),inset_0_2px_18px_rgba(255,255,255,0.95),inset_0_-18px_28px_rgba(121,175,210,0.18)] ${
							theme === "dark"
								? "border-sky-200/15 bg-gradient-to-b from-slate-700/95 via-slate-800/90 to-slate-950/95"
								: "border-white/95 bg-gradient-to-b from-white/95 via-white/80 to-sky-100/70"
						}`}
					>
						<motion.div
							animate={{ scale: [1, 1.06, 1], rotate: [0, -1.5, 1.5, 0] }}
							transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
						>
							<User className="h-16 w-16 text-sky-500" />
						</motion.div>
					</div>

					<div
						className={`text-4xl font-bold tracking-wide ${
							theme === "dark" ? "text-slate-100" : "text-slate-800"
						}`}
					>
						Junly
					</div>
					<p className={`mt-3 ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`}>
						Starting up the Wii U-style portfolio system.
					</p>

					<div
						className={`mt-8 h-4 rounded-full border p-1 ${
							theme === "dark"
								? "border-sky-200/10 bg-slate-950/65 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
								: "border-white/80 bg-white/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.95)]"
						}`}
					>
						<motion.div
							className="h-full rounded-full bg-gradient-to-r from-sky-300 via-sky-400 to-blue-500"
							initial={{ width: "10%" }}
							animate={{ width: ["10%", "38%", "68%", "100%"] }}
							transition={{ duration: 1.35, ease: "easeInOut" }}
						/>
					</div>

					<div
						className={`mt-5 flex items-center justify-center gap-3 text-sm font-bold uppercase tracking-[0.18em] ${
							theme === "dark" ? "text-slate-500" : "text-slate-400"
						}`}
					>
						<motion.span
							className="h-2.5 w-2.5 rounded-full bg-sky-300"
							animate={{ opacity: [0.25, 1, 0.25] }}
							transition={{ duration: 0.9, repeat: Infinity, delay: 0 }}
						/>
						<motion.span
							className="h-2.5 w-2.5 rounded-full bg-sky-400"
							animate={{ opacity: [0.25, 1, 0.25] }}
							transition={{ duration: 0.9, repeat: Infinity, delay: 0.14 }}
						/>
						<motion.span
							className="h-2.5 w-2.5 rounded-full bg-blue-500"
							animate={{ opacity: [0.25, 1, 0.25] }}
							transition={{ duration: 0.9, repeat: Infinity, delay: 0.28 }}
						/>
						<span>booting system</span>
					</div>
				</motion.div>
			</div>
		</div>
	);
}

export function LoadingContent({
	app,
	theme,
}: {
	app: AppData;
	theme: ThemeMode;
}) {
	return (
		<div className="flex h-full items-center justify-center p-8">
			<div className="w-full max-w-xl text-center">
				<motion.div
					initial={{ opacity: 0, y: 8, scale: 0.94 }}
					animate={{ opacity: 1, y: 0, scale: 1 }}
					className={`wii-u-soft-panel rounded-[28px] border px-8 py-10 ${
						theme === "dark" ? "border-sky-200/10" : "border-white/80"
					}`}
				>
					<div
						className={`mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-[30px] border-[4px] shadow-[0_18px_36px_rgba(120,170,205,0.18),inset_0_2px_16px_rgba(255,255,255,0.95)] ${
							theme === "dark"
								? "border-sky-200/15 bg-gradient-to-b from-slate-700/95 via-slate-800/90 to-slate-950/95"
								: "border-white/90 bg-gradient-to-b from-white/95 via-white/80 to-sky-100/70"
						}`}
					>
						<motion.div
							animate={{ scale: [1, 1.08, 1], rotate: [0, -2, 2, 0] }}
							transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
						>
							{app.icon}
						</motion.div>
					</div>

					<div
						className={`text-3xl font-bold ${
							theme === "dark" ? "text-slate-100" : "text-slate-800"
						}`}
					>
						Launching {app.title}
					</div>
					<p className={`mt-3 ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`}>
						Preparing the interface and loading the window shell.
					</p>

					<div
						className={`mt-8 h-4 rounded-full border p-1 ${
							theme === "dark"
								? "border-sky-200/10 bg-slate-950/65 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
								: "border-white/80 bg-white/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.95)]"
						}`}
					>
						<motion.div
							className="h-full rounded-full bg-gradient-to-r from-sky-300 via-sky-400 to-blue-500"
							initial={{ width: "18%" }}
							animate={{ width: ["18%", "52%", "86%"] }}
							transition={{ duration: 0.9, ease: "easeInOut" }}
						/>
					</div>

					<div
						className={`mt-4 flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-[0.18em] ${
							theme === "dark" ? "text-slate-500" : "text-slate-400"
						}`}
					>
						<motion.span
							className="h-2.5 w-2.5 rounded-full bg-sky-300"
							animate={{ opacity: [0.25, 1, 0.25] }}
							transition={{ duration: 0.9, repeat: Infinity, delay: 0 }}
						/>
						<motion.span
							className="h-2.5 w-2.5 rounded-full bg-sky-400"
							animate={{ opacity: [0.25, 1, 0.25] }}
							transition={{ duration: 0.9, repeat: Infinity, delay: 0.14 }}
						/>
						<motion.span
							className="h-2.5 w-2.5 rounded-full bg-blue-500"
							animate={{ opacity: [0.25, 1, 0.25] }}
							transition={{ duration: 0.9, repeat: Infinity, delay: 0.28 }}
						/>
						<span>loading assets</span>
					</div>
				</motion.div>
			</div>
		</div>
	);
}
