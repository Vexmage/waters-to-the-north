// src/logic/handleMishepeshu.js

export function handleMishepeshu({ copper, morale }) {
  const result = {
    copper,
    morale,
    log: '',
  };

  if (copper > 0) {
    result.copper -= 1;
    result.log = 'You offered copper to Mishepeshu. He is appeased.';
    return result;
  }

  // Roll a d6
  const roll = Math.ceil(Math.random() * 6);
  result.log = `You have no copper. Rolled a ${roll}... `;

  if (roll <= 2) {
    result.morale -= 1;
    result.log += 'Mishepeshu is angered. You lost 1 morale.';
  } else if (roll <= 4) {
    result.log += 'Mishepeshu steals something. (Placeholder: Lose 1 person)';
  } else {
    result.log += 'You were spared.';
  }

  return result;
}
