// src/logic/handleMedicineKeeper.js

export function handleMedicineKeeper({ morale, copper }) {
  const result = {
    morale,
    copper,
    log: ''
  };

  if (morale < 5) {
    result.morale += 1;
    result.log = 'The Medicine Keeper blesses your people. +1 morale.';
  } else {
    result.copper += 1;
    result.log = 'The Medicine Keeper offers a gift. +1 copper instead.';
  }

  return result;
}
