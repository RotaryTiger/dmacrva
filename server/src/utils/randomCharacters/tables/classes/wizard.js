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
