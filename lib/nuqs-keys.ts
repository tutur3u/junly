import { parseAsStringLiteral } from "nuqs";

export const APP_KEY = "app" as const;
export const PROJECT_KEY = "project" as const;
export const ARTWORK_KEY = "artwork" as const;
export const TRACK_KEY = "track" as const;
export const GAME_KEY = "game" as const;
export const GAME_FILTER_KEY = "filter" as const;
export const GAME_TAB_KEY = "tab" as const;

export const APP_IDS = [
	"about",
	"projects",
	"gallery",
	"blog",
	"music",
	"games",
	"contact",
	"settings",
] as const;

export const appIdParser = parseAsStringLiteral(APP_IDS);

export const GAME_FILTERS = [
	"All",
	"Completed",
	"In Progress",
] as const;

export const gameFilterParser = parseAsStringLiteral(GAME_FILTERS);

export const GAME_TABS = ["gameplay", "bts"] as const;

export const gameTabParser = parseAsStringLiteral(GAME_TABS).withDefault("gameplay");
