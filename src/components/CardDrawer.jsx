// src/components/CardDrawer.jsx

import React from 'react';
import { resolveCardEffect } from '../logic/resolveCardEffect.js';
import { drawCard } from '../logic/drawCard.js';
import { handleMishepeshu } from '../logic/handleMishepeshu.js';

const CardDrawer = ({
  deck,
  setDeck,
  discardPile,
  setDiscardPile,
  drawnCard,
  setDrawnCard,
  turnLog,
  setTurnLog,
  morale,
  setMorale,
  progress,
  setProgress,
  copper,
  setCopper
}) => {
  const handleDraw = () => {
    const { card, newDeck, newDiscardPile } = drawCard(deck, discardPile);

    setDeck(newDeck);
    setDiscardPile(newDiscardPile);
    setDrawnCard(card);

    if (!card) {
      setTurnLog([...turnLog, 'Deck was empty. Reshuffled discard pile.']);
      return;
    }

    const newLog = [`You drew the ${card.value} of ${card.suit} (${card.type})`];
    const currentSeason = { suit: '♦' }; // Simulate Fall for now

    // If it's a task card (number card)
    if (card.type === 'task') {
      const result = resolveCardEffect(card, {
        morale,
        progress,
        season: currentSeason,
      });

      setMorale(result.morale);
      setProgress(result.progress);
      newLog.push(result.log);
    }

    // If it's Mishepeshu (Jack)
    if (card.type === 'Mishepeshu') {
      const result = handleMishepeshu({ copper, morale });

      setCopper(result.copper);
      setMorale(result.morale);
      newLog.push('The waters churn... Mishepeshu has appeared.');
      newLog.push(result.log);
    }

    setTurnLog([...turnLog, ...newLog]);
  };

  return (
    <div className="card-drawer">
      <button onClick={handleDraw}>Draw Card</button>
      {drawnCard && (
        <p>
          <strong>{drawnCard.value} of {drawnCard.suit}</strong> — {drawnCard.type}
        </p>
      )}
    </div>
  );
};

export default CardDrawer;
