import utils from '../../utils';

const className = 'Sorcerer';
const statPrefs = [
  ['CHA', 'CON', 'DEX', 'WIS', 'INT', 'STR'],
  ['CHA', 'CON', 'DEX', 'INT', 'WIS', 'STR'],
  ['CHA', 'DEX', 'CON', 'WIS', 'INT', 'STR'],
  ['CHA', 'DEX', 'CON', 'INT', 'WIS', 'STR'],
  ['CHA', 'CON', 'WIS', 'DEX', 'INT', 'STR'],
  ['CHA', 'CON', 'WIS', 'INT', 'DEX', 'STR'],
];

export default {
  className,
  statPrefs,
  generateRandom: (abilityScores) => {
    const { optimizeAbilityScores } = utils;
    const optimizedAbilityScores = optimizeAbilityScores({ abilityScores, statPrefs });

    return {
      className,
      optimizedAbilityScores,
    };
  },
};
