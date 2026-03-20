"use client";

import {
	Expand,
	Github,
	Mail,
	MessageSquare,
	Moon,
	Settings,
	Star,
	Sun,
	Twitter,
	X,
} from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";
import { useState } from "react";
import type {
	AppId,
	SettingsContentProps,
	ThemeMode,
} from "@/components/launcher/types";

type ProjectRecord = {
	id: string;
	title: string;
	kicker: string;
	year: string;
	status: string;
	stack: string[];
	summary: string;
	details: string[];
	features: string[];
	seed: string;
};

type ArtworkRecord = {
	id: number;
	title: string;
	seed: string;
	height: number;
};

type FeedPost = {
	id: number;
	user: string;
	copy: string;
	seed: string;
	initialYeahs: number;
	initialComments: string[];
};

type FeedState = Record<
	number,
	{
		liked: boolean;
		yeahs: number;
		commentDraft: string;
		commentOpen: boolean;
		comments: string[];
	}
>;

const PROJECTS: ProjectRecord[] = [
	{
		id: "wii-u-os",
		title: "Wii U Portfolio OS",
		kicker: "Immersive portfolio launcher",
		year: "2026",
		status: "Live prototype",
		stack: ["Next.js 16", "Motion", "Tailwind v4"],
		summary:
			"A playful operating-system style portfolio designed around the feeling of opening apps on a Nintendo console.",
		details: [
			"The experience treats navigation as software, not pages, so every section feels launched rather than loaded.",
			"It focuses on nostalgic motion, polished chrome, and layered ambient lighting to make the site feel tactile and memorable.",
		],
		features: [
			"Boot sequence and per-app launch transitions",
			"Themeable shell with Wii U-inspired day/night modes",
			"Local settings persistence for interaction preferences",
		],
		seed: "project1",
	},
	{
		id: "miiverse-club",
		title: "Miiverse Club",
		kicker: "Social micro-community concept",
		year: "2025",
		status: "Concept design",
		stack: ["React", "Community UX", "Interaction design"],
		summary:
			"A social feed concept built around expressive reactions, friendly prompts, and illustrated conversation spaces.",
		details: [
			"The focus was making social interactions feel playful and low-pressure, with strong visual identity around each action.",
			"The interaction patterns borrow from old console communities and remix them into a softer, more modern interface language.",
		],
		features: [
			"Reaction-first interactions",
			"Conversation threads with low-friction posting",
			"Visual identity system for posts, badges, and mood states",
		],
		seed: "project2",
	},
	{
		id: "pixel-atlas",
		title: "Pixel Atlas",
		kicker: "Curated art archive",
		year: "2024",
		status: "Archived build",
		stack: ["Next.js", "CMS", "Image pipelines"],
		summary:
			"A gallery-first site for collecting artwork, process notes, and visual references in a clean but characterful system.",
		details: [
			"The challenge was balancing a dense archive with a calm browsing experience so artwork always remained the focus.",
			"Layout, hierarchy, and asset treatment were tuned to feel collectible rather than generic.",
		],
		features: [
			"Masonry-inspired gallery composition",
			"Rich project metadata and collection filtering",
			"Responsive image treatment with archival framing",
		],
		seed: "project3",
	},
	{
		id: "console-mail",
		title: "Console Mail",
		kicker: "Messaging UI exploration",
		year: "2023",
		status: "Private study",
		stack: ["UI systems", "Interaction design", "Prototyping"],
		summary:
			"A communication concept that explores how console-native messaging could feel warm, legible, and delightfully tactile.",
		details: [
			"The design language was driven by rounded hardware metaphors, soft depth, and highly readable information architecture.",
			"It became a useful study in how nostalgia can guide interaction design without collapsing into imitation.",
		],
		features: [
			"Message composition and status models",
			"Soft-panel interface architecture",
			"Theme-aware contrast and accessibility tuning",
		],
		seed: "project4",
	},
];

