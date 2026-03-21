import { Comment, Link, Mail, Rss } from "pixelarticons/react";
import type { ThemeMode } from "@/components/launcher/types";

export function ContactContent({ theme }: { theme: ThemeMode }) {
	const isDark = theme === "dark";

	return (
		<div
			className={`flex h-full flex-col items-center justify-center overflow-y-auto p-6 text-center wii-u-scrollbar ${
				isDark ? "text-slate-200" : ""
			}`}
		>
			<div
				className={`mb-6 flex h-20 w-20 items-center justify-center rounded-full border-4 shadow-inner ${
					isDark ? "bg-slate-800 border-slate-700" : "bg-blue-100 border-white"
				}`}
			>
				<Mail className="h-10 w-10 text-blue-500" />
			</div>
			<h2 className={`mb-2 text-2xl font-bold ${isDark ? "text-white" : "text-slate-800"}`}>Let&apos;s Connect!</h2>
			<p className={`mb-8 max-w-md ${isDark ? "text-slate-400" : "text-slate-500"}`}>
				Have a question, a project idea, or just want to say hi? Drop me a message!
			</p>

			<div className="mb-8 flex gap-4">
				<a
					href="#"
					className={`wii-u-round-button flex h-12 w-12 items-center justify-center rounded-full border border-white/80 transition-all hover:-translate-y-1 hover:shadow-md ${
						isDark ? "text-slate-300 hover:text-sky-300" : "text-slate-600 hover:text-blue-500"
					}`}
				>
					<Rss className="h-5 w-5" />
				</a>
				<a
					href="#"
					className={`wii-u-round-button flex h-12 w-12 items-center justify-center rounded-full border border-white/80 transition-all hover:-translate-y-1 hover:shadow-md ${
						isDark ? "text-slate-300 hover:text-white" : "text-slate-600 hover:text-slate-900"
					}`}
				>
					<Link className="h-5 w-5" />
				</a>
				<a
					href="#"
					className={`wii-u-round-button flex h-12 w-12 items-center justify-center rounded-full border border-white/80 transition-all hover:-translate-y-1 hover:shadow-md ${
						isDark ? "text-slate-300 hover:text-pink-300" : "text-slate-600 hover:text-pink-500"
					}`}
				>
					<Comment className="h-5 w-5" />
				</a>
			</div>

			<div
				className={`w-full max-w-md rounded-2xl border p-6 text-left shadow-sm ${
					isDark ? "bg-slate-900/45 border-white/8" : "bg-white/50 border-white/60"
				}`}
			>
				<div className="space-y-4">
					<div>
						<label className={`mb-1 block text-xs font-bold uppercase tracking-wider ${isDark ? "text-slate-400" : "text-slate-500"}`}>
							Name
						</label>
						<input
							type="text"
							className={`wii-u-field w-full rounded-lg border px-4 py-2 transition-shadow focus:outline-none focus:ring-2 focus:ring-blue-300 ${
								isDark
									? "border-slate-700 text-slate-100 placeholder:text-slate-500"
									: "border-slate-200 text-slate-700 placeholder:text-slate-400"
							}`}
							placeholder="Guest"
						/>
					</div>
					<div>
						<label className={`mb-1 block text-xs font-bold uppercase tracking-wider ${isDark ? "text-slate-400" : "text-slate-500"}`}>
							Message
						</label>
						<textarea
							className={`wii-u-field h-24 w-full resize-none rounded-lg border px-4 py-2 transition-shadow focus:outline-none focus:ring-2 focus:ring-blue-300 ${
								isDark
									? "border-slate-700 text-slate-100 placeholder:text-slate-500"
									: "border-slate-200 text-slate-700 placeholder:text-slate-400"
							}`}
							placeholder="Hello!"
						/>
					</div>
					<button className="wii-u-primary-button w-full rounded-lg py-2 font-bold text-white transition-all">
						Send Message
					</button>
				</div>
			</div>
		</div>
	);
}
