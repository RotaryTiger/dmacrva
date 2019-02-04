import utils from '../../utils';
import equipment from '../equipment';
import spells from '../spells';

const { weapons, packs, armor } = equipment;
const { melee, ranged } = weapons;
const { cantrips, firstLevel } = spells.druid;

const className = 'Druid';
const statPrefs = [
  ['WIS', 'CON', 'DEX', 'INT', 'STR', 'CHA'],
  ['WIS', 'DEX', 'CON', 'CHA', 'STR', 'INT'],
  ['WIS', 'CON', 'DEX', 'STR', 'INT', 'CHA'],
  ['WIS', 'CON', 'DEX', 'CHA', 'INT', 'STR'],
];

const hitDice = '1d8';
const hitPoints = 8;

const classSkills = [
  'Arcana',
  'Animal Handling',
  'Insight',
  'Medicine',
  'Nature',
  'Perception',
  'Religion',
  'Survival',
];

const classProficiencies = {
  armor: ['Light', 'Medium', 'Shields'],
  weapons: [
    'Clubs',
    'Daggers',
    'Darts',
    'Javelins',
    'Maces',
    'Quarterstaffs',
    'Scimitars',
    'Sickles',
    'Slings',
    'Spears',
  ],
  tools: ['Herbalism kit'],
  saves: ['INT', 'WIS'],
  skills: [`Choose two from: ${classSkills.join(', ')}`],
  languages: ['Druidic'],
};

const classFeatures = [
  {
    name: 'Druidic',
    description: 'You can speak and leave hidden messages in a secret language known only to Druids. You and other Druids automatically spot such messages (others require a DC 15 Wisdom (Perception) check, but cannot decipher them without magic). ',
  },
  {
    name: 'Spellcasting',
    description: 'You know two Cantrips. You have two 1st-level spell slots. You prepare WIS + Druid level spells per long rest. You can prepare any spell from the Druid list of a level for which you have spell slots. Preparing spells takes 1 minute per spell on your list. You can use a druidic focus as a spellcasting focus.',
  },
  {
    name: 'Spellcasting Ability',
    description: 'Your spellcasting ability is Wisdom (DC = 8 + Proficiency + WIS; d20 + Proficiency + WIS to hit).',
  },
  {
    name: 'Ritual Casting',
    description: 'You can cast a Druid spell as a ritual if you have that spell prepared and it has the Ritual tag.',
  },
];

const getEquipment = ({ rollOnArray }) => [
  rollOnArray([
    `Wooden ${armor.shield}`,
    rollOnArray([...melee.simple, ...ranged.simple]),
  ]),
  rollOnArray([
    melee.martial[11],
    rollOnArray(melee.simple),
  ]),
  armor.light[1],
  ...packs.explorer,
  'Druidic focus',
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
      classFeatures,
      proficiencies,
      equipment: getEquipment({ rollOnArray }),
      spells: {
        cantrips: getUniqueEntries(2, cantrips),
        firstLevel,
      },
    };
  },
};
