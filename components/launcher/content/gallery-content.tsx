"use client";

import { Cancel, Expand, Image as ImageIcon, Sparkles } from "pixelarticons/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import type { ThemeMode } from "@/components/launcher/types";

// Global flag to track if escape was handled by a modal (shared with games-content)
declare global {
  var escapeHandledByModal: boolean;
}

const ENABLE_ART_GALLERY = false;

// All images from public/media/portfolio folder
const PORTFOLIO_IMAGES = [
	"/media/portfolio/games/atelier/1.png",
	"/media/portfolio/games/atelier/2.png",
	"/media/portfolio/games/atelier/3.png",
	"/media/portfolio/games/atelier/4.png",
	"/media/portfolio/games/atelier/5.png",
	"/media/portfolio/games/atelier/6.png",
	"/media/portfolio/games/atelier/7.png",
	"/media/portfolio/games/atelier/8.png",
	"/media/portfolio/games/atelier/9.png",
	"/media/portfolio/games/atelier/10.png",
	"/media/portfolio/games/atelier/11.png",
	"/media/portfolio/games/atelier/12.png",
	"/media/portfolio/games/atelier/13.png",
	"/media/portfolio/games/aa-sequel/gameplay/1.png",
	"/media/portfolio/games/aa-sequel/gameplay/2.png",
	"/media/portfolio/games/aa-sequel/gameplay/3.png",
	"/media/portfolio/games/aa-sequel/gameplay/4.png",
	"/media/portfolio/games/aa-sequel/gameplay/5.png",
	"/media/portfolio/games/aa-sequel/gameplay/6.png",
	"/media/portfolio/games/aa-sequel/gameplay/7.png",
	"/media/portfolio/games/aa-sequel/gameplay/8.png",
	"/media/portfolio/games/aa-sequel/gameplay/9.png",
	"/media/portfolio/games/remedy/gameplay/1.png",
	"/media/portfolio/games/remedy/gameplay/2.png",
	"/media/portfolio/games/remedy/gameplay/3.png",
	"/media/portfolio/games/remedy/gameplay/4.png",
	"/media/portfolio/games/remedy/gameplay/5.png",
	"/media/portfolio/games/remedy/gameplay/6.png",
	"/media/portfolio/games/remedy/gameplay/7.png",
	"/media/portfolio/games/remedy/gameplay/8.png",
	"/media/portfolio/games/wok/gameplay/1.png",
	"/media/portfolio/games/wok/gameplay/2.png",
	"/media/portfolio/games/wok/gameplay/3.png",
	"/media/portfolio/games/wok/gameplay/4.png",
	"/media/portfolio/games/xavier/gameplay/1.png",
	"/media/portfolio/games/xavier/gameplay/2.jpg",
	"/media/portfolio/games/xavier/gameplay/3.jpg",
	"/media/portfolio/games/xavier/gameplay/4.jpg",
	"/media/portfolio/games/xavier/gameplay/5.jpg",
	"/media/portfolio/games/xavier/gameplay/6.jpg",
	"/media/portfolio/games/xavier/gameplay/7.jpg",
	"/media/portfolio/games/asphyxiated/behind-the-scenes/1.png",
	"/media/portfolio/games/asphyxiated/behind-the-scenes/2.png",
	"/media/portfolio/games/asphyxiated/gameplay/1.png",
	"/media/portfolio/games/asphyxiated/gameplay/2.png",
	"/media/portfolio/games/asphyxiated/gameplay/3.png",
	"/media/portfolio/games/asphyxiated/gameplay/4.png",
	"/media/portfolio/games/asphyxiated/gameplay/5.png",
	"/media/portfolio/games/asphyxiated/gameplay/6.png",
	"/media/portfolio/games/magi/gameplay/1.png",
	"/media/portfolio/games/magi/gameplay/2.png",
	"/media/portfolio/games/magi/gameplay/3.png",
	"/media/portfolio/games/magi/gameplay/4.png",
	"/media/portfolio/games/magi/gameplay/5.png",
	"/media/portfolio/games/magi/gameplay/6.png",
	"/media/portfolio/games/magi/gameplay/7.png",
	"/media/portfolio/games/magi/gameplay/8.png",
	"/media/portfolio/games/magi/gameplay/9.png",
	"/media/portfolio/games/magi/gameplay/10.png",
	"/media/portfolio/games/magi/gameplay/11.png",
	"/media/portfolio/games/magi/gameplay/12.png",
	"/media/portfolio/games/magi/gameplay/13.png",
	"/media/portfolio/games/magi/gameplay/14.png",
	"/media/portfolio/games/mario/gameplay/1.png",
	"/media/portfolio/games/mario/gameplay/2.png",
	"/media/portfolio/games/mario/gameplay/3.png",
	"/media/portfolio/games/mario/gameplay/4.png",
];

