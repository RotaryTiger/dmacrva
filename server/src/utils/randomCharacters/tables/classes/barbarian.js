import { optimizeAbilityScores } from '../../utils';

console.log({ optimizeAbilityScores });

const name = 'Barbarian';
const statPrefs = [
  ['STR', 'CON', 'DEX', 'WIS', 'INT', 'CHA'],
  ['CON', 'STR', 'DEX', 'WIS', 'INT', 'CHA'],
  ['STR', 'CON', 'DEX', 'CHA', 'WIS', 'INT'],
  ['CON', 'STR', 'DEX', 'INT', 'WIS', 'CHA'],
];

const generateRandom = (abilityScores) => {
  const optimizedAbilityScores = optimizeAbilityScores({ abilityScores, statPrefs });

  return {
    name,
    optimizedAbilityScores,
  };
};

export {
  name,
  statPrefs,
  generateRandom,
};
