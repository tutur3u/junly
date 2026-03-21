"use client";

import {
	AvatarCircle,
	Gamepad,
	Images,
	Mail,
	MessageText,
	Music,
	Settings2,
	Briefcase,
} from "pixelarticons/react";
import type { AppData } from "@/components/launcher/types";

export const apps: AppData[] = [
	{
		id: "about",
		title: "About me",
		icon: <AvatarCircle className="w-12 h-12" />,
		color: "bg-green-100",
		accent: "from-green-400 via-emerald-500 to-teal-500",
	},
	{
		id: "games",
		title: "Games",
		icon: <Gamepad className="w-12 h-12" />,
		color: "bg-purple-100",
		accent: "from-purple-400 via-violet-500 to-indigo-500",
	},
	{
		id: "projects",
		title: "Research",
		icon: <Briefcase className="w-12 h-12" />,
		color: "bg-blue-100",
		accent: "from-blue-400 via-cyan-500 to-sky-500",
	},
	{
		id: "gallery",
		title: "Art",
		icon: <Images className="w-12 h-12" />,
		color: "bg-yellow-100",
		accent: "from-yellow-400 via-amber-500 to-orange-500",
	},
	{
		id: "blog",
		title: "Blog",
		icon: <MessageText className="w-12 h-12" />,
		color: "bg-green-50",
		accent: "from-green-400 via-emerald-500 to-green-600",
	},
	{
		id: "music",
		title: "Music",
		icon: <Music className="w-12 h-12" />,
		color: "bg-pink-100",
		accent: "from-pink-400 via-rose-500 to-red-500",
	},
	{
		id: "contact",
		title: "Contact",
		icon: <Mail className="w-12 h-12" />,
		color: "bg-orange-100",
		accent: "from-orange-400 via-red-500 to-pink-500",
	},
	{
		id: "settings",
		title: "Settings",
		icon: <Settings2 className="w-12 h-12" />,
		color: "bg-slate-200",
		accent: "from-slate-400 via-gray-500 to-slate-600",
	},
];
