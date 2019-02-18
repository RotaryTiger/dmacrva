import { each } from 'underscore';
// import utils from './utils';
import tables from './tables';

const { equipment } = tables;
const { ranged, melee } = equipment.weapons;
const { light, medium, heavy, shield } = equipment.armor;

const meleeWeapons = [
  ...melee.simple,
  ...melee.martial,
];

const rangedWeapons = [
  ...ranged.simple,
  ...ranged.martial,
];

const allWeapons = [
  ...meleeWeapons,
  ...rangedWeapons,
];

const allArmor = [
  ...light,
  ...medium,
  ...heavy,
  shield,
];

const parseWeapons = () => {};

const parseArmorPiece = (piece) => {
  const isBonus = piece.includes('+');
  const hasMax = piece.includes('[max 2]');
  const ac = piece.search(/\d/);

  return {
    isBonus,
    hasMax,
    ac: parseInt(ac, 10),
  };
};

const parseArmor = ({ armor, character }) => {
  const { mod } = character.abilityScores.DEX;
  let armorClass = 0;
  let bonus = 0;

  each(armor, (piece) => {
    const { isBonus, hasMax, ac } = parseArmorPiece(piece);

    if (isBonus) {
      if (ac > bonus) bonus = ac;
    } else {
      const newMod = hasMax && mod > 2 ? 2 : mod;
      const newAc = ac + newMod;

      if (newAc > armorClass) {
        armorClass = newAc;
      }
    }
  });
};

const parseEquipment = (items) => {
  const armor = [];
  const weapons = [];

  each(items, (item) => {
    const strippedItem = item.replace(/^\d{1,2}x /, '');
    if (allArmor.indexOf(strippedItem) >= 0) armor.push(strippedItem);
    if (allWeapons.indexOf(strippedItem) >= 0) weapons.push(strippedItem);
  });

  return {
    armor,
    weapons,
  };
};

export default (character) => {
  // Things to derive: AC, attacks, spell save dc, spell attack
  const { armor, weapons } = parseEquipment(character.equipment);

  console.log({ items: character.equipment });
  console.log({ armor });
  console.log({ weapons });

  return character;
};
