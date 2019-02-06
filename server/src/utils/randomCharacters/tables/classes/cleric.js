import { map, without } from 'underscore';

import utils from '../../utils';
import equipment from '../equipment';
import spells from '../spells';
import domains from './domains';
import languages from '../languages';

const { weapons, packs, armor } = equipment;
const { melee, ranged } = weapons;
const { cantrips, firstLevel } = spells.cleric;

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
    `${ranged.simple[1]}; 20 bolts`,
    rollOnArray([...melee.simple, ...ranged.simple]),
  ]),
  ...rollOnArray([
    packs.priest,
    packs.explorer,
  ]),
  armor.shield,
  'Holy Symbol',
];

const getCantrips = ({ getUniqueEntries, domain }) => {
  const { domainName } = domain;
  const threeCantrips = getUniqueEntries(3, cantrips);
  if (domainName === 'Arcana') {
    return [
      ...threeCantrips,
      ...getUniqueEntries(2, spells.wizard.cantrips),
    ];
  }

  if (domainName === 'Grave') {
    return threeCantrips.indexOf('Spare the Dying') >= 0
      ? [...threeCantrips, ...getUniqueEntries(1, without(cantrips, 'Spare the Dying'))]
      : [...threeCantrips, 'Spare the Dying'];
  }

  if (domainName === 'Light') {
    return threeCantrips.indexOf('Light') === -1
      ? [...threeCantrips, 'Light']
      : threeCantrips;
  }

  if (domainName === 'Nature') {
    return [
      ...threeCantrips,
      ...getUniqueEntries(1, spells.druid.cantrips),
    ];
  }

  return threeCantrips;
};

const getSkills = ({ getUniqueEntries, domain }) => {
  const twoSkills = getUniqueEntries(2, classSkills);

  if (domain.domainName === 'Arcana') {
    return [
      ...twoSkills,
      'Arcana',
    ];
  }

  if (domain.domainName === 'Knowledge') {
    const takenSkillsRemoved = without(['Arcana', 'History', 'Nature', 'Religion'], ...twoSkills);
    const knowledgeSkills = getUniqueEntries(2, takenSkillsRemoved);

    return [
      ...twoSkills,
      ...map(knowledgeSkills, kSkill => `${kSkill} (Expertise)`),
    ];
  }

  if (domain.domainName === 'Nature') {
    const takenSkillsRemoved = without(['Animal Handling', 'Nature', 'Survival'], ...twoSkills);
    const natureSkills = getUniqueEntries(1, takenSkillsRemoved);

    return [
      ...twoSkills,
      ...natureSkills,
    ];
  }

  return twoSkills;
};

const getLanguages = ({ getUniqueEntries, domain }) => (
  domain.domainName === 'Knowledge'
    ? getUniqueEntries(2, languages)
    : []
);

const getArmors = ({ domain }) => {
  const { domainName } = domain;

  return ['Forge', 'Life', 'Nature', 'Tempest', 'War'].indexOf(domainName) >= 0
    ? ['Light', 'Medium', 'Heavy', 'Shields']
    : ['Light', 'Medium', 'Shields'];
};

const getWeapons = ({ domain }) => {
  const { domainName } = domain;

  return ['Tempest', 'War'].indexOf(domainName) >= 0
    ? ['Simple', 'Martial']
    : ['Simple'];
};

const getTools = ({ domain }) => {
  const { domainName } = domain;

  return domainName === 'Forge'
    ? ['Smith\'s tools']
    : [];
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

    const domain = rollOnArray(domains);
    const abilities = optimizeAbilityScores({ abilityScores, statPrefs });
    const proficiencies = {
      ...classProficiencies,
      tools: getTools({ domain }),
      armor: getArmors({ domain }),
      skills: getSkills({ getUniqueEntries, domain }),
      weapons: getWeapons({ domain }),
      languages: getLanguages({ getUniqueEntries, domain }),
    };

    return {
      className,
      hitDice,
      hitPoints,
      abilities,
      proficiencies,
      classFeatures: [
        ...classFeatures,
        ...domain.domainFeatures,
      ],
      equipment: getEquipment({ rollOnArray }),
      spells: {
        cantrips: getCantrips({ getUniqueEntries, domain }),
        firstLevel,
      },
    };
  },
};
