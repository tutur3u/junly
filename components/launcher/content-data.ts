export type ContentLink = {
	label: string;
	url: string;
	action?: "modal" | "external";
};

export type ContentSection = {
	title: string;
	body?: string;
	items?: string[];
	links?: ContentLink[];
	layout?: "default" | "wide";
	tone?: "default" | "highlight";
};

export type ProjectRecord = {
	id: string;
	title: string;
	kicker: string;
	year: string;
	status: string;
	stack: string[];
	summary: string;
	seed: string;
	nominated?: boolean;
	contentSections: ContentSection[];
	researchDocs?: {
		poster?: string;
		paper?: string;
		fieldNotes?: string;
		proposal?: string;
		thumbnail?: string;
		documents?: ContentLink[];
		interviews?: ContentLink[];
	};
};

export type ArtworkRecord = {
	id: number;
	title: string;
	seed: string;
	height: number;
};

export type FeedPost = {
	id: number;
	user: string;
	copy: string;
	seed: string;
	initialYeahs: number;
	initialComments: string[];
};

export type GamePreview = {
	id: string;
	title: string;
	tagline: string;
	state: string;
	accent: string;
	seed: string;
	description: string;
	genres: string[];
	videoUrl?: string;
	gddUrl?: string;
	documents?: ContentLink[];
	screenshots?: {
		gameplay: string[];
		bts?: string[];
	};
	playUrl?: string;
	tools?: string[];
	role?: string;
	year?: string;
	nominated?: boolean;
	contentSections: ContentSection[];
};

export type MusicTrack = {
	id: string;
	title: string;
	artist: string;
	length: string;
	mood: string;
	seed: string;
	accent: string;
};

export const PROJECTS: ProjectRecord[] = [
	{
		id: "cozy-games-market-force",
		title: "The Rise of Cozy Games as a Market Force",
		kicker: "Market Research",
		year: "July 2025",
		status: "Completed",
		stack: ["Market Research", "Quantitative", "PowerPoint", "Word"],
		summary:
			"A market research project examining how cozy games grew from comfort-first niche into a durable commercial category, using Spry Fox as the anchor case study.",
		seed: "cozy-games-market-force",
		contentSections: [
			{
				title: "Project Info",
				body: "Role: Solo Researcher\nResearch Type: Market Research\nMethods: Quantitative analysis\nTools: PowerPoint, Word",
			},
			{
				title: "About",
				body: "This study looks at how cozy games moved from a soft niche into a recognizable market force, and what that shift says about player motivation, retention, and emotional positioning in contemporary game culture.\n\nUsing Spry Fox as the central case study, the project connects aesthetic warmth, accessible onboarding, and long-tail community appeal to real commercial momentum.",
				layout: "wide",
			},
		],
		researchDocs: {
			thumbnail: "/media/portfolio/research/cozy-games-trend/thumbnail.png",
			documents: [
				{
					label: "Pitch Presentation",
					url: "https://drive.google.com/file/d/15lIrHAqQbBuSl68C_ZxVrlolyAJ9EVI1/view?usp=drive_link",
				},
				{
					label: "Research Paper",
					url: "https://drive.google.com/file/d/1FqRrrlJsWJkfw86PDCTnbijq8guEXJEx/view?usp=drive_link",
				},
			],
		},
	},
	{
		id: "mario-kart-split-screen",
		title: "The Technology Evolution of Split Screen in Mario Kart (1992-2017)",
		kicker: "Game Studies, Team Project",
		year: "April 2025",
		status: "Completed",
		stack: ["Ethnography", "Secondary Research", "Remote Observation", "Gameplay Systems Analysis"],
		summary:
			"A zine-led game studies project tracing how split-screen Mario Kart evolved from SNES couch chaos to modern handheld-friendly multiplayer.",
		seed: "mario-kart-split-screen",
		nominated: true,
		contentSections: [
			{
				title: "Recognition",
				items: ["RMIT Showcase Nomination"],
				tone: "highlight",
			},
			{
				title: "Project Info",
				body: "Role:\n- Creative Director\n- Technical Researcher\n- Gameplay Systems Analyst\nResearch Type: Ethnography\nMethods: Secondary research, remote observation",
			},
			{
				title: "About",
				body: "This zine starts with a simple question: how did split-screen racing change between the elbow-bumping chaos of Super Mario Kart and the more flexible multiplayer rhythm of Mario Kart 8 Deluxe?\n\nBy comparing the two games across hardware, interface behavior, and social play patterns, the project treats split-screen as both a technical constraint and a design decision that shapes how players share space.",
				layout: "wide",
			},
		],
		researchDocs: {
			thumbnail: "/media/portfolio/research/split-screen/thumbnail.png",
			documents: [
				{
					label: "Research Zine",
					url: "https://drive.google.com/file/d/1G6rHOE0NV63yBCCoiUaieGAacntAxXcj/view?usp=drive_link",
				},
			],
		},
	},
	{
		id: "ace-attorney-research",
		title: "Player Engagement in Narrative Games (Ace Attorney Case Study)",
		kicker: "Game Culture Research, Solo Project",
		year: "July 2024 - September 2024",
		status: "Completed",
		stack: ["Ethnography", "Surveys", "Interviews", "Mixed Methods"],
		summary:
			"A mixed-methods research project exploring how narrative design keeps players invested over time, with Ace Attorney as the core case study.",
		seed: "ace-attorney-research",
		contentSections: [
			{
				title: "Project Info",
				body: "Role: Researcher\nResearch Type: Ethnography\nMethods: Surveys, interviews, community observation",
			},
			{
				title: "About",
				body: "This project investigates how narrative design can keep players engaged long after the first session. Using Ace Attorney as the core case study, I combined player research, interviews, and community observation to understand how pacing, payoff, and fan participation strengthen attachment over time.\n\nThe result was a clearer set of design insights around retention, replayability, and the kinds of story structures that invite players to stay involved well beyond the main campaign.",
				layout: "wide",
			},
		],
		researchDocs: {
			thumbnail: "/media/portfolio/research/ace-attorney-research/thumbnail.png",
			poster: "https://drive.google.com/file/d/1Qu90jFLhe0Vl1mnHpITOEPAK2BdYmg-r/view?usp=drive_link",
			paper: "https://drive.google.com/file/d/11sQPD_U-EQsrRgD5ZEUkRUrQ4fRaWy70/view?usp=drive_link",
			fieldNotes: "https://drive.google.com/file/d/123mM1tJghAydT1iq7jC8TXIyG_aRKF31/view?usp=drive_link",
			proposal: "https://drive.google.com/file/d/1QX7Rxv3VE7vb_H_uUO3J5L1E8e4ISU0u/view?usp=drive_link",
			interviews: [
				{
					label: "Interview 1",
					url: "https://drive.google.com/file/d/1ZSS2dIVhzeWfu4fD-xb1i26gysoQ4MuV/view?usp=drive_link",
				},
				{
					label: "Interview 2",
					url: "https://drive.google.com/file/d/1KpocJ1D74Kr3TmFOV2z-sys8KHgcCJ6R/view?usp=drive_link",
				},
			],
		},
	},
];

