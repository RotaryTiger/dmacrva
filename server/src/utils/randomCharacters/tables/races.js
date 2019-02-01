const hylian = {
  name: 'Hylian',
  bonuses: {
    STR: 1,
    DEX: 1,
    CON: 1,
    INT: 1,
    WIS: 1,
    CHA: 1,
  },
  features: [],
  proficiencies: {
    weapons: [],
    armor: [],
    tools: [],
    skills: [],
    languages: ['Common', 'Hylian'],
  },
  speed: 30,
  size: 'Medium',
};

const gerudo = {
  name: 'Gerudo',
  bonuses: {
    STR: 1,
    DEX: 0,
    CON: 1,
    INT: 1,
    WIS: 0,
    CHA: 0,
  },
  features: [
    {
      featureName: 'Desert Dweller',
      featureDescription: 'You can endure unusually hot or dry climates without difficulty, and have Advantage on Survival checks made in desert terrain',
    },
    {
      featureName: 'Martial Adept',
      featureDescription: 'You gain the Martial Adept feat.',
    },
    {
      featureName: 'Military Genius',
      featureDescription: 'Once per long or short rest, when you miss an attack roll with a weapon, you may gain a bonus equal to your Intelligence modifier (minimum 1).',
    },
  ],
  proficiencies: {
    weapons: ['random-any', 'random-any'],
    armor: ['Light'],
    tools: [],
    skills: [],
    languages: ['Common', 'Gerudo'],
  },
  speed: 30,
  size: 'Medium',
};

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

const rito = {
  name: 'Rito',
  bonuses: {
    STR: 0,
    DEX: 2,
    CON: 0,
    INT: 0,
    WIS: 1,
    CHA: 0,
  },
  features: [
    {},
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

const korok = {
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
    {},
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

export default [
  hylian,
  gerudo,
  zora,
  zoraVariant,
  goron,
  rito,
  korok,
  sheikah,
];
