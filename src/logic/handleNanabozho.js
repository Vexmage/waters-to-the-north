// src/logic/handleNanabozho.js

export function handleNanabozho({ copper, morale, progress, people }) {
  const roll = Math.ceil(Math.random() * 6);
  let log = `Nanabozho appears. Rolled a ${roll}... `;

  switch (roll) {
    case 1:
      return {
        copper: 0,
        morale,
        progress,
        people,
        log: log + 'He steals all your copper. Trickster strikes!'
      };
    case 2:
      return {
        reshuffle: true,
        copper,
        morale,
        progress,
        people,
        log: log + 'Confusion! The discard pile is shuffled back into the deck.'
      };
    case 3:
      return {
        morale: morale + 2,
        copper,
        progress,
        people,
        log: log + 'He tells a story that lifts your spirits. +2 morale.'
      };
    case 4:
      return {
        progress: progress + 1,
        copper,
        morale,
        people,
        log: log + 'A strange vision grants insight. +1 progress.'
      };
    case 5:
      return {
        people: people + 2,
        copper,
        morale,
        progress,
        log: log + 'Unexpected help arrives. +2 people.'
      };
    case 6:
    default:
      return {
        copper,
        morale,
        progress,
        people,
        log: log + 'He laughs and vanishes. No harm done.'
      };
  }
}
