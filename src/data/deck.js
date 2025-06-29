// src/data/deck.js

// Generate a standard 54-card deck with custom card types

const suits = ['spades', 'hearts', 'diamonds', 'clubs'];

const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10'];

// Generate number cards (tasks)
const numberCards = suits.flatMap(suit =>
  values.map(value => ({
    value,
    suit,
    type: 'task'
  }))
);

// Face cards with lore-based types
const faceCards = [
  { value: 'J', type: 'Mishepeshu' },
  { value: 'Q', type: 'Medicine Keeper' },
  { value: 'K', type: 'Thunderer' },
  { value: 'A', type: 'Elder' }
];

const faceCardsFull = suits.flatMap(suit =>
  faceCards.map(({ value, type }) => ({
    value,
    suit,
    type
  }))
);

// Jokers as Nanabozho
const jokers = [
  { value: 'Joker', suit: 'Red', type: 'Nanabozho' },
  { value: 'Joker', suit: 'Black', type: 'Nanabozho' }
];

// Final full deck
const fullDeck = [...numberCards, ...faceCardsFull, ...jokers];

export default fullDeck;
