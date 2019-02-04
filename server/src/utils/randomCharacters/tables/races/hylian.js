import utils from '../../utils';

const raceName = 'Hylian';

const bonuses = {
  STR: 1,
  DEX: 1,
  CON: 1,
  INT: 1,
  WIS: 1,
  CHA: 1,
};

const racialFeatures = [];

const proficiencies = {
  weapons: [],
  armor: [],
  tools: [],
  skills: [],
  saves: [],
  languages: ['Common', 'Hylian'],
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
