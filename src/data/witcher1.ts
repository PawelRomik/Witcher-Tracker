
const prologue = [
    {
        id: 0, 
        name: 'Defending Kaer Morhen',
        location: 'Prologue',
        type: 'Main Quest',
        level: '0',
        desc: "It's the first main quest"
    },
    {
        id: 1, 
        name: 'Witchers Secrets (Part 1)',
        location: 'Prologue',
        type: 'Main Quest',
        level: '0',
        desc: "After Defending Kaer Morhen"
    },{
        id: 2, 
        name: 'A Potion for Triss',
        location: 'Prologue',
        type: 'Secondary Quest',
        level: '0',
        desc: "After Defending Kaer Morhen"
    },{
        id: 3, 
        name: "Berengar's Secret",
        location: 'Prologue',
        type: 'Secondary Quest',
        level: '0',
        desc: "After Defending Kaer Morhen"
    },{
        id: 4, 
        name: "Fistfight (Eskel)",
        location: 'Prologue',
        type: 'Secondary Quest',
        level: '0',
        desc: "After Defending Kaer Morhen"
    },
]

const actOne = [
{
        id: 5, 
        name: "Witchers Secrets (Part 2)",
        location: 'Act 1',
        type: 'Main Quest',
        level: '0',
        desc: " This quest takes him first to the outskirts where he locates the first of three Salamandra hideouts. This spans all of Chapter I."
},{
    id: 6, 
    name: "Of Monsters and Men",
    location: 'Act 1',
    type: 'Main Quest',
    level: '0',
    desc: "First Act 1 Main Quest"
},{
    id: 7, 
    name: "The Salamander's Tail",
    location: 'Act 1',
    type: 'Main Quest',
    level: '0',
    desc: "It begins with Geralt learning of Salamandra's presence in the outskirts and about the Reverend from Shani after the opening barghest attack on Alvin and Caroline."
},{
    id: 8, 
    name: "Strangers in the Night",
    location: 'Act 1',
    type: 'Main Quest',
    level: '0',
    desc: "After Of Monsters and Men"
},{
    id: 9, 
    name: "Buried Memories",
    location: 'Act 1',
    type: 'Main Quest',
    level: '0',
    desc: "After Of Monsters and Men"
},{
    id: 10, 
    name: "The Secret Garden",
    location: 'Act 1',
    type: 'Main Quest',
    level: '0',
    desc: "After Of Monsters and Men"
},{
    id: 11, 
    name: "A Game of Dice (Act 1)",
    location: 'Act 1',
    type: 'Secondary Quest',
    level: '0',
    desc: "Players: Zoltan, Mikul, Odo and Haren Brogg"
},{
    id: 12, 
    name: "Dead Hand of the Past",
    location: 'Act 1',
    type: 'Secondary Quest',
    level: '0',
    desc: "It's given by Declan Leuvaarden."
},{
    id: 13, 
    name: "Hot Potato (Part 1)",
    location: 'Act 1',
    type: 'Secondary Quest',
    level: '0',
    desc: "After Strangers in the Night"
},{
    id: 14, 
    name: "Racists",
    location: 'Act 1',
    type: 'Secondary Quest',
    level: '0',
    desc: "As Geralt makes his way through the Outskirts, he comes upon a dwarf who is surrounded by thugs intent on shaving off his beard in the fishing village."
},{
    id: 15, 
    name: "She's No Early Bird",
    location: 'Act 1',
    type: 'Secondary Quest',
    level: '0',
    desc: "Vesna remains at the inn until after Geralt speaks to her. Then she will leave every evening at 20:00, and can be found in danger as early as about 20:15. If Geralt leaves the inn and heads north at this time, he will see a group of men threatening to rape her. If he approaches, he must decide whether or not to help her."
},{
    id: 16, 
    name: "Wanted (Part 1)",
    location: 'Act 1',
    type: 'Secondary Quest',
    level: '0',
    desc: "The quest begins when Geralt finds an arrest warrant for the Professor on the Notice board outside the Outskirts Inn."
},{
    id: 17, 
    name: "The Monster of the Lake",
    location: 'Act 1',
    type: 'Monster Hunt',
    level: '0',
    desc: "Nadir, a drowned dead can be found just east of the mill near the Miller's Gate, but remember that these drowners only come out at night."
},{
    id: 18, 
    name: "King of the Crypt",
    location: 'Act 1',
    type: 'Monster Hunt',
    level: '0',
    desc: "After he finishes the quest to earn Mikul's trust, Geralt remembers that the Royal huntsman had mentioned a particularly nasty creature in the crypt. Strange, a few ghouls are not that nasty. So he decides to pay a second visit to the crypt."
},{
    id: 19, 
    name: "The Barghest Contract",
    location: 'Act 1',
    type: 'Monster Hunt',
    level: '0',
    desc: "Notice board"
},{
    id: 20, 
    name: "The Drowner Contract",
    location: 'Act 1',
    type: 'Monster Hunt',
    level: '0',
    desc: "Notice board"
},{
    id: 21, 
    name: "The Ghoul Contract",
    location: 'Act 1',
    type: 'Monster Hunt',
    level: '0',
    desc: "Notice board"
},]

