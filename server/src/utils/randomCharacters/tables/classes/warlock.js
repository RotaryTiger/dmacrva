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
      description: 'You have made a pact with a Lord or Lady of the fey, a creature of legends who holds secrets that were forgotten before the mortal races were born. This being\'s aims are inscrutable, sometimes whimsical, and might involve a striving for greater magical power or the settling of age old grudges.',
    },
    {
      name: 'Expanded Spell List',
      description: 'Your Warlock spell list includes the spells Faerie Fire and Sleep.',
    },
    {
      name: 'Fey Presence',
      description: 'Once per Short or Long rest: [Action] You cause each creature within a 10ft square originating from you to make a Wisdom saving throw against your Warlock spell save DC. The creatures that fail are charmed or frightened by you (your choice) until the end of your next turn.',
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
      description: 'Your patron is a mysterious entity whose nature is utterly foreign to the fabric of reality. It might come from the Far Realm, the space beyond reality, or it could be one of the elder gods known only in legends. Its motives are incomprehensible to mortals, and its knowledge so immense and ancient that even the greatest libraries pale in comparison to the vast secrets it holds.',
    },
    {
      name: 'Expanded Spell List',
      description: 'Your Warlock spell list includes the spells Dissonant Whispers and Tasha\'s Hideous Laughter.',
    },
    {
      name: 'Awakened Mind',
      description: 'You can telepathically speak to any creature you can see within 30ft of you. You do not need to hsare a language with the creature for it to understand your telepathic utterances, but the creature must be able to understand at least one language.',
    },
  ];
  const theUndying = [
    {
      name: 'Otherworldly Patron: The Undying',
      description: 'Death holds no sway over your patron, who has unlocked the secrets of everlasting life, although such a prize—like all power—comes at a price.',
    },
    {
      name: 'Expanded Spell List',
      description: 'Your Warlock spell list includes the spells False Life and Ray of Sickness.',
    },
    {
      name: 'Among the Dead',
      description: 'You learn the Spare the Dying cantrip, which counts as a Warlock cantrip for you. You have Advantage on saving throws against diseases. If an undead targets you directly with an attack or a harmful spell, that creature must make a Wisdom saving throw against your spell save DC. On a failed save, the creature must choose a new target or forfeit targeting someone instead of you, potentially wasting the attack or spell. On a successful save, the creature is immune to this effect for 24 hours. An undead is also immune to this spell if you target it with an attack or harmful spell.',
    },
  ];

  return {
    patron: rollOnArray([
      archfey,
      fiend,
      greatOldOne,
      theUndying,
    ]),
    expandedSpells: {
      'Otherworldly Patron: Archfey': ['Faerie Fire', 'Sleep'],
      'Otherworldly Patron: Fiend': ['Burning Hands', 'Command'],
      'Otherworldly Patron: Great Old One': ['Dissonant Whispers', 'Tasha\'s Hideous Laughter'],
      'Otherworldly Patron: The Undying': ['False Life', 'Ray of Sickness'],
    },
  };
};

const getWarlockCantrips = ({ getUniqueEntries, patron }) => (
  patron[0].name === 'Otherworldly Patron: The Undying'
    ? [...getUniqueEntries(2, cantrips), 'Spare the Dying']
    : getUniqueEntries(2, cantrips)
);

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
        cantrips: getWarlockCantrips({ getUniqueEntries, patron }),
        firstLevel: getUniqueEntries(2, [...firstLevel, ...expandedSpells[patron[0].name]]),
      },
    };
  },
};
