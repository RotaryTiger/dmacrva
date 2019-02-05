import utils from '../../utils';

const className = 'Ranger';
const statPrefs = [
  ['DEX', 'WIS', 'CON', 'STR', 'INT', 'CHA'],
  ['DEX', 'WIS', 'CON', 'INT', 'STR', 'CHA'],
  ['DEX', 'CON', 'WIS', 'STR', 'INT', 'CHA'],
  ['DEX', 'CON', 'WIS', 'INT', 'STR', 'CHA'],
];

const hitDice = '1d10';
const hitPoints = 10;

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
