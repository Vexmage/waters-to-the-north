// src/components/StatPanel.js

import React from 'react';

const StatPanel = ({ people, morale, progress, copper }) => {
  return (
    <div className="stat-panel">
      <h2>Community Status</h2>
      <ul>
        <li>🧍 People: {people}</li>
        <li>💙 Morale: {morale}</li>
        <li>🛤️ Progress: {progress}</li>
        <li>🪙 Copper: {copper}</li>
      </ul>
    </div>
  );
};

export default StatPanel;
