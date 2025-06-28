// src/components/GameBoard.js

import React, { useState } from 'react';
import CardDrawer from './CardDrawer.jsx';
import StatPanel from './StatPanel.jsx';
import ControlsPanel from './ControlsPanel.jsx';
import TurnLog from './TurnLog.jsx';
import fullDeck from '../data/deck.js';
import { shuffleDeck, drawCard } from '../logic/drawCard.js';

const GameBoard = () => {
  const [people, setPeople] = useState(10);
  const [morale, setMorale] = useState(5);
  const [progress, setProgress] = useState(0);
  const [copper, setCopper] = useState(0);
  const [turnLog, setTurnLog] = useState(["Game start: Your people begin their journey."]);
  const [deck, setDeck] = useState(shuffleDeck(fullDeck));
  const [discardPile, setDiscardPile] = useState([]);
  const [drawnCard, setDrawnCard] = useState(null);
  const currentSeason = { suit: '♦' }; // Simulating Fall for now


  return (
    <div className="game-board">
      <StatPanel people={people} morale={morale} progress={progress} copper={copper} />
        <CardDrawer 
          people={people} setPeople={setPeople}
          morale={morale} setMorale={setMorale}
          progress={progress} setProgress={setProgress}
          copper={copper} setCopper={setCopper}
          turnLog={turnLog} setTurnLog={setTurnLog}
          deck={deck} setDeck={setDeck}
          discardPile={discardPile} setDiscardPile={setDiscardPile}
          drawnCard={drawnCard} setDrawnCard={setDrawnCard}
        />

      <TurnLog log={turnLog} />
      <ControlsPanel />
    </div>
  );
};

export default GameBoard;
