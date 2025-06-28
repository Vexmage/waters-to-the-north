import React from 'react';
import GameBoard from './components/GameBoard.jsx';
import './styles/main.css';

const App = () => {
  return (
    <div className="app-container">
      <h1>Waters to the North</h1>
      <GameBoard />
    </div>
  );
};

export default App;
