import utils from '../../utils';
import equipment from '../equipment';

const { weapons, packs, armor } = equipment;
const { melee, ranged } = weapons;

const className = 'Paladin';
const statPrefs = [
  ['STR', 'CON', 'CHA', 'WIS', 'INT', 'DEX'],
  ['STR', 'CHA', 'CON', 'WIS', 'DEX', 'INT'],
  ['STR', 'CON', 'CHA', 'DEX', 'WIS', 'INT'],
  ['STR', 'CHA', 'CON', 'DEX', 'INT', 'WIS'],
  ['DEX', 'CHA', 'CON', 'STR', 'WIS', 'INT'],
];

const hitDice = '1d10';
const hitPoints = 10;

const classSkills = [
  'Athletics',
  'Insight',
  'Intimidation',
  'Medicine',
  'Persuasion',
  'Religion',
];

const classProficiencies = {
  armor: ['Light', 'Medium', 'Heavy', 'Shields'],
  weapons: ['Simple', 'Martial'],
  tools: [],
  saves: ['WIS', 'CHA'],
  skills: [`Choose two from: ${classSkills.join(', ')}`],
  languages: [],
};

const classFeatures = [
  {
    name: 'Divine Sense',
    description: '1 + CHA times per long rest: [Action] Until the end of your next turn, you know the location of any Celestial, Fiend, or Undead within 60ft of you that is not behind total cover. You know the type of any being you sense, but not its identity. Within the same radius, you also detect the presence of any place or object that has been consecrated or desecrated, as with the Hallow spell.',
  },
  {
    name: 'Lay on Hands',
    description: 'Paladin level x 5 points per long rest: [Action] As an action, you can touch a creature and draw power from the pool to restore a number of hit points to that creature, up to the maximum amount remaining in your pool. Alternatively, you can expend 5 hit points from your pool of healing to cure the target of one disease or neutralize one poison affecting it. You can cure multiple diseases and neutralize multiple poisons with a single use of Lay on Hands, expending hit points separately for each one. This feature has no effect on undead and constructs.',
  },
];

const getEquipment = ({ rollOnArray }) => [
  rollOnArray([
    ...[
      rollOnArray([...melee.martial, ...ranged.martial]),
      armor.shield,
    ],
    ...[
      rollOnArray([...melee.martial, ...ranged.martial]),
      rollOnArray([...melee.martial, ...ranged.martial]),
    ],
  ]),
  rollOnArray([
    `5x ${melee.simple[4]}`,
    rollOnArray(melee.simple),
  ]),
  ...rollOnArray([
    packs.priest,
    packs.explorer,
  ]),
  armor.heavy[1],
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
    };
  },
};
