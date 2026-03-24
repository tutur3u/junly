"use client";

import { ArrowLeft, Cancel, ChevronLeft, ChevronRight, Expand, FileText, Gamepad, Loader, Play, SortHorizontal, Sparkles, Trophy, Zap } from "pixelarticons/react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useState, useCallback, useEffect, useRef } from "react";
import { GAME_PREVIEWS } from "@/components/launcher/content-data";
import type { ThemeMode } from "@/components/launcher/types";
import type { ContentLink, ContentSection, GamePreview } from "@/components/launcher/content-data";

const SHOWCASE_LABEL = "RMIT Showcase Nomination";

// Global flag to track if escape was handled by a modal (shared across content files)
declare global {
  var escapeHandledByModal: boolean;
}

function getDocumentEmbedUrl(url: string): string {
	const match = url.match(/\/d\/(.*?)(?:\/|$)/);
	if (match && match[1]) {
		return `https://drive.google.com/file/d/${match[1]}/preview`;
	}
	return `https://drive.google.com/viewer?url=${encodeURIComponent(url)}&embedded=true`;
}

function VideoEmbed({ videoUrl }: { videoUrl: string }) {
	return (
		<div className="relative overflow-hidden rounded-[22px] border border-white/15 bg-slate-900/60 shadow-xl">
			<div className="relative pb-[56.25%]">
				<iframe
					src={videoUrl}
					title="Gameplay Video"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
					className="absolute inset-0 h-full w-full rounded-[22px]"
				/>
			</div>
		</div>
	);
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
						isDark ? "text-emerald-300 hover:text-emerald-200" : "text-emerald-700 hover:text-emerald-800"
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
						isDark ? "text-emerald-300 hover:text-emerald-200" : "text-emerald-700 hover:text-emerald-800"
					}`}
				>
					{expanded ? "See less" : "See more..."}
				</button>
			)}
		</div>
	);
}

function DocumentAction({
	document,
	isDark,
	onPreview,
}: {
	document: ContentLink;
	isDark: boolean;
	onPreview: (document: ContentLink) => void;
}) {
	const baseClassName = `inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 font-bold transition-all hover:scale-105 ${
		isDark
			? "bg-slate-800/80 text-white hover:bg-slate-700/90 border border-white/15"
			: "bg-white/90 text-slate-700 hover:bg-white border border-white/80 shadow-sm"
	}`;

	if (document.action === "external") {
		return (
			<a
				href={document.url}
				target="_blank"
				rel="noopener noreferrer"
				className={baseClassName}
			>
				<FileText className="h-4 w-4" />
				{document.label}
			</a>
		);
	}

	return (
		<button
			type="button"
			onClick={() => onPreview(document)}
			className={baseClassName}
		>
			<FileText className="h-4 w-4" />
			{document.label}
		</button>
	);
}

function DetailSectionCard({
	section,
	isDark,
	onPreview,
}: {
	section: ContentSection;
	isDark: boolean;
	onPreview: (document: ContentLink) => void;
}) {
	return (
		<div
			className={`rounded-2xl border p-4 sm:p-5 ${
				section.tone === "highlight"
					? isDark
						? "border-amber-400/30 bg-gradient-to-br from-amber-500/10 via-slate-900/70 to-slate-950"
						: "border-amber-200 bg-gradient-to-br from-amber-50 via-white to-orange-50"
					: isDark
						? "bg-slate-900/55 border-white/8"
						: "bg-white/65 border-white"
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
							<span className={`mt-1.5 h-2 w-2 flex-shrink-0 rounded-full ${section.tone === "highlight" ? "bg-amber-400" : "bg-emerald-400"}`} />
							<span className="text-sm">{item}</span>
						</li>
					))}
				</ul>
			)}
			{section.links && section.links.length > 0 && (
				<div className="mt-4 flex flex-wrap gap-2">
					{section.links.map((link) => (
						<DocumentAction key={`${section.title}-${link.label}`} document={link} isDark={isDark} onPreview={onPreview} />
					))}
				</div>
			)}
		</div>
	);
}

