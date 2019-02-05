import utils from '../../utils';
import equipment from '../equipment';

const { weapons, packs, armor } = equipment;
const { melee, ranged } = weapons;

const className = 'Ranger';
const statPrefs = [
  ['DEX', 'WIS', 'CON', 'STR', 'INT', 'CHA'],
  ['DEX', 'WIS', 'CON', 'INT', 'STR', 'CHA'],
  ['DEX', 'CON', 'WIS', 'STR', 'INT', 'CHA'],
  ['DEX', 'CON', 'WIS', 'INT', 'STR', 'CHA'],
];

const hitDice = '1d10';
const hitPoints = 10;

const classSkills = [
  'Animal Handling',
  'Athletics',
  'Insight',
  'Investigation',
  'Nature',
  'Perception',
  'Stealth',
  'Survival',
];

const classProficiencies = {
  armor: ['Light', 'Medium', 'Shields'],
  weapons: ['Simple', 'Martial'],
  tools: [],
  saves: ['STR', 'DEX'],
  skills: [`Choose any three from: ${classSkills.join(', ')}`],
  languages: [],
};

const classFeatures = [
  {
    name: 'Favored Enemy',
    description: 'Choose a type of favored enemy: aberrations, beasts, celestials, constructs, dragons, elementals, fey, fiends, giants, monstrosities, oozes, plants, or undead. Alternatively, you can select two races of humanoid (such as gnolls and orcs) as favored enemies. You have advantage on Wisdom (Survival) checks to track your favored enemies, as well as on Intelligence checks to recall information about them. When you gain this feature, you also learn one language of your choice that is spoken by your favored enemies, if they speak one at all.',
  },
  {
    name: 'Natural Explorer',
    description: 'Choose one type of favored terrain: arctic, coast, desert, forest, grassland, mountain, swamp, or the Underdark. When you make an Intelligence or Wisdom check related to your favored terrain, your proficiency bonus is doubled if you are using a skill that you’re proficient in. While traveling for an hour or more in your favored terrain, you gain the following benefits: Difficult terrain doesn’t slow your group’s travel. Your group can’t become lost except by magical means. Even when you are engaged in another activity while traveling (such as foraging, navigating, or tracking), you remain alert to danger. If you are traveling alone, you can move stealthily at a normal pace. When you forage, you find twice as much food as you normally would. While tracking other creatures, you also learn their exact number, their sizes, and how long ago they passed through the area.',
  },
];

const getEquipment = ({ rollOnArray }) => [
  rollOnArray([
    armor.medium[2],
    armor.light[1],
  ]),
  ...rollOnArray([
    [`2x ${melee.martial[13]}`],
    [
      rollOnArray(melee.simple),
      rollOnArray(melee.simple),
    ],
  ]),
  ...rollOnArray([
    packs.dungeoneer,
    packs.explorer,
  ]),
  ranged.martial[3],
  'Quiver w/ 20 arrows',
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
      skills: getUniqueEntries(3, classSkills),
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
