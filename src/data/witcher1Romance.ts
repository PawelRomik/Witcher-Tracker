const prologue = [
	{
		id: 0,
		name: "Triss",
		location: "Prologue",
		type: "Give her potion and choose good dialogue options",
		level: "0",
		desc: "",
	},
];

const actOne = [
	{
		id: 1,
		name: "Peasant girl",
		location: "Act 1",
		type: "Give flowers",
		level: "0",
		desc: "",
	},
	{
		id: 2,
		name: "Vesna",
		location: "Act 1",
		type: "Complete quest 'She's No Early Bird'",
		level: "0",
		desc: "",
	},
	{
		id: 3,
		name: "Abigail",
		location: "Act 1",
		type: "Choose good dialogue options",
		level: "0",
		desc: "",
	},
];

const actTwo = [
	{
		id: 4,
		name: "Half-elf",
		location: "Act 2",
		type: "Complete quest 'A Ghost Story'",
		level: "0",
		desc: "",
	},
	{
		id: 5,
		name: "Prostitutes",
		location: "Act 2",
		type: "All give the same card. Can be 'bought' with flowers after the Working Girls Side-Quest, or before with money.",
		level: "0",
		desc: "",
	},
	{
		id: 6,
		name: "Gossip",
		location: "Act 2",
		type: "She walks around and wants a pair of gloves or a diamond.",
		level: "0",
		desc: "",
	},
	{
		id: 7,
		name: "Shani",
		location: "Act 2",
		type: "After the party where you invite a friend, ask about the battle and make sure you have a red rose to offer her.",
		level: "0",
		desc: "",
	},
	{
		id: 8,
		name: "Morenn",
		location: "Act 2",
		type: "Get the side-quest A Lost Lamb from Vaska. Bring her a wolf pelt and select the middle option.",
		level: "0",
		desc: "",
	},
];

const actThree = [
	{
		id: 9,
		name: "Triss Merigold",
		location: "Act 3",
		type: "Send Alvin to her, then chat with her.",
		level: "0",
		desc: "",
	},
	{
		id: 10,
		name: "Shani",
		location: "Act 3",
		type: "Send Alvin to her, then chat with her.",
		level: "0",
		desc: "",
	},
	{
		id: 11,
		name: "Rozalind Pankiera",
		location: "Act 3",
		type: "Complete quest 'Dandelion's Lute'",
		level: "0",
		desc: "",
	},
	{
		id: 12,
		name: "Noblewoman",
		location: "Act 3",
		type: "Stands in the street outside Triss' house near the jester, wants a Kikimore claw. You can also click the option to give her money and then cancel it",
		level: "0",
		desc: "",
	},
	{
		id: 13,
		name: "Blue Eyes",
		location: "Act 3",
		type: "Complete quest 'Blue Eyes'",
		level: "0",
		desc: "",
	},
	{
		id: 14,
		name: "Courtesans",
		location: "Act 3",
		type: "500 Oren or a gem or a bottle of perfume",
		level: "0",
		desc: "",
	},
	{
		id: 15,
		name: "Princess Adda",
		location: "Act 3",
		type: "after a short set of FedEx quests all in the same area at the party",
		level: "0",
		desc: "",
	},
	{
		id: 16,
		name: "Queen of the Night",
		location: "Act 3",
		type: "Queen of the Night — the climax of the Blue Eyes quest, if you choose one night with the sisters of mercy over killing the Lady of the Night.",
		level: "0",
		desc: "",
	},
	{
		id: 17,
		name: "Town Clerk",
		location: "Act 3",
		type: "Located at the town hall, upstairs. Tell her that she's a naughty girl, give her a diamond as a gift and she is all yours.",
		level: "0",
		desc: "",
	},
];

const actFour = [
	{
		id: 18,
		name: "Celina",
		location: "Act 4",
		type: "Give her a ring",
		level: "0",
		desc: "",
	},
	{
		id: 19,
		name: "Elf Woman",
		location: "Act 4",
		type: "Give her food",
		level: "0",
		desc: "",
	},
	{
		id: 20,
		name: "Lady of the Lake",
		location: "Act 4",
		type: "After the hermit quest you get an option to tell her you want to go on a mission, tell her it was a jest after you say it.",
		level: "0",
		desc: "",
	},
	{
		id: 21,
		name: "Peasant Woman",
		location: "Act 4",
		type: "Often hangs out at the inn or can also be found wandering around the village. Give her a sugardoll",
		level: "0",
		desc: "",
	},
];

const actFive = [
	{
		id: 22,
		name: "Toruviel",
		location: "Act 5",
		type: "[Scoia'tael path] Save her and then talk to her",
		level: "0",
		desc: "",
	},
	{
		id: 23,
		name: "Rayla",
		location: "Act 5",
		type: "[Order path] Follow her and then talk to her",
		level: "0",
		desc: "",
	},
	{
		id: 24,
		name: "Nurses",
		location: "Act 5",
		type: "[Neutral path] Return to the hospital after escorting Shani and talk to them",
		level: "0",
		desc: "",
	},
];

const quests = [...prologue, ...actOne, ...actTwo, ...actThree, ...actFour, ...actFive];

export default quests;
