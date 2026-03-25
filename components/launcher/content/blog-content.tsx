import { Comment, Heart, Sparkles } from "pixelarticons/react";
import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { POSTS } from "@/components/launcher/content-data";
import type { ThemeMode } from "@/components/launcher/types";

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

export function BlogContent({ theme }: { theme: ThemeMode }) {
	const isDark = theme === "dark";
	const [feedState, setFeedState] = useState<FeedState>(createInitialFeedState);
	const [showPostSoon, setShowPostSoon] = useState(false);

	useEffect(() => {
		if (!showPostSoon) {
			return;
		}

		const timeoutId = window.setTimeout(() => {
			setShowPostSoon(false);
		}, 2600);

		return () => window.clearTimeout(timeoutId);
	}, [showPostSoon]);

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
		<div className={`h-full overflow-y-auto p-6 wii-u-scrollbar ${isDark ? "bg-[#09131d]" : "bg-[linear-gradient(180deg,#f7fbff_0%,#eef7ff_100%)]"}`}>
			<div className="mb-6 space-y-4">
				<div className="launcher-soft-hero">
					<div className="pointer-events-none absolute inset-0 bg-stripes opacity-10" />
					<div className="relative flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
						<div>
							<div className="launcher-mini-tab">
								<Sparkles className="h-4 w-4" />
								Plaza Feed
							</div>
							<h2 className={`text-3xl font-bold ${isDark ? "text-green-300" : "text-green-700"}`}>Tiny notes, bright mood.</h2>
							<p className={`mt-2 max-w-2xl text-sm leading-7 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
								Tiny notes from the studio: process snapshots, interface crushes, and
								little ideas that felt too fun to leave in drafts.
							</p>
						</div>

						<div className="flex flex-wrap items-end gap-3 lg:justify-end">
							{[
								{ label: "Posts", value: String(POSTS.length).padStart(2, "0") },
								{ label: "Yeahs", value: String(POSTS.reduce((sum, post) => sum + feedState[post.id].yeahs, 0)) },
								{ label: "Mood", value: "Sunny" },
							].map((item) => (
								<div key={item.label} className="launcher-stat-tile min-w-[112px]">
									<div className={`text-xs uppercase tracking-[0.16em] ${isDark ? "text-slate-500" : "text-slate-400"}`}>
										{item.label}
									</div>
									<div className="mt-2 text-xl font-bold">{item.value}</div>
								</div>
							))}
							<button
								type="button"
								onClick={() => setShowPostSoon(true)}
								className={`wii-u-round-button inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#daf7fc] px-4 py-2 font-bold transition-all hover:-translate-y-0.5 ${
									isDark ? "text-green-300" : "text-green-700"
								}`}
							>
								+ Drop Note
							</button>
						</div>
					</div>
				</div>

				{showPostSoon && (
					<motion.div
						initial={{ opacity: 0, y: -8, scale: 0.98 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						className={`flex items-start gap-3 rounded-[24px] border px-4 py-3 shadow-sm ${
							isDark
								? "border-emerald-300/10 bg-[linear-gradient(180deg,rgba(16,185,129,0.12),rgba(7,15,24,0.78))] text-slate-200"
								: "border-cyan-200 bg-[linear-gradient(180deg,rgba(232,252,255,0.98),rgba(214,247,251,0.92))] text-sky-900"
						}`}
						aria-live="polite"
					>
						<div
							className={`mt-0.5 inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full ${
								isDark ? "bg-emerald-400/14 text-emerald-300" : "bg-emerald-100 text-emerald-600"
							}`}
						>
							<Sparkles className="h-4 w-4" />
						</div>
						<div>
							<div className={`font-bold ${isDark ? "text-emerald-200" : "text-emerald-700"}`}>Composer is next on deck</div>
							<p className={`mt-1 text-sm ${isDark ? "text-slate-400" : "text-slate-500"}`}>
								Posting is still being wired in. For now, the feed is all about easy
								reactions, nice little replies, and keeping the plaza feeling alive.
							</p>
						</div>
					</motion.div>
				)}
			</div>
			<div className="space-y-4">
				{POSTS.map((post) => {
					const state = feedState[post.id];

					return (
						<div
							key={post.id}
							className={`rounded-2xl border-2 p-4 shadow-sm ${
								isDark ? "bg-slate-900/65 border-green-900/70" : "bg-[#ebfdff] border-cyan-200"
							}`}
						>
							<div className="mb-3 flex items-center gap-3">
								<div
									className={`relative h-10 w-10 overflow-hidden rounded-full border-2 shadow-sm ${
										isDark ? "bg-green-950/40 border-slate-700" : "bg-cyan-100 border-[#daf7fc]"
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
									<div className={`text-sm font-bold ${isDark ? "text-slate-100" : "text-slate-700"}`}>{post.user}</div>
									<div className={`text-xs ${isDark ? "text-slate-500" : "text-slate-400"}`}>2 hours ago</div>
								</div>
							</div>
							<div
								className={`rounded-xl border p-4 font-medium ${
									isDark
										? "bg-slate-800/75 border-slate-700 text-slate-300"
										: "bg-cyan-50/90 border-cyan-100 text-sky-800"
								}`}
							>
								{post.copy}
							</div>
							<div className={`mt-3 flex items-center gap-4 border-t pt-3 ${isDark ? "border-slate-800" : "border-slate-100"}`}>
								<button
									type="button"
									onClick={() => toggleLike(post.id)}
									className={`inline-flex cursor-pointer items-center gap-2 rounded-full px-3 py-1.5 text-sm font-bold transition-all ${
										state.liked
											? isDark
												? "bg-emerald-400/15 text-emerald-300"
												: "bg-cyan-100 text-cyan-700"
											: isDark
												? "text-slate-400 hover:bg-emerald-400/10 hover:text-green-300"
												: "text-sky-700 hover:bg-cyan-100 hover:text-cyan-700"
									}`}
								>
									<Heart className={`h-4 w-4 ${state.liked ? "fill-current" : ""}`} />
									Yeah! {state.yeahs}
								</button>
								<button
									type="button"
									onClick={() => toggleCommentComposer(post.id)}
									className={`inline-flex cursor-pointer items-center gap-2 rounded-full px-3 py-1.5 text-sm font-bold transition-all ${
										state.commentOpen
											? isDark
												? "bg-sky-400/15 text-sky-300"
												: "bg-cyan-100 text-sky-700"
											: isDark
												? "text-slate-400 hover:bg-sky-400/10 hover:text-blue-300"
												: "text-sky-700 hover:bg-cyan-100 hover:text-sky-800"
									}`}
								>
									<Comment className="h-4 w-4" />
									Comment {state.comments.length}
								</button>
							</div>

							{state.commentOpen && (
								<div
									className={`mt-4 rounded-xl border p-4 ${
										isDark ? "bg-slate-950/35 border-white/8" : "bg-[#effeff]/86 border-cyan-100"
									}`}
								>
									<div className="space-y-3">
										{state.comments.length > 0 && (
											<div className="space-y-2">
												{state.comments.map((comment, index) => (
													<div
														key={`${post.id}-${index}`}
														className={`rounded-lg px-3 py-2 text-sm ${
															isDark ? "bg-slate-900/80 text-slate-300" : "bg-cyan-50/90 text-sky-800"
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
												onChange={(event) => updateCommentDraft(post.id, event.target.value)}
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
}
