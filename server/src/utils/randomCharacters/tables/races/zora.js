const zora = {
  name: 'Zora',
  bonuses: {
    STR: 0,
    DEX: 0,
    CON: 2,
    INT: 0,
    WIS: 1,
    CHA: 0,
  },
  features: [
    {
      featureName: 'Acid Resistance',
      featureDescription: 'You take half damage from acid.',
    },
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
      featureName: 'Call to the Wave',
      featureDescription: 'You know the Shape Water cantrip. When you reach 3rd level, you can cast Create or Destroy Water as a 2nd level spell once per long rest. Constitution is your spellcasting ability for these spells.',
    },
  ],
  proficiencies: {
    weapons: [],
    armor: [],
    tools: [],
    skills: [],
    languages: ['Common', 'Zora'],
  },
  speed: 30,
  size: 'Medium',
};

export default {
  ...zora,
};
