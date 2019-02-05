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
    const {
      rollOnArray,
      getUniqueEntries,
      optimizeAbilityScores,
    } = utils;

    const abilities = optimizeAbilityScores({ abilityScores, statPrefs });
    const proficiencies = {
      ...classProficiencies,
      skills: getUniqueEntries(),
    };

    return {
      className,
      abilities,
      hitDice,
      hitPoints,
      proficiencies,
      classFeatures,
      equipment: getEquipment({ rollOnArray }),
    };
  },
};
