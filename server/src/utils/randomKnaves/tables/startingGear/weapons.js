import utils from '../../utils';

const lightWeaponNames = [
  'Dagger',
  'Cudgel',
  'Sickle',
  'Sling',
];
const mediumWeaponNames = [
  'Spear',
  'Sword',
  'Mace',
  'Axe',
  'Flail',
];
const heavyWeaponNames = [
  'Halberd',
  'Warhammer',
  'Longsword',
  'Battleaxe',
];

const nameCategories = {
  light: lightWeaponNames,
  medium: mediumWeaponNames,
  heavy: heavyWeaponNames,
};

const categories = {
  light: (category, rollOnArray) => ({
    name: rollOnArray(nameCategories[category]),
    type: 'weapon',
    subtype: 'melee',
    damage: 'd6',
    slots: 1,
    hands: 1,
    quality: 3,
  }),
  medium: (category, rollOnArray) => ({
    name: rollOnArray(nameCategories[category]),
    type: 'weapon',
    subtype: 'melee',
    damage: 'd8',
    slots: 2,
    hands: 1,
    quality: 3,
  }),
  heavy: (category, rollOnArray) => ({
    name: rollOnArray(nameCategories[category]),
    type: 'weapon',
    subtype: 'melee',
    damage: 'd10',
    slots: 3,
    hands: 2,
    quality: 3,
  }),
  sling: () => ({
    name: 'Sling',
    type: 'weapon',
    subtype: 'ranged',
    damage: 'd4',
    slots: 1,
    hands: 1,
    quality: 3,
  }),
  bow: () => ({
    name: 'Bow',
    type: 'weapon',
    subtype: 'ranged',
    damage: 'd6',
    slots: 2,
    hands: 2,
    quality: 3,
  }),
  crossbow: () => ({
    name: 'Crossbow',
    type: 'weapon',
    subtype: 'ranged',
    damage: 'd8',
    slots: 3,
    hands: 2,
    quality: 3,
  }),
};

const getWeapon = (category, rollOnArray) => categories[category](category, rollOnArray);

export default () => {
  const { rollOnArray } = utils;

  return rollOnArray([
    getWeapon('light', rollOnArray),
    getWeapon('medium', rollOnArray),
    getWeapon('heavy', rollOnArray),
    getWeapon('sling', rollOnArray),
    getWeapon('bow', rollOnArray),
    getWeapon('crossbow', rollOnArray),
  ]);
};
