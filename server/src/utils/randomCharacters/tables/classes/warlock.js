import utils from '../../utils';
import equipment from '../equipment';
import spells from '../spells';

const { weapons, packs, armor } = equipment;
const { melee, ranged } = weapons;
const { cantrips, firstLevel } = spells.warlock;

const className = 'Warlock';
const statPrefs = [
  ['CHA', 'CON', 'DEX', 'WIS', 'INT', 'STR'],
  ['CHA', 'CON', 'WIS', 'DEX', 'INT', 'STR'],
  ['CHA', 'CON', 'DEX', 'INT', 'WIS', 'STR'],
  ['CHA', 'CON', 'DEX', 'STR', 'WIS', 'INT'],
  ['CHA', 'CON', 'DEX', 'WIS', 'STR', 'INT'],
];

const hitDice = '1d8';
const hitPoints = 8;

const classSkills = [
  'Arcana',
  'Deception',
  'History',
  'Intimidation',
  'Investigation',
  'Nature',
  'Religion',
];

const classProficiencies = {
  armor: ['Light'],
  weapons: ['Simple'],
  tools: [],
  saves: ['WIS', 'CHA'],
  skills: [`Choose two from: ${classSkills.join(', ')}`],
  languages: [],
};

const classFeatures = [
  {
    name: 'Pact Magic',
    description: 'You know two Cantrips and two 1st-level spells. You have one 1st-level spell slot, which you regain upon completing a Short Rest. You can use an arcane focus as a spellcasting focus.',
  },
  {
    name: 'Spellcasting Ability',
    description: 'Your spellcasting ability is Charisma (DC = 8 + Proficiency + CHA; d20 + Proficiency + CHA to hit).',
  },
];

const getEquipment = ({ rollOnArray }) => [
  ...rollOnArray([
    [ranged.simple[1], '20 bolts'],
    [rollOnArray([...melee.simple, ...ranged.simple])],
  ]),
  rollOnArray([
    'Component Pouch',
    'Arcane Focus',
  ]),
  ...rollOnArray([
    packs.scholar,
    packs.dungeoneer,
  ]),
  armor.light[1],
  rollOnArray([...melee.simple, ...ranged.simple]),
  `2x ${melee.simple[1]}`,
];

const getPatron = ({ rollOnArray }) => {
  const archfey = [
    {
      name: 'Otherworldly Patron: Archfey',
      description: '',
    },
    {
      name: 'Expanded Spell List',
      description: 'Your Warlock spell list includes the spells .',
    },
  ];
  const fiend = [
    {
      name: 'Otherworldly Patron: Fiend',
      description: 'You have made a pact with a fiend from the lower planes of existence, a being whose aims are evil, even if you strive against those aims.',
    },
    {
      name: 'Expanded Spell List',
      description: 'Your Warlock spell list includes the spells Burning Hands, and Command.',
    },
    {
      name: 'Dark One\'s Blessing',
      description: 'When you reduce a hostile creature to 0 hit points, you gain temporary hit points equal to your Charisma modifier + your warlock level (minimum of 1).',
    },
  ];
  const greatOldOne = [
    {
      name: 'Otherworldly Patron: Great Old One',
      description: '',
    },
    {
      name: 'Expanded Spell List',
      description: 'Your Warlock spell list includes the spells .',
    },
  ];

  return {
    patron: rollOnArray([
      archfey,
      fiend,
      greatOldOne,
    ]),
    expandedSpells: {
      'Otherworldly Patron: Archfey': [],
      'Otherworldly Patron: Fiend': ['Burning Hands', 'Command'],
      'Otherworldly Patron: Great Old One': [],
    },
  };
};

// TODO: Otherworldly Patrons

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
    const { patron, expandedSpells } = getPatron({ rollOnArray });

    return {
      className,
      abilities,
      hitDice,
      hitPoints,
      proficiencies,
      classFeatures: [
        ...classFeatures,
        ...patron,
      ],
      equipment: getEquipment({ rollOnArray }),
      spells: {
        cantrips: getUniqueEntries(2, cantrips),
        firstLevel: getUniqueEntries(2, [...firstLevel, ...expandedSpells[patron[0].name]]),
      },
    };
  },
};