type GalleryContentProps = {
	theme: ThemeMode;
	selectedArtwork: string | null;
	setSelectedArtwork: (value: string | null) => void;
};

function GalleryComingSoon({ theme }: Pick<GalleryContentProps, "theme">) {
	const isDark = theme === "dark";

	return (
		<div className="h-full overflow-y-auto p-6 wii-u-scrollbar">
			<div className="launcher-soft-hero">
				<div className="pointer-events-none absolute inset-0 bg-stripes opacity-10" />
				<div className="relative flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
					<div>
						<div className="launcher-mini-tab">
							<ImageIcon className="h-4 w-4" />
							Art Archive
						</div>
						<h2 className={`mt-4 text-3xl font-bold ${isDark ? "text-white" : "text-slate-800"}`}>
							Art tab coming soon.
						</h2>
						<p className={`mt-3 max-w-2xl text-sm leading-7 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
							The current art gallery is still in the launcher, but it is intentionally hidden behind a feature flag while this section gets a cleaner dedicated pass.
						</p>
					</div>
					<div className="grid grid-cols-3 gap-3">
						{[
							{ label: "Status", value: "Soon", icon: <Sparkles className="h-4 w-4" /> },
							{ label: "Archive", value: "Hidden", icon: <ImageIcon className="h-4 w-4" /> },
							{ label: "Mode", value: "Standby", icon: <Expand className="h-4 w-4" /> },
						].map((item) => (
							<div key={item.label} className="launcher-stat-tile min-w-[108px]">
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

			<div
				className={`mt-6 rounded-[28px] border p-6 sm:p-8 ${
					isDark
						? "border-white/10 bg-slate-900/65"
						: "border-[#daf7fc] bg-[#e8fcff]/90 shadow-[0_18px_36px_rgba(67,152,184,0.12)]"
				}`}
			>
				<div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
					<div className="max-w-2xl">
						<h3 className={`text-xl font-bold ${isDark ? "text-white" : "text-slate-800"}`}>
							A dedicated art surface is in progress.
						</h3>
						<p className={`mt-3 text-sm leading-7 ${isDark ? "text-slate-300" : "text-slate-600"}`}>
							For now, this tab stays as a placeholder instead of exposing the existing mixed gallery. When the flag flips back on, the archived images and fullscreen browser are still ready underneath.
						</p>
					</div>
					<div
						className={`rounded-[24px] border px-5 py-4 text-sm font-bold ${
							isDark
								? "border-emerald-400/20 bg-emerald-500/10 text-emerald-300"
								: "border-cyan-200/80 bg-cyan-100/70 text-cyan-800"
						}`}
					>
						Coming Soon
					</div>
				</div>
			</div>
		</div>
	);
}

function GalleryArchive({ theme, setSelectedArtwork }: Pick<GalleryContentProps, "theme" | "setSelectedArtwork">) {
	const isDark = theme === "dark";
	const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

	// Handle Escape key to close fullscreen view
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape" && selectedIndex !== null) {
				// Mark that modal handled this escape
				globalThis.escapeHandledByModal = true;
				setSelectedIndex(null);
				setSelectedArtwork(null);
				// Reset flag after other handlers have had a chance to check it
				setTimeout(() => {
					globalThis.escapeHandledByModal = false;
				}, 50);
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [selectedIndex, setSelectedArtwork]);

	const openLightbox = (index: number) => {
		setSelectedIndex(index);
		setSelectedArtwork(String(index));
	};

	const closeLightbox = () => {
		setSelectedIndex(null);
		setSelectedArtwork(null);
	};

	const goNext = () => {
		if (selectedIndex !== null) {
			setSelectedIndex((selectedIndex + 1) % PORTFOLIO_IMAGES.length);
		}
	};

	const goPrev = () => {
		if (selectedIndex !== null) {
			setSelectedIndex((selectedIndex - 1 + PORTFOLIO_IMAGES.length) % PORTFOLIO_IMAGES.length);
		}
	};

	// Handle arrow keys for navigation
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (selectedIndex === null) return;
			if (e.key === "ArrowRight") {
				setSelectedIndex((selectedIndex + 1) % PORTFOLIO_IMAGES.length);
			}
			if (e.key === "ArrowLeft") {
				setSelectedIndex((selectedIndex - 1 + PORTFOLIO_IMAGES.length) % PORTFOLIO_IMAGES.length);
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [selectedIndex]);

	const currentImage = selectedIndex !== null ? PORTFOLIO_IMAGES[selectedIndex] : null;

	return (
		<div className="h-full overflow-y-auto p-6 wii-u-scrollbar">
			<div className="launcher-soft-hero mb-6">
				<div className="pointer-events-none absolute inset-0 bg-stripes opacity-10" />
				<div className="relative flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
					<div>
						<div className="launcher-mini-tab">
							<ImageIcon className="h-4 w-4" />
							Gallery Archive
						</div>
						<h2 className={`mt-4 text-3xl font-bold ${isDark ? "text-white" : "text-slate-800"}`}>Screenshots, artwork, and visual souvenirs.</h2>
						<p className={`mt-3 max-w-2xl text-sm leading-7 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
							A swipeable wall of game captures, artwork, and mood-heavy fragments.
							Open any frame and flip through it like a tiny handheld album.
						</p>
					</div>
					<div className="grid grid-cols-3 gap-3">
						{[
							{ label: "Frames", value: String(PORTFOLIO_IMAGES.length).padStart(2, "0"), icon: <ImageIcon className="h-4 w-4" /> },
							{ label: "Spark", value: "A+" , icon: <Sparkles className="h-4 w-4" /> },
							{ label: "Mode", value: "Flip", icon: <Expand className="h-4 w-4" /> },
						].map((item) => (
							<div key={item.label} className="launcher-stat-tile min-w-[108px]">
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
			<div className="columns-2 space-y-4 gap-4 md:columns-3">
				{PORTFOLIO_IMAGES.map((src, index) => (
					<button
						key={src}
						type="button"
						onClick={() => openLightbox(index)}
						onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(index); } }}
						className={`group relative block w-full cursor-pointer break-inside-avoid overflow-hidden rounded-xl border-4 shadow-sm transition-shadow hover:shadow-lg ${
							isDark ? "bg-slate-900/50 border-slate-700" : "bg-[#ebfdff] border-[#daf7fc]"
						}`}
					>
						<Image
							src={src}
							alt={`Portfolio image ${index + 1}`}
							width={400}
							height={300}
							className="h-auto w-full object-cover"
						/>
						<div className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-black/55 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
							<span className="text-sm font-medium text-white">View</span>
							<span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm">
								<Expand className="h-4 w-4" />
							</span>
						</div>
					</button>
				))}
			</div>

			{currentImage && (
				<div
					className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/88 p-6 backdrop-blur-xl"
					data-lightbox-open="true"
				>
					<button
						type="button"
						className="absolute inset-0 cursor-default"
						onClick={closeLightbox}
						aria-label="Close lightbox by clicking background"
					/>
					<div className="relative w-full max-w-6xl pointer-events-auto">
					<button
						type="button"
						onClick={closeLightbox}
						className="absolute -top-12 right-0 z-10 inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-black/35 text-white backdrop-blur-sm transition-colors hover:bg-black/55"
						aria-label="Close"
					>
						<Cancel className="h-5 w-5" />
					</button>
					<button
						type="button"
						onClick={(e) => { e.stopPropagation(); goPrev(); }}
						className="absolute left-4 top-1/2 -translate-y-1/2 z-10 inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-black/35 text-white backdrop-blur-sm transition-colors hover:bg-black/55"
						aria-label="Previous image"
					>
						<svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-label="Previous">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
						</svg>
					</button>
					<button
						type="button"
						onClick={(e) => { e.stopPropagation(); goNext(); }}
						className="absolute right-4 top-1/2 -translate-y-1/2 z-10 inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-black/35 text-white backdrop-blur-sm transition-colors hover:bg-black/55"
						aria-label="Next image"
					>
						<svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-label="Next">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
						</svg>
					</button>
						<div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/85 p-3 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
							<div className="relative h-[72vh] overflow-hidden rounded-[22px]">
								<Image
									src={currentImage}
									alt={`Portfolio image ${selectedIndex! + 1}`}
									fill
									className="object-contain"
								/>
							</div>
							<div className="flex items-center justify-between px-3 pt-4 text-white">
								<div>
									<div className="text-lg font-bold">{selectedIndex! + 1} / {PORTFOLIO_IMAGES.length}</div>
									<div className="text-sm text-slate-400">Use arrow keys to navigate</div>
								</div>
								<div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
									Press ESC to close
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export function GalleryContent({ theme, setSelectedArtwork }: GalleryContentProps) {
	if (!ENABLE_ART_GALLERY) {
		return <GalleryComingSoon theme={theme} />;
	}

	return <GalleryArchive theme={theme} setSelectedArtwork={setSelectedArtwork} />;
}
