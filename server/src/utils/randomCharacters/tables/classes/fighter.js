import utils from '../../utils';
import equipment from '../equipment';

const { weapons, packs, armor } = equipment;
const { melee, ranged } = weapons;

const className = 'Fighter';
const statPrefs = [
  ['STR', 'CON', 'DEX', 'CHA', 'WIS', 'INT'],
  ['STR', 'CON', 'DEX', 'WIS', 'CHA', 'INT'],
  ['STR', 'DEX', 'CON', 'CHA', 'WIS', 'INT'],
  ['STR', 'DEX', 'CON', 'WIS', 'CHA', 'INT'],
  ['DEX', 'CON', 'WIS', 'CHA', 'STR', 'INT'],
  ['DEX', 'CON', 'WIS', 'STR', 'CHA', 'INT'],
  ['DEX', 'STR', 'CON', 'CHA', 'WIS', 'INT'],
  ['DEX', 'STR', 'CON', 'WIS', 'CHA', 'INT'],
];

const hitDice = '1d10';
const hitPoints = 10;

const classSkills = [
  'Acrobatics',
  'Animal Handling',
  'Athletics',
  'History',
  'Insight',
  'Intimidation',
  'Perception',
  'Survival',
];

const classProficiencies = {
  armor: ['Light', 'Medium', 'Heavy', 'Shields'],
  weapons: ['Simple', 'Martial'],
  tools: [],
  saves: ['STR', 'CON'],
  skills: [`Any two from ${classSkills.join(', ')}`],
  languages: [],
};

const classFeatures = [];

const getEquipment = ({ rollOnArray }) => [
  rollOnArray([
    armor.heavy[1],
    ...[
      armor.light[1],
      ranged.martial[3],
      '20 arrows',
    ],
  ]),
  rollOnArray([
    ...[
      rollOnArray([...melee.martial, ...ranged.martial]),
      armor.shield,
    ],
    ...[
      rollOnArray([...melee.martial, ...ranged.martial]),
      rollOnArray([...melee.martial, ...ranged.martial]),
    ],
  ]),
  rollOnArray([
    `${ranged.simple[1]}; 20 bolts`,
    `2x ${melee.simple[3]}`,
  ]),
  ...rollOnArray([
    packs.dungeoneer,
    packs.explorer,
  ]),
];

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
      skills: getUniqueEntries(2, classSkills),
    };

    return {
      className,
      hitDice,
      hitPoints,
      abilities,
      proficiencies,
      classFeatures,
      equipment: getEquipment({ rollOnArray }),
    };
  },
};
