import utils from '../../utils';

const raceName = 'Korok';
const bonuses = {
  STR: 0,
  DEX: 0,
  CON: 0,
  INT: 2,
  WIS: 0,
  CHA: 0,
};
const racialFeatures = [
  {
    name: 'Darkvision',
    description: 'You can see in dim light as though it were bright light, and in darkness as though it were dim light out to a distance of 60 feet. You can only see shades of gray this way.',
  },
  {
    name: 'Korok Cunning',
    description: 'You have Advantage on all Intelligence, Wisdom, and Charisma saving throws against magic',
  },
];
const proficiencies = {
  weapons: [],
  armor: [],
  tools: [],
  skills: [],
  languages: ['Common', 'Korok'],
};
const speed = 25;
const size = 'Small';

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
