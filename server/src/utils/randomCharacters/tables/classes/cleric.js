import utils from '../../utils';

const name = 'Cleric';
const statPrefs = [
  ['WIS', 'CON', 'STR', 'DEX', 'INT', 'CHA'],
  ['WIS', 'CON', 'DEX', 'CHA', 'INT', 'STR'],
  ['WIS', 'CON', 'STR', 'DEX', 'CHA', 'INT'],
  ['WIS', 'CON', 'DEX', 'STR', 'INT', 'CHA'],
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