function ScreenshotLightbox({
	images,
	currentIndex,
	onClose,
	onNext,
	onPrev,
}: {
	images: string[];
	currentIndex: number;
	onClose: () => void;
	onNext: () => void;
	onPrev: () => void;
}) {
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				// Mark that modal handled this escape
				globalThis.escapeHandledByModal = true;
				onClose();
				// Reset flag after other handlers have had a chance to check it
				setTimeout(() => {
					globalThis.escapeHandledByModal = false;
				}, 50);
			}
			if (e.key === "ArrowRight") onNext();
			if (e.key === "ArrowLeft") onPrev();
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [onClose, onNext, onPrev]);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-md"
			data-lightbox-open="true"
		>
			<button
				type="button"
				className="absolute right-4 top-4 rounded-full p-3 transition-colors hover:bg-white/10 text-white/70 hover:text-white z-10"
				onClick={onClose}
				aria-label="Close"
			>
				<Cancel className="h-6 w-6" />
			</button>

			<button
				type="button"
				className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full p-3 transition-colors hover:bg-white/10 text-white/70 hover:text-white z-10"
				onClick={onPrev}
				aria-label="Previous"
			>
				<ChevronLeft className="h-8 w-8" />
			</button>

			<button
				type="button"
				className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-3 transition-colors hover:bg-white/10 text-white/70 hover:text-white z-10"
				onClick={onNext}
				aria-label="Next"
			>
				<ChevronRight className="h-8 w-8" />
			</button>

			<div className="relative h-full w-full max-w-6xl px-16 py-8">
				<motion.div
					key={currentIndex}
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0.9 }}
					className="relative h-full"
				>
					<Image
						src={images[currentIndex]}
						alt={`Screenshot ${currentIndex + 1}`}
						fill
						className="object-contain"
						priority
					/>
				</motion.div>
				<div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-slate-900/80 px-4 py-2 text-sm text-white/70">
					{currentIndex + 1} / {images.length}
				</div>
			</div>
		</motion.div>
	);
}

function ScreenshotStrip({ screenshots, gameTab, setGameTab }: { screenshots: { gameplay: string[]; bts?: string[] }; gameTab: string | null; setGameTab: (value: string | null) => void }) {
	const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
	const scrollRef = useRef<HTMLDivElement>(null);
	const images = gameTab === "bts" ? screenshots.bts ?? [] : screenshots.gameplay;

	const openLightbox = (index: number) => setLightboxIndex(index);
	const closeLightbox = () => setLightboxIndex(null);
	const goNext = useCallback(() => {
		if (lightboxIndex !== null) {
			setLightboxIndex((lightboxIndex + 1) % images.length);
		}
	}, [lightboxIndex, images.length]);
	const goPrev = useCallback(() => {
		if (lightboxIndex !== null) {
			setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
		}
	}, [lightboxIndex, images.length]);

	const scroll = (direction: "left" | "right") => {
		if (scrollRef.current) {
			const scrollAmount = 320;
			scrollRef.current.scrollBy({
				left: direction === "right" ? scrollAmount : -scrollAmount,
				behavior: "smooth",
			});
		}
	};

	return (
		<>
			<div className="space-y-3">
				<div className="flex gap-2">
					<button
						type="button"
						onClick={() => setGameTab("gameplay")}
						className={`rounded-full px-4 py-1.5 text-sm font-bold transition-all ${
							gameTab !== "bts"
								? "bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white shadow-lg"
								: "bg-slate-800/60 text-slate-400 hover:text-white border border-white/10"
						}`}
					>
						Gameplay
					</button>
					{screenshots.bts && screenshots.bts.length > 0 && (
						<button
							type="button"
							onClick={() => setGameTab("bts")}
							className={`rounded-full px-4 py-1.5 text-sm font-bold transition-all ${
								gameTab === "bts"
									? "bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white shadow-lg"
									: "bg-slate-800/60 text-slate-400 hover:text-white border border-white/10"
							}`}
						>
							Behind the Scenes
						</button>
					)}
				</div>
				<div className="relative">
					<button
						type="button"
						onClick={() => scroll("left")}
						className="absolute left-2 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/90 border border-white/20 text-white/80 hover:text-white hover:border-emerald-400/50 hover:bg-slate-800/90 transition-all shadow-lg"
					>
						<ChevronLeft className="h-5 w-5" />
					</button>
					<div ref={scrollRef} className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
						{images.map((src, index) => (
							<button
								type="button"
								key={src}
								onClick={() => openLightbox(index)}
								className="group relative flex-shrink-0 h-44 w-80 overflow-hidden rounded-[18px] border border-white/10 bg-slate-800/50 transition-all hover:border-emerald-400/40 hover:shadow-lg hover:shadow-emerald-500/20"
							>
								<Image
									src={src}
									alt={`Screenshot ${index + 1}`}
									fill
									className="object-cover transition-transform duration-500 group-hover:scale-105"
								/>
								<div className="absolute inset-0 flex items-center justify-center bg-slate-950/0 transition-colors group-hover:bg-slate-950/40">
									<Expand className="h-8 w-8 text-white opacity-0 transition-opacity group-hover:opacity-100" />
								</div>
							</button>
						))}
					</div>
					<button
						type="button"
						onClick={() => scroll("right")}
						className="absolute right-2 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/90 border border-white/20 text-white/80 hover:text-white hover:border-emerald-400/50 hover:bg-slate-800/90 transition-all shadow-lg"
					>
						<ChevronRight className="h-5 w-5" />
					</button>
					<div className="pointer-events-none absolute right-0 top-0 bottom-2 w-12 bg-gradient-to-l from-[rgba(10,20,31,0.95)] to-transparent" />
				</div>
			</div>

			<AnimatePresence>
				{lightboxIndex !== null && (
					<ScreenshotLightbox
						images={images}
						currentIndex={lightboxIndex}
						onClose={closeLightbox}
						onNext={goNext}
						onPrev={goPrev}
					/>
				)}
			</AnimatePresence>
		</>
	);
}