export const ARTWORKS: ArtworkRecord[] = [
	{ id: 1, title: "Sea Glass Memory", seed: "art1", height: 300 },
	{ id: 2, title: "Blue Plaza", seed: "art2", height: 400 },
	{ id: 3, title: "Loading Dream", seed: "art3", height: 500 },
	{ id: 4, title: "Quiet Orbit", seed: "art4", height: 300 },
	{ id: 5, title: "Distant Signal", seed: "art5", height: 400 },
	{ id: 6, title: "Synthetic Meadow", seed: "art6", height: 500 },
	{ id: 7, title: "Night Console", seed: "art7", height: 300 },
	{ id: 8, title: "Soft System", seed: "art8", height: 400 },
];

export const POSTS: FeedPost[] = [
	{
		id: 1,
		user: "User_1",
		copy: "Been sketching game ideas that start sweet, then take one weird left turn halfway through.",
		seed: "user1",
		initialYeahs: 14,
		initialComments: ["That sounds like the exact right amount of trouble."],
	},
	{
		id: 2,
		user: "User_2",
		copy: "Prototypes keep teaching me more than polished docs do. I like finding the feeling of a game early.",
		seed: "user2",
		initialYeahs: 21,
		initialComments: ["A rough playable build answers so many questions fast."],
	},
	{
		id: 3,
		user: "User_3",
		copy: "Pixel art day. Tiny props and little environment details can do so much heavy lifting for a scene.",
		seed: "user3",
		initialYeahs: 9,
		initialComments: [],
	},
	{
		id: 4,
		user: "User_4",
		copy: "I like jumping genres on purpose. Every project gets more interesting when it is allowed to misbehave a little.",
		seed: "user4",
		initialYeahs: 17,
		initialComments: ["Genre hopping keeps the ideas sharp."],
	},
];

