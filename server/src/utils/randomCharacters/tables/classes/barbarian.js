import utils from '../../utils';
import equipment from '../equipment';

const { simple, martial } = equipment.weapons.melee;
const { packs } = equipment;

const name = 'Barbarian';

const statPrefs = [
  ['STR', 'CON', 'DEX', 'WIS', 'INT', 'CHA'],
  ['CON', 'STR', 'DEX', 'WIS', 'INT', 'CHA'],
  ['STR', 'CON', 'DEX', 'CHA', 'WIS', 'INT'],
  ['CON', 'STR', 'DEX', 'INT', 'WIS', 'CHA'],
];

const hitDice = '1d12';
const hitPoints = 12;

const classSkills = [
  'Animal Handling',
  'Athletics',
  'Intimidation',
  'Nature',
  'Perception',
  'Survival',
];

const proficiencies = {
  armor: ['Light', 'Medium', 'Shields'],
  weapons: ['Simple', 'Martial'],
  tools: [],
  saves: ['STR', 'CON'],
  skills: [],
};

const classFeatures = [
  {
    name: 'Rage',
    description: 'While not wearing heavy armor, you can enter a Rage as a bonus action, gaining Advantage on Strength checks and Strength saving throws; +2 damage made by all melee weapon attacks using Strength; and Resistance to bludgeoning, piercing, and slashing damage. You cannot cast or concentrate on spells while Raging. The Rage lasts 1 minute, ending early if you are knocked unconscious or if your turn ends and you have not attacked an enemy or taken damage since your previous turn. You can choose to end your Rage early as a bonus action.',
  },
  {
    name: 'Unarmored Defense',
    description: 'While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit.',
  },
];

export default {
  name,
  statPrefs,
  generateRandom: (abilityScores) => {
    const {
      rollOnArray,
      getUniqueEntries,
      formatAbilityScores,
      optimizeAbilityScores,
    } = utils;
    const abilities = optimizeAbilityScores({ abilityScores, statPrefs });
    const formattedAbilityScores = formatAbilityScores(abilities);
    const { CON } = abilities;

    return {
      name,
      hitDice,
      hitPoints: hitPoints + CON.mod,
      formattedAbilityScores,
      abilities,
      proficiencies: {
        ...proficiencies,
        skills: getUniqueEntries(2, classSkills),
      },
      equipment: [
        rollOnArray([
          martial[3],
          rollOnArray(martial),
        ]),
        rollOnArray([
          `2x ${simple[3]}`,
          rollOnArray(simple),
        ]),
        `4x ${simple[4]}`,
        ...packs.explorer,
      ],
      classFeatures,
    };
  },
};
