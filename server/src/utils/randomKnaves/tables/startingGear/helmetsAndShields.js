import { find } from 'underscore';

const armors = [
  {
    defense: 1,
    quality: 1,
    slots: 1,
    cost: 40,
    name: 'Helmet',
  },
  {
    defense: 1,
    quality: 1,
    slots: 1,
    cost: 40,
    name: 'Shield',
  },
];

const getArmorByName = name => find(armors, armor => armor.name === name);

export default (roll) => {
  if (roll >= 20) return [getArmorByName('Helmet'), getArmorByName('Shield')];
  if (roll >= 17) return [getArmorByName('Shield')];
  if (roll >= 14) return [getArmorByName('Helmet')];
  return [];
};
