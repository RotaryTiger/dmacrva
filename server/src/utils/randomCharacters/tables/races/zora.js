import utils from '../../utils';

const raceName = 'Zora';
const bonuses = {
  STR: 0,
  DEX: 0,
  CON: 2,
  INT: 0,
  WIS: 1,
  CHA: 0,
};
const racialFeatures = [
  {
    name: 'Acid Resistance',
    description: 'You take half damage from acid.',
  },
  {
    name: 'Amphibious',
    description: 'You can breathe air and water.',
  },
  {
    name: 'Swim',
    description: 'You have a swimming speed of 30 feet.',
  },
  {
    name: 'Deep Sea Vision',
    description: 'When underwater, you can see in dim light as though it were bright light, and in darkness as though it were dim light out to a distance of 60 feet. You can only see shades of gray this way.',
  },
  {
    name: 'Call to the Wave',
    description: 'You know the Shape Water cantrip. When you reach 3rd level, you can cast Create or Destroy Water as a 2nd level spell once per long rest. Constitution is your spellcasting ability for these spells.',
  },
];
const proficiencies = {
  weapons: [],
  armor: [],
  tools: [],
  skills: [],
  saves: [],
  languages: ['Common', 'Zora'],
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
