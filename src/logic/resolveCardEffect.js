// src/logic/resolveCardEffect.js

export function resolveCardEffect(card, gameState) {
  const { season, morale, progress } = gameState;
  const suitMatch = card.suit === season.suit;

  let result = {
    morale,
    progress,
    log: '',
  };

  const numericValue = parseInt(card.value);
  if (isNaN(numericValue)) {
    result.log = `The ${card.value} of ${card.suit} is not a number card.`;
    return result;
  }

  if (suitMatch) {
    const gained = Math.floor(numericValue / 2) + 1; // boost progress slightly for a match
    result.progress += gained;
    result.morale += 1; // morale reward for aligned task
    result.log = `Task aligned with the season! You gained ${gained} progress and +1 morale.`;
  } else {
    result.morale = Math.max(result.morale - 1, 0);
    result.log = `Task mismatched the season. You lost 1 morale.`;
  }

  return result;
}
