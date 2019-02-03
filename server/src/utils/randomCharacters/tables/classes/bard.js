import utils from '../../utils';

const name = 'Bard';
const statPrefs = [
  ['CHA', 'CON', 'DEX', 'WIS', 'INT', 'STR'],
  ['CHA', 'DEX', 'CON', 'WIS', 'INT', 'STR'],
  ['CHA', 'DEX', 'CON', 'WIS', 'INT', 'STR'],
  ['CHA', 'DEX', 'CON', 'WIS', 'INT', 'STR'],
  ['CHA', 'DEX', 'CON', 'WIS', 'INT', 'STR'],
  ['CHA', 'DEX', 'STR', 'CON', 'WIS', 'INT'],
  ['CHA', 'DEX', 'WIS', 'CON', 'INT', 'STR'],
];

export default {
  name,
  statPrefs,
  generateRandom: (abilityScores) => {
    const { optimizeAbilityScores } = utils;
    const optimizedAbilityScores = optimizeAbilityScores({ abilityScores, statPrefs });

    return {
      name,
      optimizedAbilityScores,
    };
  },
};