function PdfModal({ documentLabel, pdfUrl, onClose }: { documentLabel: string; pdfUrl: string; onClose: () => void }) {
	const [isLoading, setIsLoading] = useState(true);

	// Handle Escape key to close PDF modal
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				// Mark that modal handled this escape
				globalThis.escapeHandledByModal = true;
				onClose();
				// Reset flag after other handlers have had a chance to check it
				setTimeout(() => {
					globalThis.escapeHandledByModal = false;
				}, 50);
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [onClose]);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="fixed inset-0 z-50 flex items-center justify-center p-4"
			data-pdf-open="true"
		>
			<button
				type="button"
				className="absolute inset-0 cursor-default bg-slate-950/85 backdrop-blur-md"
				onClick={onClose}
				onKeyDown={(e) => e.key === "Escape" && onClose()}
				aria-label="Close modal"
			/>
			<motion.div
				initial={{ scale: 0.9, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				exit={{ scale: 0.9, opacity: 0 }}
				className="relative z-10 flex h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-[28px] border border-white/15 bg-slate-900/95 shadow-2xl"
			>
				<div className="flex items-center justify-between border-b border-white/10 bg-slate-900/80 px-5 py-4">
					<div className="flex items-center gap-3">
						<FileText className="h-5 w-5 text-emerald-400" />
						<span className="font-bold text-white">{documentLabel}</span>
					</div>
					<button
						type="button"
						onClick={onClose}
						className="rounded-full p-2 transition-colors hover:bg-white/10 text-slate-400 hover:text-white"
					>
						<Cancel className="h-5 w-5" />
					</button>
				</div>
				<div className="relative flex-1">
					{isLoading && (
						<div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-slate-900/95">
							<div className="animate-spin">
								<Loader className="h-10 w-10 text-emerald-400" />
							</div>
							<span className="text-slate-400">Loading document...</span>
							<div className="h-1 w-48 overflow-hidden rounded-full bg-slate-800">
								<div className="h-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 animate-[width_2s_ease-in-out_infinite]" style={{ width: "100%" }} />
							</div>
						</div>
					)}
					<iframe
						src={getDocumentEmbedUrl(pdfUrl)}
						className="h-full w-full"
						title={documentLabel}
						onLoad={() => setIsLoading(false)}
					/>
				</div>
			</motion.div>
		</motion.div>
	);
}

