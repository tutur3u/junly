"use client";

import { Monitor, Moon, Sun, User } from "lucide-react";
import { motion } from "motion/react";
import type { ReactNode } from "react";
import type {
	AppData,
	ThemeMode,
	ThemePreference,
} from "@/components/launcher/types";

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
						Chunli
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

export function ThemePickerOverlay({
	theme,
	onSelect,
}: {
	theme: ThemeMode;
	onSelect: (preference: ThemePreference) => void;
}) {
	const options: Array<{
		id: ThemePreference;
		title: string;
		description: string;
		icon: ReactNode;
	}> = [
		{
			id: "light",
			title: "Light",
			description: "Bright dashboard with the classic clean Wii U feel.",
			icon: <Sun className="h-6 w-6 text-amber-400" />,
		},
		{
			id: "dark",
			title: "Dark",
			description: "Night-mode shell with smoked glass and deeper contrast.",
			icon: <Moon className="h-6 w-6 text-sky-300" />,
		},
		{
			id: "system",
			title: "System",
			description: "Follow your device preference automatically.",
			icon: <Monitor className="h-6 w-6 text-emerald-400" />,
		},
	];

	return (
		<div className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/45 p-6 backdrop-blur-xl">
			<motion.div
				initial={{ opacity: 0, y: 12, scale: 0.96 }}
				animate={{ opacity: 1, y: 0, scale: 1 }}
				className={`wii-u-window w-full max-w-3xl border p-6 ${
					theme === "dark" ? "border-sky-200/10" : "border-white/85"
				}`}
			>
				<div className="text-center">
					<div
						className={`text-sm font-bold uppercase tracking-[0.18em] ${
							theme === "dark" ? "text-sky-300" : "text-sky-700"
						}`}
					>
						First Visit
					</div>
					<h2
						className={`mt-3 text-3xl font-bold ${
							theme === "dark" ? "text-white" : "text-slate-800"
						}`}
					>
						Choose Your Theme
					</h2>
					<p
						className={`mx-auto mt-3 max-w-xl ${
							theme === "dark" ? "text-slate-400" : "text-slate-500"
						}`}
					>
						Pick how the launcher should look. You can change this later from
						System Settings.
					</p>
				</div>

				<div className="mt-8 grid gap-4 md:grid-cols-3">
					{options.map((option) => (
						<button
							key={option.id}
							type="button"
							onClick={() => onSelect(option.id)}
							className={`group cursor-pointer rounded-[28px] border p-5 text-left transition-all hover:-translate-y-1 ${
								theme === "dark"
									? "bg-slate-900/60 border-sky-200/10 hover:border-sky-200/20 hover:bg-slate-900/80"
									: "bg-white/70 border-white/85 hover:shadow-lg"
							}`}
						>
							<div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
								{option.icon}
							</div>
							<div
								className={`mt-5 text-xl font-bold ${
									theme === "dark" ? "text-white" : "text-slate-800"
								}`}
							>
								{option.title}
							</div>
							<p
								className={`mt-2 text-sm ${
									theme === "dark" ? "text-slate-400" : "text-slate-500"
								}`}
							>
								{option.description}
							</p>
						</button>
					))}
				</div>
			</motion.div>
		</div>
	);
}
