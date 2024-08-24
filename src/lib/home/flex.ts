import type { RandomTable } from "../tables";

export const flexWeather: RandomTable = {
  name: 'Weather',
  description: 'A random weather condition',
  diceFormula: '1d20',
  table: [
    { min: 1, max: 3, description: 'Incliement' },
    { min: 4, max: 19, description: 'Ordinary' },
    { min: 20, max: 20, description: 'Storm Brewing' },
  ]
};

export const flexTerrainTile: RandomTable = {
  name: 'New Tile Terrain',
  description: 'A random terrain for new tile',
  diceFormula: '1d6',
  table: [
    { min: 1, max: 4, description: 'Previous Tile' },
    { min: 5, max: 6, description: 'Roll a Random Terrain' },
  ]
};

export const flexPoI : RandomTable = {
  name: 'Random Point of Interest',
  description: 'A random point of interest',
  diceFormula: '1d20',
  table: [
    { min: 1, max: 3, description: 'Settlement (208)' },
    { min: 4, max: 5, description: 'Monstrous (214,342)' },
    { min: 6, max: 7, description: 'NPC (219)' },
    { min: 8, max: 9, description: 'Divine (224)' },
    { min: 10, max: 11, description: 'Military (230)' },
    { min: 12, max: 13, description: 'Factional (235)' },
    { min: 14, max: 15, description: 'Magical (240)' },
    { min: 16, max: 17, description: 'Geographical (245)' },
    { min: 18, max: 20, description: 'Adventury (249)' },
  ]
}

export const flexTerrain : RandomTable = {
  name: 'Random Terrain',
  description: 'A random terrain for new tile',
  diceFormula: '1d20',
  table: [
    { min: 1, max: 5, description: 'Plains' },
    { min: 6, max: 7, description: 'Coastal' },
    { min: 8, max: 8, description: 'Aquatic' },
    { min: 9, max: 10, description: 'Desert' },
    { min: 11, max: 13, description: 'Forest' },
    { min: 14, max: 16, description: 'Hills' },
    { min: 17, max: 17, description: 'Jungle' },
    { min: 18, max: 19, description: 'Mountains' },
    { min: 20, max: 20, description: 'Swamp' },
  ]
}
