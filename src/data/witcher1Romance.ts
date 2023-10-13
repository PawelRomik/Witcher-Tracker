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
		location: "Act One",
		type: "Give flowers",
		level: "0",
		desc: "",
	},
	{
		id: 2,
		name: "Vesna",
		location: "Act One",
		type: "Complete quest 'She's No Early Bird'",
		level: "0",
		desc: "",
	},
	{
		id: 3,
		name: "Abigail",
		location: "Act One",
		type: "Choose good dialogue options",
		level: "0",
		desc: "",
	},
];

const actTwo = [
	{
		id: 4,
		name: "Half-elf",
		location: "Act Two",
		type: "Complete quest 'A Ghost Story'",
		level: "0",
		desc: "",
	},
	{
		id: 5,
		name: "Prostitutes",
		location: "Act Two",
		type: "All give the same card. Can be 'bought' with flowers after the Working Girls Side-Quest, or before with money.",
		level: "0",
		desc: "",
	},
	{
		id: 6,
		name: "Gossip",
		location: "Act Two",
		type: "She walks around and wants a pair of gloves or a diamond.",
		level: "0",
		desc: "",
	},
	{
		id: 7,
		name: "Shani",
		location: "Act Two",
		type: "After the party where you invite a friend, ask about the battle and make sure you have a red rose to offer her.",
		level: "0",
		desc: "",
	},
	{
		id: 8,
		name: "Morenn",
		location: "Act Two",
		type: "Get the side-quest A Lost Lamb from Vaska. Bring her a wolf pelt and select the middle option.",
		level: "0",
		desc: "",
	},
];

const quests = [...prologue, ...actOne, ...actTwo];

export default quests;
