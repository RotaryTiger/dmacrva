import utils from '../../utils';

const className = 'Rogue';
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
    };
  },
};
