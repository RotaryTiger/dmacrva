const { optimizeAbilityScores } = require('../../utils');

const name = 'Paladin';
const statPrefs = [
  ['STR', 'CON', 'CHA', 'WIS', 'INT', 'DEX'],
  ['STR', 'CHA', 'CON', 'WIS', 'DEX', 'INT'],
  ['STR', 'CON', 'CHA', 'DEX', 'WIS', 'INT'],
  ['STR', 'CHA', 'CON', 'DEX', 'INT', 'WIS'],
  ['DEX', 'CHA', 'CON', 'STR', 'WIS', 'INT'],
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
