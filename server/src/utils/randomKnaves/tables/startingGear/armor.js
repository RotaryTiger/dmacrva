import { find } from 'underscore';

const armors = [
  {
    defense: 11,
    quality: 0,
    slots: 0,
    cost: 0,
    type: 'armor',
    name: 'No Armor',
  },
  {
    defense: 12,
    quality: 3,
    slots: 1,
    cost: 60,
    type: 'armor',
    name: 'Gambeson',
  },
  {
    defense: 13,
    quality: 4,
    slots: 2,
    cost: 500,
    type: 'armor',
    name: 'Brigandine',
  },
  {
    defense: 14,
    quality: 5,
    slots: 3,
    cost: 1200,
    type: 'armor',
    name: 'Chain',
  },
  {
    defense: 15,
    quality: 6,
    slots: 4,
    cost: 4000,
    type: 'armor',
    name: 'Half Plate',
  },
  {
    defense: 16,
    quality: 7,
    slots: 5,
    cost: 8000,
    type: 'armor',
    name: 'Plate',
  },
];

const getArmorByName = name => find(armors, armor => armor.name === name);

export default (roll) => {
  if (roll >= 20) return getArmorByName('Chain');
  if (roll >= 15) return getArmorByName('Brigandine');
  if (roll >= 4) return getArmorByName('Gambeson');
  return getArmorByName('No Armor');
};
