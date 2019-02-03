const sheikah = {
  name: '',
  bonuses: {
    STR: 0,
    DEX: 0,
    CON: 0,
    INT: 0,
    WIS: 0,
    CHA: 0,
  },
  features: [
    {
      featureName: 'Darkvision',
      featureDescription: 'You can see in dim light as though it were bright light, and in darkness as though it were dim light out to a distance of 60 feet. You can only see shades of gray this way.',
    },
  ],
  proficiencies: {
    weapons: [],
    armor: [],
    tools: [],
    skills: [],
    languages: [],
  },
  speed: 30,
  size: 'Medium',
};

export default {
  ...sheikah,
};
