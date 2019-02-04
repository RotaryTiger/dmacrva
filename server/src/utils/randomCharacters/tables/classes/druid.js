import utils from '../../utils';

const className = 'Druid';
const statPrefs = [
  ['WIS', 'CON', 'DEX', 'INT', 'STR', 'CHA'],
  ['WIS', 'DEX', 'CON', 'CHA', 'STR', 'INT'],
  ['WIS', 'CON', 'DEX', 'STR', 'INT', 'CHA'],
  ['WIS', 'CON', 'DEX', 'CHA', 'INT', 'STR'],
];

export default {
  className,
  statPrefs,
  generateRandom: (abilityScores) => {
    const { optimizeAbilityScores } = utils;
    const abilities = optimizeAbilityScores({ abilityScores, statPrefs });

    return {
      className,
      abilities,
    };
  },
};
