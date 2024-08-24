import { DiceRoll } from '@dice-roller/rpg-dice-roller';
import { rollOnTable } from '../tables';
import type { RandomTable } from '../tables';

export const fantasticCyphers = [
  {
    name: 'Age taker',
    type: 'fantastic',
    level: '1d6+4',
    effect: `Begins a process of rejuvenation that removes years from the wearer's physiological age. Over the course of the next seven days, the wearer sheds a number of years equal to three times the cypher's level. The cypher doesn't regress physiological age past the age of twenty-three. (384)`,
  },
  {
    name: 'Banishing',
    type: 'fantastic',
    level: '1d6',
    effect: `For the next day, each time the user strikes a solid creature or object, it generates a burst of energy that teleports the creature or object an immediate distance in a random direction (not up or down). The teleported creature's actions (including defense) are hindered on its next turn (hindered by two steps if the cypher level is 5 or higher). (384)`,
  },
  {
    name: 'Blinking',
    type: 'fantastic',
    level: '1d6',
    effect: `For the next day, each time the user is struck hard enough to take damage (but not more than once per round), they teleport an immediate distance in a random direction (not up or down). Since the user is prepared for this effect and their foe is not, the user's defenses are eased for one round after they teleport. (385)`,
  },
  {
    name: 'Chemical Factor',
    type: 'fantastic',
    level: '1d6',
    effect: `After one hour, the sweat of the user produces ${new DiceRoll('1d6').total} doses of a valuable liquid, ${chemicalFactory()}, (these doses are not considered cyphers). They must be used within one week. (385)`,
  },
];



/*
{
    name: '',
    type: 'fantastic',
    level: '1d6',
    effect: ``,
  },
*/

function chemicalFactory() {
  const table: RandomTable = {
    name: 'Random Cypher Table',
    description: 'Random cypher table',
    diceFormula: '1d100',
    table: [
      { min: 1, max: 4, description: `Euphoric for ${new DiceRoll('1d6').total} hours` },
      { min: 5, max: 8, description: `Hallucinogenic for ${new DiceRoll('1d6').total} hours` },
      { min: 9, max: 12, description: `Stimulant for ${new DiceRoll('1d6').total} hours` },
      { min: 13, max: 16, description: `Depressant for ${new DiceRoll('1d6').total} hours` },
      { min: 17, max: 20, description: `Nutrient supplement` },
      { min: 21, max: 25, description: `Antivenom` },
      { min: 26, max: 30, description: `Cures disease` },
      { min: 31, max: 35, description: `See in the dark for one hour` },
      { min: 36, max: 45, description: `Restores a number of Might Pool points equal to cypher level` },
      { min: 46, max: 55, description: `Restores a number of Speed Pool points equal to cypher level` },
      { min: 56, max: 65, description: `Restores a number of Intellect Pool points equal to cypher level` },
      { min: 66, max: 75, description: `Increases Might Edge by 1 for one hour` },
      { min: 76, max: 85, description: `Increases Speed Edge by 1 for one hour` },
      { min: 86, max: 95, description: `Increases Intellect Edge by 1 for one hour` },
      { min: 96, max: 100, description: `Restores all Pools to full` },
    ],
  };

  return `${rollOnTable(table).description
    }`;
}