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

const classFeatures = [
  {
    name: 'Second Wind',
    description: 'Once per short or long rest: [Bonus Action] On your turn, you can use a Bonus Action to regain 1d10 + Fighter level hit points.',
  },
];

const getFightingStyle = ({ rollOnArray }) => (
  rollOnArray([
    {
      name: 'Fighting Style: Archery',
      description: 'You gain a +2 bonus to attack rolls you make with ranged weapons.',
    },
    {
      name: 'Fighting Style: Defense',
      description: 'While you are wearing armor, you gain a +1 bonus to AC.',
    },
    {
      name: 'Fighting Style: Dueling',
      description: 'When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.',
    },
    {
      name: 'Fighting Style: Great Weapon Fighting',
      description: 'When you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll, even if the new roll is a 1 or a 2. The weapon must have the two-handed or versatile property for you to gain this benefit.',
    },
    {
      name: 'Fighting Style: Protection',
      description: 'When a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. You must be wielding a shield.',
    },
    {
      name: 'Fighting Style: Two-Weapon Fighting',
      description: 'When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack.',
    },
  ])
);

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
      classFeatures: [
        ...classFeatures,
        getFightingStyle({ rollOnArray }),
      ],
      equipment: getEquipment({ rollOnArray }),
    };
  },
};
