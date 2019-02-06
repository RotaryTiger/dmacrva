import utils from '../../utils';
import equipment from '../equipment';
import spells from '../spells';
import patrons from './otherworldlyPatrons';

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

const getWarlockCantrips = ({ getUniqueEntries, patron }) => {
  const { name } = patron[0];
  const twoCantrips = getUniqueEntries(2, cantrips);

  if (name === 'Otherworldly Patron: The Celestial') {
    return [...twoCantrips, 'Light', 'Sacred Flame'];
  }

  if (name === 'Otherworldly Patron: The Undying') {
    return [...twoCantrips, 'Spare the Dying'];
  }

  return twoCantrips;
};

const getArmors = ({ patron }) => (
  patron[0].name === 'Otherworldly Patron: The Hexblade'
    ? ['Light', 'Medium', 'Shields']
    : ['Light']
);

const getWeapons = ({ patron }) => (
  patron[0].name === 'Otherworldly Patron: The Hexblade'
    ? ['Simple', 'Martial']
    : ['Simple']
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
    const { patron, expandedSpells } = rollOnArray(patrons);
    const proficiencies = {
      ...classProficiencies,
      skills: getUniqueEntries(2, classSkills),
      weapons: getWeapons({ patron }),
      armor: getArmors({ patron }),
    };

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
        firstLevel: getUniqueEntries(2, [...firstLevel, ...expandedSpells]),
      },
    };
  },
};
