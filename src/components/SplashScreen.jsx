import React from 'react';
import splashImage from '../assets/waters-splash.png'; // Save your image here

const SplashScreen = ({ onStart }) => {
  return (
    <div className="splash-screen">
      <img src={splashImage} alt="Waters to the North" className="splash-image" />
      <button onClick={onStart} className="start-button">
        Start Game
      </button>
    </div>
  );
};

export default SplashScreen;
