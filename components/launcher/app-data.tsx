"use client";

import {
	Briefcase,
	Gamepad2,
	Image as ImageIcon,
	Mail,
	MessageSquare,
	Music,
	Settings,
	User,
} from "lucide-react";
import type { AppData } from "@/components/launcher/types";

export const apps: AppData[] = [
	{
		id: "about",
		title: "Mii Maker",
		icon: <User className="w-12 h-12 text-green-500" />,
		color: "bg-green-100",
	},
	{
		id: "projects",
		title: "Projects",
		icon: <Briefcase className="w-12 h-12 text-blue-500" />,
		color: "bg-blue-100",
	},
	{
		id: "gallery",
		title: "Gallery",
		icon: <ImageIcon className="w-12 h-12 text-yellow-500" />,
		color: "bg-yellow-100",
	},
	{
		id: "blog",
		title: "Miiverse",
		icon: <MessageSquare className="w-12 h-12 text-green-600" />,
		color: "bg-green-50",
	},
	{
		id: "music",
		title: "Music",
		icon: <Music className="w-12 h-12 text-pink-500" />,
		color: "bg-pink-100",
	},
	{
		id: "games",
		title: "Games",
		icon: <Gamepad2 className="w-12 h-12 text-purple-500" />,
		color: "bg-purple-100",
	},
	{
		id: "contact",
		title: "Friends",
		icon: <Mail className="w-12 h-12 text-orange-500" />,
		color: "bg-orange-100",
	},
	{
		id: "settings",
		title: "Settings",
		icon: <Settings className="w-12 h-12 text-slate-500" />,
		color: "bg-slate-200",
	},
];
