const { optimizeAbilityScores } = require('../../utils');

const name = 'Monk';
const statPrefs = [
  ['DEX', 'WIS', 'CON', 'INT', 'CHA', 'STR'],
  ['DEX', 'WIS', 'CON', 'STR', 'INT', 'CHA'],
  ['DEX', 'CON', 'WIS', 'INT', 'CHA', 'STR'],
  ['DEX', 'CON', 'WIS', 'STR', 'INT', 'CHA'],
];

module.exports = {
  name,
  statPrefs,
  generateRandom: (abilityScores) => {
    const optimizedAbilityScores = optimizeAbilityScores({ abilityScores, statPrefs });

    return {
      name,
      optimizedAbilityScores,
    };
  },
};
