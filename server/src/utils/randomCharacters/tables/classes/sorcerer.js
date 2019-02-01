const { optimizeAbilityScores } = require('../../utils');

const name = 'Sorcerer';
const statPrefs = [
  ['CHA', 'CON', 'DEX', 'WIS', 'INT', 'STR'],
  ['CHA', 'CON', 'DEX', 'INT', 'WIS', 'STR'],
  ['CHA', 'DEX', 'CON', 'WIS', 'INT', 'STR'],
  ['CHA', 'DEX', 'CON', 'INT', 'WIS', 'STR'],
  ['CHA', 'CON', 'WIS', 'DEX', 'INT', 'STR'],
  ['CHA', 'CON', 'WIS', 'INT', 'DEX', 'STR'],
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
