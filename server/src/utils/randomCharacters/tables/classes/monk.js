import utils from '../../utils';
import equipment from '../equipment';

const { weapons, packs } = equipment;
const { melee, ranged } = weapons;

const className = 'Monk';
const statPrefs = [
  ['DEX', 'WIS', 'CON', 'INT', 'CHA', 'STR'],
  ['DEX', 'WIS', 'CON', 'STR', 'INT', 'CHA'],
  ['DEX', 'CON', 'WIS', 'INT', 'CHA', 'STR'],
  ['DEX', 'CON', 'WIS', 'STR', 'INT', 'CHA'],
];

const hitDice = '1d8';
const hitPoints = 8;

const classSkills = [
  'Acrobatics',
  'Athletics',
  'History',
  'Insight',
  'Religion',
  'Stealth',
];

const classProficiencies = {
  armor: [],
  weapons: ['Simple', 'Shortswords'],
  tools: ['One type of artisan\'s tools or musical instrument'],
  saves: ['STR', 'DEX'],
  skills: [`Choose two from: ${classSkills.join(', ')}`],
  languages: [],
};

const classFeatures = [
  {
    name: 'Unarmored Defense',
    description: 'While you are wearing no armor and not wielding a shield, your AC = 10 + DEX + WIS.',
  },
  {
    name: 'Martial Arts',
    description: 'While you are unarmed or wielding only monk weapons (any simple weapon or shortsword): You can use Strength instead of Dexterity for the attack/damage rolls of your unarmed strikes/monk weapons. You can roll a d4 in place of the damage die of your unarmed strike or monk weapons. When you use the Attack action with an unarmed strike or monk weapon on your turn, you can make one unarmed strike as a Bonus Action.',
  },
];

const getEquipment = ({ rollOnArray }) => [
  rollOnArray([
    melee.martial[13],
    rollOnArray([...melee.simple, ...ranged.simple]),
  ]),
  ...rollOnArray([
    packs.dungeoneer,
    packs.explorer,
  ]),
  `10x ${ranged.simple[0]}`,
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
      abilities,
      hitDice,
      hitPoints,
      proficiencies,
      classFeatures,
      equipment: getEquipment({ rollOnArray }),
    };
  },
};
