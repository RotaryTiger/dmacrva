import utils from '../../utils';

const className = 'Wizard';
const statPrefs = [
  ['INT', 'CON', 'DEX', 'WIS', 'CHA', 'STR'],
  ['INT', 'DEX', 'CON', 'WIS', 'CHA', 'STR'],
  ['INT', 'CON', 'DEX', 'WIS', 'STR', 'CHA'],
  ['INT', 'DEX', 'CON', 'STR', 'CHA', 'WIS'],
];

const hitDice = '1d6';
const hitPoints = 6;

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
    };
  },
};