const ARTWORKS: ArtworkRecord[] = [
	{ id: 1, title: "Sea Glass Memory", seed: "art1", height: 300 },
	{ id: 2, title: "Blue Plaza", seed: "art2", height: 400 },
	{ id: 3, title: "Loading Dream", seed: "art3", height: 500 },
	{ id: 4, title: "Quiet Orbit", seed: "art4", height: 300 },
	{ id: 5, title: "Distant Signal", seed: "art5", height: 400 },
	{ id: 6, title: "Synthetic Meadow", seed: "art6", height: 500 },
	{ id: 7, title: "Night Console", seed: "art7", height: 300 },
	{ id: 8, title: "Soft System", seed: "art8", height: 400 },
];

const POSTS: FeedPost[] = [
	{
		id: 1,
		user: "User_1",
		copy:
			"Just finished working on a new web project! The Wii U aesthetic is so nostalgic. ^^",
		seed: "user1",
		initialYeahs: 14,
		initialComments: ["That launcher transition looks so satisfying."],
	},
	{
		id: 2,
		user: "User_2",
		copy: "Does anyone remember the old Miiverse? I miss drawing on the GamePad.",
		seed: "user2",
		initialYeahs: 21,
		initialComments: ["Same. The little doodles gave everything so much personality."],
	},
	{
		id: 3,
		user: "User_3",
		copy: "Listening to the Wii Shop Channel music while coding. Peak productivity.",
		seed: "user3",
		initialYeahs: 9,
		initialComments: [],
	},
	{
		id: 4,
		user: "User_4",
		copy: "Hello world! Welcome to my digital space. Make yourself at home.",
		seed: "user4",
		initialYeahs: 17,
		initialComments: ["The atmosphere on this page is immaculate."],
	},
];

const createInitialFeedState = (): FeedState =>
	Object.fromEntries(
		POSTS.map((post) => [
			post.id,
			{
				liked: false,
				yeahs: post.initialYeahs,
				commentDraft: "",
				commentOpen: false,
				comments: post.initialComments,
			},
		]),
	) as FeedState;

const AboutContent = ({ theme }: { theme: ThemeMode }) => {
	const isDark = theme === "dark";

	return (
		<div
			className={`h-full space-y-6 overflow-y-auto p-6 wii-u-scrollbar ${
				isDark ? "text-slate-200" : "text-slate-700"
			}`}
		>
			<div className="flex items-center gap-6">
				<div
					className={`relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-full border-4 shadow-md ${
						isDark ? "bg-slate-800 border-slate-700" : "bg-blue-100 border-white"
					}`}
				>
					<Image
						src="https://picsum.photos/seed/junly/200/200"
						alt="Junly"
						fill
						className="object-cover"
						referrerPolicy="no-referrer"
					/>
				</div>
				<div>
					<h2
						className={`text-3xl font-bold ${
							isDark ? "text-white" : "text-slate-800"
						}`}
					>
						Hi, I&apos;m Junly!
					</h2>
					<p className={`text-lg ${isDark ? "text-slate-400" : "text-slate-500"}`}>
						Digital Creator & Developer
					</p>
				</div>
			</div>

			<div
				className={`rounded-xl border p-4 shadow-inner ${
					isDark ? "bg-slate-900/45 border-white/8" : "bg-white/50 border-white/60"
				}`}
			>
				<p className="leading-relaxed">
					Welcome to my digital space. Here, we shall journey together through
					thoughts and ideas, blending the digital with the organic. I invite you
					to delve into the ways our worlds intertwine.
				</p>
				<p className="mt-4 leading-relaxed">
					Though my form is virtual, I hope this can touch your physical being and
					bridge the gap between microchip and flesh. Feel free to take something
					with you when you leave, something to upgrade your digital soul.
				</p>
			</div>

			<div className="grid grid-cols-2 gap-4">
				<div
					className={`rounded-xl border p-4 ${
						isDark ? "bg-sky-950/35 border-sky-900/60" : "bg-blue-50/50 border-blue-100"
					}`}
				>
					<h3 className={`mb-2 font-bold ${isDark ? "text-sky-300" : "text-blue-800"}`}>
						Stats
					</h3>
					<ul className="space-y-1 text-sm">
						<li>Level: 24</li>
						<li>Class: Web Weaver</li>
						<li>Element: Pixel</li>
					</ul>
				</div>
				<div
					className={`rounded-xl border p-4 ${
						isDark
							? "bg-fuchsia-950/25 border-fuchsia-900/50"
							: "bg-pink-50/50 border-pink-100"
					}`}
				>
					<h3 className={`mb-2 font-bold ${isDark ? "text-pink-300" : "text-pink-800"}`}>
						Current Mood
					</h3>
					<div className="flex items-center gap-2">
						<Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
						<span>Creative & Energetic</span>
					</div>
				</div>
			</div>
		</div>
	);
};

