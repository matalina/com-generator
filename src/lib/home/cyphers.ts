import { RandomTable, rollOnTable } from "../tables";

const elemental: RandomTable = {
  name: 'Elemental',
  description: 'A random element for elemental damage',
  diceFormula: '1d4',
  table: [
    { min: 1, max: 1, description: 'fire' },
    { min: 2, max: 2, description: 'earth' },
    { min: 3, max: 3, description: 'air' },
    { min: 4, max: 4, description: 'water' },
  ]
};

function elementalRoll() {
  return rollOnTable(elemental).description;
}

export const runeCyphers = [
  {
    name: 'Contain Magic',
    type: 'rune',
    level: '1d6',
    effect: `This rune contains magic with in the confines of its borders. The container can be a simple ring of Moonlit Ash, the walls of a room, or a person.  All walls, ceiling and floor must be runed in order for such a container to be formed`
  },
  {
    name: 'Fearless Heart',
    type: 'rune',
    level: '1d6',
    effect: `When active this rune grants an asset to initiative.`
  },
  {
    name: 'Perception',
    type: 'rune',
    level: '1d6',
    effect: `When active this rune grants an asset to seeing through to the occult.`
  },
  {
    name: 'Mind Shield',
    type: 'rune',
    level: '1d6',
    effect: `Shields the mind from mental intrusions. When active this rune grants an asset to intellect defense tasks. Mind Shield runes are given to all Venatori children when they are young.  Between the ages of birth and four.  This rune keeps a child safe from mental intrusions by others.  If a child is telepathic or has other mind altering abilities at birth, the child has it nearly immediately to save the parents from infantile manipulation and unaltering changes the child can make.  The mind shield rune is typically tattooed on the back between the shoulder blades along the spine.`
  },
  {
    name: 'TARDIS Rune',
    type: 'rune',
    level: '1d6',
    effect: `When activated the user can specify the size and shape of the container.  Once activated the container is the same after each activation. This rune is applied to container openings such as doors, lids, drawers, etc. and can change the shape and size of the inside, typically making the space larger. `
  },
  {
    name: 'Illuminate',
    type: 'rune',
    level: '1d6',
    effect: `When active this rune makes the object it is affixed to glow with bright light with in an immediate distance, and a dim light for a short distance.`
  },
  {
    name: 'Darkness',
    type: 'rune',
    level: '1d6',
    effect: `When active this rune emanates darkness over a short distance. The darkness spreads around corners. If the point you choose is on an object you are holding or one that isn't being worn or carried, the darkness emanates from the object and moves with it.`
  },
  {
    name: 'Levitate',
    type: 'rune',
    level: '1d6',
    effect: `When active this rune rises the object it is affixed to up to a short distance, and remains suspended there until deactivated. The rune can levitate a target that weighs up to [cypher level * 100] pounds. `
  },
  {
    name: 'Mending',
    type: 'rune',
    level: '1d10',
    effect: `This spell repairs a single break or tear in an object of level up to and including the cypher level. This rune can physically repair a magic item or construct, but the spell can't restore magic to such an object.`
  },
  {
    name: 'Disguise',
    type: 'rune',
    level: '1d6',
    effect: `When active the rune changes the appearance of the person or object --including clothing, armor, weapons, and other belongings on your person -- until deactivated.  The magical disguise can be perceived by another with an intellect roll greater than the cypher level.
    `
  },
  {
    name: 'Entangle',
    type: 'rune',
    level: '1d6',
    effect: `Grasping weeds and vines sprout from the ground in a short distance from the rune. While active these plants turn the ground in the area into difficult terrain. A creature in the area infected by the rune must succeed on a Might Defense Check against the level of the cypher`
  },
  {
    name: 'Feather Fall',
    type: 'rune',
    level: '1d6',
    effect: `A falling creature's rate of descent slows to 60 feet per round until the spell ends. If the creature lands before the spell ends, it takes no falling damage and can land on its feet, and the spell ends for that creature.`
  },
  {
    name: 'Arcane Lock',
    type: 'rune',
    level: '1d10',
    effect: `A closed door, window, gate, chest, or other entryway inscribed with t his run becomes locked while this rune is active. You and the creatures you designate  can open the object normally. You can also set a password that, when spoken within 5 feet of the object, suppresses this spell for 1 minute. Otherwise, it is impassable until it is deactivated or . While affected by this spell, the object is more difficult to break or force open;  The level of the object increases by the cypher level.`
  },
  {
    name: 'Knock',
    type: 'rune',
    level: '1d10',
    effect: `An object like a door, a box, a chest, a set of manacles, a padlock, or another object that contains a mundane or magical means that prevents access is inscribed with this rune it becomes passible. If you choose a target that is held shut with arcane lock, that rune is suppressed for 10 minutes, during which time the target can be opened and shut normally. When activated, a loud knock, audible from a long distance, emanates from the target object.`
  },
  {
    name: 'Calm Emotions',
    type: 'rune',
    level: '1d6',
    effect: `You attempt to suppress strong emotions of the inscribed person. The creature you choose within range must make an Intellect save against the level of the cypher. A creature can choose to fail this saving throw if it wishes.`
  },
  {
    name: 'Enlarge',
    type: 'rune',
    level: '1d6',
    effect: `The target's size doubles in all dimensions, and its weight is multiplied by eight. If there isn't enough room for the target to double its size, the creature or object attains the maximum possible size in the space available. Until the spell ends, the target is trained in all Might tasks. The target's weapons also grow to match its new size. While these weapons are enlarged, the target's attacks with them deal 2 extra damage.`
  },
  {
    name: 'Reduce',
    type: 'rune',
    level: '1d6',
    effect: `The target's size is halved in all dimensions, and its weight is reduced to one-eighth of normal. Until the spell ends, the target has is hindered in all Might tasks. The target's weapons also shrink to match its new size. While these weapons are reduced, the target's attacks with them deal 2 less damage (this can't reduce the damage below 1).`
  },
  {
    name: 'Invisibility',
    type: 'rune',
    level: '1d6',
    effect: `A creature you touch becomes invisible until the spell ends. Anything the target is wearing or carrying is invisible as long as it is on the target's person. The spell ends for a target that attacks or casts a spell.`
  },
  {
    name: 'Pass Without a Trace (Venatori Rune)',
    type: 'rune',
    level: '1d6',
    effect: `A veil of shadows and silence radiates from you, masking you and your companions from detection. For the duration, each creature you choose within a short distance is specialized in all stealth tasks. A creature that receives this bonus leaves behind no tracks or other traces of its passage.`
  },
  {
    name: 'Silence',
    type: 'rune',
    level: '1d6',
    effect: `For the duration, no sound can be created within or pass through a 20-foot-radius sphere centered on a point you choose within range. Any creature or object entirely inside the sphere is immune to thunder damage, and creatures are deafened while entirely inside it. `
  },
  {
    name: 'Spider Climb',
    type: 'rune',
    level: '1d6',
    effect: `Until the spell ends, one willing creature you touch gains the ability to move up, down, and across vertical surfaces and upside down along ceilings, while leaving its hands free. The target also gains a climbing speed equal to its walking speed.`
  },
  {
    name: 'Haste',
    type: 'rune',
    level: '1d6',
    effect: `Choose a willing creature that you can see within range. Until the spell ends, the target's speed is doubled, it gains a +2 bonus to armor, it is trained in all speed tasks, and it gains an additional action on each of its turns. That action can be used only to take the Attack (one weapon attack only), Dash, Disengage, Hide, or Use an Object action. When the spell ends, the target can't move or take actions until after its next turn, as a wave of lethargy sweeps over it.`
  },
  {
    name: 'Slow',
    type: 'rune',
    level: '1d6',
    effect: `You alter time around up to six creatures of your choice in a 40-foot cube within range. Each target must succeed on an Intellect Defense or be affected by this spell for the duration. An affected target's speed is halved, it armor is negated by 2 (but doesn't drop below zero), all defense is hindered, and it can't use reactions. On its turn, it can use either an action or move, not both. Regardless of the creature's abilities or magic items, it can't make more than one melee or ranged attack during its turn. If the creature attempts to cast a spell with a casting time of 1 action, roll a d20. On an 11 or higher, the spell doesn't take effect until the creature's next turn, and the creature must use its action on that turn to complete the spell. If it can't, the spell is wasted. A creature affected by this spell makes another Intellect defense at the end of each of its turns. On a successful save, the effect ends for it.`
  },
  {
    name: 'Speak with Dead',
    type: 'rune',
    level: '1d6',
    effect: `You grant the semblance of life and intelligence to a corpse of your choice within range, allowing it to answer the questions you pose. The corpse must still have a mouth and can't be undead. The spell fails if the corpse was the target of this spell within the last 10 days. Until the spell ends, you can ask the corpse up to five questions. The corpse knows only what it knew in life, including the languages it knew. Answers are usually brief, cryptic, or repetitive, and the corpse is under no compulsion to offer a truthful answer if you are hostile to it or it recognizes you as an enemy. This spell doesn't return the creature's soul to its body, only its animating spirit. Thus, the corpse can't learn new information, doesn't comprehend anything that has happened since it died, and can't speculate about future events.`
  },
  {
    name: 'Speak with Animals',
    type: 'rune',
    level: '1d6',
    effect: `You gain the ability to comprehend and verbally communicate with beasts for the duration. The knowledge and awareness of many beasts is limited by their intelligence, but at minimum, beasts can give you information about nearby locations and monsters, including whatever they can perceive or have perceived within the past day. You might be able to persuade a beast to perform a small favor for you, at the GM's discretion.`
  },
  {
    name: 'Speak with Plants',
    type: 'rune',
    level: '1d6',
    effect: `You imbue plants within a short distance with limited sentience and animation, giving them the ability to communicate with you and follow your simple commands. You can question plants about events in the spell’s area within the past day, gaining information about creatures that have passed, weather, and other circumstances. If a plant creature is in the area, you can communicate with it as if you shared a common language, but you gain no magical ability to influence it.`
  },
  {
    name: 'Tongues',
    type: 'rune',
    level: '1d6',
    effect: `This spell grants the creature you touch the ability to understand any spoken language it hears. Moreover, when the target speaks, any creature that knows at least one language and can hear the target understands what it says.`
  },
  {
    name: 'Elemental Whip',
    type: 'rune',
    level: '1d6',
    effect: `You create a long whip made up of a single element (${elementalRoll()}) that lashes out at a creature in short distance.  If the attack succeeds the creature takes 2 + the cyphers level in damage.  If the creature is large or  smaller you pull the creature to your immediate distance.`
  },
  {
    name: 'Elemental Orb',
    type: 'rune',
    level: '1d6',
    effect: `You hurl a 4-inch-diameter sphere of elemental (${elementalRoll()}) energy at a creature that you can see within a long distance. If the attack succeeds, the creature takes cypher level * 2 damage of the type you chose.`
  },
  {
    name: 'Elemental Arrows',
    type: 'rune',
    level: '1d6',
    effect: `You create an elemental arrows (${elementalRoll()}). and direct it at a creature of your choice that you can see within a short range. A arrow deals the cypher level elemental damage to its target.`
  },
  {
    name: 'Elemental Armor',
    type: 'rune',
    level: '1d6',
    effect: `A protective magical force surrounds you, manifesting as a spectral element (${elementalRoll()}) that covers you and your gear. You gain half the cypher level (rounded up) armor. If a creature hits you with a melee attack while active, the creature takes the cypher level of elemental damage.`
  },
  {
    name: 'Dragon\'s Breath',
    type: 'rune',
    level: '1d6',
    effect: `You touch one willing creature and imbue it with the power to hurl elemental energy (${elementalRoll()}) from its mouth. Until the spell ends, the creature can use an action to exhale energy in front of them in a short distance. If the attack succeeds the creature takes the cypher level of elemental damage chosen.`
  },
  {
    name: 'Elemental Weapon',
    type: 'rune',
    level: '1d6',
    effect: `You evoke an elemental (${elementalRoll()}) weapon in a free hand.  On a successful attack with this weapon you deal the cypher level elemental damage to the target.`
  },
  {
    name: 'Elemental Ray',
    type: 'rune',
    level: '1d6',
    effect: `You create a ray of elemental energy (${elementalRoll()}) and fire it at a target with in long range.  On a successful attack you deal the cypher level of elemental damage.`
  },
  {
    name: 'Create Element',
    type: 'rune',
    level: '1d6',
    effect: `Creates an element up to 5ft cubic space from nothing.  (${elementalRoll()})`
  },
  {
    name: 'Destroy Element',
    type: 'rune',
    level: '1d6',
    effect: `Destroy an element up to 5ft cubic space (${elementalRoll()})`
  },
  {
    name: 'Elemental Resistance',
    type: 'rune',
    level: '1d6',
    effect: `Gain 1 armor against an elemental damage (${elementalRoll()})`
  },
  {
    name: 'Elemental Wall',
    type: 'rune',
    level: '1d6',
    effect: `You create an elemental wall (${elementalRoll()}) on a solid surface with in a long distance that can be up to 60 feet long, 20 feet high and 1 foot thick, or ringed up to 20 feet in diameter, 20 feet high and 1 foot thick.  If a creature is successfully attacked the creature takes the cypher level of damage.  Upon creation of the wall choose a side which deals damage, a creature with in immediate distance when it enters the area for the first time or ends its turn there takes the cypher level of damage.  The other side of the wall deals no damage`
  },
  {
    name: 'Elemental Storm',
    type: 'rune',
    level: '1d6',
    effect: `You select a point with in long range to center the elemental storm (${elementalRoll()}), all creatures with in a short dance of the center take the cypher level damage per round in the storms area of effect.`
  },
  {
    name: 'Summon Minor Elemental',
    type: 'rune',
    level: '1d6',
    effect: `Summon the cypher level of minor Level 3 elementals (${elementalRoll()})  The summoned creatures are friendly to you and your companions. Roll initiative for the summoned creatures as a group, which has its own turns. They obey any verbal commands that you issue to them (no action required by you). If you don't issue any commands to them, they defend themselves from hostile creatures, but otherwise take no actions.`
  },
  {
    name: 'Summon Elemental',
    type: 'rune',
    level: '1d6',
    effect: `Summon a cypher level + 3 Level Elemental (${elementalRoll()}) to obey your command.  The elemental is friendly to you and your companions for the duration. Roll initiative for the elemental, which has its own turns. It obeys any verbal commands that you issue to it (no action required by you). If you don't issue any commands to the elemental, it defends itself from hostile creatures but otherwise takes no actions.`
  },
];
