const zoraVariant = {
  name: '',
  bonuses: {
    STR: 0,
    DEX: 0,
    CON: 0,
    INT: 0,
    WIS: 0,
    CHA: 2,
  },
  randomBonuses: 2,
  features: [
    {
      featureName: 'Amphibious',
      featureDescription: 'You can breathe air and water.',
    },
    {
      featureName: 'Swim',
      featureDescription: 'You have a swimming speed of 30 feet.',
    },
    {
      featureName: 'Deep Sea Vision',
      featureDescription: 'When underwater, you can see in dim light as though it were bright light, and in darkness as though it were dim light out to a distance of 60 feet. You can only see shades of gray this way.',
    },
    {
      featureName: 'Zora Immunity',
      featureDescription: 'You have Advantage on saving throws against being charmed, and magic cannot put you to sleep',
    },
  ],
  proficiencies: {
    weapons: [],
    armor: [],
    tools: [],
    skills: ['random', 'random'],
    languages: [],
  },
  speed: 30,
  size: 'Medium',
};

export default {
  ...zoraVariant,
};
