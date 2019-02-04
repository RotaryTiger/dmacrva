import utils from '../../utils';

const className = 'Paladin';
const statPrefs = [
  ['STR', 'CON', 'CHA', 'WIS', 'INT', 'DEX'],
  ['STR', 'CHA', 'CON', 'WIS', 'DEX', 'INT'],
  ['STR', 'CON', 'CHA', 'DEX', 'WIS', 'INT'],
  ['STR', 'CHA', 'CON', 'DEX', 'INT', 'WIS'],
  ['DEX', 'CHA', 'CON', 'STR', 'WIS', 'INT'],
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
