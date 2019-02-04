import utils from '../../utils';

const className = 'Fighter';
const statPrefs = [
  ['STR', 'CON', 'DEX', 'CHA', 'WIS', 'INT'],
  ['STR', 'CON', 'DEX', 'WIS', 'CHA', 'INT'],
  ['STR', 'DEX', 'CON', 'CHA', 'WIS', 'INT'],
  ['STR', 'DEX', 'CON', 'WIS', 'CHA', 'INT'],
  ['DEX', 'CON', 'WIS', 'CHA', 'STR', 'INT'],
  ['DEX', 'CON', 'WIS', 'STR', 'CHA', 'INT'],
  ['DEX', 'STR', 'CON', 'CHA', 'WIS', 'INT'],
  ['DEX', 'STR', 'CON', 'WIS', 'CHA', 'INT'],
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