function GameDetailView({
	game,
	onBack,
	theme,
	gameTab,
	setGameTab,
}: {
	game: GamePreview;
	onBack: () => void;
	theme: ThemeMode;
	gameTab: string | null;
	setGameTab: (value: string | null) => void;
}) {
	const [activeDocument, setActiveDocument] = useState<{ label: string; url: string } | null>(null);
	const isDark = theme === "dark";
	const documents = game.documents ?? (game.gddUrl ? [{ label: "Game Design Document", url: game.gddUrl, action: "modal" }] : []);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				// Check if a modal already handled this escape
				if (globalThis.escapeHandledByModal) return;
				// Only go back if no modal is open (check for lightbox or PDF)
				const isModalOpen = document.querySelector('[data-lightbox-open="true"]') !== null;
				const isPdfOpen = document.querySelector('[data-pdf-open="true"]') !== null;
				if (!isModalOpen && !isPdfOpen) {
					onBack();
				}
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [onBack]);

	return (
		<>
			<AnimatePresence mode="wait">
				<motion.div
					key="detail"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.2 }}
					className="h-full overflow-y-auto wii-u-scrollbar"
				>
					<div className="space-y-6 p-6">
						<button
							type="button"
							onClick={onBack}
							className={`group inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition-all ${
								isDark
									? "bg-slate-800/70 text-slate-300 hover:bg-slate-800 hover:text-white border border-white/10"
									: "bg-white/80 text-slate-600 hover:bg-white hover:text-slate-900 border border-white/80 shadow-sm"
							}`}
						>
							<ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
							Back to Games
						</button>

						<div
							className={`relative overflow-hidden rounded-[30px] border ${
								isDark
									? "border-emerald-900/30 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950"
									: "border-white/85 bg-gradient-to-br from-white via-white to-emerald-50/30"
							}`}
						>
							{game.screenshots?.gameplay?.[0] && (
								<div className="absolute inset-0">
									<Image
										src={game.screenshots.gameplay[0]}
										alt=""
										fill
										className="object-cover opacity-20 blur-sm"
										priority
									/>
									<div className={`absolute inset-0 bg-gradient-to-t ${isDark ? "from-slate-950 via-slate-900/80 to-slate-900/30" : "from-white via-white/80 to-white/30"}`} />
								</div>
							)}

							<div className="relative p-6">
								<div className="pointer-events-none absolute inset-0 bg-stripes opacity-5" />

								<div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
									<div className="flex-1 space-y-4">
										<div
											className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-bold uppercase tracking-[0.18em] ${
												isDark
													? "bg-emerald-500/20 text-emerald-300 border border-emerald-400/30"
													: "bg-emerald-100/90 text-emerald-700 border border-emerald-200/80"
											}`}
										>
											<Gamepad className="h-4 w-4" />
											{game.tagline}
										</div>

										<ExpandableHeading
											text={game.title}
											isDark={isDark}
											className={`text-5xl font-bold tracking-tight leading-[1.05] ${isDark ? "text-white" : "text-slate-800"}`}
										/>

										<div className="flex flex-wrap items-center gap-4 text-sm">
											{game.role && (
												<span className={`${isDark ? "text-slate-400" : "text-slate-500"}`}>
													{game.role}
												</span>
											)}
											{game.year && (
												<>
													<span className={`text-xs ${isDark ? "text-slate-600" : "text-slate-400"}`}>•</span>
													<span className={`${isDark ? "text-slate-400" : "text-slate-500"}`}>
														{game.year}
													</span>
												</>
											)}
										<span className={`text-xs ${isDark ? "text-slate-600" : "text-slate-400"}`}>•</span>
										<span className={`rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 px-3 py-0.5 text-xs font-bold text-white`}>
											{game.state}
										</span>
										{game.nominated && (
											<span className={`inline-flex items-center gap-1 rounded-full px-3 py-0.5 text-xs font-bold ${
												isDark
													? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/20"
													: "bg-gradient-to-r from-amber-400 to-orange-400 text-white shadow-md"
											}`}>
												<Trophy className="h-3 w-3" />
												{SHOWCASE_LABEL}
											</span>
										)}
									</div>

										<div className="max-w-2xl">
											<ExpandableBody text={game.description} isDark={isDark} />
										</div>

										<div className="flex flex-wrap gap-2">
											{game.genres.map((feature) => (
												<span
													key={feature}
													className={`rounded-full px-3 py-1 text-sm ${
														isDark
															? "bg-slate-800/60 text-slate-300 border border-white/10"
															: "bg-slate-100/80 text-slate-600 border border-white/70"
													}`}
												>
													{feature}
												</span>
											))}
										</div>

										{game.tools && game.tools.length > 0 && (
											<div className="flex flex-wrap items-center gap-2 pt-2">
												<span className={`text-xs uppercase tracking-[0.12em] ${isDark ? "text-slate-500" : "text-slate-400"}`}>Built with</span>
												<div className="flex gap-2">
													{game.tools.map((tool) => (
														<span
															key={tool}
															className={`rounded-lg px-2.5 py-1 text-xs font-medium ${
																isDark
																	? "bg-emerald-500/15 text-emerald-300 border border-emerald-400/20"
																	: "bg-emerald-50 text-emerald-700 border border-emerald-200"
															}`}
														>
															{tool}
														</span>
													))}
												</div>
											</div>
										)}
									</div>

									<div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
										{game.playUrl && (
											<a
												href={game.playUrl}
												target="_blank"
												rel="noopener noreferrer"
												className={`inline-flex items-center justify-center gap-2 rounded-2xl px-8 py-4 font-bold text-white shadow-xl transition-all hover:scale-105 hover:shadow-emerald-500/30 ${
													"bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500"
												}`}
											>
												<Play className="h-5 w-5" />
												Play Now
											</a>
										)}
										{documents.map((document) => (
											<DocumentAction
												key={document.label}
												document={document}
												isDark={isDark}
												onPreview={(selectedDocument) => setActiveDocument(selectedDocument)}
											/>
										))}
									</div>
									</div>
								</div>
						</div>

						{game.contentSections.length > 0 && (
							<div className="lg:columns-2 lg:gap-4">
								{game.contentSections.map((section) => (
									<DetailSectionCard
										key={`${game.id}-${section.title}`}
										section={section}
										isDark={isDark}
										onPreview={(selectedDocument) => setActiveDocument(selectedDocument)}
									/>
								))}
							</div>
						)}

						{game.videoUrl && (
							<div className="pt-1">
								<VideoEmbed videoUrl={game.videoUrl} />
							</div>
						)}

						{game.screenshots && (
							<div>
								<div className="mb-3 flex items-center gap-3">
									<h3 className={`text-lg font-bold ${isDark ? "text-white" : "text-slate-800"}`}>
										Gallery
									</h3>
									<div className={`h-px flex-1 bg-gradient-to-r ${isDark ? "from-slate-700" : "from-slate-200"} to-transparent`} />
									<span className={`text-xs ${isDark ? "text-slate-500" : "text-slate-400"}`}>
										{game.screenshots!.gameplay.length + (game.screenshots!.bts?.length ?? 0)} images
									</span>
								</div>
								<ScreenshotStrip screenshots={game.screenshots} gameTab={gameTab} setGameTab={setGameTab} />
							</div>
						)}

						<div className="h-8" />
					</div>
				</motion.div>
			</AnimatePresence>

			<AnimatePresence>
				{activeDocument && (
					<PdfModal documentLabel={activeDocument.label} pdfUrl={activeDocument.url} onClose={() => setActiveDocument(null)} />
				)}
			</AnimatePresence>
		</>
	);
}

function GameCard({
	game,
	isSelected,
	onClick,
	isDark,
}: {
	game: GamePreview;
	isSelected: boolean;
	onClick: () => void;
	isDark: boolean;
}) {
	return (
		<motion.button
			type="button"
			onClick={onClick}
			initial={{ opacity: 0, scale: 0.98 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.3, ease: "easeOut" }}
			className={`group relative cursor-pointer overflow-hidden rounded-[28px] border p-4 text-left transition-all hover:-translate-y-1 active:scale-[0.99] ${
				isSelected
					? isDark
						? "border-emerald-400/25 bg-slate-900/80 shadow-[0_18px_36px_rgba(0,0,0,0.28)]"
						: "border-emerald-300 bg-white/80 shadow-[0_14px_30px_rgba(133,178,211,0.18)]"
					: isDark
						? "border-white/8 bg-slate-900/55 hover:border-sky-200/15 hover:bg-slate-900/72"
						: "border-white/80 bg-white/58 hover:bg-white/74"
			}`}
		>
			<div className="grid gap-4 md:grid-cols-[220px_1fr]">
				<div className="relative h-40 overflow-hidden rounded-[22px]">
					<Image
						src={game.screenshots?.gameplay?.[0] ?? `https://picsum.photos/seed/${game.seed}/700/520`}
						alt={game.title}
						fill
						className="object-cover transition-transform duration-500 group-hover:scale-105"
						referrerPolicy="no-referrer"
					/>
					<div
						className={`absolute inset-0 bg-gradient-to-t ${isDark ? "from-slate-950/80 via-slate-950/20 to-transparent" : "from-slate-900/45 via-transparent to-transparent"}`}
					/>
				</div>
				<div className="flex flex-col justify-between">
					<div>
						<div className="flex items-center gap-2 flex-wrap">
							<div className={`text-xs uppercase tracking-[0.18em] ${isDark ? "text-emerald-400" : "text-emerald-700"}`}>
								{game.tagline}
							</div>
							<span className={`rounded-full bg-gradient-to-r ${game.accent} px-2 py-0.5 text-xs font-bold text-white`}>
								{game.state}
							</span>
							{game.nominated && (
								<span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-bold ${
									isDark
										? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/20"
										: "bg-gradient-to-r from-amber-400 to-orange-400 text-white shadow-md"
								}`}>
									<Trophy className="h-3 w-3" />
									{SHOWCASE_LABEL}
								</span>
							)}
						</div>
						<h3 className={`mt-2 text-2xl font-bold ${isDark ? "text-white" : "text-slate-800"}`}>
							{game.title}
						</h3>
						<p className={`mt-2 text-sm line-clamp-2 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
							{game.description}
						</p>
					</div>
					<div className="mt-4 flex flex-wrap gap-1.5 overflow-hidden">
						{game.genres.map((genre) => (
							<span
								key={genre}
								className={`rounded-full px-2 py-0.5 text-xs font-medium whitespace-nowrap ${
									isDark
										? "bg-emerald-500/15 text-emerald-300 border border-emerald-400/20"
										: "bg-emerald-50 text-emerald-700 border border-emerald-200"
								}`}
							>
								{genre}
							</span>
						))}
					</div>
				</div>
			</div>
		</motion.button>
	);
}

