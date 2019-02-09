import utils from '../../utils';

const raceName = 'Goron';

const bonuses = {
  STR: 2,
  DEX: 0,
  CON: 1,
  INT: 0,
  WIS: 0,
  CHA: 0,
};

const racialFeatures = [
  {
    name: 'Stone\'s Endurance',
    description: 'Once per short or long rest, when you take damage you can use your reaction to reduce that damage by d12+CON points.',
  },
  {
    name: 'Powerful Build',
    description: 'Your carrying capacity is your Strength x1.5 instead of only your Strength.',
  },
  {
    name: 'Death Mountain Born',
    description: 'You\'re naturally adapted to extremely hot climates and high altitudes, including elevations above 20,000 feet.',
  },
];

const proficiencies = {
  weapons: [],
  armor: [],
  tools: [],
  saves: [],
  skills: ['Athletics'],
  languages: ['Hylian (Common)', 'Goron'],
};

const speed = 30;
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
