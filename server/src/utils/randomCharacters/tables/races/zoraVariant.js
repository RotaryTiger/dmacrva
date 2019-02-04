import utils from '../../utils';

const raceName = 'Zora (Variant)';
const bonuses = {
  STR: 0,
  DEX: 0,
  CON: 0,
  INT: 0,
  WIS: 0,
  CHA: 2,
};
const randomBonuses = 2;
const racialFeatures = [
  {
    name: 'Amphibious',
    description: 'You can breathe air and water.',
  },
  {
    name: 'Swim',
    featureDescription: 'You have a swimming speed of 30 feet.',
  },
  {
    name: 'Deep Sea Vision',
    featureDescription: 'When underwater, you can see in dim light as though it were bright light, and in darkness as though it were dim light out to a distance of 60 feet. You can only see shades of gray this way.',
  },
  {
    name: 'Zora Immunity',
    featureDescription: 'You have Advantage on saving throws against being charmed, and magic cannot put you to sleep',
  },
];
const proficiencies = {
  weapons: [],
  armor: [],
  tools: [],
  skills: ['random', 'random'],
  languages: [],
};
const speed = 30;
const size = 'Medium';

const getTwoRandomBonuses = (bonusesToUpdate) => {
  const validStats = ['STR', 'DEX', 'CON', 'INT', 'WIS'];
  const genAndCheck = () => {
    const bonus1 = validStats[Math.floor(Math.random() * 5)];
    const bonus2 = validStats[Math.floor(Math.random() * 5)];

    if (bonus1 !== bonus2) {
      return { bonus1, bonus2 };
    }

    return genAndCheck();
  };

  const { bonus1, bonus2 } = genAndCheck();
  return {
    ...bonusesToUpdate,
    [bonus1]: 1,
    [bonus2]: 1,
  };
};

const getProficiencies = ({ stats, rollOnTable, getUniqueProficiencies }) => {
  const racialProficiencies = {
    ...proficiencies,
    skills: [
      rollOnTable('skills'),
      rollOnTable('skills'),
    ],
  };

  return getUniqueProficiencies(stats.proficiencies, racialProficiencies);
};

export default {
  raceName,
  bonuses,
  randomBonuses,
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

    const abilityScores = addBonusesToScores({
      abilityScores: abilities,
      bonuses: getTwoRandomBonuses(bonuses),
    });
    const { CON } = abilityScores;

    return {
      raceName,
      abilityScores,
      racialFeatures,
      speed,
      size,
      proficiencies: getProficiencies({ stats, rollOnTable, getUniqueProficiencies }),
      alignment: rollOnTable('alignments'),
      hitPoints: stats.hitPoints + CON.mod,
      formattedAbilityScores: formatAbilityScores(abilityScores),
    };
  },
};
