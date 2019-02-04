import utils from '../../utils';

const raceName = 'Rito';
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
    name: 'Flight',
    description: 'You have a flying speed of 50ft. To use this speed, you can’t be wearing medium or heavy armor.',
  },
  {
    name: 'Talons',
    description: 'You are proficient with your unarmed strikes, which deal 1d4 slashing damage on a hit.',
  },
];
const proficiencies = {
  weapons: [],
  armor: [],
  tools: [],
  skills: [],
  saves: [],
  languages: ['Common', 'Rito'],
};
const speed = 25;
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
