import utils from '../../utils';

const raceName = 'Sheikah';
const bonuses = {
  STR: 0,
  DEX: 2,
  CON: 0,
  INT: 0,
  WIS: 1,
  CHA: 0,
};
const racialFeatures = [
  {
    name: 'Darkvision',
    description: 'You can see in dim light as though it were bright light, and in darkness as though it were dim light out to a distance of 60 feet. You can only see shades of gray this way.',
  },
  {
    name: 'Training of Will',
    description: 'You are immune to charm effects.',
  },
  {
    name: 'Fleet of Foot',
    description: 'Your base walking speed is 35ft.',
  },
  {
    name: 'Mask of the Wild',
    description: 'You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena.',
  },
];
const proficiencies = {
  weapons: [],
  armor: [],
  tools: [],
  skills: [],
  saves: [],
  languages: [],
};
const speed = 35;
const size = 'Medium';

const getProficiencies = ({ stats, getUniqueProficiencies }) => (
  getUniqueProficiencies(stats.proficiencies, proficiencies)
);

export default {
  raceName,
  bonuses,
  racialFeatures,
  proficiencies,
  speed,
  size,
  generateRandom: (stats) => {
    const {
      rollOnTable,
      addBonusesToScores,
      formatAbilityScores,
      getUniqueProficiencies,
    } = utils;
    const { abilities } = stats;

    const abilityScores = addBonusesToScores({ abilityScores: abilities, bonuses });
    const { CON } = abilityScores;

    return {
      raceName,
      abilityScores,
      racialFeatures,
      speed,
      size,
      proficiencies: getProficiencies({ stats, getUniqueProficiencies }),
      alignment: rollOnTable('alignments'),
      hitPoints: stats.hitPoints + CON.mod,
      formattedAbilityScores: formatAbilityScores(abilityScores),
    };
  },
};
