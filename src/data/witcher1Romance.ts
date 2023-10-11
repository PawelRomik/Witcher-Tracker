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
		type: "Complete quest 'She's No Early Bird' ",
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

const quests = [...prologue, ...actOne];

export default quests;
