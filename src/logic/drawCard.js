// src/logic/drawCard.js

export function shuffleDeck(deck) {
  const shuffled = [...deck];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function drawCard(deck, discardPile) {
  if (deck.length === 0) {
    return {
      newDeck: shuffleDeck(discardPile),
      newDiscardPile: [],
      card: null,
    };
  }

  const [card, ...rest] = deck;
  return {
    card,
    newDeck: rest,
    newDiscardPile: [...discardPile, card],
  };
}
