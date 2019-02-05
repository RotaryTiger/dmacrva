import utils from '../../utils';

const className = 'Paladin';
const statPrefs = [
  ['STR', 'CON', 'CHA', 'WIS', 'INT', 'DEX'],
  ['STR', 'CHA', 'CON', 'WIS', 'DEX', 'INT'],
  ['STR', 'CON', 'CHA', 'DEX', 'WIS', 'INT'],
  ['STR', 'CHA', 'CON', 'DEX', 'INT', 'WIS'],
  ['DEX', 'CHA', 'CON', 'STR', 'WIS', 'INT'],
];

const hitDice = '1d10';
const hitPoints = 10;

const classSkills = [];

const classProficiencies = {
  armor: [],
  weapons: [],
  tools: [],
  saves: [],
  skills: [],
  languages: [],
};

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
