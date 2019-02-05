import utils from '../../utils';
import equipment from '../equipment';
import spells from '../spells';

const { weapons, packs } = equipment;
const { melee, ranged } = weapons;
const { cantrips, firstLevel } = spells.sorcerer;

const className = 'Sorcerer';
const statPrefs = [
  ['CHA', 'CON', 'DEX', 'WIS', 'INT', 'STR'],
  ['CHA', 'CON', 'DEX', 'INT', 'WIS', 'STR'],
  ['CHA', 'DEX', 'CON', 'WIS', 'INT', 'STR'],
  ['CHA', 'DEX', 'CON', 'INT', 'WIS', 'STR'],
  ['CHA', 'CON', 'WIS', 'DEX', 'INT', 'STR'],
  ['CHA', 'CON', 'WIS', 'INT', 'DEX', 'STR'],
];

const hitDice = '1d6';
const hitPoints = 6;

const classSkills = [
  'Arcana',
  'Deception',
  'Insight',
  'Intimidation',
  'Persuasion',
  'Religion',
];

const classProficiencies = {
  armor: [],
  weapons: ['Daggers', 'Darts', 'Slings', 'Quarterstaffs', 'Light crossbows'],
  tools: [],
  saves: ['CON', 'CHA'],
  skills: [`Choose two from: ${classSkills.join(', ')}`],
  languages: [],
};

const classFeatures = [
  {
    name: 'Spellcasting',
    description: 'You know four Cantrips and two 1st-level spells. You have two 1st-level spell slots. You can use an arcane focus as a spellcasting focus.',
  },
  {
    name: 'Spellcasting Ability',
    description: 'Your spellcasting ability is Charisma (DC = 8 + Proficiency + CHA; d20 + Proficiency + CHA to hit).',
  },
];

const getEquipment = ({ rollOnArray }) => [
  rollOnArray([
    ...[
      ranged.simple[2],
      '20 bolts',
    ],
    rollOnArray([...melee.simple, ...ranged.simple]),
  ]),
  rollOnArray([
    'Component Pouch',
    'Arcane Focus',
  ]),
  ...rollOnArray([
    packs.dungeoneer,
    packs.explorer,
  ]),
  `2x ${melee.simple[1]}`,
];

const getSorcerousOrigin = ({ rollOnArray }) => {
  const ancestry = rollOnArray([
    ['Black', 'Acid'],
    ['Blue', 'Lightning'],
    ['Brass', 'Fire'],
    ['Bronze', 'Lightning'],
    ['Copper', 'Acid'],
    ['Gold', 'Fire'],
    ['Green', 'Poison'],
    ['Red', 'Fire'],
    ['Silver', 'Cold'],
    ['White', 'Cold'],
  ]);
  const draconicBloodline = [
    {
      name: 'Sorcerous Origin: Draconic Bloodline',
      description: `Your innate magic comes from ${ancestry[0]} draconic magic that mingled with your blood, or that of your ancestors. You can speak, read, and write Draconic. Whenever you make a Charisma check when interacting with dragons, your proficiency bonus is doubled if it applies to the check.`,
    },
    {
      name: 'Draconic Resilience',
      description: `+1 hit points per level (not reflected on character sheet). Additionally, parts of your skin are covered by a thin sheen of ${ancestry[0]} dragon-like scales. When you aren’t wearing armor, your AC = 13 + DEX.`,
    },
  ];
  const wildMagic = [
    {
      name: 'Sorcerous Origin: Wild Magic',
      description: 'Your magic comes from chaos or something.',
    },
    {
      name: 'Wild Magic Surge',
      description: 'Bend luck or whatever. roll a d20, your spell goes bonkers',
    },
  ];

  return rollOnArray([
    draconicBloodline,
    wildMagic,
  ]);
};

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
      classFeatures: [
        ...classFeatures,
        ...getSorcerousOrigin({ rollOnArray }),
      ],
      equipment: getEquipment({ rollOnArray }),
      spells: {
        cantrips: getUniqueEntries(4, cantrips),
        firstLevel: getUniqueEntries(2, firstLevel),
      },
    };
  },
};
