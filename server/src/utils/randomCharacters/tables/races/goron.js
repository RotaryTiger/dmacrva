const goron = {
  name: 'Goron',
  bonuses: {
    STR: 2,
    DEX: 0,
    CON: 1,
    INT: 0,
    WIS: 0,
    CHA: 0,
  },
  features: [
    {
      featureName: 'Stone\'s Endurance',
      featureDescription: 'Once per short or long rest, when you take damage you can use your reaction to reduce that damage by d12+CON points.',
    },
    {
      featureName: 'Powerful Build',
      featureDescription: 'Your carrying capacity is your Strength x1.5 instead of only your Strength.',
    },
    {
      featureName: 'Death Mountain Born',
      featureDescription: 'You\'re naturally adapted to extremely hot climates and high altitudes, including elevations above 20,000 feet.',
    },
  ],
  proficiencies: {
    weapons: [],
    armor: [],
    tools: [],
    skills: ['Athletics'],
    languages: ['Common', 'Goron'],
  },
  speed: 30,
  size: 'Medium',
};

export default {
  ...goron,
};
