import Image from "next/image";
import { PROJECTS } from "@/components/launcher/content-data";
import type { ThemeMode } from "@/components/launcher/types";

type ProjectsContentProps = {
	theme: ThemeMode;
	selectedProject: string | null;
	setSelectedProject: (value: string | null) => void;
};

export function ProjectsContent({ theme, selectedProject, setSelectedProject }: ProjectsContentProps) {
	const isDark = theme === "dark";
	const projectData =
		PROJECTS.find((project) => project.id === selectedProject) ?? null;

	if (projectData) {
		return (
			<div className="h-full overflow-y-auto p-6 wii-u-scrollbar">
				<div className="space-y-6">
					<div className="flex items-center justify-between gap-4">
						<div>
							<button
								type="button"
								onClick={() => setSelectedProject(null)}
								className={`mb-3 inline-flex cursor-pointer items-center rounded-full border px-3 py-1.5 text-sm transition-colors ${
									isDark
										? "border-sky-200/15 text-sky-200 hover:bg-sky-400/10"
										: "border-sky-100 text-sky-700 hover:bg-sky-50"
								}`}
							>
								Back to projects
							</button>
							<div className={`text-sm uppercase tracking-[0.18em] ${isDark ? "text-sky-300" : "text-sky-700"}`}>
								{projectData.kicker}
							</div>
							<h2 className={`mt-2 text-3xl font-bold ${isDark ? "text-white" : "text-slate-800"}`}>
								{projectData.title}
							</h2>
							<p className={`mt-3 max-w-3xl ${isDark ? "text-slate-400" : "text-slate-500"}`}>
								{projectData.summary}
							</p>
						</div>
						<div className="grid min-w-[180px] gap-2 text-right">
							<div className={isDark ? "text-slate-500" : "text-slate-400"}>Year</div>
							<div className={isDark ? "text-slate-100" : "text-slate-700"}>{projectData.year}</div>
							<div className={isDark ? "text-slate-500" : "text-slate-400"}>Status</div>
							<div className={isDark ? "text-emerald-300" : "text-emerald-600"}>{projectData.status}</div>
						</div>
					</div>

					<div
						className={`relative overflow-hidden rounded-[28px] border p-3 ${
							isDark ? "bg-slate-950/45 border-sky-200/10" : "bg-white/70 border-white/80"
						}`}
					>
						<div className="relative h-64 overflow-hidden rounded-[22px] md:h-80">
							<Image
								src={`https://picsum.photos/seed/${projectData.seed}/1200/800`}
								alt={projectData.title}
								fill
								className="object-cover"
								referrerPolicy="no-referrer"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-950/20 to-transparent" />
							<div className="absolute right-5 bottom-5 left-5 flex flex-wrap gap-2">
								{projectData.stack.map((item) => (
									<span
										key={item}
										className={`rounded-full border px-3 py-1 text-sm ${
											isDark
												? "bg-slate-950/65 text-sky-100 border-sky-200/10"
												: "bg-white/90 text-slate-700 border-white/90"
										}`}
									>
										{item}
									</span>
								))}
							</div>
						</div>
					</div>

					<div className="grid gap-4 lg:grid-cols-[1.25fr_0.85fr]">
						<div
							className={`rounded-2xl border p-5 ${
								isDark ? "bg-slate-900/55 border-white/8" : "bg-white/65 border-white"
							}`}
						>
							<h3 className={`text-lg font-bold ${isDark ? "text-white" : "text-slate-800"}`}>Overview</h3>
							<div className={`mt-4 space-y-4 ${isDark ? "text-slate-300" : "text-slate-600"}`}>
								{projectData.details.map((paragraph) => (
									<p key={paragraph}>{paragraph}</p>
								))}
							</div>
						</div>
						<div
							className={`rounded-2xl border p-5 ${
								isDark ? "bg-slate-900/55 border-white/8" : "bg-white/65 border-white"
							}`}
						>
							<h3 className={`text-lg font-bold ${isDark ? "text-white" : "text-slate-800"}`}>Key Features</h3>
							<ul className={`mt-4 space-y-3 ${isDark ? "text-slate-300" : "text-slate-600"}`}>
								{projectData.features.map((feature) => (
									<li key={feature} className="flex items-start gap-3">
										<span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-400" />
										<span>{feature}</span>
									</li>
								))}
							</ul>
							<div className="mt-6 flex flex-wrap gap-3">
								<button type="button" className="wii-u-primary-button rounded-full px-4 py-2 font-bold text-white transition-transform hover:-translate-y-0.5">
									Open Preview
								</button>
								<button
									type="button"
									className={`wii-u-round-button rounded-full border border-white/80 px-4 py-2 font-bold ${
										isDark ? "text-slate-100" : "text-slate-700"
									}`}
								>
									View Notes
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="h-full overflow-y-auto p-6 wii-u-scrollbar">
			<div className="mb-6 flex items-end justify-between gap-4">
				<div>
					<h2 className={`text-2xl font-bold ${isDark ? "text-white" : "text-slate-800"}`}>My Projects</h2>
					<p className={`mt-2 max-w-2xl ${isDark ? "text-slate-400" : "text-slate-500"}`}>
						Open a project to view its full presentation, stack, and experience notes.
					</p>
				</div>
				<div className={`text-sm ${isDark ? "text-slate-500" : "text-slate-400"}`}>{PROJECTS.length} projects</div>
			</div>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
				{PROJECTS.map((project) => (
					<button
						key={project.id}
						type="button"
						onClick={() => setSelectedProject(project.id)}
						className={`group cursor-pointer rounded-2xl border p-4 text-left transition-all hover:-translate-y-1 ${
							isDark
								? "bg-slate-900/45 border-white/8 shadow-[0_10px_24px_rgba(0,0,0,0.22)] hover:border-sky-200/20 hover:shadow-[0_16px_30px_rgba(0,0,0,0.3)]"
								: "bg-white/60 border-white shadow-sm hover:shadow-md"
						}`}
					>
						<div className={`relative mb-3 h-40 overflow-hidden rounded-xl ${isDark ? "bg-slate-800" : "bg-slate-200"}`}>
							<Image
								src={`https://picsum.photos/seed/${project.seed}/800/600`}
								alt={project.title}
								fill
								className="object-cover transition-transform duration-500 group-hover:scale-105"
								referrerPolicy="no-referrer"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />
							<div className="absolute right-3 bottom-3 rounded-full bg-black/35 px-3 py-1 text-xs text-white backdrop-blur-sm">
								Open details
							</div>
						</div>
						<div className={`text-xs uppercase tracking-[0.18em] ${isDark ? "text-sky-300" : "text-sky-700"}`}>
							{project.kicker}
						</div>
						<h3 className={`mt-2 font-bold ${isDark ? "text-slate-100" : "text-slate-700"}`}>{project.title}</h3>
						<p className={`mt-2 text-sm ${isDark ? "text-slate-400" : "text-slate-500"}`}>{project.summary}</p>
					</button>
				))}
			</div>
		</div>
	);
}
