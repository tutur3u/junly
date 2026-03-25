"use client";

import Image from "next/image";
import { FileText, Sparkles, Trophy } from "pixelarticons/react";
import { useEffect, useRef, useState } from "react";
import { PROJECTS } from "@/components/launcher/content-data";
import type { ContentLink, ContentSection } from "@/components/launcher/content-data";
import type { ThemeMode } from "@/components/launcher/types";

const SHOWCASE_LABEL = "RMIT Showcase Nomination";

// Global flag to track if escape was handled by a modal (shared across content files)
declare global {
  var escapeHandledByModal: boolean;
}

type ProjectsContentProps = {
	theme: ThemeMode;
	selectedProject: string | null;
	setSelectedProject: (value: string | null) => void;
};

// Convert Google Drive view URL to embed URL
function getGoogleDriveEmbedUrl(url: string): string {
	const match = url.match(/\/d\/(.*?)(?:\/|$)/);
	if (match && match[1]) {
		return `https://drive.google.com/file/d/${match[1]}/preview`;
	}
	return url;
}

function useCanExpand<T extends HTMLElement>(text: string) {
	const [canExpand, setCanExpand] = useState(false);
	const elementRef = useRef<T>(null);

	useEffect(() => {
		const element = elementRef.current;
		if (!element) return;

		const updateOverflow = () => {
			const computedStyle = window.getComputedStyle(element);
			const lineHeight = Number.parseFloat(computedStyle.lineHeight);
			if (!Number.isFinite(lineHeight)) {
				setCanExpand(false);
				return;
			}
			setCanExpand(element.scrollHeight > lineHeight * 3 + 1);
		};

		updateOverflow();
		const observer = new ResizeObserver(updateOverflow);
		observer.observe(element);

		return () => observer.disconnect();
	}, [text]);

	return { canExpand, elementRef };
}

function ExpandableBody({ text, isDark }: { text: string; isDark: boolean }) {
	const [expanded, setExpanded] = useState(false);
	const { canExpand, elementRef } = useCanExpand<HTMLParagraphElement>(text);

	return (
		<div>
			<p
				ref={elementRef}
				className={`text-sm leading-7 ${isDark ? "text-slate-300" : "text-slate-600"}`}
				style={
					!expanded && canExpand
						? {
								display: "-webkit-box",
								WebkitBoxOrient: "vertical",
								WebkitLineClamp: 3,
								overflow: "hidden",
								whiteSpace: "pre-line",
							}
						: {
								whiteSpace: "pre-line",
							}
				}
			>
				{text}
			</p>
			{canExpand && (
				<button
					type="button"
					onClick={() => setExpanded((current) => !current)}
					className={`mt-3 text-sm font-bold transition-colors ${
						isDark ? "text-sky-300 hover:text-sky-200" : "text-sky-700 hover:text-sky-800"
					}`}
				>
					{expanded ? "See less" : "See more..."}
				</button>
			)}
			</div>
	);
}

function ExpandableHeading({ text, isDark, className }: { text: string; isDark: boolean; className: string }) {
	const [expanded, setExpanded] = useState(false);
	const { canExpand, elementRef } = useCanExpand<HTMLHeadingElement>(text);

	return (
		<div>
			<h2
				ref={elementRef}
				className={className}
				style={
					!expanded && canExpand
						? {
								display: "-webkit-box",
								WebkitBoxOrient: "vertical",
								WebkitLineClamp: 3,
								overflow: "hidden",
								whiteSpace: "pre-line",
							}
						: {
								whiteSpace: "pre-line",
							}
				}
			>
				{text}
			</h2>
			{canExpand && (
				<button
					type="button"
					onClick={() => setExpanded((current) => !current)}
					className={`mt-3 text-sm font-bold transition-colors ${
						isDark ? "text-sky-300 hover:text-sky-200" : "text-sky-700 hover:text-sky-800"
					}`}
				>
					{expanded ? "See less" : "See more..."}
				</button>
			)}
		</div>
	);
}

