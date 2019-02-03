import utils from '../../utils';
import equipment from '../equipment';

const name = 'Gerudo';

const bonuses = {
  STR: 1,
  DEX: 0,
  CON: 1,
  INT: 1,
  WIS: 0,
  CHA: 0,
};

const racialFeatures = [
  {
    featureName: 'Desert Dweller',
    featureDescription: 'You can endure unusually hot or dry climates without difficulty, and have Advantage on Survival checks made in desert terrain',
  },
  {
    featureName: 'Martial Adept',
    featureDescription: 'You gain the Martial Adept feat.',
  },
  {
    featureName: 'Military Genius',
    featureDescription: 'Once per long or short rest, when you miss an attack roll with a weapon, you may gain a bonus equal to your Intelligence modifier (minimum 1).',
  },
];

const proficiencies = {
  weapons: ['random-any', 'random-any'],
  armor: ['Light'],
  tools: [],
  skills: [],
  saves: [],
  languages: ['Common', 'Gerudo'],
};

const speed = 30;
const size = 'Medium';

const getProficiencies = ({ stats, rollOnArray, getUniqueProficiencies }) => {
  const { melee, ranged } = equipment.weapons;
  const allWeapons = [
    ...melee.simple,
    ...melee.martial,
    ...ranged.simple,
    ...ranged.martial,
  ];
  const racialProficiencies = {
    ...proficiencies,
    weapons: [
      rollOnArray(allWeapons),
      rollOnArray(allWeapons),
    ],
  };

  return getUniqueProficiencies(stats.proficiencies, racialProficiencies);
};

export default {
  name,
  bonuses,
  racialFeatures,
  proficiencies,
  speed,
  size,
  generateRandom: (stats) => {
    const {
      rollOnArray,
      rollOnTable,
      addBonusesToScores,
      formatAbilityScores,
      getUniqueProficiencies,
    } = utils;
    const { abilities } = stats;

    const abilityScores = addBonusesToScores({ abilityScores: abilities, bonuses });
    const { CON } = abilityScores;

    return {
      name,
      abilityScores,
      racialFeatures,
      speed,
      size,
      proficiencies: getProficiencies({ stats, rollOnArray, getUniqueProficiencies }),
      alignment: rollOnTable('alignments'),
      hitPoints: stats.hitPoints + CON.mod,
      formattedAbilityScores: formatAbilityScores(abilityScores),
    };
  },
};
