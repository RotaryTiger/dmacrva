import utils from '../../utils';

const name = 'Druid';
const statPrefs = [
  ['WIS', 'CON', 'DEX', 'INT', 'STR', 'CHA'],
  ['WIS', 'DEX', 'CON', 'CHA', 'STR', 'INT'],
  ['WIS', 'CON', 'DEX', 'STR', 'INT', 'CHA'],
  ['WIS', 'CON', 'DEX', 'CHA', 'INT', 'STR'],
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
