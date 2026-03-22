"use client";

import { Cancel, Expand } from "pixelarticons/react";
import Image from "next/image";
import { useEffect } from "react";
import { ARTWORKS } from "@/components/launcher/content-data";
import type { ThemeMode } from "@/components/launcher/types";

// Global flag to track if escape was handled by a modal (shared with games-content)
declare global {
  var escapeHandledByModal: boolean;
}

type GalleryContentProps = {
	theme: ThemeMode;
	selectedArtwork: string | null;
	setSelectedArtwork: (value: string | null) => void;
};

export function GalleryContent({ theme, selectedArtwork, setSelectedArtwork }: GalleryContentProps) {
	const isDark = theme === "dark";
	const artworkData =
		selectedArtwork !== null
			? ARTWORKS.find((artwork) => artwork.id === Number(selectedArtwork)) ?? null
			: null;

	// Handle Escape key to close fullscreen view
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape" && artworkData) {
				// Mark that modal handled this escape
				globalThis.escapeHandledByModal = true;
				setSelectedArtwork(null);
				// Reset flag after other handlers have had a chance to check it
				setTimeout(() => {
					globalThis.escapeHandledByModal = false;
				}, 50);
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [artworkData, setSelectedArtwork]);

	return (
		<div className="h-full overflow-y-auto p-6 wii-u-scrollbar">
			<h2 className={`mb-6 text-2xl font-bold ${isDark ? "text-white" : "text-slate-800"}`}>Art Gallery</h2>
			<div className="columns-2 space-y-4 gap-4 md:columns-3">
				{ARTWORKS.map((artwork) => (
					<button
						key={artwork.id}
						type="button"
						onClick={() => setSelectedArtwork(String(artwork.id))}
						className={`group relative block w-full cursor-pointer break-inside-avoid overflow-hidden rounded-xl border-4 shadow-sm transition-shadow hover:shadow-lg ${
							isDark ? "bg-slate-900/50 border-slate-700" : "bg-white border-white"
						}`}
					>
						<Image
							src={`https://picsum.photos/seed/${artwork.seed}/400/${artwork.height}`}
							alt={artwork.title}
							width={400}
							height={artwork.height}
							className="h-auto w-full object-cover"
							referrerPolicy="no-referrer"
						/>
						<div className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-black/55 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
							<span className="text-sm font-medium text-white">{artwork.title}</span>
							<span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm">
								<Expand className="h-4 w-4" />
							</span>
						</div>
					</button>
				))}
			</div>

			{artworkData && (
			<div
				className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/88 p-6 backdrop-blur-xl"
				data-lightbox-open="true"
				onClick={() => setSelectedArtwork(null)}
			>
					<div className="relative w-full max-w-6xl" onClick={(event) => event.stopPropagation()}>
						<button
							type="button"
							onClick={() => setSelectedArtwork(null)}
							className="absolute top-4 right-4 z-10 inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-black/35 text-white backdrop-blur-sm transition-colors hover:bg-black/55"
						>
							<Cancel className="h-5 w-5" />
						</button>
						<div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/85 p-3 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
							<div className="relative h-[72vh] overflow-hidden rounded-[22px]">
								<Image
									src={`https://picsum.photos/seed/${artworkData.seed}/1600/1200`}
									alt={artworkData.title}
									fill
									className="object-contain"
									referrerPolicy="no-referrer"
								/>
							</div>
							<div className="flex items-center justify-between px-3 pt-4 text-white">
								<div>
									<div className="text-lg font-bold">{artworkData.title}</div>
									<div className="text-sm text-slate-400">Fullscreen gallery view</div>
								</div>
								<div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
									Press close to return
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
