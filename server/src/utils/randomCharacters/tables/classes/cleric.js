const { optimizeAbilityScores } = require('../../utils');

const name = 'Cleric';
const statPrefs = [
  ['WIS', 'CON', 'STR', 'DEX', 'INT', 'CHA'],
  ['WIS', 'CON', 'DEX', 'CHA', 'INT', 'STR'],
  ['WIS', 'CON', 'STR', 'DEX', 'CHA', 'INT'],
  ['WIS', 'CON', 'DEX', 'STR', 'INT', 'CHA'],
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
