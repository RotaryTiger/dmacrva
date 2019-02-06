import utils from '../../utils';
import equipment from '../equipment';
import spells from '../spells';
import sorcerousOrigins from './sorcerousOrigins';

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

const getSpells = ({ getUniqueEntries, sorcerousOrigin }) => {
  const firstLevelSpells = getUniqueEntries(2, firstLevel);

  return sorcerousOrigin[0].name === 'Sorcerous Origin: Divine Soul'
    ? [...firstLevelSpells, ...getUniqueEntries(1, spells.cleric.firstLevel)]
    : firstLevelSpells;
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
    const sorcerousOrigin = rollOnArray(sorcerousOrigins)({ rollOnArray });
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
        firstLevel: getSpells({ getUniqueEntries, sorcerousOrigin }),
      },
    };
  },
};
