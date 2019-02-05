import utils from '../../utils';

const className = 'Monk';
const statPrefs = [
  ['DEX', 'WIS', 'CON', 'INT', 'CHA', 'STR'],
  ['DEX', 'WIS', 'CON', 'STR', 'INT', 'CHA'],
  ['DEX', 'CON', 'WIS', 'INT', 'CHA', 'STR'],
  ['DEX', 'CON', 'WIS', 'STR', 'INT', 'CHA'],
];

const hitDice = '1d8';
const hitPoints = 8;

const classSkills = [];

const classProficiencies = {};

const classFeatures = [];

const getEquipment = ({ rollOnArray }) => {};

export default {
  className,
  statPrefs,
  hitDice,
  hitPoints,
  classSkills,
  classProficiencies,
  classFeatures,
  generateRandom: (abilityScores) => {
    const { optimizeAbilityScores } = utils;
    const optimizedAbilityScores = optimizeAbilityScores({ abilityScores, statPrefs });

    return {
      className,
      optimizedAbilityScores,
      hitDice,
      hitPoints,
    };
  },
};
