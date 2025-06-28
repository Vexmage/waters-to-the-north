// src/components/StatPanel.js

import React from 'react';

const StatPanel = ({ people, morale, progress, copper }) => {
  return (
    <div className="stat-panel">
      <h2>Community Status</h2>
      <ul className="stat-list">
        <li className="stat">🧍 People: {people}</li>
        <li className="stat">💙 Morale: {morale}</li>
        <li className="stat">🛤️ Progress: {progress}</li>
        <li className="stat">🪙 Copper: {copper}</li>
      </ul>
    </div>
  );
};

export default StatPanel;
