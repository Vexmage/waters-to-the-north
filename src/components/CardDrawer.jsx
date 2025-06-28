// src/components/CardDrawer.jsx

import React from 'react';
import { resolveCardEffect } from '../logic/resolveCardEffect.js';
import { drawCard } from '../logic/drawCard.js';
import { handleMishepeshu } from '../logic/handleMishepeshu.js';
import { handleMedicineKeeper } from '../logic/handleMedicineKeeper.js';
import { handleThunderer } from '../logic/handleThunderer.js';
import { handleNanabozho } from '../logic/handleNanabozho.js';


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
  setCopper,
  shield,
  setShield
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

if (morale > result.morale && shield) {
  result.log += ' But the Thunderer’s shield protects you!';
  result.morale = morale;
  setShield(false);
  newLog.push('The Thunderer’s shield has been consumed.');
}

setMorale(result.morale);
setProgress(result.progress);
newLog.push(result.log);

    }

    // If it's Mishepeshu (Jack)
    if (card.type === 'Mishepeshu') {
      const result = handleMishepeshu({ copper, morale });

if (morale > result.morale && shield) {
  result.log += ' But the Thunderer’s shield protects you!';
  result.morale = morale;
  setShield(false);
  newLog.push('The Thunderer’s shield has been consumed.');
}

setCopper(result.copper);
setMorale(result.morale);
newLog.push('The waters churn... Mishepeshu has appeared.');
newLog.push(result.log);

    }

    // If it's Medicine Keeper (Queen)
    if (card.type === 'Medicine Keeper') {
    const result = handleMedicineKeeper({ morale, copper });

    setMorale(result.morale);
    setCopper(result.copper);
    newLog.push('The Medicine Keeper appears.');
    newLog.push(result.log);
    }

    // If it's the Thunderer (King)
    if (card.type === 'Thunderer') {
    const result = handleThunderer();
    setShield(result.shield);
    newLog.push(result.log);
    }

    // If it's Nanabozho (Joker)
    if (card.type === 'Nanabozho') {
    const result = handleNanabozho({ copper, morale, progress, people });

    if (result.reshuffle) {
        setDeck([...deck, ...discardPile]);
        setDiscardPile([]);
    }

    setCopper(result.copper);
    setMorale(result.morale);
    setProgress(result.progress);
    setPeople(result.people);
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
