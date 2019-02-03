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

export default {
  ...korok,
};