const ProjectsContent = ({ theme }: { theme: ThemeMode }) => {
	const isDark = theme === "dark";
	const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
	const selectedProject =
		PROJECTS.find((project) => project.id === selectedProjectId) ?? null;

	if (selectedProject) {
		return (
			<div className="h-full overflow-y-auto p-6 wii-u-scrollbar">
				<div className="space-y-6">
					<div className="flex items-center justify-between gap-4">
						<div>
							<button
								type="button"
								onClick={() => setSelectedProjectId(null)}
								className={`mb-3 inline-flex cursor-pointer items-center rounded-full border px-3 py-1.5 text-sm transition-colors ${
									isDark
										? "border-sky-200/15 text-sky-200 hover:bg-sky-400/10"
										: "border-sky-100 text-sky-700 hover:bg-sky-50"
								}`}
							>
								Back to projects
							</button>
							<div
								className={`text-sm uppercase tracking-[0.18em] ${
									isDark ? "text-sky-300" : "text-sky-700"
								}`}
							>
								{selectedProject.kicker}
							</div>
							<h2
								className={`mt-2 text-3xl font-bold ${
									isDark ? "text-white" : "text-slate-800"
								}`}
							>
								{selectedProject.title}
							</h2>
							<p
								className={`mt-3 max-w-3xl ${
									isDark ? "text-slate-400" : "text-slate-500"
								}`}
							>
								{selectedProject.summary}
							</p>
						</div>
						<div className="grid min-w-[180px] gap-2 text-right">
							<div className={isDark ? "text-slate-500" : "text-slate-400"}>Year</div>
							<div className={isDark ? "text-slate-100" : "text-slate-700"}>
								{selectedProject.year}
							</div>
							<div className={isDark ? "text-slate-500" : "text-slate-400"}>
								Status
							</div>
							<div className={isDark ? "text-emerald-300" : "text-emerald-600"}>
								{selectedProject.status}
							</div>
						</div>
					</div>

					<div
						className={`relative overflow-hidden rounded-[28px] border p-3 ${
							isDark ? "bg-slate-950/45 border-sky-200/10" : "bg-white/70 border-white/80"
						}`}
					>
						<div className="relative h-64 overflow-hidden rounded-[22px] md:h-80">
							<Image
								src={`https://picsum.photos/seed/${selectedProject.seed}/1200/800`}
								alt={selectedProject.title}
								fill
								className="object-cover"
								referrerPolicy="no-referrer"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-950/20 to-transparent" />
							<div className="absolute right-5 bottom-5 left-5 flex flex-wrap gap-2">
								{selectedProject.stack.map((item) => (
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
							<h3
								className={`text-lg font-bold ${
									isDark ? "text-white" : "text-slate-800"
								}`}
							>
								Overview
							</h3>
							<div className={`mt-4 space-y-4 ${isDark ? "text-slate-300" : "text-slate-600"}`}>
								{selectedProject.details.map((paragraph) => (
									<p key={paragraph}>{paragraph}</p>
								))}
							</div>
						</div>
						<div
							className={`rounded-2xl border p-5 ${
								isDark ? "bg-slate-900/55 border-white/8" : "bg-white/65 border-white"
							}`}
						>
							<h3
								className={`text-lg font-bold ${
									isDark ? "text-white" : "text-slate-800"
								}`}
							>
								Key Features
							</h3>
							<ul className={`mt-4 space-y-3 ${isDark ? "text-slate-300" : "text-slate-600"}`}>
								{selectedProject.features.map((feature) => (
									<li key={feature} className="flex items-start gap-3">
										<span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-400" />
										<span>{feature}</span>
									</li>
								))}
							</ul>
							<div className="mt-6 flex flex-wrap gap-3">
								<button className="wii-u-primary-button rounded-full px-4 py-2 font-bold text-white transition-transform hover:-translate-y-0.5">
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
					<h2
						className={`text-2xl font-bold ${
							isDark ? "text-white" : "text-slate-800"
						}`}
					>
						My Projects
					</h2>
					<p className={`mt-2 max-w-2xl ${isDark ? "text-slate-400" : "text-slate-500"}`}>
						Open a project to view its full presentation, stack, and experience
						notes.
					</p>
				</div>
				<div className={`text-sm ${isDark ? "text-slate-500" : "text-slate-400"}`}>
					{PROJECTS.length} projects
				</div>
			</div>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
				{PROJECTS.map((project) => (
					<button
						key={project.id}
						type="button"
						onClick={() => setSelectedProjectId(project.id)}
						className={`group cursor-pointer rounded-2xl border p-4 text-left transition-all hover:-translate-y-1 ${
							isDark
								? "bg-slate-900/45 border-white/8 shadow-[0_10px_24px_rgba(0,0,0,0.22)] hover:border-sky-200/20 hover:shadow-[0_16px_30px_rgba(0,0,0,0.3)]"
								: "bg-white/60 border-white shadow-sm hover:shadow-md"
						}`}
					>
						<div
							className={`relative mb-3 h-40 overflow-hidden rounded-xl ${
								isDark ? "bg-slate-800" : "bg-slate-200"
							}`}
						>
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
						<div
							className={`text-xs uppercase tracking-[0.18em] ${
								isDark ? "text-sky-300" : "text-sky-700"
							}`}
						>
							{project.kicker}
						</div>
						<h3
							className={`mt-2 font-bold ${
								isDark ? "text-slate-100" : "text-slate-700"
							}`}
						>
							{project.title}
						</h3>
						<p className={`mt-2 text-sm ${isDark ? "text-slate-400" : "text-slate-500"}`}>
							{project.summary}
						</p>
					</button>
				))}
			</div>
		</div>
	);
};

const GalleryContent = ({ theme }: { theme: ThemeMode }) => {
	const isDark = theme === "dark";
	const [selectedArtwork, setSelectedArtwork] = useState<ArtworkRecord | null>(null);

	return (
		<div className="h-full overflow-y-auto p-6 wii-u-scrollbar">
			<h2 className={`mb-6 text-2xl font-bold ${isDark ? "text-white" : "text-slate-800"}`}>
				Art Gallery
			</h2>
			<div className="columns-2 space-y-4 gap-4 md:columns-3">
				{ARTWORKS.map((artwork) => (
					<button
						key={artwork.id}
						type="button"
						onClick={() => setSelectedArtwork(artwork)}
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

			{selectedArtwork && (
				<div
					className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/88 p-6 backdrop-blur-xl"
					onClick={() => setSelectedArtwork(null)}
				>
					<div
						className="relative w-full max-w-6xl"
						onClick={(event) => event.stopPropagation()}
					>
						<button
							type="button"
							onClick={() => setSelectedArtwork(null)}
							className="absolute top-4 right-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/35 text-white backdrop-blur-sm transition-colors hover:bg-black/55"
						>
							<X className="h-5 w-5" />
						</button>
						<div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/85 p-3 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
							<div className="relative h-[72vh] overflow-hidden rounded-[22px]">
								<Image
									src={`https://picsum.photos/seed/${selectedArtwork.seed}/1600/1200`}
									alt={selectedArtwork.title}
									fill
									className="object-contain"
									referrerPolicy="no-referrer"
								/>
							</div>
							<div className="flex items-center justify-between px-3 pt-4 text-white">
								<div>
									<div className="text-lg font-bold">{selectedArtwork.title}</div>
									<div className="text-sm text-slate-400">
										Fullscreen gallery view
									</div>
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
};

const BlogContent = ({ theme }: { theme: ThemeMode }) => {
	const isDark = theme === "dark";
	const [feedState, setFeedState] = useState<FeedState>(createInitialFeedState);

	const toggleLike = (postId: number) => {
		setFeedState((current) => {
			const post = current[postId];
			const liked = !post.liked;

			return {
				...current,
				[postId]: {
					...post,
					liked,
					yeahs: liked ? post.yeahs + 1 : Math.max(post.yeahs - 1, 0),
				},
			};
		});
	};

	const toggleCommentComposer = (postId: number) => {
		setFeedState((current) => ({
			...current,
			[postId]: {
				...current[postId],
				commentOpen: !current[postId].commentOpen,
			},
		}));
	};

	const updateCommentDraft = (postId: number, value: string) => {
		setFeedState((current) => ({
			...current,
			[postId]: {
				...current[postId],
				commentDraft: value,
			},
		}));
	};

	const submitComment = (postId: number) => {
		setFeedState((current) => {
			const post = current[postId];
			const draft = post.commentDraft.trim();
			if (!draft) {
				return current;
			}

			return {
				...current,
				[postId]: {
					...post,
					commentDraft: "",
					commentOpen: true,
					comments: [...post.comments, draft],
				},
			};
		});
	};

	return (
		<div
			className={`h-full overflow-y-auto p-6 wii-u-scrollbar ${
				isDark ? "bg-[#09131d]" : "bg-[#f0f8ff]"
			}`}
		>
			<div className="mb-6 flex items-center justify-between">
				<h2 className={`text-2xl font-bold ${isDark ? "text-green-300" : "text-green-700"}`}>
					Miiverse
				</h2>
				<button
					type="button"
					className={`wii-u-round-button cursor-pointer rounded-full border border-white/80 px-4 py-2 font-bold transition-all hover:-translate-y-0.5 ${
						isDark ? "text-green-300" : "text-green-700"
					}`}
				>
					+ Post
				</button>
			</div>
			<div className="space-y-4">
				{POSTS.map((post) => {
					const state = feedState[post.id];

					return (
						<div
							key={post.id}
							className={`rounded-2xl border-2 p-4 shadow-sm ${
								isDark
									? "bg-slate-900/65 border-green-900/70"
									: "bg-white border-green-200"
							}`}
						>
							<div className="mb-3 flex items-center gap-3">
								<div
									className={`relative h-10 w-10 overflow-hidden rounded-full border-2 shadow-sm ${
										isDark
											? "bg-green-950/40 border-slate-700"
											: "bg-green-100 border-white"
									}`}
								>
									<Image
										src={`https://picsum.photos/seed/${post.seed}/100/100`}
										alt={post.user}
										fill
										className="object-cover"
										referrerPolicy="no-referrer"
									/>
								</div>
								<div>
									<div className={`text-sm font-bold ${isDark ? "text-slate-100" : "text-slate-700"}`}>
										{post.user}
									</div>
									<div className={`text-xs ${isDark ? "text-slate-500" : "text-slate-400"}`}>
										2 hours ago
									</div>
								</div>
							</div>
							<div
								className={`rounded-xl border p-4 font-medium ${
									isDark
										? "bg-slate-800/75 border-slate-700 text-slate-300"
										: "bg-slate-50 border-slate-100 text-slate-600"
								}`}
							>
								{post.copy}
							</div>
							<div
								className={`mt-3 flex items-center gap-4 border-t pt-3 ${
									isDark ? "border-slate-800" : "border-slate-100"
								}`}
							>
								<button
									type="button"
									onClick={() => toggleLike(post.id)}
									className={`inline-flex cursor-pointer items-center gap-2 rounded-full px-3 py-1.5 text-sm font-bold transition-all ${
										state.liked
											? isDark
												? "bg-emerald-400/15 text-emerald-300"
												: "bg-green-50 text-green-600"
											: isDark
												? "text-slate-400 hover:bg-emerald-400/10 hover:text-green-300"
												: "text-slate-500 hover:bg-green-50 hover:text-green-500"
									}`}
								>
									<Star className={`h-4 w-4 ${state.liked ? "fill-current" : ""}`} />
									Yeah! {state.yeahs}
								</button>
								<button
									type="button"
									onClick={() => toggleCommentComposer(post.id)}
									className={`inline-flex cursor-pointer items-center gap-2 rounded-full px-3 py-1.5 text-sm font-bold transition-all ${
										state.commentOpen
											? isDark
												? "bg-sky-400/15 text-sky-300"
												: "bg-sky-50 text-sky-600"
											: isDark
												? "text-slate-400 hover:bg-sky-400/10 hover:text-blue-300"
												: "text-slate-500 hover:bg-sky-50 hover:text-blue-500"
									}`}
								>
									<MessageSquare className="h-4 w-4" />
									Comment {state.comments.length}
								</button>
							</div>

							{state.commentOpen && (
								<div
									className={`mt-4 rounded-xl border p-4 ${
										isDark ? "bg-slate-950/35 border-white/8" : "bg-white/70 border-slate-100"
									}`}
								>
									<div className="space-y-3">
										{state.comments.length > 0 && (
											<div className="space-y-2">
												{state.comments.map((comment, index) => (
													<div
														key={`${post.id}-${index}`}
														className={`rounded-lg px-3 py-2 text-sm ${
															isDark
																? "bg-slate-900/80 text-slate-300"
																: "bg-slate-50 text-slate-600"
														}`}
													>
														{comment}
													</div>
												))}
											</div>
										)}

										<div className="flex gap-3">
											<input
												type="text"
												value={state.commentDraft}
												onChange={(event) =>
													updateCommentDraft(post.id, event.target.value)
												}
												placeholder="Leave a comment..."
												className={`wii-u-field min-w-0 flex-1 rounded-full border px-4 py-2 ${
													isDark
														? "border-slate-700 text-slate-100 placeholder:text-slate-500"
														: "border-slate-200 text-slate-700 placeholder:text-slate-400"
												}`}
											/>
											<button
												type="button"
												onClick={() => submitComment(post.id)}
												className="wii-u-primary-button rounded-full px-4 py-2 font-bold text-white"
											>
												Send
											</button>
										</div>
									</div>
								</div>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
};

const ContactContent = ({ theme }: { theme: ThemeMode }) => {
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
			<h2 className={`mb-2 text-2xl font-bold ${isDark ? "text-white" : "text-slate-800"}`}>
				Let&apos;s Connect!
			</h2>
			<p className={`mb-8 max-w-md ${isDark ? "text-slate-400" : "text-slate-500"}`}>
				Have a question, a project idea, or just want to say hi? Drop me a
				message!
			</p>

			<div className="mb-8 flex gap-4">
				<a
					href="#"
					className={`wii-u-round-button flex h-12 w-12 items-center justify-center rounded-full border border-white/80 transition-all hover:-translate-y-1 hover:shadow-md ${
						isDark ? "text-slate-300 hover:text-sky-300" : "text-slate-600 hover:text-blue-500"
					}`}
				>
					<Twitter className="h-5 w-5" />
				</a>
				<a
					href="#"
					className={`wii-u-round-button flex h-12 w-12 items-center justify-center rounded-full border border-white/80 transition-all hover:-translate-y-1 hover:shadow-md ${
						isDark ? "text-slate-300 hover:text-white" : "text-slate-600 hover:text-slate-900"
					}`}
				>
					<Github className="h-5 w-5" />
				</a>
				<a
					href="#"
					className={`wii-u-round-button flex h-12 w-12 items-center justify-center rounded-full border border-white/80 transition-all hover:-translate-y-1 hover:shadow-md ${
						isDark ? "text-slate-300 hover:text-pink-300" : "text-slate-600 hover:text-pink-500"
					}`}
				>
					<MessageSquare className="h-5 w-5" />
				</a>
			</div>

			<div
				className={`w-full max-w-md rounded-2xl border p-6 text-left shadow-sm ${
					isDark ? "bg-slate-900/45 border-white/8" : "bg-white/50 border-white/60"
				}`}
			>
				<div className="space-y-4">
					<div>
						<label
							className={`mb-1 block text-xs font-bold uppercase tracking-wider ${
								isDark ? "text-slate-400" : "text-slate-500"
							}`}
						>
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
						<label
							className={`mb-1 block text-xs font-bold uppercase tracking-wider ${
								isDark ? "text-slate-400" : "text-slate-500"
							}`}
						>
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
};

const SettingsContent = ({
	theme,
	loadingScreensEnabled,
	onToggleLoadingScreens,
	onToggleTheme,
}: SettingsContentProps) => (
	<div
		className={`h-full overflow-y-auto p-6 wii-u-scrollbar ${
			theme === "dark" ? "text-slate-200" : "text-slate-700"
		}`}
	>
		<div className="mb-6 flex items-center justify-between gap-6">
			<div>
				<h2
					className={`text-2xl font-bold ${
						theme === "dark" ? "text-white" : "text-slate-800"
					}`}
				>
					System Settings
				</h2>
				<p className={`mt-1 ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`}>
					Adjust the launcher behavior and compare both interaction modes.
				</p>
			</div>
			<div
				className={`flex h-14 w-14 items-center justify-center rounded-full border-4 shadow-md ${
					theme === "dark"
						? "bg-slate-800 border-slate-700"
						: "bg-slate-100 border-white"
				}`}
			>
				<Settings className="h-7 w-7 text-slate-500" />
			</div>
		</div>

		<div className="space-y-4">
			<div
				className={`wii-u-soft-panel rounded-2xl border p-5 ${
					theme === "dark" ? "border-white/8" : "border-white/70"
				}`}
			>
				<div className="flex items-start justify-between gap-4">
					<div>
						<h3 className={theme === "dark" ? "font-bold text-white" : "font-bold text-slate-800"}>
							Loading screens
						</h3>
						<p className={`mt-2 max-w-xl ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`}>
							Show a short launch animation before opening each app window.
							Disable this to open tabs instantly.
						</p>
					</div>

					<button
						type="button"
						onClick={onToggleLoadingScreens}
						aria-pressed={loadingScreensEnabled}
						className={`relative inline-flex h-12 w-24 items-center rounded-full border transition-all ${
							loadingScreensEnabled
								? "bg-gradient-to-b from-sky-300 to-sky-400 border-sky-200 shadow-[0_10px_18px_rgba(96,165,250,0.22),inset_0_1px_0_rgba(255,255,255,0.65)]"
								: theme === "dark"
									? "bg-slate-900/85 border-slate-700 shadow-[0_10px_18px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.08)]"
									: "bg-white/80 border-white/80 shadow-[0_8px_14px_rgba(130,169,196,0.14),inset_0_1px_0_rgba(255,255,255,0.9)]"
						}`}
					>
						<span
							className={`absolute h-9 w-9 rounded-full shadow-[0_8px_12px_rgba(112,150,179,0.24),inset_0_1px_0_rgba(255,255,255,0.95)] transition-all ${
								loadingScreensEnabled
									? "translate-x-[2.85rem] bg-white"
									: theme === "dark"
										? "translate-x-1 bg-slate-200"
										: "translate-x-1 bg-white"
							}`}
						/>
						<span className="sr-only">Toggle loading screens</span>
					</button>
				</div>
			</div>

			<div className="grid gap-4 md:grid-cols-2">
				<div
					className={`wii-u-soft-panel rounded-2xl border p-5 ${
						theme === "dark" ? "border-white/8" : "border-white/70"
					}`}
				>
					<div className={`text-sm font-bold uppercase tracking-[0.18em] ${theme === "dark" ? "text-slate-500" : "text-slate-400"}`}>
						Current mode
					</div>
					<div className={`mt-3 text-2xl font-bold ${theme === "dark" ? "text-white" : "text-slate-800"}`}>
						{loadingScreensEnabled ? "Cinematic launch" : "Instant launch"}
					</div>
					<p className={`mt-3 ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`}>
						{loadingScreensEnabled
							? "Apps open with a Wii U-style startup moment."
							: "Apps open immediately after clicking an icon."}
					</p>
				</div>

				<div
					className={`wii-u-soft-panel rounded-2xl border p-5 ${
						theme === "dark" ? "border-white/8" : "border-white/70"
					}`}
				>
					<div className={`text-sm font-bold uppercase tracking-[0.18em] ${theme === "dark" ? "text-slate-500" : "text-slate-400"}`}>
						Why it matters
					</div>
					<ul className={`mt-3 space-y-2 ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`}>
						<li>Loading on: more playful and presentational.</li>
						<li>Loading off: faster for exploration and repeat opens.</li>
						<li>The setting is saved locally for the next visit.</li>
					</ul>
				</div>
			</div>

			<div
				className={`wii-u-soft-panel rounded-2xl border p-5 ${
					theme === "dark" ? "border-white/8" : "border-white/70"
				}`}
			>
				<div className="flex items-start justify-between gap-4">
					<div>
						<h3 className={theme === "dark" ? "font-bold text-white" : "font-bold text-slate-800"}>
							Theme mode
						</h3>
						<p className={`mt-2 max-w-xl ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`}>
							Switch between the bright Wii U dashboard and a darker night-mode variation.
						</p>
					</div>

					<button
						type="button"
						onClick={onToggleTheme}
						className="wii-u-round-button inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/80 px-4 py-3 transition-transform hover:-translate-y-0.5"
					>
						{theme === "dark" ? (
							<>
								<Sun className="h-5 w-5 text-amber-400" />
								<span className="text-slate-100">Switch to light</span>
							</>
						) : (
							<>
								<Moon className="h-5 w-5 text-slate-700" />
								<span className="text-slate-700">Switch to dark</span>
							</>
						)}
					</button>
				</div>
			</div>
		</div>
	</div>
);

const PlaceholderContent = ({
	copy,
	theme,
}: {
	copy: string;
	theme: ThemeMode;
}) => (
	<div
		className={`mt-20 p-6 text-center ${
			theme === "dark" ? "text-slate-300" : "text-slate-500"
		}`}
	>
		{copy}
	</div>
);

export function renderAppContent(
	appId: AppId,
	settings: SettingsContentProps,
): ReactNode {
	switch (appId) {
		case "about":
			return <AboutContent theme={settings.theme} />;
		case "projects":
			return <ProjectsContent theme={settings.theme} />;
		case "gallery":
			return <GalleryContent theme={settings.theme} />;
		case "blog":
			return <BlogContent theme={settings.theme} />;
		case "music":
			return <PlaceholderContent copy="Now playing..." theme={settings.theme} />;
		case "games":
			return <PlaceholderContent copy="Insert Disc" theme={settings.theme} />;
		case "contact":
			return <ContactContent theme={settings.theme} />;
		case "settings":
			return <SettingsContent {...settings} />;
		default:
			return null;
	}
}
