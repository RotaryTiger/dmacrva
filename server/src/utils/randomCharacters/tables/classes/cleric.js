import utils from '../../utils';
import equipment from '../equipment';
import spells from '../spells';
import domains from './domains';

const { weapons, packs, armor } = equipment;
const { melee, ranged } = weapons;
const { cantrips, first } = spells.cleric;

const className = 'Cleric';
const statPrefs = [
  ['WIS', 'CON', 'STR', 'DEX', 'INT', 'CHA'],
  ['WIS', 'CON', 'DEX', 'CHA', 'INT', 'STR'],
  ['WIS', 'CON', 'STR', 'DEX', 'CHA', 'INT'],
  ['WIS', 'CON', 'DEX', 'STR', 'INT', 'CHA'],
];

const hitDice = '1d8';
const hitPoints = 8;

const classSkills = [
  'History',
  'Insight',
  'Medicine',
  'Persuasion',
  'Religion',
];

const classProficiencies = {
  armor: ['Light', 'Medium', 'Shields'],
  weapons: ['Simple'],
  tools: [],
  saves: ['WIS', 'CHA'],
  skills: [`Choose two from: ${classSkills.join(', ')}`],
  languages: [],
};

const classFeatures = [
  {
    name: 'Spellcasting',
    description: 'You know three Cantrips. You have two 1st-level spell slots. You prepare WIS + Cleric level spells per long rest. You can prepare any spell from the Cleric list of a level for which you have spell slots. Preparing spells takes 1 minute per spell level on your list. You can use your Holy Symbol as a spellcasting focus.',
  },
  {
    name: 'Spellcasting Ability',
    description: 'Your spellcasting ability is Wisdom (DC = 8 + Proficiency + WIS; d20 + Proficiency + WIS to hit).',
  },
  {
    name: 'Ritual Casting',
    description: 'You can cast a Cleric spell as a ritual if you have it prepared and it has the Ritual tag.',
  },
];

const getEquipment = ({ rollOnArray }) => [
  rollOnArray([
    melee.simple[6],
    melee.martial[16],
  ]),
  rollOnArray([
    armor.medium[2],
    armor.light[1],
    armor.heavy[1],
  ]),
  rollOnArray([
    `${ranged.simple[1]} and 20 bolts`,
    rollOnArray([...melee.simple, ...ranged.simple]),
  ]),
  ...rollOnArray([
    packs.priest,
    packs.explorer,
  ]),
  armor.shield,
  'Holy Symbol',
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
    // console.log('pre abilities');
    const abilities = optimizeAbilityScores({ abilityScores, statPrefs });
    // console.log('pre profs');
    const proficiencies = {
      ...classProficiencies,
      skills: getUniqueEntries(2, classSkills),
    };
    // console.log('pre-domains');
    const domain = rollOnArray(domains);
    // console.log('pre-quipment');
    const quipment = getEquipment({ rollOnArray });

    console.log({ quipment });

    return {
      className,
      hitDice,
      hitPoints,
      abilities,
      classFeatures: [
        ...classFeatures,
        ...domain.domainFeatures,
      ],
      proficiencies,
      equipment: quipment,
      spells: {
        cantrips: getUniqueEntries(3, cantrips),
        firstLevel: first,
      },
    };
  },
};
