import { DiceRoll } from "@dice-roller/rpg-dice-roller";
import { getRandomItem, getRandomItems } from "../random";
import { subtleCyphers } from "./subtle";
import { manifestCyphers } from "./manifest";
import { runeCyphers } from "../home/cyphers";

const allCyphers = [...subtleCyphers, ...manifestCyphers, ...runeCyphers];

export function getRandomCyphers(count = 3, type = 'all') {
  let cyphers;
  switch (type) {
    case 'subtle':
      cyphers = allCyphers;
      break;
    case 'manifest':
      cyphers = manifestCyphers;
      break;
    case 'rune':
      cyphers = runeCyphers;
      break;
    case 'all':
    default:
      cyphers = allCyphers;
      break;
  }
  return getRandomItems(cyphers, count);
}

export function getRandomCypher(type = 'all') {
  let cyphers;
  switch (type) {
    case 'subtle':
      cyphers = subtleCyphers;
      break;
    case 'manifest':
      cyphers = manifestCyphers;
      break;
    case 'rune':
      cyphers = runeCyphers;
      break;
    case 'all':
    default:
      cyphers = allCyphers;
      break;
  }
  return getRandomItem(cyphers);
}

interface Cypher {
  name: string;
  type: string;
  level: string;
  effect: string;
}

export function printCypher(cypher: Cypher): string {
  const level = new DiceRoll(cypher.level).total;
  return `<strong class="font-bold">L${level} ${cypher.name}:</strong> ${cypher.effect} <small class="text-slate-600 uppercase text-[.6rem]">(${cypher.type})</small>`;
}

export function getAndPrintRandomCyphers(type = 'all') {
  let roll = new DiceRoll('1d6');
  let cyphers = getRandomCyphers(roll.total, type);
  let output = `<strong>Find 1d6 Cyphers</strong><br/>`;
  output += `${roll.output}<br/>`;
  for (let i in cyphers) {
    output += `${printCypher(cyphers[i])}<br/>`;
  }
  return output;
}