function DocumentChip({
	link,
	isDark,
	onOpen,
}: {
	link: ContentLink;
	isDark: boolean;
	onOpen: (link: ContentLink) => void;
}) {
	return (
		<button
			type="button"
			onClick={() => onOpen(link)}
			className={`inline-flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2 text-sm font-bold transition-all hover:-translate-y-0.5 ${
				isDark
					? "border-sky-200/20 text-sky-200 hover:bg-sky-400/10"
					: "border-[#d6f6fb] bg-[#e1f9fd]/88 text-sky-800 hover:bg-[#ebfdff]"
			}`}
		>
			<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-label={link.label}>
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
			</svg>
			{link.label}
		</button>
	);
}

function ProjectSectionCard({
	section,
	isDark,
}: {
	section: ContentSection;
	isDark: boolean;
}) {
	return (
		<div
			className={`rounded-2xl border p-4 sm:p-5 ${
				section.tone === "highlight"
					? isDark
						? "border-amber-400/30 bg-gradient-to-br from-amber-500/10 via-slate-900/70 to-slate-950"
						: "border-cyan-200/80 bg-gradient-to-br from-[#e8fcff] via-[#d8f7fd] to-[#caf0f8]"
					: isDark
						? "bg-slate-900/55 border-white/8"
						: "border-[#daf7fc] bg-[linear-gradient(180deg,rgba(223,249,253,0.9),rgba(203,240,247,0.84))]"
			} mb-4 break-inside-avoid`}
		>
			<h3 className={`text-base sm:text-lg font-bold ${isDark ? "text-white" : "text-slate-800"}`}>{section.title}</h3>
			{section.body && (
				<div className="mt-3 sm:mt-4">
					<ExpandableBody text={section.body} isDark={isDark} />
				</div>
			)}
			{section.items && section.items.length > 0 && (
				<ul className={`mt-3 sm:mt-4 space-y-2 sm:space-y-3 ${isDark ? "text-slate-300" : "text-slate-600"}`}>
					{section.items.map((item) => (
						<li key={item} className="flex items-start gap-3">
							<span className={`mt-1.5 h-2 w-2 flex-shrink-0 rounded-full ${section.tone === "highlight" ? "bg-amber-400" : "bg-sky-400"}`} />
							<span className="text-sm">{item}</span>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}

export function ProjectsContent({ theme, selectedProject, setSelectedProject }: ProjectsContentProps) {
	const isDark = theme === "dark";
	const scrollRef = useRef<HTMLDivElement>(null);
	const projectData =
		PROJECTS.find((project) => project.id === selectedProject) ?? null;
	const [previewPdf, setPreviewPdf] = useState<{ label: string; url: string } | null>(null);

	useEffect(() => {
		if (projectData && scrollRef.current) {
			scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
		}
	}, [projectData]);

	// Handle Escape key to close PDF preview or go back from project details
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				// Check if PDF preview is open - close it and stop propagation
				if (previewPdf) {
					e.stopImmediatePropagation();
					setPreviewPdf(null);
					return;
				}
				// Check if a modal already handled this escape
				if (globalThis.escapeHandledByModal) return;
				// If in project details, go back to projects list and stop propagation
				if (projectData) {
					e.stopImmediatePropagation();
					setSelectedProject(null);
					return;
				}
				// If in projects list (no projectData), let the shell handle it to close the app
			}
		};
		// Use capture phase to handle escape before other handlers
		window.addEventListener("keydown", handleKeyDown, true);
		return () => window.removeEventListener("keydown", handleKeyDown, true);
	}, [projectData, setSelectedProject, previewPdf]);

	if (projectData) {
		return (
			<>
				<div ref={scrollRef} className={`h-full overflow-y-auto p-4 sm:p-6 wii-u-scrollbar`}>
				<div className="space-y-4 sm:space-y-6">
					<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
						<div className="flex-1 min-w-0">
							<button
								type="button"
								onClick={() => setSelectedProject(null)}
								className={`mb-3 sm:mb-4 inline-flex cursor-pointer items-center rounded-full border px-3 py-1.5 text-sm transition-colors ${
									isDark
										? "border-sky-200/15 text-sky-200 hover:bg-sky-400/10"
										: "border-[#d6f6fb] bg-[#e1f9fd]/88 text-sky-800 hover:bg-[#ebfdff]"
								}`}
							>
								← Back
							</button>
							<div className="flex flex-wrap items-center gap-2">
								<div className="launcher-mini-tab">
									<FileText className="h-4 w-4" />
									<span>{projectData.kicker}</span>
								</div>
								{projectData.nominated && (
									<span
										className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-bold tracking-[0.12em] normal-case ${
											isDark
												? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/20"
												: "bg-gradient-to-r from-amber-400 to-orange-400 text-white shadow-md"
										}`}
									>
										{SHOWCASE_LABEL}
									</span>
								)}
							</div>
							<div className="mt-2">
								<ExpandableHeading
									text={projectData.title}
									isDark={isDark}
									className={`text-2xl sm:text-3xl font-bold leading-tight ${isDark ? "text-white" : "text-slate-800"}`}
								/>
							</div>
							<div className="mt-2 sm:mt-3 max-w-2xl">
								<ExpandableBody text={projectData.summary} isDark={isDark} />
							</div>
						</div>
						<div className={`grid grid-cols-2 gap-x-4 gap-y-1 text-sm sm:min-w-[180px] ${isDark ? "text-slate-400" : "text-slate-500"}`}>
							<div>Year</div>
							<div className={`text-right font-medium ${isDark ? "text-slate-100" : "text-slate-700"}`}>{projectData.year}</div>
							<div>Status</div>
							<div className={`text-right font-medium ${isDark ? "text-emerald-300" : "text-emerald-600"}`}>{projectData.status}</div>
						</div>
					</div>

					{projectData.researchDocs?.thumbnail ? (
						<div
							className={`relative overflow-hidden rounded-2xl sm:rounded-[28px] border p-2 sm:p-3 ${
								isDark ? "bg-slate-950/45 border-sky-200/10" : "border-[#daf7fc] bg-[#e0f9fd]/86"
							}`}
						>
							<div className="relative w-full overflow-hidden rounded-xl sm:rounded-[22px]">
								<Image
									src={projectData.researchDocs.thumbnail}
									alt={projectData.title}
									width={1200}
									height={800}
									className="w-full h-auto object-contain"
									priority
								/>
							</div>
							<div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
								{projectData.stack.map((item) => (
									<span
										key={item}
										className={`rounded-full border px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm ${
											isDark
												? "bg-slate-950/65 text-sky-100 border-sky-200/10"
												: "bg-[#ebfdff]/94 text-sky-900 border-[#daf7fc]"
										}`}
									>
										{item}
									</span>
								))}
							</div>
						</div>
					) : (
						<div
							className={`relative overflow-hidden rounded-2xl sm:rounded-[28px] border p-2 sm:p-3 ${
								isDark ? "bg-slate-950/45 border-sky-200/10" : "border-[#daf7fc] bg-[#e0f9fd]/86"
							}`}
						>
							<div className="relative h-48 sm:h-64 overflow-hidden rounded-xl sm:rounded-[22px]">
								<Image
									src={`https://picsum.photos/seed/${projectData.seed}/1200/800`}
									alt={projectData.title}
									fill
									className="object-cover"
									referrerPolicy="no-referrer"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-950/20 to-transparent" />
								<div className="absolute right-3 sm:right-5 bottom-3 sm:bottom-5 left-3 sm:left-5 flex flex-wrap gap-2">
									{projectData.stack.map((item) => (
										<span
											key={item}
											className={`rounded-full border px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm ${
												isDark
													? "bg-slate-950/65 text-sky-100 border-sky-200/10"
													: "bg-[#ebfdff]/94 text-sky-900 border-[#daf7fc]"
											}`}
										>
											{item}
										</span>
									))}
								</div>
							</div>
						</div>
					)}

					<div className="grid gap-4 lg:grid-cols-[1.25fr_0.85fr]">
						<div className="lg:col-span-2 lg:columns-2 lg:gap-4">
							{projectData.contentSections.map((section) => (
								<ProjectSectionCard
									key={`${projectData.id}-${section.title}`}
									section={section}
									isDark={isDark}
								/>
							))}
						</div>
						<div
							className={`rounded-2xl border p-4 sm:p-5 lg:col-span-2 ${
								isDark ? "bg-slate-900/55 border-white/8" : "border-[#daf7fc] bg-[linear-gradient(180deg,rgba(223,249,253,0.92),rgba(203,240,247,0.84))]"
							}`}
						>
							<h3 className={`text-base sm:text-lg font-bold ${isDark ? "text-white" : "text-slate-800"}`}>Methods & Deliverables</h3>
							<div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
								{projectData.stack.map((item) => (
									<span
										key={item}
										className={`rounded-full border px-3 py-1 text-sm ${
											isDark
												? "bg-slate-950/65 text-sky-100 border-sky-200/10"
												: "bg-[#ebfdff]/94 text-sky-900 border-[#daf7fc]"
										}`}
									>
										{item}
									</span>
								))}
							</div>
						{projectData.researchDocs && (
							<div className="mt-4 sm:mt-6 space-y-3">
								<h4 className={`text-sm font-bold uppercase tracking-[0.12em] ${isDark ? "text-slate-400" : "text-slate-500"}`}>
									Research Documents
								</h4>
								<div className="flex flex-wrap gap-2">
									{projectData.researchDocs.poster && (
										<DocumentChip link={{ label: "Research Poster", url: projectData.researchDocs.poster }} isDark={isDark} onOpen={(link) => setPreviewPdf(link)} />
									)}
									{projectData.researchDocs.paper && (
										<DocumentChip link={{ label: "Research Paper", url: projectData.researchDocs.paper }} isDark={isDark} onOpen={(link) => setPreviewPdf(link)} />
									)}
									{projectData.researchDocs.fieldNotes && (
										<DocumentChip link={{ label: "Field Notes", url: projectData.researchDocs.fieldNotes }} isDark={isDark} onOpen={(link) => setPreviewPdf(link)} />
									)}
									{projectData.researchDocs.proposal && (
										<DocumentChip link={{ label: "Research Proposal", url: projectData.researchDocs.proposal }} isDark={isDark} onOpen={(link) => setPreviewPdf(link)} />
									)}
									{projectData.researchDocs.interviews?.map((interview) => (
										<DocumentChip key={interview.label} link={interview} isDark={isDark} onOpen={(link) => setPreviewPdf(link)} />
									))}
									{projectData.researchDocs.documents?.map((document) => (
										<DocumentChip key={document.label} link={document} isDark={isDark} onOpen={(link) => setPreviewPdf(link)} />
									))}
								</div>
							</div>
						)}
						</div>
					</div>
				</div>
			</div>

			{/* PDF Preview Modal */}
			{previewPdf && (
				<div
					data-pdf-open="true"
					className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
					onClick={() => setPreviewPdf(null)}
					onKeyDown={(e) => { if (e.key === "Escape") { e.stopPropagation(); setPreviewPdf(null); } }}
				>
					<div className={`absolute inset-0 ${isDark ? "bg-black/80" : "bg-black/60"}`} />
					<div
						className={`relative w-full max-w-6xl max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl ${
							isDark ? "bg-slate-900 border border-white/10" : "bg-[#e3fbfe] border border-[#c8eff8]"
						}`}
						onClick={(e) => e.stopPropagation()}
						onKeyDown={(e) => e.stopPropagation()}
						role="dialog"
						aria-modal="true"
						aria-labelledby="pdf-preview-title"
					>
						<div className={`flex items-center justify-between px-4 sm:px-6 py-3 border-b ${isDark ? "border-white/10" : "border-[#c8eff8]"}`}>
							<h3 className={`font-bold text-sm sm:text-base ${isDark ? "text-white" : "text-slate-800"}`}>
								{previewPdf.label}
							</h3>
							<div className="flex items-center gap-2">
								<a
									href={previewPdf.url}
									target="_blank"
									rel="noopener noreferrer"
									className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
										isDark
										? "text-sky-300 hover:bg-sky-400/10"
										: "text-sky-800 hover:bg-[#d7f6fc]"
									}`}
								>
									Open Document
								</a>
								<button
									type="button"
									onClick={() => setPreviewPdf(null)}
									className={`rounded-lg p-1.5 transition-colors ${
										isDark
											? "text-slate-400 hover:text-white hover:bg-white/10"
											: "text-sky-700 hover:text-sky-950 hover:bg-[#d2f2f8]"
									}`}
									aria-label="Close PDF preview"
								>
									<svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
									</svg>
								</button>
							</div>
						</div>
						<div className="h-[70vh] sm:h-[75vh]">
							<iframe
								src={getGoogleDriveEmbedUrl(previewPdf.url)}
								className="w-full h-full"
								title={previewPdf.label}
								allow="autoplay"
							/>
						</div>
					</div>
				</div>
			)}
		</>
	);
	}

	return (
		<div className={`h-full overflow-y-auto p-4 sm:p-6 wii-u-scrollbar`}>
			<div className="launcher-soft-hero mb-4 sm:mb-6">
				<div className="pointer-events-none absolute inset-0 bg-stripes opacity-10" />
				<div className="relative flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
					<div>
						<div className="launcher-mini-tab">
							<FileText className="h-4 w-4" />
							Research Deck
						</div>
						<h2 className={`mt-4 text-3xl font-bold ${isDark ? "text-white" : "text-slate-800"}`}>
							Case studies, curiosity quests, and well-labeled rabbit holes.
						</h2>
						<p className={`mt-3 max-w-2xl text-sm sm:text-base leading-7 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
							Open a study to browse the full write-up, attached docs, and the original
							thinking without sanding off the project&apos;s personality.
						</p>
					</div>
					<div className="grid grid-cols-3 gap-3">
						{[
							{ label: "Studies", value: String(PROJECTS.length).padStart(2, "0"), icon: <FileText className="h-4 w-4" /> },
							{ label: "Notes", value: "Deep", icon: <Sparkles className="h-4 w-4" /> },
							{ label: "Badges", value: String(PROJECTS.filter((project) => project.nominated).length), icon: <Trophy className="h-4 w-4" /> },
						].map((item) => (
							<div key={item.label} className="launcher-stat-tile min-w-[112px]">
								<div className={`flex items-center gap-2 text-xs uppercase tracking-[0.16em] ${isDark ? "text-slate-500" : "text-slate-400"}`}>
									{item.icon}
									{item.label}
								</div>
								<div className="mt-2 text-xl font-bold">{item.value}</div>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2">
				{PROJECTS.map((project) => (
					<button
						key={project.id}
						type="button"
						onClick={() => setSelectedProject(project.id)}
						className={`group cursor-pointer rounded-2xl border p-3 sm:p-4 text-left transition-all hover:-translate-y-1 ${
							isDark
								? "bg-slate-900/45 border-white/8 shadow-[0_10px_24px_rgba(0,0,0,0.22)] hover:border-sky-200/20 hover:shadow-[0_16px_30px_rgba(0,0,0,0.3)]"
								: "border-[#daf7fc] bg-[linear-gradient(180deg,rgba(222,249,253,0.88),rgba(201,239,247,0.82))] shadow-[0_14px_30px_rgba(67,152,184,0.12)] hover:shadow-[0_18px_36px_rgba(67,152,184,0.18)]"
						}`}
					>
						<div className={`relative mb-2 sm:mb-3 h-32 sm:h-40 overflow-hidden rounded-xl ${isDark ? "bg-slate-800" : "bg-slate-200"}`}>
							<Image
								src={project.researchDocs?.thumbnail || `https://picsum.photos/seed/${project.seed}/800/600`}
								alt={project.title}
								fill
								className="object-cover transition-transform duration-500 group-hover:scale-105"
								referrerPolicy="no-referrer"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />
							<div className="absolute right-2 sm:right-3 bottom-2 sm:bottom-3 rounded-full bg-black/35 px-2 sm:px-3 py-0.5 sm:py-1 text-xs text-white backdrop-blur-sm">
								Open
							</div>
						</div>
						<div className={`text-xs uppercase tracking-[0.18em] ${isDark ? "text-sky-300" : "text-sky-700"}`}>
							<div className="flex flex-wrap items-center gap-2">
								<span>{project.kicker}</span>
								{project.nominated && (
									<span
										className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-bold tracking-[0.12em] normal-case ${
											isDark
												? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/20"
												: "bg-gradient-to-r from-amber-400 to-orange-400 text-white shadow-md"
										}`}
									>
										{SHOWCASE_LABEL}
									</span>
								)}
							</div>
						</div>
						<h3 className={`mt-1 sm:mt-2 font-bold text-sm sm:text-base ${isDark ? "text-slate-100" : "text-slate-700"}`}>{project.title}</h3>
						<p className={`mt-1 text-xs sm:text-sm leading-6 ${isDark ? "text-slate-400" : "text-slate-500"}`}>{project.summary}</p>
					</button>
				))}
			</div>
		</div>
	);
}
