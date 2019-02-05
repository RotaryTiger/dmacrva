import utils from '../../utils';
import equipment from '../equipment';

const { weapons, packs, armor } = equipment;
const { melee, ranged } = weapons;

const className = 'Rogue';
const statPrefs = [
  ['DEX', 'CON', 'WIS', 'INT', 'STR', 'CHA'],
  ['DEX', 'CON', 'INT', 'WIS', 'STR', 'CHA'],
  ['DEX', 'WIS', 'CON', 'INT', 'STR', 'CHA'],
  ['DEX', 'CON', 'WIS', 'INT', 'STR', 'CHA'],
  ['DEX', 'CON', 'INT', 'WIS', 'STR', 'CHA'],
  ['DEX', 'WIS', 'CON', 'INT', 'STR', 'CHA'],
  ['DEX', 'CON', 'WIS', 'INT', 'STR', 'CHA'],
  ['DEX', 'CON', 'INT', 'WIS', 'STR', 'CHA'],
  ['STR', 'CON', 'DEX', 'WIS', 'INT', 'CHA'],
];

const hitDice = '1d8';
const hitPoints = 8;

const classSkills = [
  'Acrobatics',
  'Athletics',
  'Deception',
  'Insight',
  'Intimidation',
  'Investigation',
  'Perception',
  'Performance',
  'Persuasion',
  'Sleight of Hand',
  'Stealth',
];

const classProficiencies = {
  armor: ['Light'],
  weapons: ['Simple', 'Hand crossbows', 'Longswords', 'Rapiers', 'Shortswords'],
  tools: ['Thieves\' tools'],
  saves: ['DEX', 'INT'],
  skills: [`Choose four from: ${classSkills.join(', ')}`],
  languages: ['Thieves\' Cant'],
};

const classFeatures = [
  {
    name: 'Sneak Attack',
    description: 'Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack if you have advantage on the attack roll. The attack must use a finesse or a ranged weapon. You don’t need advantage on the attack roll if another enemy of the target is within 5 feet of it, that enemy isn’t incapacitated, and you don’t have disadvantage on the attack roll.',
  },
  {
    name: 'Thieves\' Cant',
    description: 'You know thieves\' cant, a secret mix of dialect, jargon, and code that allows you to hide messages in seemingly normal conversation. Only another creature that knows thieves\' cant understands such messages. It takes four times longer to convey such a message than it does to speak the same idea plainly. In addition, you understand a set of secret signs and symbols used to convey short, simple messages, such as whether an area is dangerous or the territory of a thieves’ guild, whether loot is nearby, or whether the people in an area are easy marks or will provide a safe house for thieves on the run.',
  },
];

const getEquipment = ({ rollOnArray }) => [
  rollOnArray([
    melee.martial[11],
    melee.martial[13],
  ]),
  rollOnArray([
    ...[
      ranged.simple[2],
      'Quiver w/ 20 arrows',
    ],
    melee.martial[13],
  ]),
  ...rollOnArray([
    packs.burglar,
    packs.dungeoneer,
    packs.explorer,
  ]),
  armor.light[1],
  `2x ${melee.simple[1]}`,
  'Thieves\' tools',
];

const getExpertise = ({ getUniqueEntries, replaceInArray, skills }) => {
  let expertise;
  const expertSkills = getUniqueEntries(2, skills);

  expertise = replaceInArray(expertSkills[0], `${expertSkills[0]} (Expertise)`, skills);
  expertise = replaceInArray(expertSkills[1], `${expertSkills[1]} (Expertise)`, expertise);

  return {
    expertise,
    name: 'Expertise',
    description: `Your proficiency bonus is doubled for any ability check you make using ${expertSkills.join(' or ')}`,
  };
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
      replaceInArray,
      getUniqueEntries,
      optimizeAbilityScores,
    } = utils;

    const abilities = optimizeAbilityScores({ abilityScores, statPrefs });
    const proficiencies = {
      ...classProficiencies,
      skills: getUniqueEntries(4, classSkills),
    };
    const { expertise, name, description } = getExpertise({
      getUniqueEntries,
      replaceInArray,
      skills: [...proficiencies.skills, ...proficiencies.tools],
    });

    return {
      className,
      abilities,
      hitDice,
      hitPoints,
      proficiencies: {
        ...proficiencies,
        skills: expertise,
      },
      classFeatures: [
        ...classFeatures,
        { name, description },
      ],
      equipment: getEquipment({ rollOnArray }),
    };
  },
};
