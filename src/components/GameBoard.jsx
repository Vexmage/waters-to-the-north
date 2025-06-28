// src/components/GameBoard.js

import React, { useState } from 'react';
import CardDrawer from './CardDrawer.jsx';
import StatPanel from './StatPanel.jsx';
import ControlsPanel from './ControlsPanel.jsx';
import TurnLog from './TurnLog.jsx';

const GameBoard = () => {
  const [people, setPeople] = useState(10);
  const [morale, setMorale] = useState(5);
  const [progress, setProgress] = useState(0);
  const [copper, setCopper] = useState(0);
  const [turnLog, setTurnLog] = useState(["Game start: Your people begin their journey."]);

  return (
    <div className="game-board">
      <StatPanel people={people} morale={morale} progress={progress} copper={copper} />
      <CardDrawer 
        people={people} setPeople={setPeople} 
        morale={morale} setMorale={setMorale} 
        progress={progress} setProgress={setProgress} 
        copper={copper} setCopper={setCopper} 
        turnLog={turnLog} setTurnLog={setTurnLog} 
      />
      <TurnLog log={turnLog} />
      <ControlsPanel />
    </div>
  );
};

export default GameBoard;
