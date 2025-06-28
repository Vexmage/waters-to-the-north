import React, { useState } from 'react';
import GameBoard from './components/GameBoard.jsx';
import SplashScreen from './components/SplashScreen.jsx';
import './styles/main.css';

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="app-container">
      {showSplash ? (
        <SplashScreen onStart={() => setShowSplash(false)} />
      ) : (
        <>
          <h1>Waters to the North</h1>
          <GameBoard />
        </>
      )}
    </div>
  );
};

export default App;
