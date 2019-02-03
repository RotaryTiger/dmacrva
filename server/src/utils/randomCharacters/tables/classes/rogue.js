import utils from '../../utils';

const name = 'Rogue';
const statPrefs = [
  ['DEX', 'CON', 'WIS', 'INT', 'STR', 'CHA'],
  ['DEX', 'CON', 'INT', 'WIS', 'STR', 'CHA'],
  ['DEX', 'WIS', 'CON', 'INT', 'STR', 'CHA'],
  ['DEX', 'CON', 'WIS', 'INT', 'STR', 'CHA'],
  ['DEX', 'CON', 'INT', 'WIS', 'STR', 'CHA'],
  ['DEX', 'WIS', 'CON', 'INT', 'STR', 'CHA'],
  ['DEX', 'CON', 'WIS', 'INT', 'STR', 'CHA'],
  ['DEX', 'CON', 'INT', 'WIS', 'STR', 'CHA'],
  ['STR', 'CON', 'DEX', 'WIS', 'INT', 'CHA'],
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