type GamesContentProps = {
	theme: ThemeMode;
	selectedGame: string | null;
	setSelectedGame: (value: string | null) => void;
	gameFilter: string | null;
	setGameFilter: (value: string | null) => void;
	gameTab: string | null;
	setGameTab: (value: string | null) => void;
};

export function GamesContent({ theme, selectedGame, setSelectedGame, gameFilter, setGameFilter, gameTab, setGameTab }: GamesContentProps) {
	const isDark = theme === "dark";
	const activeGame = selectedGame !== null
		? GAME_PREVIEWS.find((game) => game.id === selectedGame) ?? null
		: null;
	const showDetail = selectedGame !== null && activeGame !== null;

	const allGenres = Array.from(
		new Set(GAME_PREVIEWS.flatMap((game) => game.genres))
	).sort();

	const statusFilters = ["All", "Completed", "In Progress"];

	const filteredGames = GAME_PREVIEWS.filter((game) => {
		if (!gameFilter || gameFilter === "All") return true;
		if (gameFilter === "Completed") return game.state === "Completed";
		if (gameFilter === "In Progress") return game.state !== "Completed";
		return game.genres.includes(gameFilter);
	});

	const handleGameClick = (gameId: string) => {
		setSelectedGame(gameId);
	};

	const handleBack = () => {
		setSelectedGame(null);
	};

	if (showDetail && activeGame) {
		return <GameDetailView game={activeGame} onBack={handleBack} theme={theme} gameTab={gameTab} setGameTab={setGameTab} />;
	}

	return (
		<div className="h-full overflow-y-auto p-6 wii-u-scrollbar">
			<div
				className={`relative overflow-hidden rounded-[30px] border p-6 ${
					isDark
						? "border-sky-200/10 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.16),transparent_24%),linear-gradient(180deg,rgba(10,20,31,0.95),rgba(7,15,24,0.98))]"
						: "border-white/85 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.12),transparent_20%),linear-gradient(180deg,rgba(255,255,255,0.92),rgba(236,246,255,0.78))]"
				}`}
			>
				<div className="pointer-events-none absolute inset-0 bg-stripes opacity-10" />
				<div className="relative flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
					<div>
						<div
							className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-bold uppercase tracking-[0.18em] ${
								isDark
									? "bg-sky-400/10 text-sky-200 border border-sky-200/10"
									: "bg-sky-100/80 text-sky-700 border border-white/80"
							}`}
						>
							<Gamepad className="h-4 w-4" />
							Game Center
						</div>
						<h2 className={`mt-4 text-3xl font-bold ${isDark ? "text-white" : "text-slate-800"}`}>
							Games, Prototypes, and Playable Archives
						</h2>
						<p className={`mt-3 max-w-2xl ${isDark ? "text-slate-400" : "text-slate-500"}`}>
							Open a game to read the full write-up, launch its materials, and browse the in-game gallery without losing the original project wording.
						</p>
					</div>

					<div className="grid grid-cols-3 gap-3">
						{[
							{ label: "Concepts", value: String(GAME_PREVIEWS.length).padStart(2, "0"), icon: <Sparkles className="h-4 w-4" /> },
							{ label: "Badges", value: "12", icon: <Trophy className="h-4 w-4" /> },
							{ label: "Power", value: "89%", icon: <Zap className="h-4 w-4" /> },
						].map((item) => (
							<div
								key={item.label}
								className={`rounded-2xl border px-4 py-3 ${
									isDark ? "border-white/8 bg-slate-950/35 text-slate-200" : "border-white/80 bg-white/70 text-slate-700"
								}`}
							>
								<div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] opacity-70">
									{item.icon}
									{item.label}
								</div>
								<div className="mt-2 text-xl font-bold">{item.value}</div>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="mt-4 overflow-x-auto pb-2">
				<div className="flex items-center gap-3">
					<div className={`flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] ${isDark ? "text-slate-500" : "text-slate-400"}`}>
						<SortHorizontal className="h-4 w-4" />
						Filter
					</div>
					<div className="flex gap-2">
						{statusFilters.map((filter) => (
							<button
								key={filter}
								type="button"
								onClick={() => setGameFilter(filter)}
								className={`rounded-full px-4 py-1.5 text-sm font-bold transition-all whitespace-nowrap ${
									gameFilter === filter
										? "bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/20"
										: isDark
											? "bg-slate-800/60 text-slate-400 hover:text-white border border-white/10"
											: "bg-white/70 text-slate-600 hover:text-slate-900 border border-white/80"
								}`}
							>
								{filter}
								{filter === "Completed" && (
									<span className={`ml-1.5 rounded-full px-1.5 py-0.5 text-xs ${isDark ? "bg-emerald-500/30" : "bg-emerald-100 text-emerald-700"}`}>
										{GAME_PREVIEWS.filter((g) => g.state === "Completed").length}
									</span>
								)}
								{filter === "In Progress" && (
									<span className={`ml-1.5 rounded-full px-1.5 py-0.5 text-xs ${isDark ? "bg-sky-500/30" : "bg-sky-100 text-sky-700"}`}>
										{GAME_PREVIEWS.filter((g) => g.state !== "Completed").length}
									</span>
								)}
							</button>
						))}
						<div className={`h-6 w-px ${isDark ? "bg-slate-700" : "bg-slate-300"}`} />
						{allGenres.map((genre) => (
							<button
								key={genre}
								type="button"
								onClick={() => setGameFilter(genre)}
								className={`rounded-full px-4 py-1.5 text-sm font-bold transition-all whitespace-nowrap ${
									gameFilter === genre
										? "bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/20"
										: isDark
											? "bg-slate-800/60 text-slate-400 hover:text-white border border-white/10"
											: "bg-white/70 text-slate-600 hover:text-slate-900 border border-white/80"
								}`}
							>
								{genre}
							</button>
						))}
					</div>
				</div>
			</div>

			<div className="mt-6 grid gap-5 md:grid-cols-2">
				{filteredGames.length === 0 ? (
					<div className={`col-span-2 rounded-[28px] border p-12 text-center ${isDark ? "border-white/10 bg-slate-900/40 text-slate-500" : "border-white/80 bg-white/40 text-slate-400"}`}>
						<Gamepad className="mx-auto h-12 w-12 opacity-30" />
						<p className="mt-4 font-bold">No games match this filter</p>
						<button
							type="button"
							onClick={() => setGameFilter("All")}
							className={`mt-3 text-sm underline ${isDark ? "text-slate-400 hover:text-white" : "text-slate-500 hover:text-slate-700"}`}
						>
							Clear filter
						</button>
					</div>
				) : (
					filteredGames.map((game) => (
						<GameCard
							key={game.id}
							game={game}
							isSelected={game.id === selectedGame}
							onClick={() => handleGameClick(game.id)}
							isDark={isDark}
						/>
					))
				)}
			</div>
		</div>
	);
}
