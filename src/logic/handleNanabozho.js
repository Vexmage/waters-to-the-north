// src/logic/handleNanabozho.js

export function handleNanabozho({ morale, progress, copper, people, deck }) {
  const roll = Math.ceil(Math.random() * 6);
  let log = `Nanabozho dances through the veil... (Rolled a ${roll})\n`;
  let result = { morale, progress, copper, people, deck, log: '' };

  switch (roll) {
    case 1:
      [result.morale, result.progress] = [progress, morale];
      result.log = "Trickster’s Curse! Morale and progress were swapped.";
      break;
    case 2:
      result.deck = [...deck]; // assumes discard was already shuffled in earlier
      result.log = "Grand Disruption! Nanabozho laughs — the discard pile rejoins the deck.";
      break;
    case 3:
      result.copper += 1;
      result.morale = Math.max(result.morale - 1, 0);
      result.log = "Copper Trick! You gained 1 copper but lost 1 morale.";
      break;
    case 4:
      result.log = "Vision of the Future: You sense what’s to come... (peek at top 3 cards — not implemented)";
      break;
    case 5:
      result.morale += 2;
      result.log = "Spirit’s Favor! You regain 2 morale.";
      break;
    case 6:
      result.morale += 1;
      result.copper += 1;
      result.progress += 1;
      result.people = Math.max(result.people - 1, 0);
      result.log = "Wild Gift! Nanabozho grants many gifts — but one of your people is gone.";
      break;
    default:
      result.log = "The trickster fades silently.";
      break;
  }

  return result;
}
