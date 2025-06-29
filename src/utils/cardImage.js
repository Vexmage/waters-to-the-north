export function getCardImagePath(value, suit) {
  const suitMap = {
    hearts: 'HEART',
    diamonds: 'DIAMOND',
    clubs: 'CLUB',
    spades: 'SPADE',
    joker: 'JOKER'
  };

  const faceMap = {
    J: '11-JACK',
    Q: '12-QUEEN',
    K: '13-KING',
    A: '1',
    '2': '2',
    '3': '3',
    '4': '4',
    '5': '5',
    '6': '6',
    '7': '7',
    '8': '8',
    '9': '9',
    '10': '10',
    Joker: 'JOKER'
  };

  const symbolToName = {
    '♠': 'spades',
    '♥': 'hearts',
    '♦': 'diamonds',
    '♣': 'clubs',
    'Red': 'joker',
    'Black': 'joker'
  };

  const normalizedSuit = symbolToName[suit] || suit.toLowerCase();
  const suitKey = suitMap[normalizedSuit];
  const valueKey = faceMap[value];

  if (!suitKey || !valueKey) return '/cards/back.svg';

  return `/cards/${suitKey}-${valueKey}.svg`;
}