export const GAME_PREVIEWS: GamePreview[] = [
	{
		id: "magi-girl",
		title: "MAGI-GIRL.EXE",
		tagline: "Vertical Slice, Turn-Based RPG, Experimental, Solo Project",
		state: "Completed",
		accent: "from-pink-400 via-rose-500 to-purple-600",
		seed: "magi-girl",
		description:
			"A punchy story-driven RPG about an aspiring romance novelist who accidentally stumbles into magical-girl chaos and has to save the day in the least expected way possible.",
		genres: ["Vertical Slice", "Turn-based", "Experimental", "Solo Dev"],
		screenshots: {
			gameplay: [
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
			],
		},
		playUrl: "https://chunlii.itch.io/magi-girlexe",
		tools: ["RPG Maker MZ", "Aseprite", "Clip Studio Paint", "Miro", "Photoshop", "Premiere Pro"],
		role: "Game Designer, Game Developer, Artist",
		year: "July 2025-Sep 2025",
		nominated: true,
		contentSections: [
			{
				title: "Recognition",
				items: ["RMIT Showcase Nomination"],
				tone: "highlight",
			},
			{
				title: "Project Info",
				body: "Full Title: MAGI-GIRL.EXE: That One Time I Was Just Looking for Romance Novel Ideas and Accidentally Saved the World\nTimeline: July 2025 - September 2025\nRole: Game Designer, Developer, Artist\nTools: RPG Maker MZ, Aseprite, Clip Studio Paint, Miro, Photoshop, Premiere Pro",
			},
			{
				title: "About",
				body: "MAGI-GIRL.EXE is a 2D story-driven, turn-based RPG built solo over three months. The player follows Arthur, an aspiring romance novelist whose search for better writing material spirals into a magical-girl disaster he absolutely did not sign up for.\n\nThe current build is a single-player vertical slice covering the prologue of a bigger story world, with enough systems and character voice to show where the full project wants to go.",
				layout: "wide",
			},
			{
				title: "Highlights",
				items: [
					"Built and tested a custom turn-based battle loop.",
					"Explored the pacing and presentation rules of classic turn-based RPGs.",
					'Designed the "Novelize" mechanic as a story-linked game-within-the-game system tied directly to Arthur\'s identity.',
					"Delivered a vertical slice with strong expansion potential for a larger release.",
				],
			},
			{
				title: "Notes",
				body: "The current build is now available on itch.io. A local executable build also exists for desktop playtesting.",
			},
		],
	},
	{
		id: "remedy",
		title: "Remedy",
		tagline: "Prototype, Puzzle Adventure, Experimental, Jam, Solo Project",
		state: "Completed",
		accent: "from-violet-400 via-purple-500 to-indigo-600",
		seed: "remedy",
		description:
			"A small puzzle adventure about two strangers trapped in an unfamiliar room, built around grief, memory, and the slow work of moving on.",
		genres: ["Prototype", "Puzzle", "Experimental", "Jam", "Solo Dev"],
		videoUrl: "https://www.youtube.com/embed/lFhr36BS3LY",
		screenshots: {
			gameplay: [
				"/media/portfolio/games/remedy/gameplay/1.png",
				"/media/portfolio/games/remedy/gameplay/2.png",
				"/media/portfolio/games/remedy/gameplay/3.png",
				"/media/portfolio/games/remedy/gameplay/4.png",
				"/media/portfolio/games/remedy/gameplay/5.png",
				"/media/portfolio/games/remedy/gameplay/6.png",
				"/media/portfolio/games/remedy/gameplay/7.png",
				"/media/portfolio/games/remedy/gameplay/8.png",
			],
		},
		playUrl: "https://chunlii.itch.io/remedy",
		tools: ["RPG Maker MZ", "Aseprite"],
		role: "Game Designer, Game Developer, Artist",
		year: "March 2024 - April 2024",
		nominated: true,
		contentSections: [
			{
				title: "Recognition",
				items: ["RMIT Showcase Nomination"],
				tone: "highlight",
			},
			{
				title: "Project Info",
				body: "Timeline: March 2024 - April 2024\nRole: Game Designer, Developer, Artist\nTools: RPG Maker MZ, Aseprite",
			},
			{
				title: "About",
				body: "Remedy is a puzzle adventure game in which a teacher and a mysterious high school student wake up in an unfamiliar room and have to work through its logic together.\n\nBuilt for a three-week jam themed around Chain Reaction, the project uses small-scale puzzles and restrained storytelling to explore loss, connection, and the awkward shape of recovery.",
				layout: "wide",
			},
			{
				title: "Goals",
				items: [
					"Learn a new engine through a focused narrative prototype.",
					"Experiment with puzzle design inside a more intimate emotional story.",
					"Finish a small project that could still grow into something larger later.",
				],
			},
		],
	},
	{
		id: "kawaii-mario",
		title: "Kawaii Mario Pimpop~Sugar Sweet Treatment~",
		tagline: "Prototype, Point-and-Click, Fangame, Jam, Solo Project",
		state: "Completed",
		accent: "from-fuchsia-400 via-pink-400 to-rose-300",
		seed: "kawaii-mario",
		description:
			"A super-short sugar-rush fangame remix that turns Mario into a bright, silly point-and-click joke with maximal cute energy.",
		genres: ["Prototype", "Point and Click", "Fangame", "Jam", "Solo Dev"],
		screenshots: {
			gameplay: [
				"/media/portfolio/games/mario/gameplay/1.png",
				"/media/portfolio/games/mario/gameplay/2.png",
				"/media/portfolio/games/mario/gameplay/3.png",
				"/media/portfolio/games/mario/gameplay/4.png",
			],
		},
		playUrl: "https://jjunly.itch.io/kawaii-mario-pimpop-sugar-sweet-treatment",
		tools: ["Unity", "Procreate"],
		role: "Game Designer, Game Developer, Artist",
		year: "March 2024",
		contentSections: [
			{
				title: "Project Info",
				body: "Timeline: March 2024\nRole: Game Designer, Developer, Artist\nTools: Unity, Procreate",
			},
			{
				title: "About",
				body: "A tiny point-and-click fangame built like a candy-colored punchline.\n\nMade in one week for a 10-second game jam, the project leans into speed, absurdity, and over-the-top sweetness instead of long-form structure.",
				layout: "wide",
			},
		],
	},
	{
		id: "athena-cykes-ace-attorney",
		title: "Athena Cykes: The Ace Attorney",
		tagline: "Fan Sequel Pitch, GDD, Narrative Design, Team Project",
		state: "Completed",
		accent: "from-sky-400 via-cyan-500 to-blue-600",
		seed: "athena-cykes-ace-attorney",
		description:
			"A fan sequel pitch built around Athena Cykes, translating Ace Attorney admiration into a more concrete design and writing package.",
		genres: ["Ace Attorney sequel project", "GDD", "Team Project"],
		videoUrl: "https://www.youtube.com/embed/w751CvzhmlM",
		documents: [
			{
				label: "GDD",
				url: "https://drive.google.com/file/d/11tVohiGnNHUsDB102S3wbEUyUSJkFw9c/view?usp=drive_link",
			},
			{
				label: "Introduction, Game Idea, Work Process",
				url: "https://drive.google.com/file/d/110xyBRT64j4Ldv96FTaFbl4OO5-O073U/view?usp=drive_link",
			},
		],
		screenshots: {
			gameplay: [
				"/media/portfolio/games/aa-sequel/gameplay/1.png",
				"/media/portfolio/games/aa-sequel/gameplay/2.png",
				"/media/portfolio/games/aa-sequel/gameplay/3.png",
				"/media/portfolio/games/aa-sequel/gameplay/4.png",
				"/media/portfolio/games/aa-sequel/gameplay/5.png",
				"/media/portfolio/games/aa-sequel/gameplay/6.png",
				"/media/portfolio/games/aa-sequel/gameplay/7.png",
				"/media/portfolio/games/aa-sequel/gameplay/8.png",
				"/media/portfolio/games/aa-sequel/gameplay/9.png",
			],
		},
		role: "Game Writer, Gameplay Design, Team Leader",
		year: "Aug-Sep 2023",
		nominated: true,
		contentSections: [
			{
				title: "Recognition",
				items: ["RMIT Showcase Nomination"],
				tone: "highlight",
			},
			{
				title: "Project Info",
				body: "Timeline: August 2023 - September 2023\nRole: Game Writer, Gameplay Designer, Team Leader",
			},
			{
				title: "About",
				body: "This project began as a love letter to Ace Attorney and turned into a more structured sequel concept centered on Athena Cykes.\n\nAs a team, we wanted to understand why the series remains so compelling despite its relatively simple interaction model, then turn that admiration into a clearer package of writing, gameplay framing, and design documentation.",
				layout: "wide",
			},
		],
	},
	{
		id: "ghostly-wok",
		title: "Ghostly Wok Wonders",
		tagline: "Prototype, Cooking Game, Experimental, Jam, Team Project",
		state: "Completed",
		accent: "from-emerald-400 via-teal-500 to-cyan-500",
		seed: "ghostly-wok",
		description:
			"A playful cooking prototype where the goal is simple: impress a ghost with the best dish in the kitchen.",
		genres: ["Prototype", "Restaurant Simulator", "Experimental", "Jam", "Team Project"],
		screenshots: {
			gameplay: [
				"/media/portfolio/games/wok/gameplay/1.png",
				"/media/portfolio/games/wok/gameplay/2.png",
				"/media/portfolio/games/wok/gameplay/3.png",
				"/media/portfolio/games/wok/gameplay/4.png",
			],
		},
		playUrl: "https://hoanglan.itch.io/ghostly-wok-wonders",
		tools: ["Unity", "Aseprite"],
		role: "Game Designer, Artist",
		year: "April 2024-May 2024",
		contentSections: [
			{
				title: "Project Info",
				body: "Timeline: April 2024 - May 2024\nRole: Game Designer, Artist\nTools: Unity, Aseprite",
			},
			{
				title: "About",
				body: "Ghostly Wok Wonders is a playful cooking prototype where the player prepares food for a ghostly guest and tries to land the perfect spooky meal.\n\nBuilt for a one-month game jam, the project leans on humor, charm, and quick readable interactions rather than heavy simulation.",
				layout: "wide",
			},
		],
	},
	{
		id: "asphyxiated",
		title: "Asphyxiated",
		tagline: "2D Platformer, Environmental Message, Team Project",
		state: "Completed",
		accent: "from-emerald-400 via-teal-500 to-cyan-500",
		seed: "asphyxiated",
		description:
			"A 2D platformer about restoring a damaged world, built around environmental recovery rather than simple survival.",
		genres: ["2D Platformer", "Team Project"],
		videoUrl: "https://www.youtube.com/embed/nlDw83RSUSU",
		documents: [
			{
				label: "Open GDD PDF",
				url: "https://drive.google.com/uc?export=download&id=1OisrUjFteUwJYaQ_UhtHfs2yeAvwNCEF",
				action: "external",
			},
		],
		screenshots: {
			gameplay: [
				"/media/portfolio/games/asphyxiated/gameplay/1.png",
				"/media/portfolio/games/asphyxiated/gameplay/2.png",
				"/media/portfolio/games/asphyxiated/gameplay/3.png",
				"/media/portfolio/games/asphyxiated/gameplay/4.png",
				"/media/portfolio/games/asphyxiated/gameplay/5.png",
				"/media/portfolio/games/asphyxiated/gameplay/6.png",
			],
			bts: [
				"/media/portfolio/games/asphyxiated/behind-the-scenes/1.png",
				"/media/portfolio/games/asphyxiated/behind-the-scenes/2.png",
			],
		},
		playUrl: "https://zuutheturtlecat.itch.io/asphyxiated",
		tools: ["Unity", "Aseprite"],
		role: "Game Designer, Game Artist",
		year: "May 2023 - June 2023",
		contentSections: [
			{
				title: "Overview",
				body: "A 2D platformer framed around environmental repair, hope, and the effort it takes to bring life back to a damaged world.",
			},
			{
				title: "Project Info",
				body: "Timeline: May 2023 - June 2023\nRole: Game Designer, Game Artist\nTools: Unity, Aseprite",
			},
			{
				title: "About",
				body: "Built under the theme Serious Game: Games for Environment, Asphyxiated places the player in a post-apocalyptic world as the keeper of a Seed Vault trying to restore a planet that has lost its green life.\n\nThe project mixes straightforward platforming with a clearer environmental message, aiming for something earnest without losing readability.",
				layout: "wide",
			},
		],
	},
	{
		id: "atelier",
		title: "Atelier",
		tagline: "Board Game, Rulebook, Project Brief, Solo Project",
		state: "Completed",
		accent: "from-amber-300 via-orange-400 to-rose-500",
		seed: "atelier",
		description:
			"A competitive board game about potion factories, polished marketing, and the chaos that happens when promotion outruns communication.",
		genres: ["Board Game", "Project Brief", "Rulebook", "Solo Project"],
		documents: [
			{
				label: "Project Brief",
				url: "https://drive.google.com/file/d/1fKjz51zj7lND7ZKsML19cDBR0h-Ds_2f/view?usp=sharing",
			},
		],
		screenshots: {
			gameplay: [
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
			],
		},
		tools: [],
		role: "Game Designer",
		year: "Nov 2022",
		contentSections: [
			{
				title: "Project Info",
				body: "Timeline: November 2022\nRole: Game Designer",
			},
			{
				title: "About",
				body: "In Atelier, each player represents a prestigious potion factory competing to sell the cure for the current Ailment while strategically downplaying any unfortunate side effects the lab team may have discovered.\n\nThe joke at the center of the game is that the factories are so large, and so badly connected, that the people marketing the potion barely know what it actually does. The design leans into that tension between polish, bluffing, and accidental disaster.",
				layout: "wide",
			},
		],
	},
	{
		id: "xavier",
		title: "Xavier the Explorer",
		tagline: "3D Puzzle Game, Mini-Game Collection, Team Project",
		state: "Completed",
		accent: "from-amber-400 via-orange-500 to-rose-600",
		seed: "xavier",
		description:
			"A 3D educational puzzle game that turns mobility, public transport, and everyday responsibility into a more approachable set of playable scenarios.",
		genres: ["3D Puzzle Game", "Mini-game Compilation", "Team Project"],
		videoUrl: "https://www.youtube.com/embed/EgwJ16ZPhCQ",
		documents: [
			{
				label: "GDD",
				url: "https://drive.google.com/file/d/12Hvkym3n3nOO67nbHpQ2wi3WrwGJSFI1/view",
				action: "external",
			},
		],
		screenshots: {
			gameplay: [
				"/media/portfolio/games/xavier/gameplay/1.png",
				"/media/portfolio/games/xavier/gameplay/2.jpg",
				"/media/portfolio/games/xavier/gameplay/3.jpg",
				"/media/portfolio/games/xavier/gameplay/4.jpg",
				"/media/portfolio/games/xavier/gameplay/5.jpg",
				"/media/portfolio/games/xavier/gameplay/6.jpg",
				"/media/portfolio/games/xavier/gameplay/7.jpg",
			],
		},
		playUrl: "https://theguyser.itch.io/xavier-the-explorer",
		tools: ["Unity"],
		role: "Game Designer, Narrative Director",
		year: "Nov 2023 - Jan 2024",
		contentSections: [
			{
				title: "Project Info",
				body: "Timeline: November 2023 - January 2024\nRole: Game Designer, Narrative Director\nTools: Unity",
			},
			{
				title: "About",
				body: "In Xavier the Explorer, the player guides Xavier, a secondary school student, through everyday challenges related to mobility and social responsibility.\n\nThe game is structured around three scenario types: organizing road systems, navigating public transport interactions, and reaching destinations on foot. Each one turns practical lessons about independence, safety, and community into something more approachable through play.",
				layout: "wide",
			},
			{
				title: "Goals",
				items: [
					"Raise awareness around safe mobility and everyday commuting habits.",
					"Promote greener transport options such as biking and public transport.",
					"Build engaging levels based on real transportation challenges faced by students and workers.",
					"Deliver the project in collaboration with a real client context.",
				],
			},
			{
				title: "Contribution",
				body: "Primary contribution: Gameplay Designer",
				items: [
					"Designed the overall gameplay and narrative flow across the project.",
					"Shaped the structure and context for all three levels so they stayed aligned with the theme and learning goals.",
					"Owned one level in detail, producing the layout and design structure needed for implementation.",
				],
			},
		],
	},
];

export const MUSIC_TRACKS: MusicTrack[] = [
	{
		id: "lobby-lights",
		title: "Lobby Lights",
		artist: "Chunli System Sound Team",
		length: "3:28",
		mood: "Soft boot groove",
		seed: "lobby-lights",
		accent: "from-pink-400 via-fuchsia-500 to-orange-400",
	},
	{
		id: "night-plaza",
		title: "Night Plaza",
		artist: "Portable Dreams",
		length: "4:11",
		mood: "Late-hour menu drift",
		seed: "night-plaza",
		accent: "from-cyan-300 via-sky-500 to-indigo-500",
	},
	{
		id: "starlight-bus",
		title: "Starlight Bus",
		artist: "Pixel Garden",
		length: "2:57",
		mood: "Bright handheld pop",
		seed: "starlight-bus",
		accent: "from-emerald-300 via-lime-400 to-yellow-300",
	},
];
