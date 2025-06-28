// src/logic/handleMishepeshu.js

export function handleMishepeshu({ copper, morale }) {
  const roll = Math.ceil(Math.random() * 4); // 1 to 4
  let log = '';
  let result = { copper, morale, log: '' };

  switch (roll) {
    case 1:
      result.copper = Math.max(copper - 1, 0);
      result.log = 'A sudden wave crashes! You lost 1 copper.';
      break;
    case 2:
      result.morale = Math.max(morale - 2, 0); // 👈 capped morale drop
      result.log = 'Dark currents pull at your spirit. You lost 2 morale.';
      break;
    case 3:
      result.copper += 2;
      result.log = 'You find shining copper washed ashore. Gain 2 copper.';
      break;
    case 4:
      result.morale += 1;
      result.log = 'A calm moment — your spirits lift. Gain 1 morale.';
      break;
    default:
      result.log = 'The waters churn in silence.';
      break;
  }

  return result;
}
