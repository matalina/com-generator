export interface Card {
  number: string;
  suit: string;
  value: number;
}

export type Deck =  Card[];

function makeDeck(deck: Deck, suits: string[], face: string[], faceValue: number[]) {
  const cards = [...deck];
  for (let i in suits) {
    let suit = suits[i];
    for (let j = 2; j <= 10; j++) {
      cards.push({
        number: j.toString(),
        suit,
        value: j,
      });
    }
    for(let j in face) {
      let f = face[j];
      cards.push({
        number: f,
        suit,
        value: faceValue[j],
      });
    }
  }
  return cards;
}

const cards = []

cards.push({
  number: 'Joker',
  suit: 'Red',
  value: 0,
},{
  number: 'Joker',
  suit: 'Black',
  value: 0,
});

let suits =  ['Hearts','Clubs','Diamonds','Spades'];
let face = ['Jack','Queen','King','Ace'];
let faceValue = [11,12,13,1];

export const playingCards:Deck = makeDeck(cards, suits, face, faceValue);

export const arcana: Deck = [
  {number: '', suit: 'The Fool', value: 0},
  {number: '', suit: 'The Magician', value: 1},
  {number: '', suit: 'The High Priestess', value: 2},
  {number: '', suit: 'The Empress', value: 3},
  {number: '', suit: 'The Emperor', value: 4},
  {number: '', suit: 'The Hierophant', value: 5},
  {number: '', suit: 'The Lovers', value: 6},
  {number: '', suit: 'The Chariot', value: 7},
  {number: '', suit: 'The Strength', value: 8},
  {number: '', suit: 'The Hermit', value: 9},
  {number: '', suit: 'Wheel of Fortune', value: 10},
  {number: '', suit: 'Justice', value: 11},
  {number: '', suit: 'The Hanged Man', value: 12},
  {number: '', suit: 'Death', value: 13},
  {number: '', suit: 'The Tower', value: 16},
  {number: '', suit: 'The Star', value: 17},
  {number: '', suit: 'The Moon', value: 18},
  {number: '', suit: 'The Sun', value: 19},
  {number: '', suit: 'Judgement', value: 20},
  {number: '', suit: 'The World', value: 21},
];

suits =  ['Cups','Pentacles','Swords','Wands'];
face = ['Page','Queen','King','Ace'];
faceValue = [11,12,13,1];

export const majorArcana = shuffle(arcana);
export const tarotDeck = shuffle(makeDeck(arcana, suits, face, faceValue));

export function shuffle(deck: Deck) {
  let currentIndex = deck.length;
  let randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [deck[currentIndex], deck[randomIndex]] = [deck[randomIndex], deck[currentIndex]];
  }

  return deck;
}