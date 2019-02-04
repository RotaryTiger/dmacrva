import utils from '../../utils';
import skills from '../skills';
import equipment from '../equipment';
import spells from '../spells';

const { weapons, tools, packs } = equipment;
const { instruments } = tools;
const { melee, ranged } = weapons;
const { cantrips, first } = spells.bard;

const className = 'Bard';
const statPrefs = [
  ['CHA', 'CON', 'DEX', 'WIS', 'INT', 'STR'],
  ['CHA', 'DEX', 'CON', 'WIS', 'INT', 'STR'],
  ['CHA', 'DEX', 'CON', 'WIS', 'INT', 'STR'],
  ['CHA', 'DEX', 'CON', 'WIS', 'INT', 'STR'],
  ['CHA', 'DEX', 'CON', 'WIS', 'INT', 'STR'],
  ['CHA', 'DEX', 'STR', 'CON', 'WIS', 'INT'],
  ['CHA', 'DEX', 'WIS', 'CON', 'INT', 'STR'],
];

const hitDice = '1d8';
const hitPoints = 8;

const classSkills = [];

const classProficiencies = {
  armor: ['Light'],
  weapons: ['Simple', 'Hand crossbows', 'Longswords', 'Rapiers', 'Shortswords'],
  tools: ['Any three musical instruments'],
  saves: ['DEX', 'CHA'],
  skills: ['Any three'],
  languages: [],
};

const classFeatures = [
  {
    name: 'Spellcasting',
    description: 'You know two Cantrips and four 1st-level spells. You have two 1st-level spell slots. You can use a musical instrument as a spellcasting focus for your Bard spells.',
  },
  {
    name: 'Spellcasting Ability',
    description: 'Your spellcasting ability is Charisma (DC = 8 + Prof. + CHA; d20 + Prof. + CHA to hit).',
  },
  {
    name: 'Ritual Casting',
    description: 'You can cast any Bard spell you know as a ritual if it has the Ritual tag.',
  },
  {
    name: 'Bardic Inspiration',
    description: 'CHA (minimum 1) times per long rest: [Bonus Action] grant a Bardic Inspiration die (d6) to a target other than you within 60ft that can hear you. Once within the next 10 minutes, the die can be rolled and added to any d20 roll. A creature can only have one Bardic Inspiration die at a time.',
  },
];

const getEquipment = ({ rollOnArray }) => [
  rollOnArray([
    melee.martial[11],
    melee.martial[7],
    rollOnArray([...melee.simple, ...ranged.simple]),
  ]),
  ...rollOnArray([
    packs.diplomat,
    packs.entertainer,
  ]),
  rollOnArray([
    instruments[4],
    rollOnArray(instruments),
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
      optimizeAbilityScores,
      getUniqueEntries,
      rollOnArray,
    } = utils;
    const abilities = optimizeAbilityScores({ abilityScores, statPrefs });
    const proficiencies = {
      ...classProficiencies,
      tools: getUniqueEntries(3, instruments),
      skills: getUniqueEntries(3, skills),
    };

    return {
      className,
      hitDice,
      hitPoints,
      abilities,
      classFeatures,
      proficiencies,
      equipment: getEquipment({ rollOnArray }),
      spells: {
        cantrips: getUniqueEntries(2, cantrips),
        firstLevel: getUniqueEntries(4, first),
      },
    };
  },
};