const actTwo = [{
    id: 22, 
    name: "Witchers' Secrets (Part 2)",
    location: 'Act 2',
    type: 'Main Quest',
    level: '0',
    desc: "In Chapter II, Geralt moves on to the city of Vizima proper, where he finds two more Salamandra hideouts, one in the sewers and one in the restricted area of the Trade Quarter in his relentless pursuit of his goal: crushing Salamandra completely."
},{
    id: 23, 
    name: "Prison Break",
    location: 'Act 2',
    type: 'Main Quest',
    level: '0',
    desc: "First Act 2 Main Quest"
},{
    id: 24, 
    name: "Vizima Confidential",
    location: 'Act 2',
    type: 'Main Quest',
    level: '0',
    desc: "After Prison Break"
},{
    id: 25, 
    name: "The Crown Witness",
    location: 'Act 2',
    type: 'Main Quest',
    level: '0',
    desc: "This quest is given to the witcher by detective Raymond Maarloeve when the two first meet."
},{
    id: 26, 
    name: "Anatomy of a Crime",
    location: 'Act 2',
    type: 'Main Quest',
    level: '0',
    desc: "After some time has passed since the detective is attacked by Salamandra assassins, Raymond decides to resurface by sending a messager boy to Geralt, inviting him to a meeting at the detective's place."
},{
    id: 27, 
    name: "A Mysterious Tower",
    location: 'Act 2',
    type: 'Main Quest',
    level: '0',
    desc: "It is given to Geralt by Kalkstein, the alchemist."
},{
    id: 28, 
    name: "Monoliths",
    location: 'Act 2',
    type: 'Main Quest',
    level: '0',
    desc: "It is given to Geralt by Kalkstein, the alchemist."
},{
    id: 29, 
    name: "Clay Pits",
    location: 'Act 2',
    type: 'Main Quest',
    level: '0',
    desc: "On his way through the Swamp forest, Geralt comes upon a small hamlet, the Brickmakers' village. Curious, he begins speaking with the local inhabitants to try to learn more about the place."
},{
    id: 30, 
    name: "The Sentry",
    location: 'Act 2',
    type: 'Main Quest',
    level: '0',
    desc: "The Sentry is a quest in Chapter II which begins when, at Kalkstein's request, Geralt asks Vaska about the Mage's tower."
},{
    id: 31, 
    name: "A Ghost Story",
    location: 'Act 2',
    type: 'Secondary Quest',
    level: '0',
    desc: "When Geralt enters the door across from the warehouse in the Temple Quarter's slums during the day, after 6:00 am, and has a look around, he is likely to find a thug."
},{
    id: 32, 
    name: "A Gravedigger's Gratitude",
    location: 'Act 2',
    type: 'Secondary Quest',
    level: '0',
    desc: "Outside the cemetery's main gates in the Temple Quarter, Geralt encountered the lone Gravedigger hammering nails into freshly built coffins."
},{
    id: 33, 
    name: "A Long Way from Home",
    location: 'Act 2',
    type: 'Secondary Quest',
    level: '0',
    desc: "Having sorted out the Flowers and Gold quest for the lumberjack, Geralt asks Yaren Bolt if he needs the services of a witcher for any other tasks."
},{
    id: 34, 
    name: "A Lost Lamb (Part 1)",
    location: 'Act 2',
    type: 'Secondary Quest',
    level: '0',
    desc: "A Lost Lamb is a quest given to Geralt by Vaska in Chapter II, during his first visit to the Brickmakers' village in the swamp."
},{
    id: 35, 
    name: "A Most Uncommon Wine",
    location: 'Act 2',
    type: 'Secondary Quest',
    level: '0',
    desc: "A Most Uncommon Wine is an optional quest given to Geralt by Conrad, a young man the witcher meets at The Hairy Bear in Chapter II."
},{
    id: 36, 
    name: "A Pilgrimage",
    location: 'Act 2',
    type: 'Secondary Quest',
    level: '0',
    desc: "A Pilgrimage is an optional quest in Chapter II which Geralt can undertake after meeting Gramps near the landing in the swamp."
},{
    id: 37, 
    name: "A Restless Ghost",
    location: 'Act 2',
    type: 'Secondary Quest',
    level: '0',
    desc: "A Restless Ghost is an optional quest in Chapter II which Geralt can take if he speaks with a widow outside the Vizima cemetery."
},{
    id: 38, 
    name: "A Restless Ghost",
    location: 'Act 2',
    type: 'Secondary Quest',
    level: '0',
    desc: "A Restless Ghost is an optional quest in Chapter II which Geralt can take if he speaks with a widow outside the Vizima cemetery."
},{
    id: 39, 
    name: "Finders Keepers",
    location: 'Act 2',
    type: 'Secondary Quest',
    level: '0',
    desc: "Finders Keepers is an optional quest which is given to Geralt by a shady character known as the 'con artist' who hangs out near the entrance to the sewers in the Temple Quarter in the mornings."
},{
    id: 40, 
    name: "Flowers and Gold",
    location: 'Act 2',
    type: 'Secondary Quest',
    level: '0',
    desc: "Flowers and Gold is an optional quest in Chapter II which Geralt can obtain by speaking either with the ferryman or Yaren Bolt, a woodcutter."
},{
    id: 41, 
    name: "Force Recon",
    location: 'Act 2',
    type: 'Secondary Quest',
    level: '0',
    desc: "Force Recon is a Chapter II quest which culminates in a battle (at the Golem burial ground) between Scoia'tael and Flaming Rose forces. Each side wants the other exterminated and Geralt must decide if and with who he wants to get involved."
},{
    id: 42, 
    name: "Memory of a Blade",
    location: 'Act 2',
    type: 'Secondary Quest',
    level: '0',
    desc: "Memory of a Blade is a quest in Chapter II which basically begins when Geralt, to win his freedom from the dungeon, agrees to kill the cockatrice in the sewers. When he was thrown in jail, his possessions were confiscated by the City Guard, so he must be given a weapon to accomplish the task. Jethro gives our hero an alleged witcher's silver sword."
},{
    id: 43, 
    name: "Old Friend of Mine",
    location: 'Act 2',
    type: 'Secondary Quest',
    level: '0',
    desc: "Old Friend of Mine is a quest which begins after Geralt has won his freedom from prison and begun checking out the Temple Quarter in Chapter II. He finds Shani, whom he rescued from the Outskirts Inn in Chapter I... and so begins the quest."
},{
    id: 44, 
    name: "Safe Haven",
    location: 'Act 2',
    type: 'Secondary Quest',
    level: '0',
    desc: "Safe Haven is a quest in Chapter II which Geralt hears about from Zoltan Chivay. He only gets the details from Leuvaarden, the person actually in need of his services."
},{
    id: 45, 
    name: "Suspect: Kalkstein",
    location: 'Act 2',
    type: 'Secondary Quest',
    level: '0',
    desc: "Suspect: Kalkstein is a sub-quest of Vizima Confidential in Chapter II. It is part of Geralt's investigation into Salamandra."
},{
    id: 46, 
    name: "Suspect: Leuvaarden",
    location: 'Act 2',
    type: 'Secondary Quest',
    level: '0',
    desc: "Suspect: Leuvaarden is a sub-quest of Vizima Confidential in Chapter II. It is part of Geralt's investigation into Salamandra."
},{
    id: 47, 
    name: "Suspect: Ramsmeat",
    location: 'Act 2',
    type: 'Secondary Quest',
    level: '0',
    desc: "Suspect: Ramsmeat is a sub-quest of Vizima Confidential in Chapter II. It is part of Geralt's investigation into Salamandra."
},{
    id: 48, 
    name: "Suspect: Thaler",
    location: 'Act 2',
    type: 'Secondary Quest',
    level: '0',
    desc: "Suspect: Thaler is a sub-quest of Vizima Confidential in Chapter II. It is part of Geralt's investigation into Salamandra."
},{
    id: 49, 
    name: "Suspect: Vincent Meis",
    location: 'Act 2',
    type: 'Secondary Quest',
    level: '0',
    desc: "Suspect: Vincent Meis is a sub-quest of Vizima Confidential in Chapter II. It is part of Geralt's investigation into Salamandra."
},{
    id: 50, 
    name: "Suspect: Vivaldi",
    location: 'Act 2',
    type: 'Secondary Quest',
    level: '0',
    desc: "Suspect: Vivaldi is a sub-quest of Vizima Confidential in Chapter II. It is part of Geralt's investigation into Salamandra."
},{
    id: 51, 
    name: "The Cannibal",
    location: 'Act 2',
    type: 'Secondary Quest',
    level: '0',
    desc: "The Cannibal is an optional quest in Chapter II which begins when Geralt finds half-eaten human remains in a hut in the Swamp."
},{
    id: 52, 
    name: "The Rat",
    location: 'Act 2',
    type: 'Secondary Quest',
    level: '0',
    desc: "The Rat is an optional quest in Chapter II which Geralt can undertake for Coleman. It involves clearing some ghosts out of a house for the dealer."
},{
    id: 53, 
    name: "What Lies Beneath",
    location: 'Act 2',
    type: 'Secondary Quest',
    level: '0',
    desc: "After listening to the local private investigator, Raymond Maarloeve, our hero continues his investigation into the organization of Salamandra. As Geralt pokes around the Temple Quarter for evidence and interviews the suspects, one thing becomes clear: This investigation is not as straightforward as Raymond might wish. The witcher then figured that he should do some looking around of his own, in addition to the leads given to him. That is when this quest kicks in."
},{
    id: 54, 
    name: "Wanted (Part 2)",
    location: 'Act 2',
    type: 'Secondary Quest',
    level: '0',
    desc: "This Quest continues to act 3"
},{
    id: 55, 
    name: "Hot Potato (Part 2)",
    location: 'Act 2',
    type: 'Secondary Quest',
    level: '0',
    desc: "Coleman can initially be found in the back room at The Hairy Bear, usually in the company of Ramsmeat."
},{
    id: 56, 
    name: "Working Girls",
    location: 'Act 2',
    type: 'Secondary Quest',
    level: '0',
    desc: "As Geralt is strolling through the slums of the Temple Quarter, familiarizing himself with the area, he meets Carmen, the local madam, standing outside the Eager Thighs brothel across from The Hairy Bear."
},{
    id: 57, 
    name: "Worth its Weight in Gold",
    location: 'Act 2',
    type: 'Secondary Quest',
    level: '0',
    desc: "Worth its Weight in Gold is an optional quest in Chapter II which begins when Geralt meets Yaevinn in the Druids' grove and asks him about witcher's work. The elf asks the witcher to deliver a letter to Golan Vivaldi, the dwarf banker in Vizima."
},{
    id: 58, 
    name: "The Cultists' Crypt",
    location: 'Act 2',
    type: 'Secondary Quest',
    level: '0',
    desc: "It may take place either in Chapters II or III when Geralt finds the Letter for Knight Eric and the Lionhead Spider crypt key on a dead knight in the Sewers under the Temple Quarter."
},{
    id: 59, 
    name: "Bloodthirsty Vegetation",
    location: 'Act 2',
    type: 'Monster Hunt',
    level: '0',
    desc: "Bloodthirsty Vegetation is one of nine optional trophy quests. This quest is obtained killing the coccacidium, a vicious archespore that Vincent Meis is offering a reward for."
},{
    id: 60, 
    name: "The Beast of the Sewers",
    location: 'Act 2',
    type: 'Monster Hunt',
    level: '0',
    desc: "The Beast of the Sewers is one of The Witcher's ten trophy quests - the third available, and the only one which is automatically initiated in the course of the main plot."
},{
    id: 61, 
    name: "The Alghoul Contract",
    location: 'Act 2',
    type: 'Monster Hunt',
    level: '0',
    desc: "Notice Board"
},{
    id: 62, 
    name: "The Echinops Contract",
    location: 'Act 2',
    type: 'Monster Hunt',
    level: '0',
    desc: "Notice Board"
},{
    id: 63, 
    name: "The Dogcatcher of Vizima",
    location: 'Act 2',
    type: 'Monster Hunt',
    level: '0',
    desc: "Notice Board"
},{
    id: 64, 
    name: "The Drowned Dead Contract",
    location: 'Act 2',
    type: 'Monster Hunt',
    level: '0',
    desc: "Notice Board"
},{
    id: 65, 
    name: "The Wolf Contract",
    location: 'Act 2',
    type: 'Monster Hunt',
    level: '0',
    desc: "Notice Board"
},]
const quests = [...prologue, ...actOne, ...actTwo];


export default quests;