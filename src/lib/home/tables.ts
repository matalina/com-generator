import { DiceRoll } from "@dice-roller/rpg-dice-roller";
import { rollOnTable, type RandomTable } from "../tables";

export const shiftTable: RandomTable = {
  name: 'Shift Table',
  description: 'Random determination of a shift',
  diceFormula: '1d8',
  table: [
    { min: 1, max: 1, description: 'Purple (high magic/high tech)' },
    { min: 2, max: 2, description: 'Magenta (high magic/no tech)' },
    { min: 3, max: 3, description: 'Red (high magic, low tech)' },
    { min: 4, max: 4, description: 'Orange (no magic, low tech)' },
    { min: 5, max: 5, description: 'Yellow (low magic, low tech)' },
    { min: 6, max: 6, description: 'Green (no magic, no tech)' },
    { min: 7, max: 7, description: 'Cyan (low magic, high tech)' },
    { min: 8, max: 8, description: 'Blue (no magic, high tech)' },
  ]
}

export const manifestationCount: RandomTable = {
  name: 'Manifestation Count',
  description: 'Random occurrences for manifestations upon each drift.',
  diceFormula: '1d20',
  table: [
    { min: 1, max: 1, description: 'manifestation every hour' },
    { min: 2, max: 12, description: '1 manifestation/day' },
    { min: 13, max: 15, description: '2 per day' },
    { min: 16, max: 18, description: '3 per day' },
    { min: 19, max: 19, description: ' 1 manifestation entire stay' },
    { min: 20, max: 20, description: 'No manifestations' },
  ]
};

export const ascendantSpecies: RandomTable = {
  name: 'Ascendant Species',
  description: 'A random species from the Ascendant',
  diceFormula: '1d20',
  table: [
    { min: 1, max: 1, description: 'Bitten Therian' },
    { min: 2, max: 2, description: 'Dragon' },
    { min: 3, max: 3, description: 'Embraced Vampire' },
    { min: 4, max: 13, description: 'Human' },
    { min: 14, max: 14, description: 'Minorem' },
    { min: 15, max: 15, description: 'Netherborn' },
    { min: 16, max: 16, description: 'Path' },
    { min: 17, max: 17, description: 'Primeval Vampire' },
    { min: 18, max: 18, description: 'Sussuri Witch' },
    { min: 19, max: 19, description: 'Therianborn' },
    { min: 20, max: 20, description: 'Venatori' },
  ]
};

export const bloodlines: RandomTable = {
  name: 'Bloodlines',
  description: 'Random Bloodlines',
  diceFormula: '1d6',
  table: [
    { min: 1, max: 1, description: 'Animal Ken' },
    { min: 2, max: 2, description: 'Domination' },
    { min: 3, max: 3, description: 'Fear' },
    { min: 4, max: 4, description: 'Lust/Desire' },
    { min: 5, max: 5, description: 'Shadow' },
    { min: 6, max: 6, description: 'Reroll' },
  ]
};

