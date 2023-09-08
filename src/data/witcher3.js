const quests = [
{
    id: 0, 
    name: 'Lilac and Gooseberries',
    location: 'White Orchard',
    type: 'Main Quest',
    level: '0',
    desc: "It's the second main quest and the first following the tutorial quest"
},
{
    id: 1, 
    name: 'The Beast of White Orchard',
    location: 'White Orchard',
    type: 'Main Quest',
    level: '3',
    desc: "It's the third main quest of The Witcher 3: Wild Hunt. It acts as a sub-quest to Lilac and Gooseberries as it must be completed before the player can continue that quest."
},
{
    id: 2, 
    name: 'The Incident at White Orchard',
    location: 'White Orchard',
    type: 'Main Quest',
    level: '2',
    desc: "It's a minor main quest that occurs at the conclusion of the quest Lilac and Gooseberries"
},
{
    id: 3, 
    name: 'A Frying Pan, Spick and Span',
    location: 'White Orchard',
    type: 'Secondary Quest',
    level: '0',
    desc: ''
},
{
    id: 4, 
    name: 'Faithful Friend',
    location: 'White Orchard',
    type: 'Secondary Quest',
    level: '30',
    desc: 'This quest is only accessible during the Empress ending and it must be completed before Something Ends, Something Begins.'
},
{
    id: 5, 
    name: 'Missing in Action',
    location: 'White Orchard',
    type: 'Secondary Quest',
    level: '0'
},
{
    id: 6, 
    name: "On Death's Bed",
    location: 'White Orchard',
    type: 'Secondary Quest',
    level: '2',
    desc: "On Death's Bed is a secondary quest in The Witcher 3: Wild Hunt, given by the herbalist Tomira in White Orchard. "
},
{
    id: 7, 
    name: 'Precious Cargo',
    location: 'White Orchard',
    type: 'Secondary Quest',
    level: '0',
    desc: ''
},
{
    id: 8, 
    name: 'Twisted Firestarter',
    location: 'White Orchard',
    type: 'Secondary Quest',
    level: '0',
    desc: ''
},
{
    id: 9, 
    name: 'Contract: Devil by the Well',
    location: 'White Orchard',
    type: 'Contract',
    level: '2',
    desc: ''
},
{
    id: 10, 
    name: 'Deserter Gold',
    location: 'White Orchard',
    type: 'Treasure Hunt',
    level: '3',
    desc: ''
},
{
    id: 11, 
    name: 'Dirty Funds',
    location: 'White Orchard',
    type: 'Treasure Hunt',
    level: '2',
    desc: ''
},
{
    id: 12, 
    name: 'Scavenger Hunt: Viper School Gear',
    location: 'White Orchard',
    type: 'Treasure Hunt',
    level: '6',
    desc: ''
},
{
    id: 13, 
    name: 'Temerian Valuables',
    location: 'White Orchard',
    type: 'Treasure Hunt',
    level: '4',
    desc: ''
},
{
    id: 14, 
    name: 'The Nilfgaardian Connection',
    location: 'Velen',
    type: 'Main Quest',
    level: '5',
    desc: 'First quest in Act I'
},
{
    id: 15, 
    name: 'Bloody Baron',
    location: 'Velen',
    type: 'Main Quest',
    level: '6',
    desc: 'After The Nilfgaardian Connection'
},
{
    id: 16, 
    name: "Ciri's story: The king of the Wolves",
    location: 'Velen',
    type: 'Main Quest',
    level: '5',
    desc: 'After Bloody Baron'
},
{
    id: 17, 
    name: 'Family Matters',
    location: 'Velen',
    type: 'Main Quest',
    level: '5',
    desc: 'After Bloody Baron'
},
{
    id: 18, 
    name: 'A Princess in Distress',
    location: 'Velen',
    type: 'Main Quest',
    level: '5',
    desc: 'After Family Matters'
},
{
    id: 19, 
    name: "Ciri's Story: The Race",
    location: 'Velen',
    type: 'Main Quest',
    level: '5',
    desc: 'After Family Matters'
},
{
    id: 20, 
    name: "Ciri's Story: Out of the Shadows",
    location: 'Velen',
    type: 'Main Quest',
    level: '5',
    desc: 'After Family Matters'
},
{
    id: 21, 
    name: "Hunting a Witch",
    location: 'Velen',
    type: 'Main Quest',
    level: '5',
    desc: 'After The Nilfgaardian Connection'
},
{
    id: 22, 
    name: "Wandering in the Dark",
    location: 'Velen',
    type: 'Main Quest',
    level: '6',
    desc: 'After Hunting a Witch'
},
{
    id: 23, 
    name: "Ladies of the Wood",
    location: 'Velen',
    type: 'Main Quest',
    level: '6',
    desc: 'After Wandering in the Dark'
},
{
    id: 24, 
    name: "The Whispering Hillock",
    location: 'Velen',
    type: 'Main Quest',
    level: '5',
    desc: 'After Ladies of the Wood'
},
{
    id: 25, 
    name: "Ciri's Story: Fleeing the Bog",
    location: 'Velen',
    type: 'Main Quest',
    level: '5',
    desc: 'After Ladies of the Wood'
},
{
    id: 26, 
    name: "At the Mercy of Strangers (Part 1)",
    location: 'Velen',
    type: 'Secondary Quest',
    level: '0',
    desc: ''
},
{
    id: 27, 
    name: "At the Mercy of Strangers (Part 2)",
    location: 'Velen',
    type: 'Secondary Quest',
    level: '0',
    desc: ''
},
{
    id: 28, 
    name: "Caravan Attack",
    location: 'Velen',
    type: 'Secondary Quest',
    level: '0',
    desc: ''
},
{
    id: 29, 
    name: "Deadly Crossing I",
    location: 'Velen',
    type: 'Secondary Quest',
    level: '0',
    desc: ''
},
{
    id: 30, 
    name: "Deadly Crossing II",
    location: 'Velen',
    type: 'Secondary Quest',
    level: '0',
    desc: ''
},
{
    id: 31, 
    name: "Deadly Crossing III",
    location: 'Velen',
    type: 'Secondary Quest',
    level: '0',
    desc: ''
},
{
    id: 32, 
    name: "Face Me if You Dare! (Part I)",
    location: 'Velen',
    type: 'Secondary Quest',
    level: '0',
    desc: ''
},
{
    id: 33, 
    name: "Harassing a Troll",
    location: 'Velen',
    type: 'Secondary Quest',
    level: '0',
    desc: ''
},
{
    id: 34, 
    name: "Highway Robbery",
    location: 'Velen',
    type: 'Secondary Quest',
    level: '0',
    desc: ''
},
{
    id: 35, 
    name: "Highwayman's Cache",
    location: 'Velen',
    type: 'Secondary Quest',
    level: '0',
    desc: ''
},
{
    id: 36, 
    name: "Looters I",
    location: 'Velen',
    type: 'Secondary Quest',
    level: '0',
    desc: ''
},
{
    id: 37, 
    name: "Looters II",
    location: 'Velen',
    type: 'Secondary Quest',
    level: '0',
    desc: ''
},
{
    id: 38, 
    name: "Looters III",
    location: 'Velen',
    type: 'Secondary Quest',
    level: '0',
    desc: ''
},
{
    id: 39, 
    name: "Man's Best Friend",
    location: 'Velen',
    type: 'Secondary Quest',
    level: '0',
    desc: ''
},
{
    id: 40, 
    name: "Fake Papers",
    location: 'Velen',
    type: 'Secondary Quest',
    level: '1',
    desc: ''
},
{
    id: 41, 
    name: "Gwent: Velen Players",
    location: 'Velen',
    type: 'Secondary Quest',
    level: '1',
    desc: "To start this quest, one must play the Bloody Baron by either finding the notice in Crow's Perch or by talking to and challenging him"
},
{
    id: 42, 
    name: "Races: Crow's Perch",
    location: 'Velen',
    type: 'Secondary Quest',
    level: '1',
    desc: "The quest can be started by checking Crow's Perch's notice board."
},
{
    id: 43, 
    name: "The Truth is in the Stars",
    location: 'Velen',
    type: 'Secondary Quest',
    level: '1',
    desc: ""
},
{
    id: 44, 
    name: "Funeral Pyres",
    location: 'Velen',
    type: 'Secondary Quest',
    level: '3',
    desc: ""
},
{
    id: 45, 
    name: "A Dog's Life",
    location: 'Velen',
    type: 'Secondary Quest',
    level: '5',
    desc: ""
},
{
    id: 46, 
    name: "Ciri's Room",
    location: 'Velen',
    type: 'Secondary Quest',
    level: '5',
    desc: "Search Ciri's Room"
},
{
    id: 47, 
    name: "Hazardous Goods (Part I)",
    location: 'Velen',
    type: 'Secondary Quest',
    level: '5',
    desc: ""
},
{
    id: 48, 
    name: "Hazardous Goods (Part II)",
    location: 'Velen',
    type: 'Secondary Quest',
    level: '5',
    desc: ""
},
{
    id: 49, 
    name: "A Favor for a Friend",
    location: 'Velen',
    type: 'Secondary Quest',
    level: '6',
    desc: "After A Towerful of Mice"
},
{
    id: 50, 
    name: "A Towerful of Mice",
    location: 'Velen',
    type: 'Secondary Quest',
    level: '6',
    desc: "After An Invitation from Keira Metz"
},
{
    id: 51, 
    name: "Fools' Gold",
    location: 'Velen',
    type: 'Secondary Quest',
    level: '6',
    desc: ""
},
{
    id: 52, 
    name: "An Invitation from Keira Metz",
    location: 'Velen',
    type: 'Secondary Quest',
    level: '6',
    desc: "After Magic Lamp"
},
{
    id: 53, 
    name: "Ghosts of the Past",
    location: 'Velen',
    type: 'Secondary Quest',
    level: '6',
    desc: "After The Fall of the House of Reardon if Letho is alive"
},
{
    id: 54, 
    name: "Magic Lamp",
    location: 'Velen',
    type: 'Secondary Quest',
    level: '6',
    desc: "After Wandering in the Dark"
},
{
    id: 55, 
    name: "The Fall of the House of Reardon",
    location: 'Velen',
    type: 'Secondary Quest',
    level: '6',
    desc: ""
},
{
    id: 56, 
    name: "A Greedy God",
    location: 'Velen',
    type: 'Secondary Quest',
    level: '7',
    desc: ""
},
{
    id: 57, 
    name: "Forefather's Eve",
    location: 'Velen',
    type: 'Secondary Quest',
    level: '7',
    desc: "After completing A Towerful of Mice, the pellar will contact you at one of two possible locations, depending on whether the botchling part of Family Matters has already been completed or not."
},
{
    id: 58, 
    name: "Lynch Mob",
    location: 'Velen',
    type: 'Secondary Quest',
    level: '7',
    desc: ""
},
{
    id: 59, 
    name: "Thou Shalt Not Pass",
    location: 'Velen',
    type: 'Secondary Quest',
    level: '7',
    desc: "It can be triggered by speaking to a guard either on the bridge leading to the Border Post or the Western Gate."
},
{
    id: 60, 
    name: "Wild at Heart",
    location: 'Velen',
    type: 'Secondary Quest',
    level: '7',
    desc: "This quest can be picked up from several Velen notice boards, including from Mulbrydale, Midcopse, Inn at the Crossroads, and Crow's Perch."
},
{
    id: 61, 
    name: "For the Advancement of Learning",
    location: 'Velen',
    type: 'Secondary Quest',
    level: '8',
    desc: "After A Favor for a Friend"
},
{
    id: 62, 
    name: "Bitter Harvest",
    location: 'Velen',
    type: 'Secondary Quest',
    level: '9',
    desc: "After Fake Papers"
},
{
    id: 63, 
    name: "Wild at Heart",
    location: 'Velen',
    type: 'Secondary Quest',
    level: '9',
    desc: "Last Rites"
},
{
    id: 64, 
    name: "Return to Crookback Bog",
    location: 'Velen',
    type: 'Secondary Quest',
    level: '9',
    desc: "After Family Matters"
},
{
    id: 65, 
    name: "Death By Fire",
    location: 'Velen',
    type: 'Secondary Quest',
    level: '10',
    desc: ""
},
{
    id: 66, 
    name: "Defender of the Faith",
    location: 'Velen',
    type: 'Secondary Quest',
    level: '10',
    desc: ""
},
{
    id: 67, 
    name: "Love's Cruel Snares",
    location: 'Velen',
    type: 'Secondary Quest',
    level: '10',
    desc: ""
},
{
    id: 68, 
    name: "Witcher Wannabe",
    location: 'Velen',
    type: 'Secondary Quest',
    level: '10',
    desc: ""
},
{
    id: 69, 
    name: "Fists of Fury: Velen",
    location: 'Velen',
    type: 'Secondary Quest',
    level: '11',
    desc: "This quest may be started via its notice on Crow's Perch's notice board or simply encountering one of the spots where fist fights take place."
},
{
    id: 70, 
    name: "Blood Ties",
    location: 'Velen',
    type: 'Secondary Quest',
    level: '12',
    desc: ""
},
{
    id: 71, 
    name: "In the Eternal Fire's Shadow",
    location: 'Velen',
    type: 'Secondary Quest',
    level: '15',
    desc: "The quest is given by a young Eternal Fire deacon just outside Devil's Pit in Velen"
},
{
    id: 72, 
    name: "Take What You Want",
    location: 'Velen',
    type: 'Secondary Quest',
    level: '25',
    desc: "After Where the Cat and Wolf Play..."
},
{
    id: 73, 
    name: "Where the Cat and Wolf Play...",
    location: 'Velen',
    type: 'Secondary Quest',
    level: '25',
    desc: "After Contract: The Beast of Honorton"
},
{
    id: 74, 
    name: "Contract: Woodland Beast",
    location: 'Velen',
    type: 'Contract',
    level: '6',
    desc: "This quest can be picked up by reading the notice on the Border Post's notice board or Oxenfurt's."
},
{
    id: 75, 
    name: "Contract: Patrol Gone Missing",
    location: 'Velen',
    type: 'Contract',
    level: '7',
    desc: "Head to the Nilfgaardian Army Group 'Center' Camp in the furthest southeast part of Velen and find Eggebracht's notice on the notice board here."
},
{
    id: 76, 
    name: "Contract: Shrieker",
    location: 'Velen',
    type: 'Contract',
    level: '8',
    desc: "You can start this quest either by finding the notice on Crow's Perch's notice board, or by finding the shrieker's cave."
},
{
    id: 77, 
    name: "Contract: Jenny o' the Woods",
    location: 'Velen',
    type: 'Contract',
    level: '10',
    desc: "This quest can only be picked up by getting the notice, so get it off Midcopse's notice board."
},
{
    id: 78, 
    name: "Contract: The Merry Widow",
    location: 'Velen',
    type: 'Contract',
    level: '10',
    desc: "You can start this quest by either the notice on Lindenvale's notice board or by finding the hut."
},
{
    id: 79, 
    name: "Contract: Swamp Thing",
    location: 'Velen',
    type: 'Contract',
    level: '12',
    desc: ""
},
{
    id: 80, 
    name: "Contract: Mysterious Tracks",
    location: 'Velen',
    type: 'Contract',
    level: '20',
    desc: "The quest is available from Lindenvale's notice board or by finding the tracks or cave first."
},
{
    id: 81, 
    name: "Contract: The Mystery of the Byways Murders",
    location: 'Velen',
    type: 'Contract',
    level: '22',
    desc: "You can start this quest by either finding the notice first on Oreton's notice board or by exploring and finding Byways."
},
{
    id: 82, 
    name: "Contract: The Mystery of the Byways Murders",
    location: 'Velen',
    type: 'Contract',
    level: '23',
    desc: ""
},
{
    id: 83, 
    name: "Contract: The Griffin from the Highlands",
    location: 'Velen',
    type: 'Contract',
    level: '24',
    desc: "The contract appears only after Master Armorers reaches the phase where acid is required to forge an armor, which Archgriffins spit."
},
{
    id: 84, 
    name: "Contract: The Beast of Honorton",
    location: 'Velen',
    type: 'Contract',
    level: '25',
    desc: "Pick up the notice off Crow's Perch's notice board or Oreton's"
},
{
    id: 85, 
    name: "Contract: Missing Brother",
    location: 'Velen',
    type: 'Contract',
    level: '33',
    desc: "This quest can be picked up at the Inn at the Crossroads' notice board, which will point you to talk to Bruno inside, or by finding the mine directly."
},
{
    id: 86, 
    name: "Lost Goods",
    location: 'Velen',
    type: 'Treasure Hunt',
    level: '1',
    desc: ""
},
{
    id: 87, 
    name: "Out of the Frying Pan, into the Fire",
    location: 'Velen',
    type: 'Treasure Hunt',
    level: '1',
    desc: ""
},
{
    id: 88, 
    name: "Queen Zuleyka's Treasure",
    location: 'Velen',
    type: 'Treasure Hunt',
    level: '1',
    desc: ""
},
{
    id: 89, 
    name: "Scavenger Hunt: Bear School Gear/Part 3",
    location: 'Velen',
    type: 'Treasure Hunt',
    level: '1',
    desc: "The easiest way to get all the markings on the map is to buy Ibrahim Savi's third map from the armorer at Kaer Trolde."
},
{
    id: 90, 
    name: "Scavenger Hunt: Bear School Gear/Part 4",
    location: 'Velen',
    type: 'Treasure Hunt',
    level: '1',
    desc: "The easiest way to get all the markings on the map is to buy Ibrahim Savi's fourth map from the armorer at Kaer Trolde."
},
{
    id: 91, 
    name: "Scavenger Hunt: Cat School Gear/Part 2",
    location: 'Velen',
    type: 'Treasure Hunt',
    level: '1',
    desc: "The easiest way to get all the markers on the map is to buy Adalbert Kermith's second map from Blackbough's blacksmith."
},
{
    id: 92, 
    name: "Scavenger Hunt: Griffin School Gear",
    location: 'Velen',
    type: 'Treasure Hunt',
    level: '1',
    desc: "The easiest maps to obtain early on are the first and second from Midcopse's armorer."
},
{
    id: 93, 
    name: "Scavenger Hunt: Griffin School Gear/Part 1",
    location: 'Velen',
    type: 'Treasure Hunt',
    level: '1',
    desc: "While you can find the diagrams by just exploring, an easy way to get all the locations marked is to buy Edwin Greloff's first map from the armorer in Midcopse, which will then reveal them all."
},
{
    id: 94, 
    name: "Scavenger Hunt: Griffin School Gear/Part 2",
    location: 'Velen',
    type: 'Treasure Hunt',
    level: '1',
    desc: "While you can find the diagrams by just exploring, an easy way to get all the locations marked is to buy Edwin Greloff's second map from the armorer in Midcopse, which will then reveal them all."
},
{
    id: 95, 
    name: "An Unfortunate Turn of Events",
    location: 'Velen',
    type: 'Treasure Hunt',
    level: '4',
    desc: ""
},
{
    id: 96, 
    name: "Sunken Chest",
    location: 'Velen',
    type: 'Treasure Hunt',
    level: '4',
    desc: ""
},
{
    id: 97, 
    name: "Sunken Treasure",
    location: 'Velen',
    type: 'Treasure Hunt',
    level: '4',
    desc: ""
},
{
    id: 98, 
    name: "Hidden from the World",
    location: 'Velen',
    type: 'Treasure Hunt',
    level: '7',
    desc: ""
},
{
    id: 99, 
    name: "The Dead Have No Defense",
    location: 'Velen',
    type: 'Treasure Hunt',
    level: '9',
    desc: ""
},
{
    id: 100, 
    name: "The Things Men Do For Coin...",
    location: 'Velen',
    type: 'Treasure Hunt',
    level: '12',
    desc: ""
},
{
    id: 101, 
    name: "Don't Play with the Gods",
    location: 'Velen',
    type: 'Treasure Hunt',
    level: '15',
    desc: ""
},
{
    id: 102, 
    name: "A Costly Mistake",
    location: 'Velen',
    type: 'Treasure Hunt',
    level: '18',
    desc: ""
},
{
    id: 103, 
    name: "Blood Gold",
    location: 'Velen',
    type: 'Treasure Hunt',
    level: '18',
    desc: ""
},
{
    id: 104, 
    name: "Tough Luck",
    location: 'Velen',
    type: 'Treasure Hunt',
    level: '18',
    desc: ""
},
{
    id: 105, 
    name: "Battlefield Loot",
    location: 'Velen',
    type: 'Treasure Hunt',
    level: '20',
    desc: ""
},
{
    id: 106, 
    name: "Scavenger Hunt: Wolf School Gear/Part 1",
    location: 'Velen',
    type: 'Treasure Hunt',
    level: '21',
    desc: "The easiest way to get these marked on the map is to buy the well-preserved notes from Éibhear Hattori."
},
{
    id: 107, 
    name: "A Plea Ignored",
    location: 'Velen',
    type: 'Treasure Hunt',
    level: '28',
    desc: ""
},
{
    id: 108, 
    name: "Dowry",
    location: 'Velen',
    type: 'Treasure Hunt',
    level: '32',
    desc: ""
},
{
    id: 109, 
    name: "Scavenger Hunt: Wolf School Gear/Part 5",
    location: 'Velen',
    type: 'Treasure Hunt',
    level: '34',
    desc: "The easiest way to get these marked on the map is to buy the worn-out and faded notes from Éibhear Hattori."
},







];

export default quests;