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
  ...rollOnArray([
    [
      ranged.simple[1],
      '20 bolts',
    ],
    [rollOnArray([...melee.simple, ...ranged.simple])],
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
      description: 'Your innate magic comes from the forces of chaos that underlie the order of creation.',
    },
    {
      name: 'Wild Magic Surge',
      description: 'Once per turn, the DM can have you roll a d20 immediately after you cast a sorcerer spell of 1st level or higher. If you roll a 1, roll on the Wild Magic Surge table (PHB 104) to create a magical effect.',
    },
    {
      name: 'Tides of Chaos',
      description: 'Once per Long rest: Gain Advantage on one attack roll, ability check, or saving throw. Any time before you regain the use of this feature, can have you roll on the Wild Magic Surge table immediately after you cast a Sorcerer spell of 1st-level or higher. You then regain the use of this feature.',
    },
  ];
  const stormSorcery = [
    {
      name: 'Sorcerous Origin: Storm Sorcery',
      description: 'Your innate magic comes from the power of elemental air. Many with this power can trace their magic back to a near-death experience caused by the Great Rain, but perhaps you were born during a howling gale so powerful that folk still tell stories of it, or your lineage  might include the influence of potent air creatures such as vaati or djinn. Whatever the case, the magic of the storm permeates your being.',
    },
    {
      name: 'Wind Speaker',
      description: 'You can speak, read, and write Primordial. Knowing this language allows you to understand and be understood by those who speak its dialects: Aquan, Auran, Ignan, and Terran.',
    },
    {
      name: 'Tempestuous Magic',
      description: '[Bonus Action] After casting a spell of 1st level or higher on your turn, you can use a Bonus Action to surround yourself with a whirling gust of elemental air, allowing you to fly up to 10 feet without provoking opportunity attacks.',
    },
  ];

  return rollOnArray([
    draconicBloodline,
    wildMagic,
    stormSorcery,
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
    const sorcerousOrigin = getSorcerousOrigin({ rollOnArray });
    const proficiencies = {
      ...classProficiencies,
      skills: getUniqueEntries(2, classSkills),
      languages: sorcerousOrigin[0].name === 'Sorcerous Origin: Storm Sorcery'
        ? ['Primordial']
        : [],
    };

    return {
      className,
      abilities,
      hitDice,
      hitPoints,
      proficiencies,
      classFeatures: [
        ...classFeatures,
        ...sorcerousOrigin,
      ],
      equipment: getEquipment({ rollOnArray }),
      spells: {
        cantrips: getUniqueEntries(4, cantrips),
        firstLevel: getUniqueEntries(2, firstLevel),
      },
    };
  },
};
