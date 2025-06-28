import React from 'react';

const TurnLog = ({ log }) => {
  return (
    <div className="turn-log">
      <h3>Turn Log</h3>
      <ul>
        {log.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ul>
    </div>
  );
};

export default TurnLog;
