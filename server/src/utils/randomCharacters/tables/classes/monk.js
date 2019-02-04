import utils from '../../utils';

const className = 'Monk';
const statPrefs = [
  ['DEX', 'WIS', 'CON', 'INT', 'CHA', 'STR'],
  ['DEX', 'WIS', 'CON', 'STR', 'INT', 'CHA'],
  ['DEX', 'CON', 'WIS', 'INT', 'CHA', 'STR'],
  ['DEX', 'CON', 'WIS', 'STR', 'INT', 'CHA'],
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
