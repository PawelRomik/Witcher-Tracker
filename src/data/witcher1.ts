
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
        name: 'Witchers Secrets',
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

const actOne = [{
    id: 5, 
    name: "Of Monsters and Men",
    location: 'Act 1',
    type: 'Main Quest',
    level: '0',
    desc: "First Act 1 Main Quest"
},{
    id: 6, 
    name: "The Salamander's Tail",
    location: 'Act 1',
    type: 'Main Quest',
    level: '0',
    desc: "It begins with Geralt learning of Salamandra's presence in the outskirts and about the Reverend from Shani after the opening barghest attack on Alvin and Caroline."
},{
    id: 7, 
    name: "Strangers in the Night",
    location: 'Act 1',
    type: 'Main Quest',
    level: '0',
    desc: "After Of Monsters and Men"
},{
    id: 8, 
    name: "Buried Memories",
    location: 'Act 1',
    type: 'Main Quest',
    level: '0',
    desc: "After Of Monsters and Men"
},{
    id: 9, 
    name: "The Secret Garden",
    location: 'Act 1',
    type: 'Main Quest',
    level: '0',
    desc: "After Of Monsters and Men"
},{
    id: 10, 
    name: "A Game of Dice (Act 1)",
    location: 'Act 1',
    type: 'Secondary Quest',
    level: '0',
    desc: "Players: Zoltan, Mikul, Odo and Haren Brogg"
},{
    id: 11, 
    name: "Dead Hand of the Past",
    location: 'Act 1',
    type: 'Secondary Quest',
    level: '0',
    desc: "It's given by Declan Leuvaarden."
},{
    id: 12, 
    name: "Hot Potato (Part 1)",
    location: 'Act 1',
    type: 'Secondary Quest',
    level: '0',
    desc: "After Strangers in the Night"
},{
    id: 13, 
    name: "Racists",
    location: 'Act 1',
    type: 'Secondary Quest',
    level: '0',
    desc: "As Geralt makes his way through the Outskirts, he comes upon a dwarf who is surrounded by thugs intent on shaving off his beard in the fishing village."
},{
    id: 14, 
    name: "She's No Early Bird",
    location: 'Act 1',
    type: 'Secondary Quest',
    level: '0',
    desc: "Vesna remains at the inn until after Geralt speaks to her. Then she will leave every evening at 20:00, and can be found in danger as early as about 20:15. If Geralt leaves the inn and heads north at this time, he will see a group of men threatening to rape her. If he approaches, he must decide whether or not to help her."
},{
    id: 15, 
    name: "Wanted (Part 1)",
    location: 'Act 1',
    type: 'Secondary Quest',
    level: '0',
    desc: "The quest begins when Geralt finds an arrest warrant for the Professor on the Notice board outside the Outskirts Inn."
},{
    id: 16, 
    name: "The Monster of the Lake",
    location: 'Act 1',
    type: 'Monster Hunt',
    level: '0',
    desc: "Nadir, a drowned dead can be found just east of the mill near the Miller's Gate, but remember that these drowners only come out at night."
},{
    id: 17, 
    name: "King of the Crypt",
    location: 'Act 1',
    type: 'Monster Hunt',
    level: '0',
    desc: "After he finishes the quest to earn Mikul's trust, Geralt remembers that the Royal huntsman had mentioned a particularly nasty creature in the crypt. Strange, a few ghouls are not that nasty. So he decides to pay a second visit to the crypt."
},{
    id: 18, 
    name: "The Barghest Contract",
    location: 'Act 1',
    type: 'Monster Hunt',
    level: '0',
    desc: "Notice board"
},{
    id: 19, 
    name: "The Drowner Contract",
    location: 'Act 1',
    type: 'Monster Hunt',
    level: '0',
    desc: "Notice board"
},{
    id: 20, 
    name: "The Ghoul Contract",
    location: 'Act 1',
    type: 'Monster Hunt',
    level: '0',
    desc: "Notice board"
},]

const quests = [...prologue, ...actOne];


export default quests;