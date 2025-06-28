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
  people,
  setPeople,
  shield,
  setShield,
  turnsLeft,
  setTurnsLeft,
  gameOver,
  setGameOver,
  setGameWon,
}) => {

  const handleDraw = () => {
    if (gameOver) return; // prevent drawing if game has ended

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

    let newMorale = morale;
    let newProgress = progress;
    let newCopper = copper;
    let newPeople = people;

    if (card.type === 'task') {
      const result = resolveCardEffect(card, { morale, progress, season: currentSeason });

      if (morale > result.morale && shield) {
        result.log += ' But the Thunderer’s shield protects you!';
        result.morale = morale;
        setShield(false);
        newLog.push('The Thunderer’s shield has been consumed.');
      }

      newMorale = result.morale;
      newProgress = result.progress;
      setMorale(newMorale);
      setProgress(newProgress);
      newLog.push(result.log);
    }

    if (card.type === 'Mishepeshu') {
      const result = handleMishepeshu({ copper, morale });

      if (morale > result.morale && shield) {
        result.log += ' But the Thunderer’s shield protects you!';
        result.morale = morale;
        setShield(false);
        newLog.push('The Thunderer’s shield has been consumed.');
      }

      newCopper = result.copper;
      newMorale = result.morale;
      setCopper(newCopper);
      setMorale(newMorale);
      newLog.push('The waters churn... Mishepeshu has appeared.');
      newLog.push(result.log);
    }

    if (card.type === 'Medicine Keeper') {
      const result = handleMedicineKeeper({ morale, copper });
      newMorale = result.morale;
      newCopper = result.copper;
      setMorale(newMorale);
      setCopper(newCopper);
      newLog.push('The Medicine Keeper appears.');
      newLog.push(result.log);
    }

    if (card.type === 'Thunderer') {
      const result = handleThunderer();
      setShield(result.shield);
      newLog.push(result.log);
    }

    if (card.type === 'Nanabozho') {
      const result = handleNanabozho({ morale, progress, copper, people, deck });
      newMorale = result.morale;
      newProgress = result.progress;
      newCopper = result.copper;
      newPeople = result.people;
      setMorale(newMorale);
      setProgress(newProgress);
      setCopper(newCopper);
      setPeople(newPeople);
      setDeck(result.deck);
      newLog.push('Nanabozho appears in a whirlwind of laughter and chaos.');
      newLog.push(result.log);
    }

    const nextTurn = turnsLeft - 1;
    setTurnsLeft(nextTurn);

    // 🧠 Win/Loss Conditions
    if (newMorale <= 0) {
      setGameOver(true);
      setGameWon(false);
      newLog.push("Your people’s spirit has broken. The journey ends in despair.");
    } else if (newPeople <= 0) {
      setGameOver(true);
      setGameWon(false);
      newLog.push("No one remains to continue. Your people have perished.");
    } else if (newProgress >= 20) {
      setGameOver(true);
      setGameWon(true);
      newLog.push("You have reached the promised land. Victory!");
    } else if (nextTurn <= 0) {
      setGameOver(true);
      setGameWon(false);
      newLog.push("Time has run out. The winter swallowed your hope.");
    }

    setTurnLog([...turnLog, ...newLog]);
  };

  return (
    <div className="card-drawer">
      <button onClick={handleDraw} disabled={gameOver}>Draw Card</button>
      {drawnCard && (
        <p>
          <strong>{drawnCard.value} of {drawnCard.suit}</strong> — {drawnCard.type}
        </p>
      )}
    </div>
  );
};

export default CardDrawer;
