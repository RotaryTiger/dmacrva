const { optimizeAbilityScores } = require('../../utils');

const name = 'Warlock';
const statPrefs = [
  ['CHA', 'CON', 'DEX', 'WIS', 'INT', 'STR'],
  ['CHA', 'CON', 'WIS', 'DEX', 'INT', 'STR'],
  ['CHA', 'CON', 'DEX', 'INT', 'WIS', 'STR'],
  ['CHA', 'CON', 'DEX', 'STR', 'WIS', 'INT'],
  ['CHA', 'CON', 'DEX', 'WIS', 'STR', 'INT'],
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
