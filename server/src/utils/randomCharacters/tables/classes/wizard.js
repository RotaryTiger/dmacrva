import utils from '../../utils';
import equipment from '../equipment';
import spells from '../spells';

const { weapons, packs } = equipment;
const { melee } = weapons;
const { cantrips, firstLevel } = spells.wizard;

const className = 'Wizard';
const statPrefs = [
  ['INT', 'CON', 'DEX', 'WIS', 'CHA', 'STR'],
  ['INT', 'DEX', 'CON', 'WIS', 'CHA', 'STR'],
  ['INT', 'CON', 'DEX', 'WIS', 'STR', 'CHA'],
  ['INT', 'DEX', 'CON', 'STR', 'CHA', 'WIS'],
];

const hitDice = '1d6';
const hitPoints = 6;

const classSkills = [
  'Arcana',
  'History',
  'Insight',
  'Investigation',
  'Medicine',
  'Religion',
];

const classProficiencies = {
  armor: [],
  weapons: ['Daggers', 'Darts', 'Slings', 'Quarterstaffs', 'Light crossbows'],
  tools: [],
  saves: ['INT', 'WIS'],
  skills: [`Choose two from: ${classSkills.join(', ')}`],
  languages: [],
};

const classFeatures = [
  {
    name: 'Spellcasting',
    description: 'You know three Cantrips. You have a spellbook containing six 1st-level spells. When you finish a Long Rest, you can prepare INT + Wizard level spells from this spellbook. You have two 1st-level spell slots. You can use an arcane focus as a spellcasting focus.',
  },
  {
    name: 'Spellcasting Ability',
    description: 'Your spellcasting ability is Intelligence (DC = 8 + Proficiency + INT; d20 + Proficiency + INT to hit on spell attacks).',
  },
  {
    name: 'Ritual Casting',
    description: 'You can cast a Wizard spell as a ritual if that spell has the Ritual tag and you have the spell in your spellbook. You do not need to have the spell prepared.',
  },
  {
    name: 'Copying Spells Into Your Spellbook',
    description: 'When you find a Wizard spell of 1st level or higher (for example, in a spell scroll or another Wizard\'s spellbook), you can add it to your spellbook if it is of a spell level you can prepare. For each level of the spell, this process takes 2 hours and costs 50 gp. Once you have spent this time and money, you can prepare the spell just like your other spells.',
  },
  {
    name: 'Replacing Your Spellbook',
    description: 'You can copy spells from your own spellbook into another book—for example, if you want to make a backup copy of your spellbook—at a faster rate: 1 hour and 10 gp per level of each copied spell. If you lose your spellbook, you can use the same procedure to transcribe the spells that you have prepared into a new spellbook. Filling out the remainder of your spellbook requires you to find new spells to do so, as normal. For this reason, many wizards keep backup spellbooks in a safe place.',
  },
  {
    name: 'Arcane Recovery',
    description: 'Once per day when you finish a Short Rest, you can choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your Wizard level (rounded up), and none of the slots can be 6th level or higher. For example, if you’re a 4th-level wizard, you can recover up to two levels worth of spell slots. You can recover either a 2nd-level spell slot or two 1st-level spell slots.',
  },
];

const getEquipment = ({ rollOnArray }) => [
  rollOnArray([
    melee.simple[7],
    melee.simple[1],
  ]),
  rollOnArray([
    'Component Pouch',
    'Arcane Focus',
  ]),
  ...rollOnArray([
    packs.scholar,
    packs.explorer,
  ]),
  'Spellbook',
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
      spells: {
        cantrips: getUniqueEntries(4, cantrips),
        firstLevel: getUniqueEntries(6, firstLevel),
      },
    };
  },
};
