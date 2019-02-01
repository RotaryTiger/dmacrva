const { optimizeAbilityScores } = require('../../utils');

const name = 'Druid';
const statPrefs = [
  ['WIS', 'CON', 'DEX', 'INT', 'STR', 'CHA'],
  ['WIS', 'DEX', 'CON', 'CHA', 'STR', 'INT'],
  ['WIS', 'CON', 'DEX', 'STR', 'INT', 'CHA'],
  ['WIS', 'CON', 'DEX', 'CHA', 'INT', 'STR'],
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
