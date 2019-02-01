const { optimizeAbilityScores } = require('../../utils');

const name = 'Ranger';
const statPrefs = [
  ['DEX', 'WIS', 'CON', 'STR', 'INT', 'CHA'],
  ['DEX', 'WIS', 'CON', 'INT', 'STR', 'CHA'],
  ['DEX', 'CON', 'WIS', 'STR', 'INT', 'CHA'],
  ['DEX', 'CON', 'WIS', 'INT', 'STR', 'CHA'],
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
