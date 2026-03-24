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
			"This project explores the rise of cozy games and examines how the genre sheds light on complex issues surrounding player engagement in today's gaming landscape, using Spry Fox Studio as a primary case study.",
		seed: "cozy-games-market-force",
		contentSections: [
			{
				title: "Project Info",
				body: "Role: Solo Project\nResearch Type: Market Research\nMethodologies: Quantitative\nTools Used: PowerPoint, Word",
			},
			{
				title: "About",
				body: "This project explores the rise of cozy games and examines how the genre sheds light on complex issues surrounding player engagement in today's gaming landscape, using Spry Fox Studio as a primary case study.",
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
		title: "The Technology Evolution Of Split Screen in Mario Kart (1992-2017)",
		kicker: "Game Studies, Team Project",
		year: "April 2025",
		status: "Completed",
		stack: ["Ethnography", "Secondary Research", "Remote Observation", "Gameplay Systems Analysis"],
		summary:
			"This zine explores the technical journey of split-screen gameplay through two titles in the Mario Kart series: Super Mario Kart (1992) and Mario Kart 8 Deluxe (2017).",
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
				body: "Role:\n- Creative Director\n- Technical Researcher\n- Gameplay Systems Analyst\nResearch Type: Ethnography\nMethodologies: Secondary Research, Remote Observation",
			},
			{
				title: "About",
				body: "Imagine huddling on the couch in 1992, elbows bumping, SNES controllers in hand, racing on pixelated tracks. Fast forward to 2017 - you're dodging red shells on the go with a Joy-Con in hand.\n\nThis zine explores the technical journey of split-screen gameplay through two titles in the Mario Kart series: Super Mario Kart (1992) and Mario Kart 8 Deluxe (2017).",
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
			"This project investigates how narrative design can drive long-term player engagement. By analyzing Ace Attorney through player research and community behavior, I translated findings into practical design insights for retention, replayability, and player-driven content.",
		seed: "ace-attorney-research",
		contentSections: [
			{
				title: "Project Info",
				body: "Role: Researcher\nResearch Type: Ethnography\nMethodologies: Mixed (Included surveys, interviews)",
			},
			{
				title: "About",
				body: "This project investigates how narrative design can drive long-term player engagement. By analyzing Ace Attorney through player research and community behavior, I translated findings into practical design insights for retention, replayability, and player-driven content.",
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
		copy: "Just finished working on a new web project! The Wii U aesthetic is so nostalgic. ^^",
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

export const GAME_PREVIEWS: GamePreview[] = [
	{
		id: "magi-girl",
		title: "MAGI-GIRL.EXE",
		tagline: "Vertical Slice, Turn-based, Experimental, Solo Dev",
		state: "Completed",
		accent: "from-pink-400 via-rose-500 to-purple-600",
		seed: "magi-girl",
		description:
			"MAGI-GIRL.EXE is a 2D story-driven, turn-based RPG developed solo over the span of three months. You play as Arthur, an aspiring romance novelist, helping him gather advice to improve his manuscript and finally publish it. However, in the midst of what seems like an ordinary daily life, Arthur is suddenly pulled into an event that transforms his life forever. Now, against his will, he has been transformed... into a magical girl?!",
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
			],
		},
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
				body: "Full name: MAGI-GIRL.EXE: That One Time I Was Just Looking for Romance Novel Ideas and Accidentally Saved the World\nTime: July 2025-Sep 2025\nRole: Game Designer, Game Developer, Artist\nTools: RPG Maker MZ, Aseprite, Clip Studio Paint, Miro, Photoshop, Premiere Pro",
			},
			{
				title: "About",
				body: "MAGI-GIRL.EXE is a 2D story-driven, turn-based RPG developed solo over the span of three months. You play as Arthur, an aspiring romance novelist, helping him gather advice to improve his manuscript and finally publish it. However, in the midst of what seems like an ordinary daily life, Arthur is suddenly pulled into an event that transforms his life forever.\nNow, against his will, he has been transformed... into a magical girl?!\n\nThis is a singleplayer demo covering the prologue of a larger story.",
				layout: "wide",
			},
			{
				title: "Project Achievement",
				items: [
					"Experimented with developing a turn-based battle system.",
					"Explored core design elements of the turn-based RPG genre.",
					'Designed a unique mechanic, "Novelize," (Game-in-Game gimmick) closely tied to the story and the main character\'s identity.',
					"Developed a vertical slice demonstrating strong potential for future expansion.",
				],
			},
			{
				title: "Notes",
				body: "P.S: Please click on Game.exe in the folder to play\nPlay: to be upload later",
			},
		],
	},
	{
		id: "remedy",
		title: "Remedy",
		tagline: "Prototype, Puzzle, Experimental, Jam, Solo Dev",
		state: "Completed",
		accent: "from-violet-400 via-purple-500 to-indigo-600",
		seed: "remedy",
		description:
			"Remedy is a puzzle adventure game where a teacher and a mysterious young high school student find themselves waking up in an unknown room. The narrative delves into themes of loss and the journey of moving on.",
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
				body: "Time: March 2024 - April 2024\nRole: Game Designer, Game Developer, Artist\nTools: RPG Maker MZ, Aseprite",
			},
			{
				title: "About",
				body: "Remedy is a puzzle adventure game where a teacher and a mysterious young high school student find themselves waking up in an unknown room. The narrative delves into themes of loss and the journey of moving on.\n\nMade for 3-week game jam with the theme Chain Reaction.",
				layout: "wide",
			},
			{
				title: "Project Goals",
				items: [
					"Experimenting with new engine.",
					"Experimenting with the puzzle genre.",
					"Develop a prototype that has potential for future development.",
				],
			},
		],
	},
	{
		id: "kawaii-mario",
		title: "Kawaii Mario Pimpop~Sugar Sweet Treatment~",
		tagline: "Prototype, Point and Click, Fangame, Jam, Solo Dev",
		state: "Completed",
		accent: "from-fuchsia-400 via-pink-400 to-rose-300",
		seed: "kawaii-mario",
		description: "Mamma mia",
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
				body: "Time: March 2024\nRole: Game Designer, Game Developer, Artist\nTools: Unity, Procreate",
			},
			{
				title: "About",
				body: "Mamma mia\n1 week game jam made for the theme 10-second game",
				layout: "wide",
			},
		],
	},
	{
		id: "athena-cykes-ace-attorney",
		title: "Athena Cykes: The Ace Attorney",
		tagline: "Ace Attorney sequel project, GDD, Team Project",
		state: "Completed",
		accent: "from-sky-400 via-cyan-500 to-blue-600",
		seed: "athena-cykes-ace-attorney",
		description:
			'"The Ace Attorney" game series has been a great movement for the Visual Novel genre and the Game Design field.',
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
				body: "Time: Aug-Sep 2023\nRole: Game Writer, Gameplay Design, Team Leader",
			},
			{
				title: "About",
				body: "\"The Ace Attorney\" game series has been a great movement for the Visual Novel genre and the Game Design field. With ingenuity, clever sound design and narration, the series has brought the best game experience to the players with simple gameplay.\n\nOur team is not an exception. We have been impressed by how well the game experience that this series has brought, despite point-and-click gameplay. Therefore, we chose this series for our project.",
				layout: "wide",
			},
		],
	},
	{
		id: "ghostly-wok",
		title: "Ghostly Wok Wonders",
		tagline: "Prototype, Restaurant Simulator, Experimental, Jam, Team Project",
		state: "Completed",
		accent: "from-emerald-400 via-teal-500 to-cyan-500",
		seed: "ghostly-wok",
		description: "A cooking game where you try to make a delicious dish for the ghost!",
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
				body: "Time: April 2024-May 2024\nRole: Game Designer, Artist\nTools: Unity, Aseprite",
			},
			{
				title: "About",
				body: "A cooking game where you try to make a delicious dish for the ghost!\n\nMade for a 1-month game jam.",
				layout: "wide",
			},
		],
	},
	{
		id: "asphyxiated",
		title: "Asphyxiated",
		tagline: "2D Platformer, Team Project",
		state: "Completed",
		accent: "from-emerald-400 via-teal-500 to-cyan-500",
		seed: "asphyxiated",
		description: "A platformer made for the message of saving the environment.",
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
				body: "A platformer made for the message of saving the environment.",
			},
			{
				title: "Project Info",
				body: "Time: May 2023 - June 2023\nRole: Game Designer, Game Artist\nTools: Unity, Aseprite",
			},
			{
				title: "About",
				body: "A platformer game made based on the theme of Serious Game: Games for Environment, the game feature a post apocalypse world where you're the keeper of the Seed Vault, trying to recover the green planet you used to live.",
				layout: "wide",
			},
		],
	},
	{
		id: "atelier",
		title: "Atelier",
		tagline: "Board Game, Project Brief, Rulebook, Solo Project",
		state: "Completed",
		accent: "from-amber-300 via-orange-400 to-rose-500",
		seed: "atelier",
		description:
			"In Atelier, you and your opponents are from different prestigious Potions Factories that compete with one another.",
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
				body: "Time: Nov 2022\nRole: Game Designer",
			},
			{
				title: "About",
				body: "In Atelier, you and your opponents are from different prestigious Potions Factories that compete with one another. Your mission is to advertise new potions that will cure the current Ailment while downplaying any negative effects that the lab staff may have identified.\n\nBy the way your Factory is massive!\nIt's so large that the people who create the potions and those who promote them don't really talk to one other. So, like everyone else, you might be astonished when you promote your Factory's product and learn what it actually does ...",
				layout: "wide",
			},
		],
	},
	{
		id: "xavier",
		title: "Xavier the Explorer",
		tagline: "3D Puzzle Game, Mini-game Compilation, Team Project",
		state: "Completed",
		accent: "from-amber-400 via-orange-500 to-rose-600",
		seed: "xavier",
		description:
			"In Xavier The Explorer, you guide Xavier, a secondary school student, as he navigates through everyday challenges related to mobility and social responsibility.",
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
				body: "Time: Nov 2023 - Jan 2024\nRole: Game Designer, Narrative Director\nTools: Unity",
			},
			{
				title: "About",
				body: "In Xavier The Explorer, you guide Xavier, a secondary school student, as he navigates through everyday challenges related to mobility and social responsibility. The game consists of three key types of levels: organizing road systems, managing interactions on public transport, and navigating to various destinations on foot. Each scenario helps Xavier understand the importance of mobility in daily life, from arranging traffic to assisting others on the bus. As players progress, they help Xavier grow into a responsible, informed citizen, learning key lessons about independence and community.",
				layout: "wide",
			},
			{
				title: "Project Goals",
				items: [
					"Raise awareness about safe mobility and its importance in everyday commuting.",
					"Promote green and sustainable transportation methods, such as biking and public transport, to reduce pollution.",
					"Offer engaging levels that mirror real-life transportation challenges, from organizing roadways to creating safe commuting environments for work and school.",
					"Working with a real client.",
				],
			},
			{
				title: "Contribution",
				body: "Gameplay Designer",
				items: [
					"Gameplay Flow Design: Developed the overall gameplay and narrative flow.",
					"Level Design: Designed the overall gameplay and context for all levels (3 levels in total), ensuring they fit the game's theme and narrative.",
					"Detailed Level Design: Took charge of designing and developing one specific level, providing a detailed layout and structure to guide its development.",
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