export const elemental: RandomTable = {
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

export const chaosAura: RandomTable = {
  name: 'Chaos Aura',
  description: 'A random effect for the Chaos Aura',
  diceFormula: '1d20',
  table: [
    { min: 1, max: 1, description: elementalDamage() },
    { min: 2, max: 2, description: 'all actions are hindered for one minute' },
    { min: 3, max: 3, description: 'Random Fire Ignites Nearby' },
    { min: 4, max: 4, description: 'Objects Around You Levitate Briefly' },
    { min: 5, max: 5, description: 'All Water Within 30ft Turns to Ice' },
    { min: 6, max: 6, description: 'A Patch of Wildflowers Bloom Instantly' },
    { min: 7, max: 7, description: 'Thunderous Roar Shakes the Ground' },
    { min: 8, max: 8, description: 'Creepy Dissonant Whispers emanate from everywhere' },
    { min: 9, max: 9, description: 'A Small Earthquake Rumbles Underfoot' },
    { min: 10, max: 10, description: 'A Gentle Breeze Fills the Air' },
    { min: 11, max: 11, description: 'A Bright Light Bathes the Area in Radiance' },
    { min: 12, max: 12, description: 'A Rain of Glitter Descends' },
    { min: 13, max: 13, description: 'Nearby Shadows Seem to Dance and Flicker' },
    { min: 14, max: 14, description: 'An Unusual Animal Appears and Observes You' },
    { min: 15, max: 15, description: 'A Mysterious Mist Envelops the Area' },
    { min: 16, max: 18, description: 'Nothing Happens' },
    { min: 19, max: 19, description: 'Anyone within an short distance makes a free recovery roll' },
    { min: 20, max: 20, description: 'All Cyphers in an immediate distance randomly change' },
  ]
};

function elementalDamage() {
  return `${new DiceRoll('1d6').total} of ${rollOnTable(elemental).description} damage to anyone in a short distance`;
}

export const negativeEffect: RandomTable = {
  name: 'Chaos Aura (Negative Effect)',
  description: 'A random negative effect for the Chaos Aura',
  diceFormula: '1d20',
  table: [
    { min: 1, max: 2, description: `${new DiceRoll('1d6').total} of fire damage to anyone in a short distance including yourself` },
    { min: 3, max: 4, description: `${new DiceRoll('1d6').total} of ice damage to anyone in a short distance including yourself` },
    { min: 5, max:6, description: `${new DiceRoll('1d6').total} of bludgeoning damage to anyone in a short distance including yourself` },
    { min: 7, max: 8, description: `A force pushes anyone with in an immediate distance from you away a short distance dealing ${new DiceRoll('1d4').total} damage` },
    { min: 9, max: 10, description: 'A pool of grease forms beneath you, all movement is hindered within a short distance of you' },
    { min: 11, max: 12, description: 'All attacks against you are eased for the next minute' },
    { min: 13, max: 14, description: 'You turn into a potted plant until the start of your next turn. While a plant you are incapacitated and +2 extra damage on successful attacks. If you move down the damage track while a plant your pot breaks and you revert to your former self.' },
    { min: 15, max: 16, description: 'You radiate darkness up to a short distance. All tasks involved sight or seeing through the darkness is hindered by 2 steps' },
    { min: 17, max: 18, description: 'You are moved down the damage track one step' },
    { min: 19, max: 19, description: 'All cyphers in an immediate range randomly change' },
    { min: 20, max: 20, description: 'All actions are hindered for one minute for everyone in a short distance of you' },
  ]
};

export const benignEffect: RandomTable = {
  name: 'Chaos Aura (Benign Effect)',
  description: 'A random benign effect for the Chaos Aura',
  diceFormula: '1d20',
  table: [
    { min: 1, max: 1, description: `Random Fire Ignites Nearby` },
    { min: 2, max: 2, description: `An Unusual Animal Appears and Observes You` },
    { min: 3, max: 4, description: `Objects Around You Levitate Briefly` },
    { min: 5, max: 6, description: `All Water Within 30ft Turns to Ice ` },
    { min: 7, max: 8, description: 'A Patch of Wildflowers Bloom Instantly' },
    { min: 9, max: 9, description: 'Thunderous Roar Shakes the Ground' },
    { min: 10, max: 10, description: 'A Mysterious Mist Envelops the Area' },
    { min: 11, max: 12, description: 'Creepy Dissonant Whispers emanate from everywhere' },
    { min: 13, max: 14, description: 'A Small Earthquake Rumbles Underfoot' },
    { min: 15, max: 16, description: 'A Gentle Breeze Fills the Air' },
    { min: 17, max: 18, description: 'A Bright Light Bathes the Area in Radiance ' },
    { min: 19, max: 19, description: 'A Rain of Glitter Descends' },
    { min: 20, max: 20, description: 'Nearby Shadows Seem to Dance and Flicker' },
  ]
};

export const positiveEffect: RandomTable = {
  name: 'Chaos Aura (Positive Effect)',
  description: 'A random positive effect for the Chaos Aura',
  diceFormula: '1d20',
  table: [
    { min: 1, max: 2, description: `All Cyphers in an immediate distance randomly change` },
    { min: 3, max: 4, description: `All tasks involving seeing unseen things is eased for 1 minute` },
    { min: 5, max: 6, description: `All your attacks add +1 extra damage for 1 minute ` },
    { min: 7, max: 8, description: 'You teleport up to a long distance away that you can see' },
    { min: 9, max: 10, description: 'Any empty cypher slot fill with a random cypher' },
    { min: 11, max: 12, description: 'All your actions are eased by one step for 1 minute ' },
    { min: 13, max: 14, description: 'You become invisible for the next minute' },
    { min: 15, max: 16, description: 'All defense tasks are eased by 1 for 1 minute' },
    { min: 17, max: 18, description: 'You may take an additional action this turn' },
    { min: 19, max: 20, description: 'Anyone within an short distance makes a free recovery roll' },
  ]
};

export const chaosEffect: RandomTable = {
  name: 'Chaos Aura',
  description: 'A random effect for the Chaos Aura Effect',
  diceFormula: '1d20',
  table: [
    { min: 1, max: 4, description: `Negative Effect: ${rollOnTable(negativeEffect).description}` },
    { min: 5, max: 7, description: `Benign Effect: ${rollOnTable(benignEffect).description}` },
    { min: 8, max: 8, description: 'Tattoo grows more elaborate (if detail reaches a multiple of 5 it grows in size)' },
    { min: 9, max: 12, description: 'No Effect' },
    { min: 13, max: 13, description: 'Tattoo gets brighter' },
    { min: 14, max: 16, description: `Benign Effect: ${rollOnTable(benignEffect).description}` },
    { min: 17, max: 20, description: `Positive Effect: ${rollOnTable(positiveEffect).description}` },
  ]
};

function rollContested() {
  const everlightFaction: RandomTable = {
    name: 'Faction',
    description: 'A random faction for Everlight',
    diceFormula: '1d6',
    table: [
      { min: 1, max: 1, description: 'Crimson Scales Cartel' },
      { min: 2, max: 2, description: 'Interdimensional Reality Entertainment Corporation' },
      { min: 3, max: 3, description: 'Nexus Innovation' },
      { min: 4, max: 4, description: 'Spell Forge Dynamics' },
      { min: 5, max: 5, description: 'The Church of Technomancy' },
      { min: 6, max: 6, description: 'New Emergent Faction' },
    ]
  };

  const rolls = [];
  rolls.push(rollOnTable(everlightFaction).description);
  let second = rollOnTable(everlightFaction).description;
  while(rolls.includes(second)) {
    second = rollOnTable(everlightFaction).description;
  }
  rolls.push(second);
  return rolls.join(', ');
}

export const faction: RandomTable = {
  name: 'Faction',
  description: 'A random faction for Everlight',
  diceFormula: '1d20',
  table: [
    { min: 1, max: 2, description: 'Rival Faction' },
    { min: 3, max: 9, description: 'Previous Faction' },
    { min: 10, max: 10, description: 'Crimson Scales Cartel (1)' },
    { min: 11, max: 11, description: 'Interdimensional Reality Entertainment Corporation (2)' },
    { min: 12, max: 12, description: 'Nexus Innovation (3)' },
    { min: 13, max: 13, description: 'Spell Forge Dynamics (4)' },
    { min: 14, max: 14, description: 'The Church of Technomancy (5)' },
    { min: 15, max: 17, description: 'Neutral' },
    { min: 18, max: 19, description: `Contested: ${rollContested()}` },
    { min: 20, max: 20, description: `New Emergent Faction` },
  ]
};

export const district: RandomTable = {
  name: 'District',
  description: 'A random district for Everlight',
  diceFormula: '1d20',
  table: [
    { min: 1, max: 5, description: 'Previous Tile (unless previous tile was Special then reroll)' },
    { min: 6, max: 7, description: 'Business' },
    { min: 8, max: 12, description: 'Residential' },
    { min: 13, max: 14, description: 'Commercial' },
    { min: 15, max: 16, description: 'Entertainment' },
    { min: 17, max: 18, description: 'Government' },
    { min: 19, max: 20, description: 'Special' },
  ]
};

export const factionType: RandomTable = {
  name: 'Faction Type',
  description: 'A random faction type for Everlight',
  diceFormula: '1d10',
  table: [
    { min: 1, max: 1, description: 'A neighborhood association' },
    { min: 2, max: 2, description: 'A religious faction' },
    { min: 3, max: 3, description: 'A political faction' },
    { min: 4, max: 4, description: 'A guild' },
    { min: 5, max: 5, description: 'A criminal faction' },
    { min: 6, max: 6, description: 'A magical faction' },
    { min: 7, max: 7, description: 'A species/race faction' },
    { min: 8, max: 8, description: 'A secret society' },
    { min: 9, max: 9, description: 'A military faction' },
    { min: 10, max: 10, description: 'A science/technology faction' }
  ]
};

export const hexDetail: RandomTable = {
  name: 'Hex Detail',
  description: 'A random hex detail for Everlight',
  diceFormula: '1d100',
  table: [
    { min: 1, max: 2, description: 'faction head quarters', },
    { min: 3, max: 4, description: 'religious', },
    { min: 5, max: 8, description: 'shop', },
    { min: 8, max: 9, description: 'theater/cinema', },
    { min: 10, max: 15, description: 'restaurant', },
    { min: 16, max: 17, description: 'financial', },
    { min: 18, max: 19, description: 'government building', },
    { min: 20, max: 24, description: 'hotel', },
    { min: 25, max: 27, description: 'academic', },
    { min: 28, max: 32, description: 'markets', },
    { min: 33, max: 34, description: 'medical', },
    { min: 35, max: 39, description: 'park', },
    { min: 40, max: 49, description: 'suburbs', },
    { min: 50, max: 53, description: 'apartments', },
    { min: 54, max: 54, description: 'mansion', },
    { min: 55, max: 62, description: 'trailer park', },
    { min: 63, max: 66, description: 'transportation', },
    { min: 67, max: 68, description: 'utilities', },
    { min: 69, max: 70, description: 'fitness', },
    { min: 71, max: 72, description: 'arts', },
    { min: 73, max: 75, description: 'office building', },
    { min: 76, max: 77, description: 'fire station', },
    { min: 78, max: 79, description: 'police station', },
    { min: 80, max: 88, description: 'gas station/convenience store', },
    { min: 88, max: 89, description: 'industrial/factory', },
    { min: 90, max: 94, description: 'bar/nightclub', },
    { min: 95, max: 100, description: 'adult leisure', },
  ]
};

export const encounter: RandomTable = {
  name: 'Encounter',
  description: 'A random encounter for Everlight',
  diceFormula: '1d20',
  table: [
    { min: 1, max: 1, description: 'dungeon' },
    { min: 2, max: 2, description: 'monster lair' },
    { min: 3, max: 4, description: 'start a quest' },
    { min: 5, max: 9, description: 'meet an npc' },
    { min: 10, max: 14, description: 'add another detail' },
    { min: 15, max: 18, description: 'random event' },
    { min: 19, max: 19, description: 'nothing happens here' },
    { min: 20, max: 20, description: 'discover a secret (if no secret reroll)' },
  ]
};

export const compass: RandomTable = {
  name: 'Compass',
  description: 'A random compass reaction for Everlight',
  diceFormula: '1d10',
  table: [
    { min: 1, max: 1, description: '1' },
    { min: 2, max: 2, description: '2' },
    { min: 3, max: 3, description: '3' },
    { min: 4, max: 4, description: '4' },
    { min: 5, max: 5, description: '5' },
    { min: 6, max: 6, description: '6' },
    { min: 7, max: 8, description: `You lost concentration, try again in ${new DiceRoll('1d6').total} turns` },
    { min: 9, max: 10, description: 'The destination is on this tile' },
  ]
};
