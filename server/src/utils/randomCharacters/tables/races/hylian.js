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

export default {
  ...hylian,
};
